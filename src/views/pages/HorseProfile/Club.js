import React, { useState } from "react";
import { makeStyles, Box, Grid, } from "@material-ui/core";
import ClubCard from "src/component/ClubCard";

const TeamMap = [
  {
    text1: "Updates",
    img1: "images/updatehorse1.png",
    text2:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",

    text3:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",
    text4: "10,673",
    text5: "10,673",
    img2: "images/horsecircle.png",
    text6:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",
    img3: "images/horsecircle.png",
    text7:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",
    text8: "4h",
    text9: "Like",
    text10: "Reply ",
  },
  {
    // text1: "Updates",
    img1: "images/updatehorse1.png",
    text2:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",

    text3:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",
    text4: "10,673",
    text5: "10,673",
    img2: "images/horsecircle.png",
    text6:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",
    img3: "images/horsecircle.png",
    text7:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",
    text8: "4h",
    text9: "Like",
    text10: "Reply ",
  },
];

const useStyles = makeStyles((theme) => ({
 
}));

function Club() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainbox}>
        <Grid container spacing={2}>
          {TeamMap.map((data, i) => {
            return (
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <ClubCard data={data} index={i} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Club;
