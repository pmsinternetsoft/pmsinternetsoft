import {
  Box,
  Divider,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const useStyles = makeStyles({
  mainbox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "20px 20px 0px 20px",
  },
  box: {
    "& h5": {
      fontFamily: "'Anton', sans-serif",
      fontWeight: "400 !important",
      lineHeight: "22px",
    },
  },
  box1: {
    display: "flex",
    justifyContent: "space-between",

    "& p": {
      fontWeight: "400",
      fontSize: "10px !important",
      lineHeight: "12px",
      color: "#989898 !important",
    },
    "& h4": {
      fontWeight: "700 !important",
      fontSize: "20px !important",
      lineHeight: "24px !important",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  sold: {
    fontWeight: "400 !important",
    fontSize: "20px !important",
    lineHeight: "24px !important",
    color: "#FFFFFF",
  },
  buyer: {
    "& h4": {
      fontWeight: "600 !important",
      fontSize: "20px !important",
      lineHeight: "24px !important",
    },
    "& span": {
      fontWeight: "400 !important",
      fontSize: "20px !important",
      lineHeight: "24px !important",
      color: "#989898 !important",
    },
  },
  buyer1: {
    "& h4": {
      fontWeight: "600 !important",
      fontSize: "20px !important",
    },
    "& span": {
      fontWeight: "400 !important",
      fontSize: "20px !important",
      lineHeight: "24px !important",
      color: "#989898 !important",
    },
  },
  btn: {
    width: "150px",
    backgroundColor: "#713FFF",
    borderRadius: "5px",
    color: "white",
    height: "50px",
  },
});

export default function PriceChart() {
  const classes = useStyles();
  return (
    <Box className={classes.mainbox}>
      <Box className={classes.box}>
        <Typography variant="h5">Now Available</Typography>
        <Divider />
        <Box className={classes.box1} pt={1} pb={1}>
          <Box>
            <Typography variant="body1">Cost Per share</Typography>
            <Typography variant="h4" color="secondary">
              <img src="images/ethwhite.png" /> &nbsp; <span>12.0353</span>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">Earn Per share</Typography>
            <Typography variant="h4" color="secondary">
              <img src="images/ethwhite.png" /> &nbsp; <span>12.0353</span>
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box className={classes.box1} pt={1} pb={1}>
          <Box>
            <Typography variant="body1">Cost Per share</Typography>
            <Typography variant="h4" color="secondary">
              <span>12.0353</span>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">Earn Per share</Typography>
            <Typography variant="h4" color="secondary">
              <span>12.0353</span>
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box style={{ display: "flex", justifyContent: "center" }} mt={2}>
          <Box style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              value={25.5}
              text={`${25.5}%`}
              styles={{
                root: {},
                path: { stroke: "#E19C32" },
                "& text": { fill: "#E19C32" },
              }}
            >
              <span style={{ color: "#fff", backgroundColor: "#fff" }}>
                25.5<tspan>%</tspan>
              </span>
            </CircularProgressbar>
          </Box>
        </Box>
        <Box textAlign="center" mt={2}>
          <Button variant="contained" className={classes.btn}>
            Buy
          </Button>
        </Box>
        <Box textAlign="center" className={classes.buyer} mt={2} mb={2}>
          <Typography variant="h4">
            4562 &nbsp;<span>Number of buyers</span>
          </Typography>
        </Box>
        <Box textAlign="center" className={classes.buyer1} mb={2}>
          <Typography variant="h4">
            29 Apr 2022 &nbsp;<span>End of date</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
