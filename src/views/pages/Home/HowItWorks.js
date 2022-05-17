import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "55px",
    paddingBottom: "90px",
    width: "100%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "70px",
    },
    "& h1": {
      fontSize: "60px",
      fontWeight: "400",

      [theme.breakpoints.down("md")]: {
        fontSize: "45px",
      },

      "@media(max-width:599px)": {
        textAlign: "center",
        fontSize: "45px",
        marginBottom: "10px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        textAlign: "center",

        marginBottom: "10px",
      },
    },
    "& h6": {
      fontSize: "16px",

      marginTop: "20px",
      maxWidth: "547px",
      width: "100%",
    },
    "& h5": {
      fontSize: "20px",
      fontWeight: "700",
      color: "#E19C32",
    },
    "& p": {
      fontSize: "14px",
      maxWidth: "199px",
      width: "100%",
      lineHeight: "25px",
    },
  },
  mainhaed: {
    marginTop: "10px",
  },

  circularProgressBox: {
    position: "relative",
    "& .arrowbox": {
      position: "absolute",
      top: "10%",
      right: "34px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "113px",
      height: "113px",
      borderRadius: "100%",
      background:
        "radial-gradient(146.32% 146.53% at 7.64% 1.82%, #F7F9FA 0%, #FFFFFF 70%)",
      zIndex: "999",
      "& h6": {
        fontSize: "30px",
        fontWeight: "600",
        color: "#704AFF",
        display: "flex",
        marginTop: "0px",
        justifyContent: "center",
      },
    },
    "& p": {
      fontSize: "14px",

      with: "100%",
      maxWidth: "208px",
      textAlign: "center",
      marginTop: "15px",

      // margin: "30px auto",
      "@media(max-width:599px)": {
        fontSize: "14px",
      },
    },
  },

  gridbox: {
    display: "flex",
    // justifyContent: "center",
    marginBottom: "20px",
    "@media(max-width:959px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
}));
function Banner() {
  const classes = useStyles();
  const textSection1 = "Mint";
  const textSection2 = "NFT";
  const textSection3 = "Trade";
  const textSection4 = "Earn";
  return (
    <Box className={classes.bannerbox}>
      <Container maxWidth="lg">
        <Box mb={1}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item lg={7} md={7} sm={6} xs={12}>
              <Box>
                <Typography variant="h1" className="wow slideInRight">
                  How It Works
                </Typography>
                {/* <Typography variant="h6" className="wow slideInLeft">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Typography> */}
              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={6} xs={12}>
              <Box>
                <img src="images/workshorse.png" alt="" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.mainhaed}>
          <Grid container>
            <Grid item lg={3} md={3} sm={6} xs={12} style={{}}>
              <Box className={classes.gridbox}>
                <Box
                  className="wow slideInRight"
                  data-wow-offset="50"
                  data-wow-delay="0.2s"
                >
                  <Box className={classes.circularProgressBox}>
                    <Box>
                      <img
                        src="images/ques1.png"
                        alt=""
                        width="100%"
                        style={{ width: "100%", maxWidth: "196px" }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body1">
                        OmniHorse platform will use a smart contract to mint the
                        fractional NFTs for the certified horse owners. Each NFT
                        is a token that uses Ethereum’s ERC-1155.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              // style={{ display: "flex", justifyContent: "center" }}
            >
              <Box className={classes.gridbox}>
                <Box
                  className="wow slideInRight"
                  data-wow-offset="50"
                  data-wow-delay="0.4s"
                >
                  <Box className={classes.circularProgressBox}>
                    <Box>
                      <img
                        src="images/ques2.png"
                        alt=""
                        width="100%"
                        style={{ width: "100%", maxWidth: "200px" }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body1">
                        The fractions are then put up for sale at a fixed price
                        for a set period, or until they’re sold out; Or
                        Auctioned.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              // style={{ display: "flex", justifyContent: "center" }}
            >
              <Box className={classes.gridbox}>
                <Box
                  className="wow slideInRight"
                  data-wow-offset="50"
                  data-wow-delay="0.6s"
                >
                  <Box className={classes.circularProgressBox}>
                    <Box>
                      <img
                        src="images/ques3.png"
                        alt=""
                        width="100%"
                        style={{ width: "100%", maxWidth: "197px" }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body1">
                        Users can choose how many fractional NFTs to purchase
                        and share the ownership of the racehorse by percentage.
                        Or trade at the NFT marketplace any time.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              // style={{ display: "flex", justifyContent: "center" }}
            >
              <Box className={classes.gridbox}>
                <Box
                  className="wow slideInRight"
                  data-wow-offset="50"
                  data-wow-delay="0.8s"
                >
                  <Box className={classes.circularProgressBox}>
                    <Box>
                      <img
                        src="images/ques4.png"
                        alt=""
                        width="100%"
                        style={{ width: "100%", maxWidth: "205px" }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body1">
                        NFT holders claim $OHToken for earning from the horse’s
                        race competition, breeding, and more.
                      </Typography>
                    </Box>
                  </Box>
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
