import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    "& h3": {
      fontSize: "20px",
      fontWeight: "400",

      color: "#FFFEFD",
      marginTop: "13px",
    },
    "& h6": {
      fontSize: "14px",
      fontWeight: "700",

      color: "#E19C32",
      marginTop: "9px",
    },
    "& p": {
      fontSize: "12px",
      fontWeight: "400",

      color: "#fff",
      marginTop: "13px",
      maxWidth: "171px",
      width: "100%",
      margin: "0 auto",
    },
  },
  teambg: {
    backgroundImage: "url(images/teambg.png)",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
  icons: {
    width: "17px",
    height: "17px",
    backgroundColor: "#E19C32",
    color: "#000",
    paddingTop: "2px",
    borderRadius: "2px",
  },
  iconslink: {
    width: "17px",
    height: "17px",
    backgroundColor: "#E19C32",
    color: "#000",
    paddingTop: "2px",
    borderRadius: "2px",
  },

  iconbutton: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    maxWidth: "10px",
    margin: "0 auto",
    paddingTop: "2px",
    paddingBottom: "12px",
  },
}));
function Banner(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <Box className={classes.bannerbox}>
      <Box className={classes.teambg} mb={3}>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <img
            src={data.img1}
            alt=""
            width="100%"
            style={{
              width: "100%",
              maxWidth: "140px",

              margin: "0 auto",
              marginTop: "24px",
            }}
          />
        </Box>
        <Box textAlign="center" mt={1}>
          <Typography variant="h3">{data.text1}</Typography>
          <Typography variant="h6">{data.text2}</Typography>
          <Typography variant="body1">{data.text3}</Typography>
        </Box>
        <Box className={classes.iconbutton}>
          <IconButton>
            <FaLinkedinIn className={classes.iconslink} />
          </IconButton>
          <IconButton>
            <FaFacebookF className={classes.icons} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
