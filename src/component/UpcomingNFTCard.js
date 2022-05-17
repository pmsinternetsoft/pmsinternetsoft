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
    "& h2": {
      fontSize: "20px",

      fontWeight: "400",
      color: "#fff",
    },
    "& h6": {
      fontSize: "12px",

      fontFamily: "600",
      color: "#E19C32",
      marginBottom: "5px",
    },
    "& p": {
      fontSize: "10px",

      fontFamily: "400",
      color: "#fff",
    },
    "& h5": {
      fontSize: "12px",
      fontWeight: "600",
      color: "#E19C32",
      "& span": {
        fontSize: "12px",
        fontWeight: "400",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
  boxbg: {
    border: "1px solid #343434",
  },
  textbox: {
    padding: "8px",
    "& .nameText": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
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
      borderRight: "0.5px solid #585858",
    },
  },
  mainimg: {
    width: "100%",
    overflow: "hidden",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: " no-repeat !important",
    backgroundColor: "#ccc !important",
  },
  borderstyle: {
    borderBottom: "1px solid #343434",
  },
  lastbox: {
    paddingTop: "8px",
    "& p": {
      fontSize: "12px",
      fontFamily: "500",
      color: "#fff",
    },
    "& h6": {
      fontSize: "14px",
      fontFamily: "700",
      color: "#E19C32",
    },
  },
}));
function UpcomingNFTCard(props) {
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
      <Box className={classes.boxbg}>
        <Box
          id={`imagecard${index}`}
          className={classes.mainimg}
          style={{ background: "url(" + data.image + ")" }}
          onClick={() => {
            history.push("/nft-marketplace");
          }}
        >
          <Button
            size="small"
            variant="contained"
            style={{
              backgroundColor: "#2AAD14",
              color: "#FFFFFF",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Newly List
          </Button>
        </Box>
        <Box className={classes.textbox}>
          <Box className="nameText">
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
          <Box pt={1} pb={1}>
            <Grid container spacing={1}>
              <Grid item lg={4} md={6} sm={3} xs={3}>
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
              <Grid item lg={2} md={6} sm={3} xs={3}>
                <Box className={classes.borderbox}>
                  <Box>
                    <Typography variant="h6">{data.text9}</Typography>
                    <Typography variant="body1">{data.text10}</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Divider />
          </Box>
          <Box className={classes.lastbox}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item lg={5} xs={5}>
                <Box>
                  <Typography variant="body1" style={{ fontSize: "10px" }}>
                    {data.text11}
                  </Typography>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <img src={data.img2} />
                    &nbsp;
                    <Typography variant="h6">{data.text12}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={7} xs={7}>
                <Button
                  component={Link}
                  to="/horse-profile"
                  variant="contained"
                  color="primary"
                  size="small"
                  fullWidth
                >
                  Trade Now
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default UpcomingNFTCard;
