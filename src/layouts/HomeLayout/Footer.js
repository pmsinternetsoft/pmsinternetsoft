import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  makeStyles,
  Button,
  Divider,
  TextField,
  IconButton,
  Link,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { SiWechat, SiDiscord } from "react-icons/si";
import { AiFillWechat } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./../../component/Logo";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    position: "relative",
    // background:"#E547FF",
    zIndex: "9",
    paddingTop: theme.spacing(4),

    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),

      position: "relative",
      zIndex: "9",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),

      position: "relative",
      zIndex: "9",
    },
    "& h1": {
      fontWeight: "600",
      fontSize: "31px",
      [theme.breakpoints.down("md")]: {
        fontSize: "33px",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "23px",
      },
    },
    "& h6": {
      fontWeight: "400",
      fontSize: "14px",

      color: "#B7B7B7",
    },
    "& h2": {
      fontWeight: "400",
      fontSize: "20px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "17px",
      },
    },
  },
  borderBottmo: {
    overflow: "hidden",
    background: "#000",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },

  largeIcon: {
    width: 18,
    height: 18,
    marginRight: "8px",
  },
  icons: {
    justify: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justify: "center",
    },
  },
  button: {
    backgroundColor: "#fab758",
    color: "#ffffff",
    border: "2px solid #fab758",
    borderRadius: "40px",
    minHeight: "50px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    lineHeight: "1.5",
    fontWeight: "500",
    transition: "0.26s ease",
    minWidth: "160px",
    paddingBottom: "3px",
    textTransform: "capitalize",
    marginRight: "15px",
    marginBottom: "10px",
    marginTop: "27px",
  },

  textFild: {
    position: "relative",

    "& button": {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      backgroundColor: "#FAB758",
      minWidth: "90px",
      fontSize: "16px",
      fontWeight: "500",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#000",
      },
    },
  },
  box: {
    display: "flex",
  },
  btn: {
    width: "118px",
    height: "52px",
    marginLeft: "1rem",
    fontSize: "14px !important",
    borderRadius: "5px",
    color: "white",
  },
  dot: {
    height: "35px",
    width: "35px",
    borderRadius: "50%",
    backgroundColor: "#713FFF",
    // marginLeft: "16px",
    cursor: "pointer",
    // "@media(max-width:420px)": {
    //   height: "30px",
    //   width: "30px",
    // },
  },
  dot1: {
    height: "35px",
    width: "35px",
    borderRadius: "50%",
    backgroundColor: "#713FFF",
    // marginLeft: "1rem",
    cursor: "pointer",
    "@media(max-width:420px)": {
      // height: "30px",
      // width: "30px",
      marginLeft: "0px",
    },
  },

  text: {
    backgroundColor: "#6b31ce",
    color: "white",
    borderRadius: "5px",
  },
  grid2: {
    display: "flex",
    justifyContent: "end",
    flexDirection: "column",
    textAlign: "end",
    "@media(max-width:960px)": {
      display: "flex",
      justifyContent: "flex-start",
      textAlign: "start",
      marginTop: "2rem",
    },
  },
  // list: {
  //   display: "flex",
  //   // justifyContent: "end",
  //   "@media(max-width:958px)": {
  //     display: "flex",
  //     justifyContent: "flex-start",
  //   },
  // },
  baseSection: {
    display: "flex",
    justifyContent: "center",
    "& p": {
      color: "#B7B7B7",
      fontSize: "16px",
    },
  },
  privacy: {
    display: "flex",
    "@media(max-width:565px)": {
      marginTop: "1.5rem",
    },
  },
  icon: {
    margin: "6px 6px",
    color: "white",
    cursor: "pointer",
  },
  icon1: {
    margin: "9px 9px",
    color: "white",
    cursor: "pointer",
    // "@media(max-width:420px)": {
    //   margin: "8px 8px",
    // },
  },
  listitem: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#B7B7B7",
    cursor: "pointer",
    background: "none",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    "@media(max-width:599px)": {
      fontSize: "14px",
    },
  },
  llc: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#B7B7B7",
  },
  privacy1: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#B7B7B7",
    cursor: "pointer",
  },
  gridicon: {
    display: "flex",
    justifyContent: "flex-end",
    "@media(max-width:959px)": {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  subpart: {
    borderTop: "1px solid #7231c4",
    borderBottom: "1px solid #7231c4",

    backgroundColor: "#4b20ff",
    padding: "60px 10px 24px 10px",
    "& h6": {
      fontSize: "14px",
      color: "#B7B7B7",
      fontWeight: "400",
      lineHeight: "21px",
      width: "100%",
      maxWidth: "448px",
      "@media(max-width:730px)": {
        fontSize: "14px",
        maxWidth: "260px",
      },
      "@media(max-width:599px)": {
        fontSize: "14px",
        width: "100%",
        maxWidth: "100%",
        marginBottom: "10px",
      },
    },
    "@media(max-width:599px)": {
      padding: "20px 10px 24px 10px",
    },
  },
  iconsboxes: {
    width: "100%",
    display: "flex",
    justifyContent: "left",
    "@media(max-width:599px)": {
      display: "flex",
      justifyContent: "left",
    },
  },
  listbox: {
    background: "none",
    border: "none",
    margin: "0px",
  },
}));

