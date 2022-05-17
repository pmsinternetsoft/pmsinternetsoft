import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    paddingTop: "140px",
    position: "relative",
    paddingBottom: "80px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "100px",
      paddingBottom: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "50px",
      paddingBottom: "30px",
    },
    "& h1": {
      fontSize: "60px",
      fontWeight: "400",
      color: "#FFFEFD",
      [theme.breakpoints.down("md")]: {
        fontSize: "45px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    "& p": {
      fontSize: "16px",
      marginTop: "30px",
      maxWidth: "797px",
      width: "100%",
      lineHeight: "25px",
      margin: "0 auto",
      marginBottom: "80px",
    },
    "& .textbox": {
      display: "inline-block",
      "& h2": {
        fontSize: "24px",
        textAlign: "center",
      },
      "& p": {
        fontSize: "14px",
        marginTop: "15px",
        textAlign: "center",
        width: "100%",
        maxWidth: "370px",
      },
    },
  },
}));
function InvestNow() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.mainBox}>
          <Box textAlign="center">
            <Typography variant="h1" className="wow slideInRight">
              Own-to-Earn Racing Ecosystem
            </Typography>
            <Typography variant="body2" className="wow slideInLeft">
              Featuring a complete NFT own-to-earn horse racing ecosystem where
              you can own or co-own all the horses' assets. Forget making our
              competitors rich – earn with this revolutionary decentralized
              blockchain NFT platform.
            </Typography>
          </Box>

          <Grid container spacing={4} textAlign="center">
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box className="textbox">
                <Typography variant="h2">Create Cash Flow</Typography>
                <Typography variant="body1">
                  Participate, own, and earn, in a decentralized, community-run
                  environment that includes buying, breeding, and racing NFT
                  horses with unique characteristics and traits. Share in or
                  build your own NFT, become a horse owner or breeder, and
                  own-to-earn.{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box className="textbox">
                <Typography variant="h2">Money/Price Value</Typography>
                <Typography variant="body1">
                  The NFT will reflect the underlying value of the token,
                  providing liquidity, value, and confidence to most crypto
                  holders, and NFT investors along with supporting the market
                  price.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className="textbox">
                <Typography variant="h2">Liquid</Typography>
                <Typography variant="body1">
                  OmniHorse will be net deflationary to be highlighted as one of
                  the few NFT developments that are first and foremost a
                  commercial product. With profitable revenue models and
                  outcomes for sustainable returns expected for a proven racing
                  industry business model in the virtual Metaverse world.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default InvestNow;
