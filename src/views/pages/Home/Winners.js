import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import UpcomingNFTCard from "src/component/UpcomingNFTCard";

const TeamMap = [
  {
    image: "images/nft1.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Cost per share",
    img2: "images/wineth.png",
    text12: "12.0353",
  },
  {
    image: "images/nft2.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Cost per share",
    img2: "images/wineth.png",
    text12: "12.0353",
  },
  {
    image: "images/nft3.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Cost per share",
    img2: "images/wineth.png",
    text12: "12.0353",
  },
];

const useStyles = makeStyles((theme) => ({
  mainboxs: {
    position: "relative",
    padding: "30px",
    marginTop: "50px",
    "& .textBox": {
      paddingRight: "30px",
      "& h1": {
        fontSize: "70px",
        letterSpacing: "3px",
        color: "#FFFFFF",
        [theme.breakpoints.down("md")]: {
          fontSize: "50px",
        },
      },
      "& h5": {
        fontSize: "18px",
        marginTop: "20px",
        color: "#FFFFFF",
      },
    },
  },
  topleft: {
    position: "absolute",
    top: "0px",
    left: "0px",
    maxWidth: "45%",
    width: "100%",
  },
  bottomleft: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    maxWidth: "45%",
    width: "100%",
  },
  topright: {
    position: "absolute",
    top: "0px",
    right: "0px",
    maxWidth: "45%",
    width: "100%",
  },
  bottomright: {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    maxWidth: "45%",
    width: "100%",
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.mainboxs}>
      <img src="images/TopLeftImage.png" alt="" className={classes.topleft} />
      <img src="images/TopRightImage.png" alt="" className={classes.topright} />
      <Box>
        <Grid container spacing={3}>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Box className="textBox">
              <Typography variant="h1">Upcoming NFTs</Typography>
              <Typography variant="h5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <Box>
              <Grid container spacing={3}>
                {TeamMap.map((data, i) => {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <UpcomingNFTCard data={data} index={i} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <img
        src="images/BottomLeftImage.png"
        alt=""
        className={classes.bottomleft}
      />
      <img
        src="images/BottomRightImage.png"
        alt=""
        className={classes.bottomright}
      />
    </Box>
  );
}

export default Banner;
