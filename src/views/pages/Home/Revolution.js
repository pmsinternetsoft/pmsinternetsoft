import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "70px",
    paddingBottom: "100px",

    [theme.breakpoints.down("md")]: {
      paddingTop: "30px",
      paddingBottom: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
    "& h1": {
      fontSize: "60px",
      fontWeight: "400",
      color: "#FFFEFD",

      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "45px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    "& h4": {
      fontSize: "30px",
      fontWeight: "700",

      marginBottom: "20px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "24px",
        fontWeight: "600",
      },
    },
    "& h6": {
      maxWidth: "921px",
      width: "100%",
      margin: "0 auto",
    },
    "& h5": {
      fontSize: "20px",
      fontWeight: "700",
      color: "#E19C32",
      marginBottom: "20px",
    },
    "& h2": {
      fontSize: "25px",

      marginBottom: "20px",
      "@media(max-width:1005px)": {
        fontSize: "23px",
      },
      "@media(max-width:959px)": {
        fontSize: "25px",
      },
      "@media(max-width:716px)": {
        fontSize: "22px",
      },
    },
    "& p": {
      fontSize: "14px",

      lineHeight: "26px",
      maxWidth: "353px",
      width: "100%",
      "@media(max-width:716px)": {
        fontSize: "15px",
      },
    },
  },
  downbox: {
    marginTop: "100px",
    "@media(max-width:599px)": {
      marginTop: "30px",
    },
  },
  maintop: {
    marginTop: "64px",
  },
  middlebox: {
    backgroundColor: "#fff",

    boxSizing: "border-box",
    borderRadius: "9px",
    padding: "13px 25px 25px 25px",
  },
  innerpadding: {
    // padding: "20px",
    marginTop: "8px",
    "& h6": {
      color: "#000",
      fontSize: "16px",
      fontWeight: "700",
      marginBottom: "5px",
      "@media(max-width:644px)": {
        fontSize: "14px",
      },
      "@media(max-width:599px)": {
        fontSize: "16px",
      },
    },
    "& h5": {
      color: "#000",
      fontSize: "14px",
    },
    "& p": {
      color: "#000",
      fontSize: "14px",
      fontWeight: "300",
      color: "#000",
    },
    "& h2": {
      color: "#000",
      fontSize: "22px",
      fontWeight: "400",
    },
    "& h4": {
      color: "#000",
      fontSize: "16px",
      fontWeight: "700",
    },
    "& h3": {
      color: "#000",
      fontSize: "16px",
      fontWeight: "700",
      fontFamily: "'Inter', sans-serif",
      "@media(max-width:644px)": {
        fontSize: "14px",
      },
      "@media(max-width:599px)": {
        fontSize: "16px",
      },
    },
    "& figure": {
      width: "100%",
      position: "relative",
      transition: "0.5s",
      overflow: "hidden",
      borderRadius: "7px",
      margin: 0,
      "&:hover": {
        "& img": {
          transform: " scale(1.1)",
        },
      },

      "& img": {
        width: "100%",
        maxwidth: "347px",
        margin: "0 auto",
        transform: "scale(1.02)",
        objectFit: "cover",
        transition: "0.5s",
      },
    },
  },
  gridflex: {
    display: "flex",
    justifyContent: "flex-end",
    "@media(max-width:959px)": {
      display: "flex",
      justifyContent: "left",
      width: "100%",
    },
  },
  borderbox: {
    borderBottom: "1px solid #3D3C3C",
  },
  ethbox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",

    maxWidth: "145px",
    "@media(max-width:644px)": {
      maxWidth: "125px",
    },
    "@media(max-width:599px)": {
      maxWidth: "140px",
    },
  },
  lastbody: {
    "& p": {
      fontSize: "14px",
    },
  },
  samebox: {
    marginTop: "73px",
    marginBottom: "100px",
    "@media(max-width:959px)": {
      marginTop: "62px",
    },
    "@media(max-width:599px)": {
      marginTop: "30px",
      marginBottom: "30px",
    },
  },
  gridvalue: {
    display: "block",
    "@media(max-width:959px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    "@media(max-width:601px)": {
      display: "block",
    },
  },
  raceday: {
    marginTop: "151px",
    "@media(max-width:1060px)": {
      marginTop: "122px",
    },
    "@media(max-width:959px)": {
      marginTop: "15px",
    },
    "@media(max-width:607px)": {
      marginTop: "43px",
    },
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <Box
      className={classes.bannerbox}
      wow
      slideInUp
      data-wow-offset="50"
      data-wow-delay="0.2s"
    >
      <Container>
        <Box textAlign="center">
          <Typography variant="h1" className="wow slideInRight">
            {" "}
            The Revolutionary Features
          </Typography>
          <Typography variant="h4" className="wow slideInLeft">
            Buy and sell racehorses at ease
          </Typography>
          <Typography variant="h6" className="wow slideInLeft">
            OmniHorse ensures that a racehorse NFT is minted only after the
            horse has been verified. It also promises syndication and auction
            listing that enables racehorses to either be fully owned or shared
            by multiple users in fractional shares.
          </Typography>
        </Box>
        <Box className={classes.maintop}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={classes.samebox}>
                <Typography variant="h2">Authentic Ownership</Typography>
                <Typography variant="body1">
                  Creating new standards for own-to-earn. Ownership of all
                  OmniHorse horses NFTs are registered and verifiably proven on
                  the blockchain. Provable and Transparent.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h2">Interactive - Unique NFTs</Typography>
                <Typography variant="body1">
                  OmniHorse horse racing will breathe new life into static
                  sports and the animal NFT market. Users can now fully interact
                  with their DNA enriched NFT racing horses and have fully
                  interate with their community racecourse.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={classes.middlebox}>
                <Box className={classes.innerpadding}>
                  <figure>
                    <img src="images/horserevo.png" alt="" width="100%" />
                  </figure>
                  <Box>
                    <Grid container>
                      <Grid item lg={6} md={6} sm={6} xs={6}>
                        <Typography variant="h6">AGE</Typography>
                        <Typography variant="h5">2</Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          textAlign: "right",
                        }}
                      >
                        <Box>
                          <Typography variant="h6">REGION</Typography>
                          <Typography variant="body1">Victoria, AU</Typography>
                        </Box>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6} xs={6}>
                        <Typography variant="h6">GENDER TYPE</Typography>
                        <Typography variant="h5">Gelding</Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          textAlign: "right",
                        }}
                      >
                        <Box>
                          <Typography variant="h6">STATUS</Typography>
                          <Typography variant="body1">Pretraining</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box className={classes.borderbox}></Box>
                    <Box mt={2}>
                      <Typography variant="h2">Tokenized Pioneer</Typography>
                    </Box>

                    <Grid container>
                      <Grid item lg={6} md={8} sm={8} xs={8}>
                        <Box className={classes.ethbox}>
                          <Box>
                            <img
                              src="images/ethblue.png"
                              alt=""
                              width="100%"
                              style={{ width: "100%", maxWidth: "12px" }}
                            />
                          </Box>
                          <Box>
                            <Typography variant="h3">From 0.35 ETH</Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={4}
                        sm={4}
                        xs={4}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Box>
                          <Typography variant="h4">76/500</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box className={classes.lastbody}>
                      <Typography variant="body1">
                        *World’s First Racehourse NFT
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={classes.gridflex}
            >
              <Box className={classes.gridvalue}>
                <Box className={classes.samebox}>
                  <Typography variant="h2">Decentralized Community</Typography>
                  <Typography variant="body1">
                    OmniHorse be a fully decentralized community. Become a
                    racetrack owner, bookmaker, or minter.
                  </Typography>
                </Box>
                <Box className={classes.raceday}>
                  <Typography variant="h2">Race Day Privileges</Typography>
                  <Typography variant="body1">
                    Transparent horse trading transactions and instant flow of
                    information across the globe 24/7. Track admission, box
                    seats, and more. Meet your fellow share-holders and get the
                    full ownership experience.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
