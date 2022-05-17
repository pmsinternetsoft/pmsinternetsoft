import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Winners from "./Winners";
const useStyles = makeStyles((theme) => ({
  mainbox: {
    position: "relative",
    padding: "130px 0 200px",
  },
  topleft: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    maxWidth: "243px",
    zIndex: "999",
    // [theme.breakpoints.down("md")]: {
    //   bottom: "-17px",
    //   width: "25%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
  },
  bottomleft: {
    position: "absolute",
    bottom: "0px",
    // top: "0px",
    left: "0px",
    width: "100%",
    maxWidth: "243px",
    zIndex: "999",
    // [theme.breakpoints.down("md")]: {
    //   bottom: "-17px",
    //   width: "25%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
  },
  topright: {
    position: "absolute",
    // bottom: "-99px",
    top: "0px",
    // left: "0px",
    right: "0px",
    width: "100%",
    maxWidth: "243px",
    zIndex: "999",
    // [theme.breakpoints.down("md")]: {
    //   bottom: "-17px",
    //   width: "25%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
  },
  bottomright: {
    position: "absolute",
    bottom: "0px",
    // top: "0px",
    // left: "0px",
    right: "0px",
    width: "100%",
    maxWidth: "243px",
    zIndex: "999",
    // [theme.breakpoints.down("md")]: {
    //   bottom: "-17px",
    //   width: "25%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
  },
  borderbox: {
    // border: "1px solid #D5A042",
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  paddingbox: {
    padding: "38px 0px 13px 28px",
  },
  paddingsecond: {
    padding: "40px 0px 35px 0px",
  },
  subtext: {
    "& p": {
      fontSize: "20px",
      fontWeight: "400",
      marginTop: "8px",
    },
  },
  stylebox: {
    "& h1": {
      fontSize: "40px",
      fontWeight: "400",
      color: "#FFFEFD",

      lineHeight: "46px",
      [theme.breakpoints.down("md")]: {
        fontSize: "35px",
      },
    },
    "& h2": {
      fontSize: "50px",
      fontWeight: "400",
      color: "#E19C32",

      lineHeight: "46px",
      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
      },
    },
    "& p": {
      fontSize: "20px",
      fontWeight: "500",
      color: "#fff",
      marginTop: "10px",
      marginBottom: "5px",
    },
    "& h6": {
      fontSize: "20px",
      fontWeight: "500",
      color: "#fff",
    },

    "& h5": {
      fontSize: "30px",
      fontWeight: "600",
      color: "#fff",

      "& span": {
        fontSize: "50px",
        fontWeight: "400",
        color: "#E19C32",
        fontFamily: "'Anton', sans-serif",

        [theme.breakpoints.down("md")]: {
          fontSize: "40px",
        },
      },
    },
    "& h4": {
      fontSize: "27px",
      fontWeight: "400",
      color: "#fff",
    },
  },
  micro: {
    "& h1": {
      fontSize: "22px",
      fontWeight: "400",
      color: "#fff",

      marginTop: "5px",
      textAlign: "center",
    },
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.mainbox}>
      <Container>
        <Box className={classes.stylebox}>
          <Grid container spacing={8}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Box className={classes.borderbox}>
                <img
                  src="images/topleft.png"
                  alt="Top Left Arrow"
                  className={classes.topleft}
                />
                <img
                  src="images/bottomleft.png"
                  alt="Top Left Arrow"
                  className={classes.bottomleft}
                />

                <Container>
                  <Box className={classes.paddingsecond}>
                    <Grid container spacing={1}>
                      <Grid item lg={5} md={5} sm={12} xs={12}>
                        <Box>
                          <img
                            src="images/useeth.png"
                            alt=""
                            width="100%"
                            style={{
                              width: "100%",
                              maxWidth: "206px",
                              margin: "0 auto",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item lg={7} md={7} sm={12} xs={12}>
                        <Box>
                          {/* <Typography variant="h1">Trade Horse</Typography>
                          <Box mt={3}>
                            <Typography variant="h6">#56/500</Typography>
                          </Box>
                          <Box mt={1} className={classes.subtext}>
                            <Typography variant="h2">$2,856</Typography>
                            <Typography variant="body2">
                              HORSE LISTED
                            </Typography>
                          </Box> */}
                          <Typography variant="h5">
                            <span>Use ETH</span> to purchase horses
                          </Typography>
                          <Typography variant="h4">
                            to participate in horse racing.
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
                <img
                  src="images/topright.png"
                  alt="Top Left Arrow"
                  className={classes.topright}
                />
                <img
                  src="images/bottomright.png"
                  alt="Top Left Arrow"
                  className={classes.bottomright}
                />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Box className={classes.borderbox}>
                <img
                  src="images/topleft.png"
                  alt="Top Left Arrow"
                  className={classes.topleft}
                />
                <img
                  src="images/bottomleft.png"
                  alt="Top Left Arrow"
                  className={classes.bottomleft}
                />
                <Container>
                  <Box className={classes.paddingsecond}>
                    <Grid container spacing={5}>
                      <Grid item lg={7} md={7} sm={12} xs={12}>
                        <Box>
                          <img
                            src="images/micro.png"
                            alt=""
                            width="100%"
                            style={{
                              width: "100%",
                              maxWidth: "243px",
                              margin: "0 auto",
                            }}
                          />
                          <Box className={classes.micro}>
                            <Typography variant="h1">MICRO SHARE</Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item lg={5} md={5} sm={12} xs={12}>
                        <Box>
                          <Typography variant="h1">
                            Most Valuable Horse
                          </Typography>
                          <Typography variant="body1">Last Win</Typography>
                          <Box mt={1} className={classes.subtext}>
                            <Typography variant="h2">$2,856</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
                <img
                  src="images/topright.png"
                  alt="Top Left Arrow"
                  className={classes.topright}
                />
                <img
                  src="images/bottomright.png"
                  alt="Top Left Arrow"
                  className={classes.bottomright}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Winners />
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
