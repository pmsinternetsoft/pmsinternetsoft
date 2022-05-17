import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InvestCard from "src/component/InvestCard";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    "& h3": {
      fontSize: "22px",
      fontWeight: "400",
      color: "#fff",
    },
    "& p": {
      fontSize: "14px",
      fontWeight: "400",
      color: "#fff",
      marginTop: "15px",
      marginBottom: "15px",
    },
    "& h6": {
      fontSize: "22px",
      fontWeight: "700 !important",
      color: "#fff",
    },

    "& h5": {
      color: "#fff",
      fontSize: "16px",
      fontWeight: "300 !important",
    },
    "& h4": {
      color: "#d4d4d4",
      fontSize: "14px",
      fontWeight: "400 !important",
    },
  },

  dividebox: {
    borderBottom: "1px solid #585858",
  },
  subtext: {
    marginTop: "5px",
  },
}));
function Banner(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <Box className={classes.bannerbox}>
      <Box mt={1}>
        <Divider className={classes.dividebox} />
      </Box>
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box>
              <img src={data.img1} alt="" width="100%" />
            </Box>
          </Grid>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Box>
              <Typography variant="h6">{data.text2}</Typography>
            </Box>
            <Box className={classes.subtext}>
              <Typography variant="h5">{data.text3}</Typography>
              <Typography variant="body2">{data.text4}</Typography>
              <Typography variant="h4">{data.text5}</Typography>
            </Box>
          </Grid>
          <Box mt={3} mb={2}>
            <Divider className={classes.dividebox} />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default Banner;
