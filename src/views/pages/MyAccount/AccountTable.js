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

const Ddata = [
  {
    srno: "1",
    name: "Roelno",
    id: "JdshfurRTerggjd",
    date: "09/08/22 14:23",
    price: "5.9",
    status: "Pending",
  },
  {
    srno: "1",
    name: "Roelno",
    id: "JdshfurRTerggjd",
    date: "09/08/22 14:23",
    price: "5.9",
    status: "Pending",
  },
  {
    srno: "1",
    name: "Roelno",
    id: "JdshfurRTerggjd",
    date: "09/08/22 14:23",
    price: "5.9",
    status: "Pending",
  },
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },

  container: {
    overflow: "hidden",
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

    "& h2": {
      fontSize: "22px !important",
      fontWeight: "400",

      marginBottom: "10px",
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
      <Box>
        <Box mt={2} className={classes.tablemainbox}>
          <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className="TableHead">
                <TableRow className="TableHeadrow">
                  <TableCell align="left">Sr.No </TableCell>

                  <TableCell align="left">NFT Name </TableCell>
                  <TableCell align="left">NFT Id </TableCell>
                  <TableCell align="left">Date & Time</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Ddata.map((data) => (
                  <TableRow>
                    <TableCell>{data.srno}</TableCell>{" "}
                    <TableCell>{data.name}</TableCell>
                    <TableCell>
                      <Box>{data.id}</Box>
                    </TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>{data.price}</TableCell>
                    <TableCell>{data.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
