import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    background: "#FFFFFF",
    border: "4px solid #817C8F",
    "& h2": {
      fontSize: "20px",

      fontWeight: "400",
      color: "#222222",
    },
    "& h6": {
      fontSize: "12px",

      fontFamily: "600",
      color: "#000000",
      marginBottom: "5px",
    },
    "& p": {
      fontSize: "10px",

      fontFamily: "400",
      color: "#4E4E4E",
    },
    "& h5": {
      fontSize: "12px",
      fontWeight: "600",
      color: "#000000",
      "& span": {
        fontSize: "12px",
        fontWeight: "400",
        color: "#4E4E4E",
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
  iconbox: {
    padding: "9px !important",
    color: "#999595",
  },
  arrowbox: {
    position: "relative",
    "&::after": {
      content: "''",
      height: "36px",
      width: "37px",
      position: "absolute",
      right: "2px",
      top: "4px",

      borderRight: "0.5px solid #EFEFEF",
    },
  },
  mainimg: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: " no-repeat !important",
    // borderRadius: "40px 40px 10px 10px",
    backgroundColor: "#ccc !important",
  },

  downbox: {
    padding: "4px 10px 8px 10px",
    "& img": {
      width: "100%",
      maxWidth: "13px",
    },
  },
  dividerbox: {
    paddingBottom: "6px",
  },
  lastbox: {
    padding: "4px 10px 10px 10px",
    "& p": {
      fontSize: "12px",

      fontFamily: "500",
      color: "#4E4E4E",
    },
    "& h5": {
      fontSize: "14px",

      fontFamily: "700 !important",
      color: "#2D2D2D",
    },
    "& button": {
      fontSize: "12px",
      fontWeight: "500 !important",
      height: "32px",
    },
    "& img": {
      width: "100%",
      maxWidth: "13px",
    },
  },
  ethtext: {
    width: "100%",
    maxWidth: "135px",
    "& p": {
      fontSize: "12px",

      fontFamily: "500",
      color: "#4E4E4E",
    },
    "& h5": {
      fontSize: "14px",

      fontFamily: "700 !important",
      color: "#2D2D2D",
    },
  },
}));
function Banner(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data, type, index } = props;
  const updateDimensions = () => {
    var offsetWidth = document.getElementById("imagecard" + index).offsetWidth;
    var newoofsetWidth = offsetWidth - 80;
    document.getElementById("imagecard" + index).style.height =
      newoofsetWidth + "px";
  };

  useEffect(() => {
    updateDimensions();
  }, [data, index]);
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Box className={classes.bannerbox}>
      <Box
        style={{ padding: "3px", cursor: "pointer" }}
        onClick={() => {
          history.push("/nft-marketplace");
        }}
      >
        <Box
          id={`imagecard${index}`}
          className={classes.mainimg}
          style={{ background: "url(" + data.image + ")" }}
        >
          <Box className="newlyList">
            <Typography variant="h6">Newly List</Typography>
          </Box>
        </Box>
        <Box>
          <Box className={classes.downbox}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link to="/nft-marketplace" style={{ textDecoration: "none" }}>
                <Typography variant="h2">{data.text1}</Typography>
              </Link>
              <IconButton className={classes.iconbox}>
                <FavoriteBorderIcon style={{ fontSize: "21px" }} />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="h5">
                {data.text2}
                <span>{data.text}</span>
              </Typography>
            </Box>
            <Box mt={2}>
              <Grid container spacing={1}>
                <Grid item lg={4} md={6} sm={3} xs={4}>
                  <Box className={classes.arrowbox}>
                    <Box className={classes.borderbox}>
                      <Box>
                        <Typography variant="h6">{data.text3}</Typography>
                        <Typography variant="body1">{data.text4}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={3} md={6} sm={3} xs={3}>
                  <Box className={classes.arrowbox}>
                    <Box className={classes.borderbox}>
                      <Box>
                        <Typography variant="h6">{data.text5}</Typography>
                        <Typography variant="body1">{data.text6}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={3} md={6} sm={3} xs={3}>
                  <Box className={classes.arrowbox}>
                    <Box className={classes.borderbox}>
                      <Box>
                        <Typography variant="h6">{data.text7}</Typography>
                        <Typography variant="body1">{data.text8}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={2} md={6} sm={3} xs={2}>
                  <Box className={classes.borderbox}>
                    <Box>
                      <Typography variant="h6">{data.text9}</Typography>
                      <Typography variant="body1">{data.text10}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box
                display="flex"
                justifyContent="space-between"
                mt={3}
                className={classes.ethtext}
              >
                <Typography variant="body1">{data.text11}</Typography>
                <Box>
                  <img src={data.img2} alt="" width="100%" />
                </Box>
                <Box>
                  <Typography variant="h5">{data.text12}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.dividerbox}>
          <Divider />
        </Box>
        <Box className={classes.lastbox}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item lg={6} md={5} sm={6} xs={6}>
              <Box display="flex">
                <Box>
                  <img src={data.img2} alt="" width="100%" />
                </Box>
                &nbsp;
                <Box>
                  <Typography variant="h5">{data.text13}</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={7} sm={6} xs={6}>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  fullWidth
                >
                  Trade Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
