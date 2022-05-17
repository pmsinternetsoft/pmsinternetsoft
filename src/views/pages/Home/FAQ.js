import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import FaqData from "src/component/FaqData";

const FaqDataList = [
  {
    head: "As an NFT horse owner, can I participate in a real horse racing event? ",
    summary:
      "Yes, you can. You can participate in the events where your racehorse is racing. The priority depends on how many shares you own together with how much $OHorse you have.",
  },
  {
    head: "For ERC-1155 owners, how does decision-making work?",
    summary:
      "On-chain governance will be adopted on OmniHorse. Not all owners have the same voting power. It will be subjected to the amount of shared ownership in an NFT horse as well as the amount of OmniHorse token is owned by the user",
  },
  {
    head: " What if my horse is injured/died/or unable to participate in racing? Do I lose investments?",
    summary:
      "If the horse has any issues in the real world (e.g.illness, injuries) and can no longer participate in real-world horse racing events, the value of the horse will be transferred to our metaverse where the NFT horse can still participate in all racing events. ",
  },
  {
    head: " What decisions can NFT owners make towards horses? ",
    summary:
      "NFT owners will have the chance to decide on training and breeding schemes for their horses. The final decision will still be subject to the OmniHorse Management team and the availability and feasibility of the decisions. ",
  },
  {
    head: " How to mint my racehorse? ",
    summary: "Contact our customer service for more information.",
  },
  {
    head: "  What is minting?  ",
    summary: "The process of tokenizing your work and creating an NFT",
  },
  {
    head: " Can I sell my horses/shares?",
    summary:
      "Yes. List your horse collectibles with a price and the horse will be shown for sale to the public on OmniHorse.",
  },
];

const useStyles = makeStyles((theme) => ({
  FAQ: {
    paddingTop: "130px",
    paddingBottom: "110px",
    // background:"#E547FF",
    [theme.breakpoints.down("md")]: {
      paddingTop: "120px",
      paddingBottom: "100px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "90px",
      paddingBottom: "50px",
    },
    "& h3": {
      fontStyle: "normal",

      fontSize: "60px",
      lineHeight: "73px",
      color: "#FFFEFD",
      marginBottom: "40px",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      [theme.breakpoints.down("md")]: {
        fontSize: "45px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "45px",
        lineHeight: "53px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "40px",
      },
    },
  },
}));

export default function FAQ() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.FAQ}>
        <Box></Box>
        {/* featured */}
        <Box mb={2}>
          <Container maxWidth="md">
            <Grid container spacing={2} className="counterSection">
              <Grid item xs={12} md={12} className="aboutText">
                <Box textAlign="center">
                  <Typography
                    gutterBottom
                    variant="h3"
                    className="wow slideInRight"
                  >
                    Frequently Asked Questions
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {FaqDataList.map((data, i) => {
                return (
                  <Grid item xs={12} sm={12} md={12} key={i}>
                    <FaqData data={data} index={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
