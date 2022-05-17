import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Divider,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  Paper,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MyChart from "./MyChart";

const Ddata = [
  {
    track: "1",
    date: "1",
    race: "0",
    racetype: "0",

    Breed: "$ 1,755,000",
  },
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },

  container: {
    overflow: "auto",
    "@media(max-width:991px)": {
      overflow: "scroll",
    },
    "& .TableHeadrow": {
      "& th": {
        border: "none",
        color: theme.palette.text.black,
      },
    },
  },
  tablemainbox: {
    padding: "20px",
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    borderRadius: "4px",
    "& h2": {
      fontSize: "22px !important",
      fontWeight: "400",

      marginBottom: "10px",
      color: "#fff !important",
    },
    "& h6": {
      fontSize: "18px !important",
      fontWeight: "400",
      marginTop: "10px",

      color: "#fff !important",
    },
  },
  dividemain: {
    borderBottom: "1px solid #585858",
  },
  btnview: {
    fontSize: "16px !important",
    fontWeight: "400",

    color: "#E19C32 !important",
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerbox}>
      <Box mt={3} className={classes.tablemainbox}>
        <Box>
          <Typography variant="h2">Statistics</Typography>
        </Box>
        <Box mb={2}>
          <Divider className={classes.dividemain} />
        </Box>
        <Box>
          <Typography variant="h6">2022 Statistics</Typography>
        </Box>
        <TableContainer component={Paper} className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className="TableHead">
              <TableRow className="TableHeadrow">
                <TableCell align="left">Starts</TableCell>

                <TableCell align="left">Firsts</TableCell>
                <TableCell align="left">Seconds</TableCell>
                <TableCell align="left">Thirds</TableCell>
                <TableCell align="left">Earnings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Ddata.map((data) => (
                <TableRow>
                  <TableCell>{data.track}</TableCell>{" "}
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
                    <Box className={classes.activeparent}>{data.race}</Box>
                  </TableCell>
                  <TableCell>{data.racetype}</TableCell>
                  <TableCell>{data.Breed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={5}>
          <Box>
            <Typography variant="h6">Career Statistics</Typography>
          </Box>
          <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className="TableHead">
                <TableRow className="TableHeadrow">
                  <TableCell align="left">Starts</TableCell>

                  <TableCell align="left">Firsts</TableCell>
                  <TableCell align="left">Seconds</TableCell>
                  <TableCell align="left">Thirds</TableCell>
                  <TableCell align="left">Earnings</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Ddata.map((data) => (
                  <TableRow>
                    <TableCell>{data.track}</TableCell>{" "}
                    <TableCell>{data.date}</TableCell>
                    <TableCell>
                      <Box className={classes.activeparent}>{data.race}</Box>
                    </TableCell>
                    <TableCell>{data.racetype}</TableCell>
                    <TableCell>{data.Breed}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <MyChart />
    </Box>
  );
}

export default Banner;
