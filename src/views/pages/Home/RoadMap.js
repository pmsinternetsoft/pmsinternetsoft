import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InvestCard from "src/component/InvestCard";

const InvestMap = [
  {
    images: "images/banner-img.png",
    text1: "Wishlist",
    text2:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    img2: "images/eth.png",
    text3: "0.35 ETH",
  },
  {
    images: "images/banner-img.png",
    text1: "Wishlist",
    text2:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    img2: "images/eth.png",
    text3: "0.35 ETH",
  },
  {
    images: "images/banner-img.png",
    text1: "Wishlist",
    text2:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    img2: "images/eth.png",
    text3: "0.35 ETH",
  },
];

const useStyles = makeStyles((theme) => ({
  mainBox: {
    paddingTop: "80px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px",
    },
    "& h1": {
      fontSize: "60px",
      fontWeight: "400",
      textAlign: "center",

      marginBottom: "75px",
      [theme.breakpoints.down("md")]: {
        fontSize: "45px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "35px",
        display: "none",
      },
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  imgframe: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
function InvestNow() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainBox}>
        <Box>
          <Typography variant="h1" className="wow slideInLeft">
            Roadmap
          </Typography>
        </Box>
        <img
          src="images/frame.png"
          alt=""
          width="100%"
          className={classes.imgframe}
        />
      </Box>
    </>
  );
}

export default InvestNow;
