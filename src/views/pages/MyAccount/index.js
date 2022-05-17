import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  FormHelperText,
  TextField,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InvestCard from "src/component/InvestCard";
import { GoVerified } from "react-icons/go";
import { RiShieldCheckFill } from "react-icons/ri";
import EditIcon from "@material-ui/icons/Edit";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountTable from "./AccountTable";
import MyNft from "./MyNft";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import MyFav from "./MyFav";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "90px",
    paddingBottom: "20px",

    "& .headbox": {
      "& h2": {
        fontSize: "33px",
        fontWeight: "400",
        letterSpacing: "2px",
        color: "#fff",
        marginTop: "10px",
      },
      "& svg": {
        color: "#fff",
      },
      "& h6": {
        fontSize: "18px",
        fontWeight: "400",
      },
      "& h5": {
        fontSize: "20px",
        fontWeight: "400",

        color: "#fff",
      },
    },
  },
  accountbox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "20px",
  },
  boxImage: {
    position: "relative",
    display: "inline-block",
    width: "208px",

    "& span": {
      position: "absolute",
      top: "151px",
      right: "10px",

      backgroundColor: "#E19C32",
      width: "30px",
      height: "30px",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  subbox: {
    marginTop: "10px",
  },

  mainbox: {
    backgroundColor: "#272727",
    padding: "20px",
  },
  textbox: {
    border: "none",
    color: "#fff",
    backgroundColor: "#272727",
    "& input": {
      marginTop: "14px",
      borderBottom: "2px solid #585858",
    },
  },
  downtext: {
    marginTop: "30px",
    marginBottom: "50px",
  },

  textboxes: {
    border: "none",
    color: "#fff",
    backgroundColor: "#272727",
    "& input": {
      marginTop: "14px",
      borderBottom: "2px solid #585858",
    },
  },
  address: {
    marginTop: "60px",
    marginBottom: "30px",
  },
  TabBox: {
    "& .buttonBox": {
      backgroundColor: "#30274E",

      // borderBottom: "5px solid #272727",
      // [theme.breakpoints.down("xs")]: {
      //     padding: "0 0px",
      //     margin: "0 10px",
      //     display: "inline-block",
      // },
      "& a": {
        width: "100%",
        cursor: "pointer",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "17px",
        color: "#fff",
        paddingTop: "16px",
        paddingBottom: "16px",
        // borderBottom: "5px solid #272727",
        [theme.breakpoints.down("xs")]: {
          fontSize: "12px",
        },
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "#b399ff",
        },
        "&.active": {
          color: "#fff",
          backgroundColor: "#713FFF",
          paddingTop: "16px",
          paddingBottom: "16px",
          fontSize: "17px",
        },
      },
    },
  },
  tabonebox: {
    "& .buttonBox": {
      backgroundColor: "#30274E",
      "& a": {
        width: "100%",
        cursor: "pointer",
        fontWeight: "400",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        color: "#fff",
        height: "68px",

        [theme.breakpoints.down("md")]: {
          fontSize: "16px",
        },
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "#b399ff",
        },
        "&.active": {
          backgroundColor: "#713FFF",
        },
        "& svg": {
          margin: "0px 10px",
          fontSize: "24px",
        },
      },
    },
  },
}));
function Banner() {
  const classes = useStyles();
  const [tabview, setTabView] = useState("MyNft");
  const [tabview1, setTabView1] = useState("Profile");
  return (
    <Box className={classes.bannerbox}>
      <Container>
        <Box className="headbox">
          <Grid container spacing={6}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className={classes.downtext}>
                <Box className={classes.accountbox}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box className={classes.boxImage}>
                      <img
                        src="images/editprofile.png"
                        alt=""
                        width="100%"
                        style={{
                          borderRadius: "100%",
                          width: "100%",
                          maxWidth: "208px",
                        }}
                      />
                      <span>
                        <EditIcon
                          style={{
                            color: "#fff",
                          }}
                        />
                      </span>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box display="flex" alignItems="center">
                      <Typography variant="h2">Bill Gates</Typography> &nbsp;
                      <Box mt={2}>
                        <RiShieldCheckFill style={{ fontSize: "25px" }} />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className={classes.subbox}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="body2">WerTY1233IoP</Typography>
                      &nbsp; &nbsp;
                      <CopyToClipboard text={"WerTY1233IoP"}>
                        <FiCopy
                          onClick={() => toast.info("Copied")}
                          style={{ cursor: "pointer", color: "#E19C32" }}
                        />
                      </CopyToClipboard>
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.tabonebox}>
                  <Box mt={2} className="buttonBox">
                    <Link
                      className={tabview1 === "Profile" ? "active" : ""}
                      onClick={() => setTabView1("Profile")}
                    >
                      <PersonIcon style={{ color: "#fff" }} />
                      Profile
                    </Link>
                  </Box>
                  <Box mt={2} className="buttonBox">
                    <Link
                      className={tabview1 === "ChangePassword" ? "active" : ""}
                      onClick={() => setTabView1("ChangePassword")}
                    >
                      <LockOpenIcon style={{ color: "#fff" }} />
                      Change Password
                    </Link>
                  </Box>
                  <Box mt={2} className="buttonBox">
                    <Link>
                      <ExitToAppIcon style={{ color: "#fff" }} />
                      LogOut
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box className="TabButtonsContant">
                {tabview1 === "Profile" ? <Profile /> : ""}
                {tabview1 === "ChangePassword" ? <ChangePassword /> : ""}
              </Box>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box className={classes.TabBox}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Box className="buttonBox">
                    <Link
                      className={tabview === "MyNft" ? "active" : " "}
                      onClick={() => setTabView("MyNft")}
                    >
                      My NFT
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Box className="buttonBox">
                    <Link
                      className={tabview === "MyFav" ? "active" : " "}
                      onClick={() => setTabView("MyFav")}
                    >
                      My Favorites
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Box className="buttonBox">
                    <Link
                      className={tabview === "NFTActivity" ? "active" : " "}
                      onClick={() => setTabView("NFTActivity")}
                    >
                      Sold NFT
                    </Link>
                  </Box>
                </Grid>
               
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Box className="buttonBox">
                    <Link
                      className={tabview === "Competition" ? "active" : " "}
                      onClick={() => setTabView("Competition")}
                    >
                      Follower
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Box className="buttonBox">
                    <Link
                      className={tabview === "Competition" ? "active" : " "}
                      onClick={() => setTabView("Competition")}
                    >
                      Followings
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Box mt={4}>
          {tabview === "MyNft" ? <MyNft /> : ""}
          {tabview === "MyFav" ? <MyFav/> : "" }
          {/* {tabview === "NFTActivity" ? <NFTActivity /> : ""}
              {tabview === "Club" ? <Club /> : ""}
              {tabview === "Competition" ? <Competition /> : ""} */}
        </Box>{" "}
      </Container>
    </Box>
  );
}

export default Banner;
