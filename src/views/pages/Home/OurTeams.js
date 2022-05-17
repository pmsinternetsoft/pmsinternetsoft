import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import OurTeamCard from "src/component/OurTeamCard";

const TeamMap = [
  {
    img1: "images/teamman1.png",
    text1: "Craig Fenton",
    text2: "Strategy & Operations",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img1: "images/teamman1.png",
    text1: "Craig Fenton",
    text2: "Strategy & Operations",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img1: "images/teamman1.png",
    text1: "Craig Fenton",
    text2: "Strategy & Operations",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img1: "images/teamman1.png",
    text1: "Craig Fenton",
    text2: "Strategy & Operations",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img1: "images/teamman1.png",
    text1: "Craig Fenton",
    text2: "Strategy & Operations",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img1: "images/teamman1.png",
    text1: "Craig Fenton",
    text2: "Strategy & Operations",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "50px",
    paddingBottom: "50px",

    "& h1": {
      fontSize: "60px",
      fontWeight: "400",

      color: "#FFFEFD",
    },
    "& h5": {
      fontSize: "15px",
      fontWeight: "300",

      color: "#fff",
      marginTop: "15px",
      letterSpacing: "1px",
      lineHeight: "26px",
    },
  },
  teamhead: {
    marginTop: "212px",
    paddingLeft: "40px",
    "@media(max-width:1279px)": {
      marginTop: "20px",
    },
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerbox}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <Grid container spacing={3}>
              {TeamMap.map((data, i) => {
                return (
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <OurTeamCard data={data} index={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Box className={classes.teamhead}>
              <Typography variant="h1">Our Team</Typography>
              <Typography variant="h5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;
