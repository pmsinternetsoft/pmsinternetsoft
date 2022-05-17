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
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "Yes, you can. You can participate in the events where your racehorse is racing. The priority depends on how many shares you own together with how much $MAX you have. However, further KYC and identity documents support might be needed to fulfil local requirements in various horse-racing events..",
  },
  {
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "The Hashmasks follow the ERC-721 standard and, as such, can be transferred freely amongst Ethereum wallets. We will not provide a secondary market place for Hashmasks on this website and have no control over users creating secondary markets for the Hashmasks on third-party websites.",
  },
  {
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "If you mint more than one Hashmask near the end of price tier, there's a chance of price slip. So for example, let's say the current supply is 2999 (1 left for price change from 0.1 to 0.3), if you mint 10 masks at this point, you would be able to get all of them for the old price of 0.1. We purposely designed it this way for simplicity and avoiding too many reverted transactions at the end of each price tier.",
  },
  {
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "There is an increasing pricing schedule for the Hashmasks. You can see the table below. Note that it is subject to a possibility of price slip as described in the section above.",
  },
  {
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "The rarity of each trait is revealed after the initial distribution period. You can scroll through the gallery to look at all the 16,384 digital portraits to see if you can detect patterns or other hidden traits.",
  },
  {
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "The rarity of each trait is revealed after the initial distribution period. You can scroll through the gallery to look at all the 16,384 digital portraits to see if you can detect patterns or other hidden traits.",
  },
  {
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "The rarity of each trait is revealed after the initial distribution period. You can scroll through the gallery to look at all the 16,384 digital portraits to see if you can detect patterns or other hidden traits.",
  },
  {
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "The rarity of each trait is revealed after the initial distribution period. You can scroll through the gallery to look at all the 16,384 digital portraits to see if you can detect patterns or other hidden traits.",
  },
  {
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "The rarity of each trait is revealed after the initial distribution period. You can scroll through the gallery to look at all the 16,384 digital portraits to see if you can detect patterns or other hidden traits.",
  },
  {
    head: "As NFT horse owner, can I participate in real horse racing event?",
    summary:
      "The rarity of each trait is revealed after the initial distribution period. You can scroll through the gallery to look at all the 16,384 digital portraits to see if you can detect patterns or other hidden traits.",
  },
];

const useStyles = makeStyles((theme) => ({
  FAQ: {
    // paddingTop: theme.spacing(10),
    paddingTop: "81px",
    paddingBottom: "40px",
    // [theme.breakpoints.up("sm")]: {
    //   paddingTop: theme.spacing(20),
    //   paddingBottom: theme.spacing(8),
    // },
    // [theme.breakpoints.up("md")]: {
    //   paddingTop: theme.spacing(20),
    //   paddingBottom: theme.spacing(8),
    // },
  },
  ask: {
    fontFamily: "'Anton', sans-serif",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "38px",
    lineHeight: "46px",
    color: "#FFFFFF",
    "@media(max-width:1000px)": {
      fontWeight: "300",
      fontSize: "40px",
      lineHeight: "73px",
    },
    "@media(max-width:767px)": {
      fontSize: "25px",
    },
  },
  image: {
    // backgroundImage: `url(images/terms.png)`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    width: "100%",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
}));

export default function FAQ() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.FAQ}>
        <Box textAlign="center" className={classes.image}>
          <Typography gutterBottom variant="h1" className={classes.ask}>
            FAQ's
          </Typography>
        </Box>
        <Box></Box>
        {/* featured */}
        <Box mb={2} mt={3}>
          <Container maxWidth="lg">
            <Grid container spacing={2} className="counterSection">
              <Grid item xs={12} md={12} className="aboutText"></Grid>
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
