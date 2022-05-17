import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Divider,
  TableCell,
  TableContainer,
  TableBody,
  Table,
  TableRow,
  TableHead,
} from "@material-ui/core";
import CompetitionCard from "src/component/CompetitionCard";
import ResultTable from "./ResultTable";
import StaticTable from "./StaticTable";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { FaEthereum } from "react-icons/fa";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 0,
  },
  colorPrimary: {
    backgroundColor: "#fff",
  },
  bar: {
    borderRadius: 0,
    backgroundColor: "#fff",
  },
}))(LinearProgress);
const Ownersdata = [
  {
    Rank: "#1",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "50%",
    value1: "50",
    Value: "34,4963",
  },
  {
    Rank: "#2",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "30%",
    value1: "30",
    Value: "34,4963",
  },
  {
    Rank: "#3",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "15%",
    value1: "15",
    Value: "34,4963",
  },
  {
    Rank: "#4",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "3%",
    value1: "3",
    Value: "34,4963",
  },
  {
    Rank: "#5",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "2%",
    value1: "2",
    Value: "34,4963",
  },
];

const TeamMap = [
  {
    img1: "images/upcoming1.png",
    text2: "    2022 World Horse Racing Cup, USA",

    text3: "Date: 2022. 06. 25",
    text4:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",
    text5: "Location: 200 Spectrum Dr, Irvine, CA 92618, USA",
  },
  {
    img1: "images/upcoming2.png",
    text2: "    2022 World Horse Racing Cup, USA",

    text3: "Date: 2022. 06. 25",
    text4:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",
    text5: "Location: 200 Spectrum Dr, Irvine, CA 92618, USA",
  },
  {
    img1: "images/upcoming3.png",
    text2: "    2022 World Horse Racing Cup, USA",

    text3: "Date: 2022. 06. 25",
    text4:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took",
    text5: "Location: 200 Spectrum Dr, Irvine, CA 92618, USA",
  },
];

const useStyles = makeStyles((theme) => ({
  mainbox: {
    paddingTop: "30px",
    paddingBottom: "30px",
    "& h3": {
      fontSize: "22px",
      fontWeight: "400",
      color: "#fff",
    },
    "& h2": {
      fontSize: "22px !important",
      fontWeight: "400",

      marginBottom: "10px",
      color: "#fff !important",
    },
  },
  updatebox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "25px",
    borderRadius: "4px",
  },
  achivebox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "25px",
    marginTop: "20px",
    borderRadius: "4px",
    "& h2": {
      fontWeight: "400",
      fontSize: "22px !important",
      lineHeight: "27px",
    },
    "& h5": {
      fontSize: "18px !important",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#fff !important",
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px !important",
        fontWeight: "600",
      },
    },
    "& h6": {
      fontSize: "16px !important",
      fontWeight: "600",

      color: "#d4d4d4 !important",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px !important",
        fontWeight: "600",
      },
    },
  },
  dividemain: {
    borderBottom: "1px solid #585858",
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
    marginTop: "30px",
    borderRadius: "4px",
    "& h3": {
      color: "#FFFFFF",
      letterSpacing: "2px",
      fontSize: "22px",
      fontWeight: "400",
    },
  },
}));

function Club() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainbox}>
        <Box className={classes.updatebox}>
          <Box>
            <Typography variant="h3">Upcoming</Typography>
          </Box>
          <Grid container spacing={0}>
            {TeamMap.map((data, i) => {
              return (
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <CompetitionCard data={data} index={i} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Box>
        <ResultTable />
      </Box>
      <Box mt={2}>
        <StaticTable />
      </Box>
      <Box className={classes.achivebox}>
        <Box>
          <Typography variant="h2">Achievements</Typography>
        </Box>
        <Box mb={2}>
          <Divider className={classes.dividemain} />
        </Box>
        <Box>
          <Typography variant="h5">Breadeers’ Cup Participation</Typography>
          <Typography variant="h6">
            1st Big Ass Fan Breeders’ Cup Dirt Mile - 2021
          </Typography>
        </Box>
        <Box mt={4}>
          <Typography variant="h5">Top 100 Rankings (Since 2000)</Typography>
          <Typography variant="h6">Ranked 23rd by Earnings - 2021</Typography>
        </Box>
      </Box>

      <Box className={classes.tablemainbox}>
        <Box>
          <Typography variant="h3">Top 10 Vault Owners</Typography>
        </Box>
        <Box pb={4} pt={1}>
          <Divider />
        </Box>
        <TableContainer className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className="TableHead">
              <TableRow>
                <TableCell align="left">Rank</TableCell>
                <TableCell align="left">WalletAddress</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Percentage</TableCell>
                <TableCell align="left">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Ownersdata?.map((data) => (
                <TableRow>
                  <TableCell>{data.Rank}</TableCell>
                  <TableCell>{data.WalletAddress}</TableCell>
                  <TableCell>{data.Quantity}</TableCell>
                  <TableCell>
                    <Grid container spacing={3}>
                      <Grid item xs={3} sm={3} md={3} lg={3}>
                        {data.Percentage}
                      </Grid>
                      <Grid item xs={9} sm={9} md={9} lg={9}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={data.value1}
                        />
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                      maxWidth="75%"
                    >
                      <Box>
                        <FaEthereum color="#fff" style={{ fontSize: "24px" }} />
                      </Box>
                      <Box>{data.Value}</Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Club;
