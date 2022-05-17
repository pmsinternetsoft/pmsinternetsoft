import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "150px",
    // background: "rgb(229,71,255)",
    // backgroundImage: "linear-gradient(to bottom, #4b20ff, #8323ff, #a92cff, #c938ff, #e547ff)",
    paddingBottom: "70px",
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "110px",
      paddingTop: "120px",
    },
    "& .bannertext": {
      paddingRight: "45px",
      [theme.breakpoints.down("md")]: {
        paddingRight: "0px",
      },
      "& h1": {
        fontSize: "70px",

        fontWeight: "700",
        lineHeight: "85px",
        [theme.breakpoints.down("md")]: {
          fontSize: "45px",
          lineHeight: "55px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "35px",
          marginBottom: "20px",
          lineHeight: "45px",
        },
        "@media(max-width:345px)": {
          fontSize: "30px",
          lineHeight: "40px",
        },
      },
      "& h5": {
        fontSize: "19px",

        paddingTop: "15px",

        [theme.breakpoints.down("md")]: {
          fontSize: "16px",
        },

        [theme.breakpoints.down("sm")]: {
          fontSize: "14px",
        },
      },
    },
  },
  dummytext: {
    "& h6": {
      fontSize: "18px",

      letterSpacing: "5%",
      lineHeight: "32px",
    },
  },

  downtext: {
    marginTop: "140px",
    marginBottom: "40px",
    "@media(max-width:959px)": {
      marginTop: "40px",
    },
    "& h3": {
      fontSize: "21px",

      letterSpacing: "1px",
      lineHeight: "30px",
    },
    "& h2": {
      fontSize: "30px",

      letterSpacing: "14px",

      lineHeight: "50px",
      [theme.breakpoints.down("md")]: {
        fontSize: "19px",
      },
    },
    "& h1": {
      fontSize: "73px",
      fontWeight: "400",

      lineHeight: "80px",
      [theme.breakpoints.down("md")]: {
        fontSize: "58px",
      },
    },
  },

  basetext: {
    backgroundColor: "rgba(23, 12, 65, 0.29)",

    marginTop: "70px",
    borderRadius: "10px",

    "& .basebox": {
      textAlign: "center",
      borderRight: "1px solid #6535D2",
      paddingTop: "10px",
      paddingBottom: "10px",
      "& p": {
        color: "#D6D6D6",
        fontSize: "20px",
        fontWeight: "400",
        fontFamily: "'Markazi Text', serif",
        maxWidth: "94px",
        width: "100%",
        margin: "0 auto",
        lineHeight: "20px",
      },
      "& h1": {
        fontSize: "30px",
        fontWeight: "600",
        marginTop: "10px",
        fontFamily: "'Markazi Text', serif",
        [theme.breakpoints.down("md")]: {
          fontSize: "20px",
        },
      },
    },
  },
  noborder: { "& .basebox": { borderRight: "0 " } },
  btnleft: {
    height: "54px",
    borderRadius: "5px",
    fontSize: "16px !important",
    fontWeight: "600",
    "@media(max-width:969px)": {
      fontSize: "14px !important",
    },
  },
  btnright: {
    height: "54px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "500",
    "@media(max-width:969px)": {
      fontSize: "14px !important",
    },
  },
  margin: {
    marginTop: "20px !important",
    [theme.breakpoints.down("md")]: {
      marginTop: "12px",
    },
  },
  bannerimg: {
    width: "100%",
    "@media(max-width:959px)": {
      width: "100%",
      maxWidth: "50%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  sliderBox: {
    background: "#FFFFFF",
    // border: "1px solid #D6D6D6",
    boxSizing: "border-box",
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.2)",
    // borderRadius: "20px",
    overflow: "hidden",
    textAlign: "center",
    paddingBottom: "20px",
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(112, 74, 255, 0.6)",
    },
    "& h4": {
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "36px",
      color: "#4C2CA6",
      [theme.breakpoints.down("xs")]: {
        fontSize: "22px",
        lineHeight: "28px",
      },
    },
    "& h6": {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "36px",
      color: "#616161",
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
    "& p": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "20px",
      textAlign: "center",
      color: "#616161",
      padding: "10px 20px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    "& button": {
      border: "1px solid #ccc",
      marginTop: "10px",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "23px",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#616161",
      minWidth: "150px",
      height: "45px",
    },
    "& figure": {
      width: "100%",
      margin: 0,
      overflow: "hidden",
      height: "300px",
      marginBottom: "20px",
      position: "relative",
      transition: "0.5s",
      "& label": {
        fontWeight: 500,
        fontSize: "12px",
        padding: "8px 20px",
        lineHeight: "12px",
        color: "#FFFFFF",
        background: "#ad3bf9",
        border: "1px solid #ad3bf9",
        boxSizing: "border-box",
        borderRadius: "20px",
        position: "absolute",
        top: "15px",
        left: "15px",
        fontFamily: "'Inter', sans-serif",
      },
      "& img": {
        width: "100%",
        height: "100%",
        transform: "scale(1.02)",
        objectFit: "cover",
        transition: "0.5s",
      },
      "&:hover": {
        "& img": {
          transform: "scale(1.1)",
        },
      },
    },
  },
}));

