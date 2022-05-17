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
      fontSize: "18px",
      fontWeight: "400",
      color: "#fff",
    },
    "& p": {
      fontSize: "14px",
      fontWeight: "400",
      color: "#fff",
      width: "100%",
      maxWidth: "771px",
      letterSpacing: "1px",
      lineHeight: "24px",
    },
    "& h6": {
      fontSize: "17px",
      fontWeight: "300 !important",
      color: "#fff",
    },
    "& svg": {
      color: "#fff",
      width: "23px",
    },
    "& h5": {
      color: "#B4B4B4",
      fontSize: "16px",
      fontWeight: "400",
    },
  },
  updatebox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "15px",
    "& svg": {
      width: "35px",
      height: "35px",
    },
  },
  dividebox: {
    borderBottom: "1px solid #585858",
  },
  clubimg: {
    "& img": {
      width: "100%",
      maxWidth: "70px",
      margin: "0 auto",
    },
  },
}));
function Banner(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <Box className={classes.bannerbox}>
      <Box className={classes.updatebox}>
        <Box>
          <Typography variant="h3">{data.text1}</Typography>
        </Box>
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
                <Typography variant="body2">{data.text2}</Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body2">{data.text3}</Typography>
              </Box>
              <Box display="flex" justifyContent="right" mt={4}>
                <Box display="flex" justifyContent="space-between">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconButton>
                      <ShareIcon />
                    </IconButton>
                    <Box>
                      <Typography variant="h6">{data.text4}</Typography>
                    </Box>
                    &nbsp; &nbsp;
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                    <Box>
                      <Typography variant="h6">{data.text5}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3} mb={2}>
          <Divider className={classes.dividebox} />
        </Box>
        <Box className={classes.clubimg}>
          <Grid container spacing={3}>
            <Grid item lg={1} md={1} sm={2} xs={12}>
              <Box>
                <img src={data.img2} alt="" width="100%" style={{}} />
              </Box>
            </Grid>
            <Grid item lg={11} md={11} sm={11} xs={12}>
              <Box>
                <Typography variant="body2">{data.text6}</Typography>
              </Box>
            </Grid>
            <Grid item lg={1} md={1} sm={2} xs={12}>
              <Box>
                <img src={data.img3} alt="" width="100%" />
              </Box>
            </Grid>
            <Grid item lg={11} md={11} sm={11} xs={12}>
              <Box>
                <Typography variant="body2">{data.text7}</Typography>
              </Box>
              <Box
                mt={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                maxWidth="27%"
              >
                <Typography variant="h5">{data.text8}</Typography>
                <Typography variant="h5"> {data.text9}</Typography>
                <Typography variant="h5">{data.text10}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
