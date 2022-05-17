import React, { useState } from "react";
import {
  Box,
  makeStyles,
  Grid,
  Container,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import { RiShieldCheckFill } from "react-icons/ri";
import ListIcon from "@material-ui/icons/List";
import Page from "src/component/Page";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import CollectionDetail from "./Collectiondetail";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "94px",
    "& .postImg": {
      height: "260px",
      overflow: "hidden",
      position: "relative",
      background: "rgba(0,0,0,0.7)",
      backgroundSize: "100% !important",
      backgroundRepeat: "no-repeat !important",
      backgroundPosition: "center !important",
      "@media(max-width:767px)": {
        height: "150px",
      },
      "& img": {
        top: "50%",
        left: "50%",
        width: "auto",
        height: "auto",
        position: "absolute",
        minWidth: "100%",
        transform: "translate(-50%, -50%)",
        minHeight: "100%",
      },
    },
    "& .userProfile": {
      width: "200px",
      height: "200px",
      display: "flex",
      overflow: "hidden",
      background: "rgba(0 , 0, 0, 0.041)",
      marginTop: "-120px",
      borderRadius: "100%",
      border: "3px solid #FFFFFF",
      backgroundSize: "100% !important",
      backgroundRepeat: "no-repeat !important",
      backgroundPosition: "center !important",
      position: "relative",
      "@media(max-width:767px)": {
        marginTop: "-60px",
        height: "100px",
        width: "100px",
      },
      "& img": {
        width: "auto",
        height: "auto",
        minWidth: "100%",
        background: "rgba(0 , 0, 0, 1)",
        minHeight: "100%",
      },
    },
    "& .Nametext": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "32px",
      "@media(max-width:767px)": {
        paddingTop: "0px",
      },
      "& .Name": {
        display: "flex",
        alignItems: "center",
        paddingTop: "10px",
      },
      "& h2": {
        fontSize: "33px",
        fontWeight: "400",
        letterSpacing: "2px",
        color: "#fff",
      },
      "& svg": {
        color: "#fff",
      },
      "& h6": {
        fontSize: "16px",
        fontWeight: "400",

        color: "#d4d4d4",
        "& span": {
          color: "#fff",
          fontSize: "19px",
          fontWeight: "600",
        },
      },
    },
  },
  boxcolor: {
    backgroundColor: "#713FFF",
    padding: "20px",
    borderRadius: "10px",
    "& h2": {
      fontSize: "30px",
      fontWeight: "400",
      letterSpacing: "2px",
      textAlign: "center",
      color: "#D6D6D6",
    },
    "& h6": {
      fontSize: "16px",
      fontWeight: "500",
      marginTop: "10px",
      textAlign: "center",
      color: "#fff",
    },
  },
  bodylast: {
    "& p": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
      width: "100%",
      maxWidth: "999px",
      margin: "0 auto",
      marginTop: "40px",
      textAlign: "center",
      marginBottom: "40px",
    },
  },
}));

function Profile(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Page title="Horse Profile | Info">
        <Box>
          <Box className="ProileImg">
            <figure className="postImg">
              <img src="images/HorseProfile.png" alt="Horse Profile Images" />
            </figure>
          </Box>
          <Container maxWidth="md">
            <Grid container spacing={2} direction={"column"}>
              <Grid item xs={12} lg={12} align="center">
                <Grid item xs={12} lg={12} align="center">
                  <figure className="userProfile">
                    <img src="images/ProfileImg.png" alt="Profile Image" />
                  </figure>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={12} align="center">
                <Box className="Nametext">
                  <Box className="Name">
                    <Typography variant="h2">WHITE_HORSE & RACE</Typography>{" "}
                  </Box>
                  <Box className="Name">
                    <Typography variant="h6">
                      {" "}
                      Created by&nbsp;<span>OmniHorse</span>
                    </Typography>
                    &nbsp;&nbsp;
                    <Box>
                      <RiShieldCheckFill style={{ fontSize: "25px" }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Grid container spacing={3}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Box className={classes.boxcolor}>
                    <Box>
                      <Typography variant="h2">67</Typography>
                      <Typography variant="h6">ITEMS</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Box className={classes.boxcolor}>
                    <Box>
                      <Typography variant="h2">98</Typography>
                      <Typography variant="h6">OWNER</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Box className={classes.boxcolor}>
                    <Box>
                      <Typography variant="h2">8.9</Typography>
                      <Typography variant="h6">FLOOR PRICE</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Box className={classes.boxcolor}>
                    <Box>
                      <Typography variant="h2">7.6</Typography>
                      <Typography variant="h6">VOLUME TRADE</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Container>
            <Box className={classes.bodylast}>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type an.Lorem Ipsum is simply dummy text of the
              </Typography>
            </Box>
          </Container>
          <Box>
            <CollectionDetail />
          </Box>
        </Box>
      </Page>
    </Box>
  );
}

export default Profile;
