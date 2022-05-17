import React from "react";
import {
  Container,
  Typography,
  Box,
  makeStyles,
  Grid,
  Button,
  Link,
} from "@material-ui/core";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    paddingTop: "90px",
    paddingBottom: "0px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "30px",
      paddingBottom: "0px",
    },
  },

  bgpartner: {
    "& h2": {
      fontSize: "60px",

      textAlign: "center",

      [theme.breakpoints.down("md")]: {
        fontSize: "45px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
  },

  partnerbox: {
    border: "none",
    height: "auto",
    padding: "11px",
    overflow: "hidden",
    position: "relative",
    maxWidth: "96%",

    "& div": {
      height: "auto",
      overflow: "hidden",
      position: "relative",
      maxWidth: "100%",
    },
    "& figure": {
      margin: "0",
      height: "97px",
      display: "flex",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
    },
    "& img": {
      maxHeight: "100px",
      width: "auto",
      maxWidth: "100%",
    },
  },
  link: {
    color: "#a69696",
    fontSize: "25px",
    fontWeight: "600",

    "@media(max-width:767px)": {
      fontSize: "20px",
    },
    "@media(max-width:410px)": {
      fontSize: "15px",
    },
  },
  linkbox: {
    "@media(max-width:1280px)": {
      display: "flex",
      justifyContent: "end",
    },
  },
  linkbox3: {
    "@media(max-width:1280px)": {
      display: "none",
    },
  },
  linkbox4: {
    display: "none",
    "@media(max-width:1280px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  // slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
  ],
};
export default function Partners() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Container maxWidth="lg">
        <Box>
          <Box className={classes.bgpartner}>
            <Typography variant="h2" className="wow slideInRight">
              Features List
            </Typography>
          </Box>
          <Box mt={5}>
            <Grid container spacing={3}>
              <Grid item lg={2} md={6} sm={6} xs={6}>
                <Box className={classes.linkbox}>
                  <Link
                    target="_blank"
                    href="https://www.prweb.com/releases/2022/5/prweb18676326.htm"
                    className={classes.link}
                  >
                    PR Web
                  </Link>
                </Box>
              </Grid>
              <Grid item lg={2} md={6} sm={6} xs={6}>
                <Box className={classes.linkbox1}>
                  <Link
                    target="_blank"
                    className={classes.link}
                    href="https://www.benzinga.com/pressreleases/22/05/n27193955/amo-racing-parters-with-bitus-labs-to-introduce-the-first-marketplace-for-real-racehorse-nfts"
                  >
                    Benzinga
                  </Link>
                </Box>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={6}>
                <Box className={classes.linkbox}>
                  <Link
                    target="_blank"
                    href="https://magazinestoday.co.nz/pr-newswire/?rkey=20220513UN56771&filter=5718"
                    className={classes.link}
                  >
                    Magazines Today
                  </Link>
                </Box>
              </Grid>
              <Grid item lg={2} md={6} sm={6} xs={6}>
                <Box className={classes.linkbox1}>
                  <Link
                    target="_blank"
                    className={classes.link}
                    href="https://businesschief.com/pr_newswire?rkey=20220513UN56771&filter=22716"
                  >
                    Business Cheif
                  </Link>
                </Box>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={6}>
                <Box className={classes.linkbox3}>
                  <Link
                    target="_blank"
                    href="https://smb.thewashingtondailynews.com/article/Amo-Racing-Parters-with-Bitus-Labs-to-Introduce-the-First-Marketplace-for-Real-Racehorse-NFTs?storyId=627e7c9c1dabae6766f8f735"
                    className={classes.link}
                  >
                    Washington Daily News
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box className={classes.linkbox4}>
              <Link
                target="_blank"
                href="https://smb.thewashingtondailynews.com/article/Amo-Racing-Parters-with-Bitus-Labs-to-Introduce-the-First-Marketplace-for-Real-Racehorse-NFTs?storyId=627e7c9c1dabae6766f8f735"
                className={classes.link}
              >
                Washington Daily News
              </Link>
            </Box>
          </Box>

          {/* </Box> */}
        </Box>
      </Container>
    </Box>
  );
}
