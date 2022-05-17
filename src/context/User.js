import React, { createContext, useEffect, useState } from "react";
import { injected } from "src/connectors";
import { useWeb3React } from "@web3-react/core";
import { toast } from "react-toastify";
import { SUPPORTED_WALLETS } from "src/connectors";
import { ACTIVE_NETWORK } from "src/constants";
import axios from "axios";
import apiConfig from "src/APIconfig/ApiConfig";
export const UserContext = createContext();
const setSession = (userAddress) => {
  if (userAddress) {
    sessionStorage.setItem("userAddress", userAddress);
  } else {
    sessionStorage.removeItem("userAddress");
  }
};

export default function AuthProvider(props) {
  const { activate, account, deactivate, chainId } = useWeb3React();
  const [userData, setUserData] = useState({});
  const connectWalletHandler = (data) => {
    try {
      const connector = data?.connector;

      if (connector && connector?.walletConnectProvider?.wc?.uri) {
        connector.walletConnectProvider = undefined;
      }

      activate(connector, undefined, true).catch((error) => {
        if (error) {
          window.localStorage.removeItem("walletName");
          toast.error(JSON.stringify(error.message));
          window.localStorage.removeItem("walletName");
          activate(connector);
        }
      });
    } catch (error) {
      console.log("ERROR", error);
      toast.error(JSON.stringify(error.message));
    }
  };

  const swichNetworkHandler = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x" + ACTIVE_NETWORK.toString(16) }],
      });
    } catch (error) {
      console.log("ERROR", error);

      toast.warn(error.message);
      // if (error.code === 4902)
      //   addNetworkHandler();
      // }
    }
  };

  const walletConnectApiHandler = async (address) => {
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.connectWallet,
        data: {
          walletAddress: address,
        },
      });
      if (res.data.responseCode === 200) {
        getProfileHandler(res?.data?.result?.token);
        window.sessionStorage.setItem("accessToken", res?.data?.result?.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProfileHandler = async (token) => {
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.getProfile,
        headers: {
          token: token,
        },
      });
      if (res.data.responseCode === 200) {
        console.log("responseProfile----", res.data.result);
        setUserData(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (account) {
      walletConnectApiHandler(account);
    }
  }, [account]);

  useEffect(() => {
    if (window.localStorage.getItem("walletName")) {
      const selectectWalletDetails = SUPPORTED_WALLETS.filter(
        (data) => data.name === window.localStorage.getItem("walletName")
      );

      if (selectectWalletDetails && selectectWalletDetails[0].data) {
        connectWalletHandler(selectectWalletDetails[0].data);
      }
    }
  }, []);

  useEffect(() => {
    if (account && chainId) {
      if (chainId !== ACTIVE_NETWORK) {
        if (window.ethereum) {
          swichNetworkHandler();
        }
      }
    }
  }, [chainId, account]);

  let data = {
    userData,
    updateUser: (account) => {
      setSession(account);
    },
    connectWallet: (data) => connectWalletHandler(data),
  };

  useEffect(() => {
    const userAddress = localStorage.getItem("userAddress");
    if (userAddress) {
      data.connectWallet();
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    data.updateUser(account);
  }, [account]); //eslint-disable-line

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}
