import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Grid,
  Divider,
  withStyles,
} from "@material-ui/core";
import { IoMdDownload } from "react-icons/io";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const useStyles = makeStyles((theme) => ({
  mainbox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    "& h3": {
      fontSize: "22px",
      fontWeight: "400",
      // letterSpacing: "2px",
    },
    "& h6": {
      fontSize: "15px",
      fontWeight: "400",
    },
  },
  box: {
    padding: "20px",
  },

  tbody: {
    alignItems: "center",
    fontSize: "14px",
  },
  cell: {
    fontSize: "14px",
    color: "#969696",
  },
  table: {
    // border: "1px solid rgb(43 45 73)",
    "& th": {
      //  border: "1px solid rgb(43 45 73)",
      padding: "10px !important",
      borderLeft: "0px",
      borderRight: "0px",
      fontWeight: "400 !important",
      lineHeight: "19px",
      color: "#969696",
      fontSize: "16px",
    },
    "& td": {
      border: "0.5px solid rgb(150,150,150,0.5)",
      padding: "20px 10px 20px 10px !important",
      fontWeight: "400 !important",
      lineHeight: "19px",
      fontSize: "16px",
      color: "white",
    },
  },

  daily1: {
    lineHeight: "22px",

    "@media(max-width:767px)": {
      fontSize: "16px",
    },
  },
  icon: {
    color: "#969696",
    fontSize: "20px",
    paddingTop: "3px",
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
        // fontSize: "16px",
      },
    },
  },
  hello: {
    display: "flex",
    justifyContent: "flex-end",
    "@media(max-width:959px)": {
      display: "block",
    },
  },
  tablemanage: {
    padding: "20px",
  },
}));

const tableData = [
  {
    HorseName: "Rapid Stone",
    totalProfit: "2,042",
    Profit: "2,042%",
    Spent: "100",
    Revenue: "2,142",
    NFTboughts: "1,250",
    NFTsold: "1,220",
  },
  {
    HorseName: "Rapid Stone",
    totalProfit: "2,042",
    Profit: "2,042%",
    Spent: "100",
    Revenue: "2,142",
    NFTboughts: "1,250",
    NFTsold: "1,220",
  },
  {
    HorseName: "Rapid Stone",
    totalProfit: "2,042",
    Profit: "2,042%",
    Spent: "100",
    Revenue: "2,142",
    NFTboughts: "1,250",
    NFTsold: "1,220",
  },
  {
    HorseName: "Rapid Stone",
    totalProfit: "2,042",
    Profit: "2,042%",
    Spent: "100",
    Revenue: "2,142",
    NFTboughts: "1,250",
    NFTsold: "1,220",
  },
  {
    HorseName: "Rapid Stone",
    totalProfit: "2,042",
    Profit: "2,042%",
    Spent: "100",
    Revenue: "2,142",
    NFTboughts: "1,250",
    NFTsold: "1,220",
  },
];

export default function LeaderBoardTable() {
  const classes = useStyles();

  return (
    <Box className={classes.mainbox}>
      <Box className={classes.box}>
        <Grid container>
          <Grid item lg={9} md={8} sm={12} xs={12}>
            <Box>
              <Typography variant="h3" color="secondary">
                Profit Leaderboard
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={12} xs={12} className={classes.hello}>
            <Box display="flex">
              <Typography color="secondary" variant="h6">
                Updated: 1min ago
              </Typography>{" "}
              &nbsp; &nbsp;
              <IoMdDownload className={classes.icon} />
            </Box>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Divider />
        </Box>
      </Box>
      <Box className={classes.tablemanage} style={{ width: "95%" }}>
        <TableContainer className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Horse Name</TableCell>

                <TableCell>Total Profit (ETH)</TableCell>
                <TableCell>Profit %</TableCell>
                <TableCell>Spent (ETH)</TableCell>
                <TableCell>Revenue (ETH)</TableCell>
                <TableCell>#NFTs Bought</TableCell>
                <TableCell>#NFTs Sold</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tableData.map((data, i) => {
                return (
                  <>
                    <TableRow className={classes.tbody}>
                      <TableCell>{data?.HorseName}</TableCell>
                      <TableCell>{data?.totalProfit}</TableCell>
                      <TableCell>{data?.Profit}</TableCell>
                      <TableCell>{data?.Spent}</TableCell>
                      <TableCell>{data?.Revenue}</TableCell>
                      <TableCell>{data?.NFTboughts}</TableCell>
                      <TableCell>{data?.NFTsold}</TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
