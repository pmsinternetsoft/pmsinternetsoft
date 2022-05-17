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
import { FaBitcoin } from "react-icons/fa";
const Ddata = [
  {
    Value: "34,4963",
    usd: "$4,935.53",
    qnt: "1",
    exp: "22 hours",

    from: "abcc.com",
    finish: "1",
  },
  {
    Value: "34,4963",
    usd: "$4,935.53",
    qnt: "1",
    exp: "22 hours",

    from: "abcc.com",
    finish: "1",
  },
  {
    Value: "34,4963",
    usd: "$4,935.53",
    qnt: "1",
    exp: "22 hours",

    from: "abcc.com",
    finish: "1",
  },
  {
    Value: "34,4963",
    usd: "$4,935.53",
    qnt: "1",
    exp: "22 hours",

    from: "abcc.com",
    finish: "1",
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
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
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
  btnbox: {
    height: "43px",
    fontSize: "16px !important",
    fontWeight: "600 !important",
    color: "#fff",
    border: "1px solid #C83C10",
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerbox}>
      <Box>
        <Box mt={3} className={classes.tablemainbox}>
          <Box>
            <Typography variant="h2">Offers</Typography>
          </Box>
          <Box mb={2}>
            <Divider className={classes.dividemain} />
          </Box>
          <TableContainer className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className="TableHead">
                <TableRow className="TableHeadrow">
                  <TableCell align="left">Unit price</TableCell>

                  <TableCell align="left">USD Unit price</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Expiration</TableCell>
                  <TableCell align="left">From</TableCell>
                  <TableCell align="left">Finish</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Ddata.map((data) => (
                  <TableRow>
                    <TableCell>
                      {" "}
                      <Box
                        width="100%"
                        maxWidth="60%"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <FaBitcoin color="#fff" style={{ fontSize: "24px" }} />
                        &nbsp;{data.Value}
                      </Box>
                    </TableCell>{" "}
                    <TableCell>{data.usd}</TableCell>
                    <TableCell>
                      <Box className={classes.activeparent}>{data.qnt}</Box>
                    </TableCell>
                    <TableCell>{data.exp}</TableCell>
                    <TableCell>{data.from}</TableCell>
                    <TableCell style={{ border: "none" }}>
                      {" "}
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        className={classes.btnbox}
                      >
                        Sell
                      </Button>
                    </TableCell>
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
