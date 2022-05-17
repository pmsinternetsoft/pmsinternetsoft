import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Nftmarkettable from "./Nftmarkettable";
import ActivityOwner from "./ActivityOwner";
import { RiShieldCheckFill } from "react-icons/ri";
import Listing from "./Listing";
import Offers from "./Offers";
import PriceChart from "./PriceChart";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "150px",
    paddingBottom: "50px",

    "& h2": {
      fontSize: "40px",
      fontWeight: "400",

      color: "#fff",
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
      maxWidth: "611px",
      lineHeight: "25px",
      width: "100%",
    },
    "& h6": {
      fontSize: "14px",
      fontWeight: "300",

      color: "#d4d4d4",
      marginBottom: "10px",
    },
    "& h5": {
      fontSize: "18px",
      fontWeight: "400",

      color: "#fff",
      marginBottom: "10px",
    },
    "& h1": {
      fontSize: "18px",
      fontWeight: "400",

      color: "#fff",
    },
  },
  subtext: {
    marginTop: "10px",
  },
  dividebox: {
    borderBottom: "1px solid #413C3C",
    width: "100%",
    maxWidth: "694px",
    marginTop: "20px",
  },
  pricebox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "25px 25px 42px 25px",
    marginTop: "16px",
    "& h6": {
      fontSize: "22px",
      fontWeight: "700",

      color: "#E19C32",
      marginTop: "6px",
    },
    "& h5": {
      fontSize: "18px",
      fontWeight: "400",
      marginTop: "6px",
      color: "#fff",
    },
  },
  shop: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "16px !important",
    fontWeight: "600",
    borderRadius: "5px",
    color: "#fff",
    "& svg": {
      color: "#fff",
    },
  },
  addressbox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "25px 17px 85px 25px",
    marginTop: "30px",
    "& .heading": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    "& h6": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
      marginBottom: "20px",
    },
    "& h5": {
      fontSize: "14px",
      fontWeight: "400",
      color: "#d4d4d4",
      marginBottom: "20px",
    },
  },
  activeparent: {
    display: "flex",
    alignItems: "center",
  },
  activeDevice: {
    width: "10px",
    height: "10px",
    background: "green",
    borderRadius: "100px",
  },
  mainbox: {
    padding: "50px 0 80px",
  },

  dividemain: {
    borderBottom: "1px solid #585858",
  },
  textnext: {
    "& h6": {
      fontSize: "14px",
      fontWeight: "400",
      color: "#d4d4d4",
      "& span": {
        color: "#fff",
        fontSize: "19px",
        fontWeight: "600",
      },
    },
  },
  blocktext: {
    marginTop: "48px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginTop: "0px",
    },
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerbox}>
      <Container>
        <Box>
          <Grid container spacing={7}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box>
                <img src="images/nftimg.png" alt="" width="100%" />
              </Box>
              <Box className={classes.addressbox}>
                <Box className="heading">
                  <Typography variant="h6">Contact Address </Typography>
                  <Typography variant="h5">0x3edf...45aa</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6"> Total Issued Token</Typography>
                  <Typography variant="h5">10,000</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6">Token ID </Typography>
                  <Typography variant="h5">887</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6">Token Standard</Typography>
                  <Typography variant="h6">ERC - 1155</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6">Blockchain</Typography>
                  <Typography variant="h6">Ethereum</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box className={classes.blocktext}>
                <Typography variant="h2">Rapid Stone</Typography>&nbsp; &nbsp;
                <Box display="flex" className={classes.textnext}>
                  <Box>
                    <RiShieldCheckFill
                      style={{ fontSize: "30px", color: "#fff" }}
                    />
                    &nbsp; &nbsp;
                  </Box>
                  <Typography variant="h6">
                    {" "}
                    Created by&nbsp;<span>OmniHorse</span>
                  </Typography>
                  &nbsp;&nbsp;
                </Box>
              </Box>
              <Box className={classes.subtext}>
                <Typography variant="body2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type an.
                </Typography>
              </Box>
              <Box mt={4}>
                <Grid container spacing={4}>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Age</Typography>
                      <Typography variant="h6">2yr</Typography>
                      <Typography variant="h5">Gender type</Typography>
                      <Typography variant="h6">Filly</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Breed</Typography>
                      <Typography variant="h6">Thorughbred</Typography>
                      <Typography variant="h5">Breed</Typography>
                      <Typography variant="h6">Thorughbred</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Gender</Typography>
                      <Typography variant="h6">Female</Typography>
                      <Typography variant="h5">Gender</Typography>
                      <Typography variant="h6">Female</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Colour</Typography>
                      <Typography variant="h6">Bay</Typography>
                      <Typography variant="h5">Colour</Typography>
                      <Typography variant="h6">Bay</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  <Divider className={classes.dividebox} />
                </Box>
              </Box>

              <Box mt={3}>
                <PriceChart />
              </Box>
            </Grid>
          </Grid>

          <Box>
            {/* <Nftmarkettable /> */}

            <Listing />
            <Offers />
          </Box>
          <Box>
            <ActivityOwner />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
