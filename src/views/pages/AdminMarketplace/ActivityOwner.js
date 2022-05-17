import React from "react";
import {
  makeStyles,
  withStyles,
  Box,
  Grid,
  Typography,
  TableCell,
  TableContainer,
  TableBody,
  Divider,
  Table,
  TableRow,
  TableHead,
} from "@material-ui/core";
// import MetricsChart from "./MetricsChart";
import LinearProgress from "@material-ui/core/LinearProgress";
import { FaBitcoin } from "react-icons/fa";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { BiExport } from "react-icons/bi";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 0,
  },
  colorPrimary: {
    backgroundColor: "#e19c31",
  },
  bar: {
    borderRadius: 0,
    backgroundColor: "#e19c31",
  },
}))(LinearProgress);

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
    padding: "20px 25px 40px",
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    "& h3": {
      color: "#FFFFFF",
      letterSpacing: "2px",
      fontSize: "20px",
    },
  },
  contentbox: {
    "& h6": {
      color: "#E19C32",
    },
    "& p": {
      color: "#FFFFFF",
    },
  },
}));

const Activitydata = [
  {
    Event: "List",
    Unitprice: "34,4963",
    qnt: "1",
    from: "OmniHorse",

    Date: "3 days ago",
  },
  {
    Event: "Sale",
    Unitprice: "34,4963",
    qnt: "1",
    from: "UniversiH",
    to: "UniversiH",
    Date: "7 days ago",
  },
];

const Ownersdata = [
  {
    Rank: "#1",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "50%",
    Value: "34,4963",
  },
  {
    Rank: "#2",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "30%",
    Value: "34,4963",
  },
  {
    Rank: "#3",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "15%",
    Value: "34,4963",
  },
  {
    Rank: "#4",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "3%",
    Value: "34,4963",
  },
  {
    Rank: "#5",
    WalletAddress: "0xb5BC...eA43",
    Quantity: "5000",
    Percentage: "2%",
    Value: "34,4963",
  },
];

const ItemActivity = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <Box className={classes.tablemainbox} mt={3}>
      <Box>
        <Typography variant="h3"> Item Activity</Typography>
      </Box>
      <Box pb={4} pt={1}>
        <Divider />
      </Box>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className="TableHead">
            <TableRow className="TableHeadrow">
              <TableCell align="left">Event</TableCell>
              <TableCell align="left">Unit Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">from</TableCell>
              <TableCell align="left">to</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Activitydata?.map((data) => (
              <TableRow>
                <TableCell>
                  <Box
                    width="100%"
                    maxWidth="53%"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <LoyaltyIcon color="#d4d4d4" style={{ fontSize: "18px" }} />
                    &nbsp; {data.Event}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    width="100%"
                    maxWidth="50%"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <FaBitcoin color="#d4d4d4" style={{ fontSize: "24px" }} />
                    &nbsp;{data.Unitprice}
                  </Box>
                </TableCell>
                <TableCell>{data.qnt}</TableCell>
                <TableCell>{data.from}</TableCell>
                <TableCell>{data.to}</TableCell>
                <TableCell>{data.Date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const VaultOwners = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <Box className={classes.tablemainbox} mt={3}>
      <Box>
        <Typography variant="h3">Top 10 Vault Owners</Typography>
      </Box>
      <Box pb={4} pt={1}>
        <Divider />
      </Box>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className="TableHead">
            <TableRow className="TableHeadrow">
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
                        value={data.Percentage}
                      />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Box
                    width="100%"
                    maxWidth="50%"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <FaBitcoin color="#fff" style={{ fontSize: "24px" }} />
                    &nbsp;{data.Value}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

function NFTActivity() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        {/* <Box mb={2}>
                    <MetricsChart />
                </Box> */}
        <Box mt={2} mb={2}>
          <ItemActivity />
        </Box>
        {/* <Box mt={2}>
          <VaultOwners />
        </Box> */}
      </Box>
    </>
  );
}

export default NFTActivity;