export default function Liquidity() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.footerSection}>
        <Box>
          <Container maxWidth="lg">
            <Box
              mb={5}
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Grid container spacing={2}>
                <Grid item lg={8} sm={7} md={7} xs={12}>
                  <Grid container>
                    <Grid item lg={6} sm={12} md={9} xs={12}>
                      <Typography variant="h1">Stay in the loop</Typography>
                      &nbsp;
                      <Typography className={classes.join1} variant="h6">
                        OmniHorse is a comprehensive NFT horse racing platform
                        where you can earn tokens participate in real time horse
                        races and thoroughbred breeding through the power of
                        blockchain.
                      </Typography>
                      &nbsp;
                      <Box className={classes.box}>
                        <TextField
                          placeholder="Enter your email"
                          variant="outlined"
                          fullWidth
                          className={classes.text}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.btn}
                        >
                          Sign up
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={4} sm={5} md={5} xs={10}>
                  <Box>
                    <Typography variant="h1">Join the community</Typography>
                    <Box mt={3} className={classes.iconsboxes}>
                      {/* <Grid container spacing={1}>
                        <Grid item lg={12} sm={12} md={10} xs={11}>
                          <Grid container spacing={2}>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                              <Link
                                target="_blank"
                                href="https://www.facebook.com/"
                              >
                                <Box className={classes.dot1}>
                                  {" "}
                                  <FacebookIcon className={classes.icon} />
                                </Box>
                              </Link>
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                              <Link
                                target="_blank"
                                href="https://telegram.org/"
                              >
                                <Box className={classes.dot}>
                                  <TelegramIcon className={classes.icon} />
                                </Box>{" "}
                              </Link>
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                              <Link target="_blank" href="https://twitter.com/">
                                <Box className={classes.dot}>
                                  <TwitterIcon className={classes.icon} />
                                </Box>{" "}
                              </Link>
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                              <Link
                                target="_blank"
                                href="https://discord.com/invite/discord-testers"
                              >
                                <Box className={classes.dot}>
                                  <SiDiscord className={classes.icon1} />
                                </Box>{" "}
                              </Link>
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                              <Link
                                target="_blank"
                                href="https://www.youtube.com/"
                              >
                                <Box className={classes.dot}>
                                  <YouTubeIcon className={classes.icon} />
                                </Box>
                              </Link>
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                              <Link
                                target="_blank"
                                href="https://www.mailinator.com/"
                              >
                                <Box className={classes.dot}>
                                  <SiWechat className={classes.icon1} />
                                </Box>
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid> */}
                      <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        style={{ width: "100%", maxWidth: "143px" }}
                      >
                        <Box>
                          {" "}
                          <Link target="_blank" href="https://telegram.org/">
                            <Box className={classes.dot}>
                              <TelegramIcon className={classes.icon} />
                            </Box>{" "}
                          </Link>
                        </Box>
                        <Box>
                          <Link
                            target="_blank"
                            href="https://www.facebook.com/"
                          >
                            <Box className={classes.dot}>
                              <FacebookIcon className={classes.icon} />
                            </Box>{" "}
                          </Link>
                        </Box>
                        <Box>
                          <Link target="_blank" href="https://twitter.com/">
                            <Box className={classes.dot}>
                              <TwitterIcon className={classes.icon} />
                            </Box>{" "}
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Box className={classes.subpart}>
            <Container>
              <Box>
                <Grid container alignItems="center" style={{ color: "white" }}>
                  <Grid item xs={12} sm={5} md={5} lg={5}>
                    <Box>
                      {" "}
                      <img
                        src="/images/logo_white.png"
                        alt=""
                        width="100%"
                        style={{ maxWidth: "200px", margin: "0 auto" }}
                      />
                    </Box>{" "}
                    <Box mt={2} mb={2}>
                      <Typography variant="h6">
                        Tenete ergo quod si servitus quae natura liber, et
                        aliena tua tunc impeditur.Dolebis, et turabuntur,et
                        invenietis,cum culpa tam dis hominibusqe.Quod si tibi
                        tantum sit propriaet aliena quale sit,nemo unquam vel
                      </Typography>{" "}
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={7} md={7} lg={7}>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={6} md={3}>
                        {/* <Typography variant="h2">NFT Collection</Typography>
                        <List className={classes.listbox}>
                          <RouterLink
                            to="/marketplace"
                            style={{ textDecoration: "none" }}
                          >
                            <ListItem className={classes.listitem}>
                              Collection
                            </ListItem>
                          </RouterLink>
                          <RouterLink
                            to="/faveorites"
                            style={{ textDecoration: "none" }}
                          >
                            <ListItem className={classes.listitem}>
                              Favourites
                            </ListItem>
                          </RouterLink>
                        </List>{" "} */}
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        {/* <Typography variant="h2">My Account</Typography>
                        <List className={classes.listbox}>
                          <RouterLink
                            to="/my-account"
                            style={{ textDecoration: "none" }}
                          >
                            <ListItem className={classes.listitem}>
                              My Profile
                            </ListItem>
                          </RouterLink>
                          <RouterLink
                            to="/userProfile"
                            style={{ textDecoration: "none" }}
                          >
                            <ListItem className={classes.listitem}>
                              My Claims
                            </ListItem>
                          </RouterLink>
                        </List>{" "} */}
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        {/* <Typography variant="h2">Resources</Typography>
                        <List className={classes.listbox}>
                          
                          <RouterLink
                            to="/marketplace"
                            style={{ textDecoration: "none" }}
                          >
                            <ListItem className={classes.listitem}>
                              Trade Now
                            </ListItem>
                          </RouterLink>
                          <RouterLink
                            to="/faq"
                            style={{ textDecoration: "none" }}
                          >
                            <ListItem className={classes.listitem}>
                              Faq
                            </ListItem>
                          </RouterLink>
                        </List>{" "} */}
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <Typography variant="h2">Company</Typography>
                        <List className={classes.listbox}>
                          {/* <RouterLink to="/about">
                            {" "}
                            <ListItem className={classes.listitem}>
                              About
                            </ListItem>
                          </RouterLink>

                          <RouterLink to="/term-conditions">
                            {" "}
                            <ListItem className={classes.listitem}>
                              Terms Of Use
                            </ListItem>
                          </RouterLink> */}
                          <RouterLink to="/contact-us">
                            {" "}
                            <ListItem className={classes.listitem}>
                              Contact Us
                            </ListItem>
                          </RouterLink>
                        </List>{" "}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <Box pt={5} pb={3}>
                <Divider />
              </Box>
              <Box className={classes.baseSection}>
                <Typography variant="body1">@ 2022 OmniHorse LLC</Typography>
                {/* <Box className={classes.privacy}>
                  <RouterLink to="/privacy">
                    <Typography variant="body1">Privacy Policy </Typography>
                  </RouterLink>
                  &nbsp; &nbsp; &nbsp;
                  <RouterLink to="/term-conditions">
                    {" "}
                    <Typography variant="body1">Terms & Conditions</Typography>
                  </RouterLink>
                </Box> */}
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