const sliderCard = [
  {
    images: "images/OmniKing.jpg",
    name: " OmniKing",
  },
  {
    images: "images/OmniQueen.jpg",
    name: " OmniQueen",
  },
  {
    images: "images/bannerhorse2.png",
    name: " Remarkable Force",
  },
  // {
  //   images: "images/banner-img.png",
  // },
  // {
  //   images: "images/banner-img.png",
  // },

  // {
  //   images: "images/banner-img.png",
  // },
];
function Banner(props) {
  const classes = useStyles();
  const settings = {
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <Box className={classes.bannerbox}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item lg={7} md={6} sm={12} xs={12}>
            <Box className="bannertext">
              <Box>
                <Typography variant="h1">FRACTIONAL NFT PLATFORM</Typography>

                <Typography variant="h5">
                  First Marketplace for Racehorse non-fungible tokens (NFTs).
                  All the Users who own horses can win generous token rewards
                  through participating the competition.
                </Typography>
              </Box>
              <Box mt={5} mb={4}>
                <Grid container>
                  <Grid item lg={7} md={10} sm={12} xs={12}>
                    <Grid container spacing={3}>
                      <Grid item lg={6} md={6} sm={6} xs={12}>
                        <ScrollLink
                          className="hovertext"
                          smooth={true}
                          duration={500}
                          to="section3"
                          style={{ cursor: "pointer" }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            className={classes.btnleft}
                          >
                            PRESALE EVENT
                          </Button>
                        </ScrollLink>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6} xs={12}>
                        <ScrollLink
                          className="hovertext"
                          smooth={true}
                          duration={500}
                          to="section2"
                          style={{ cursor: "pointer" }}
                        >
                          <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            className={classes.btnright}
                          >
                            HOW IT WORKS
                          </Button>
                        </ScrollLink>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={5} md={6} sm={12} xs={12}>
            <Box className="nooverlap">
              <Slider {...settings} style={{ width: "100%" }}>
                {sliderCard.map((data, i) => {
                  return (
                    <Box
                      className={`${classes.sliderBox} sliderBoxs`}
                      key={i}
                      index={i}
                      data={data}
                    >
                      <Box>
                        <figure>
                          <img src={data.images} alt="" />
                          <label>Newly List</label>
                        </figure>
                        <Typography variant="body1">AMO RACING LTD</Typography>

                        <Typography variant="h4">{data.name}</Typography>
                        <Typography variant="h6">10,000 / 10,000</Typography>
                        <Typography variant="body2">
                          2 years old, Bay Colt, Sire Acclamation, Dam Vastitas
                        </Typography>
                        <Typography variant="h6">0.35 ETH</Typography>
                        {/* <Box component={Link} to="/marketplace">
                          <Button size="large">Invest Now</Button>
                        </Box> */}
                      </Box>
                    </Box>
                  );
                })}
              </Slider>
            </Box>
          </Grid>
        </Grid>
        {/* <Container>
          <Box className={classes.basetext}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} lg={2} md={2}>
                <Box className="basebox">
                  <Typography variant="body1">Total Participants</Typography>
                  <Typography variant="h1">1,024</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} lg={3} md={3}>
                <Box className="basebox">
                  <Typography variant="body1">
                    Total Rewards Distributed
                  </Typography>
                  <Typography variant="h1">39,014</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} lg={2} md={2}>
                <Box className="basebox" mt={1}>
                  <Typography variant="body1">Total Sale</Typography>
                  <Typography variant="h1" className={classes.margin}>
                    2,562
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} lg={3} md={3}>
                <Box className="basebox" mt={1}>
                  <Typography variant="body1">Total Volume</Typography>
                  <Typography variant="h1" className={classes.margin}>
                    33,650.48
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                lg={2}
                md={2}
                className={classes.noborder}
              >
                <Box className="basebox" mt={1}>
                  <Typography variant="body1">Horses Sold</Typography>
                  <Typography variant="h1" className={classes.margin}>
                    32
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container> */}
      </Container>
    </Box>
  );
}

export default Banner;
