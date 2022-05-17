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
import Info from "./Info";
import NFTActivity from "./NFTActivity";
import Club from "./Club";
import Competition from "./Competition";

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
      "& .Name": {
        display: "flex",
        alignItems: "center",
        paddingTop: "10px",
        "& svg": {
          color: "#fff",
        },
        "& h2": {
          color: "#fff",
        },
        "& h6": {},
        "& strong": {
          color: "#d4d4d4",
          fontSize: "22px",
          fontWeight: "600",
          fontFamily: "'Inter', sans-serif",
        },
      },
    },
  },
  mainBox: {
    margin: "50px",
    "& .TokenDetails": {
      background: "rgb(117 43 255)",
      border: " 1px solid #7231c4",
      boxSizing: "border-box",
      padding: "25px 15px 40px",
      display: "flex",
      "& .iconBox": {
        "& svg": {
          color: "#818181",
        },
      },
      "& .contentbox": {
        padding: "0px 10px",
        "& .summarybox": {
          "& h6": {
            color: "#fff",
            whiteSpace: "pre",
            textOverflow: "ellipsis",
            overflow: "hidden",
            // paddingBottom: "8px",
            paddingTop: "10px",
            fontSize: "16px",
            fontWeight: "400",
          },
          "& p": {
            color: "#d4d4d4",
            whiteSpace: "pre",
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontSize: "14px",
            fontWeight: "300",
          },
        },
      },
    },
    "@media(max-width:1027px)": {
      margin: "20px",
    },
    "@media(max-width:959px)": {
      margin: "30px",
    },
    "@media(max-width:460px)": {
      margin: "20px",
    },
  },
  TabBox: {
    "& .buttonBox": {
      background: "#6612d6",

      // borderBottom: "5px solid #272727",
      // [theme.breakpoints.down("xs")]: {
      //     padding: "0 0px",
      //     margin: "0 10px",
      //     display: "inline-block",
      // },
      "& a": {
        width: "100%",
        cursor: "pointer",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "17px",
        fontFamily: "'Inter', sans-serif",
        color: "#fff",
        paddingTop: "16px",
        paddingBottom: "16px",
        // borderBottom: "5px solid #272727",
        [theme.breakpoints.down("xs")]: {
          fontSize: "12px",
        },
        "&:hover": {
          textDecoration: "none",
          color: "#bca7f9",
          // borderBottom: "5px solid #fff",
        },
        "&.active": {
          color: "#fff",
          // borderBottom: "5px solid #fff",
          paddingTop: "16px",
          paddingBottom: "16px",
          fontSize: "17px",
          backgroundColor: "#6214b1",
        },
      },
    },
  },
  subtext: {
    "& p": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
      width: "100%",
      maxWidth: "999px",
      margin: "0 auto",
      lineHeight: "25px",
    },
  },
}));

function Profile(props) {
  const classes = useStyles();
  const [tabview, setTabView] = useState("Info");
  return (
    <Box className={classes.root}>
      <Page title="Horse Profile | Info">
        <Box>
          <Box className="ProileImg">
            <figure className="postImg">
              <img src="images/HorseProfile.png" alt="Horse Profile Images" />
            </figure>
          </Box>
          <Container maxWidth="lg">
            <Grid container spacing={2} direction={"column"}>
              <Grid item xs={12} lg={12} align="center">
                <figure className="userProfile">
                  <img src="images/ProfileImg.png" alt="Profile Image" />
                </figure>
              </Grid>
              <Grid item xs={12} lg={12} align="center">
                <Box className="Nametext">
                  <Box className="Name">
                    <Typography variant="h2">Rapid Stone</Typography>&nbsp;
                    <RiShieldCheckFill fontSize="30px" />
                  </Box>
                  <Box className="Name">
                    <Typography variant="h6" style={{ color: "#fff" }}>
                      {" "}
                      Created by:{" "}
                    </Typography>{" "}
                    &nbsp;
                    <strong>OmniHorse</strong>&nbsp;
                    <RiShieldCheckFill />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={12} align="center">
                <Box className={classes.subtext}>
                  <Typography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type an.Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type an.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className={classes.mainBox}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="TokenDetails">
                <Box className="iconBox">
                  <ListIcon />
                </Box>
                <Box className="contentbox">
                  <Typography variant="h4">Token Details</Typography>
                  <Box className="summarybox">
                    <Grid container>
                      <Grid item lg={12} md={12} sm={4} xs={12}>
                        <Box pt={2}>
                          <Typography variant="h6">Created By</Typography>
                          <Typography variant="body1">MetaHorse LLC</Typography>
                        </Box>
                      </Grid>
                      <Grid item lg={12} md={12} sm={4} xs={12}>
                        <Box pt={2}>
                          <Typography variant="h6">Contract Address</Typography>
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Typography variant="body1">
                              0x35665..fhj525
                            </Typography>
                            &nbsp;
                            <CopyToClipboard text={"0x35665..fhj525"}>
                              <FiCopy
                                onClick={() => toast.info("Copied")}
                                style={{ cursor: "pointer" }}
                              />
                            </CopyToClipboard>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item lg={12} md={12} sm={4} xs={12}>
                        <Box pt={2}>
                          <Typography variant="h6">
                            Total Issued Token
                          </Typography>
                          <Typography variant="body1">10,000</Typography>
                        </Box>
                      </Grid>
                      <Grid item lg={12} md={12} sm={4} xs={12}>
                        <Box pt={2}>
                          <Typography variant="h6">Token ID</Typography>
                          <Typography variant="body1">1455</Typography>
                        </Box>
                      </Grid>
                      <Grid item lg={12} md={12} sm={4} xs={12}>
                        <Box pt={2}>
                          <Typography variant="h6">Token Standard</Typography>
                          <Typography variant="body1">ERC-1155</Typography>
                        </Box>
                      </Grid>
                      <Grid item lg={12} md={12} sm={4} xs={12}>
                        <Box pt={2}>
                          <Typography variant="h6">Blockchain</Typography>
                          <Typography variant="body1">Ethereum</Typography>
                        </Box>
                      </Grid>
                      <Grid item lg={12} md={12} sm={4} xs={12}>
                        <Box pt={2}>
                          <Typography variant="h6">
                            Settlement Currency
                          </Typography>
                          <Typography variant="body1">USD</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Box className={classes.TabBox}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Box className="buttonBox">
                      <Link
                        className={tabview === "Info" ? "active" : " "}
                        onClick={() => setTabView("Info")}
                      >
                        Info
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Box className="buttonBox">
                      <Link
                        className={tabview === "NFTActivity" ? "active" : " "}
                        onClick={() => setTabView("NFTActivity")}
                      >
                        NFT Activity
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Box className="buttonBox">
                      <Link
                        className={tabview === "Club" ? "active" : " "}
                        onClick={() => setTabView("Club")}
                      >
                        Club
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Box className="buttonBox">
                      <Link
                        className={tabview === "Competition" ? "active" : " "}
                        onClick={() => setTabView("Competition")}
                      >
                        Competition
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={4}>
                {tabview === "Info" ? <Info /> : ""}
                {tabview === "NFTActivity" ? <NFTActivity /> : ""}
                {tabview === "Club" ? <Club /> : ""}
                {tabview === "Competition" ? <Competition /> : ""}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Page>
    </Box>
  );
}

export default Profile;
