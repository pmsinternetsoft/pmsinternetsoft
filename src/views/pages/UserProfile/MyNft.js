import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MarketplaceCard from "src/component/MarketplaceCard";

const TeamMap = [
  {
    image: "images/nft1.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2Yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Last win",
    img2: "images/ethblue.png",
    text12: "12.0353",
    text13: "10.012",
  },
  {
    image: "images/nft2.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2Yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Last win",
    img2: "images/ethblue.png",
    text12: "12.0353",
    text13: "10.012",
  },
  {
    image: "images/nft3.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2Yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Last win",
    img2: "images/ethblue.png",
    text12: "12.0353",
    text13: "10.012",
  },
  // {
  //   image: "images/nft4.png",
  //   text1: "Rapid Stone",
  //   text2: "Age :",
  //   text: " 2Yr",
  //   text3: "Breed",
  //   text4: "Thorughbred",
  //   text5: "Gender",
  //   text6: "Female",
  //   text7: "Type ",
  //   text8: "Filly",
  //   text9: "Colour ",
  //   text10: "Bay",
  //   text11: "Last win",
  //   img2: "images/ethblue.png",
  //   text12: "12.0353",
  //   text13: "10.012",
  // },
];

const useStyles = makeStyles((theme) => ({
  bannerbox: {},
}));
function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerbox}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box>
          <Grid container spacing={3}>
            {TeamMap.map((data, i) => {
              return (
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <MarketplaceCard data={data} index={i} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default Banner;
