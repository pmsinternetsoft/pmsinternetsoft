import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Grid,
  TextField,
  withStyles,
} from "@material-ui/core";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import MatricsChart from "src/views/pages/UserProfile/MatricsChart";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  mainBox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    height: "30%",
    borderRadius: "4px",
    "& h1": {
      fontSize: "30px",
      fontWeight: "600",
      textDecoration: "underline",
      color: "#fff",
      marginBottom: "25px",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },
  },
  dexBox: {
    width: "100%",
    // maxWidth:"450px",
    // margin:"auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
    "& span": {
      color: "#000 !important",
      fontSize: "15px !important",
    },
    "& h6": {
      fontSize: "15px !important",
      fontWeight: "400 !important",
      color: "#fff",
      marginBottom: "0px !important",
    },
    "& h4": {
      fontSize: "15px !important",
      fontWeight: "700",
      color: "#fff",
    },
    "& h3": {
      lineHeight: "22px",
      fontSize: "22px !important",
      marginBottom: "8px",
      "@media(max-width:767px)": {
        fontSize: "13px",
      },
    },
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
  margin: {
    "& select": {
      background: "#272727",
      border: "1px solid #E19C32",
    },
  },

  icon: {
    color: "#969696",
    fontSize: "20px",
    paddingTop: "3px",
  },
  textfieldbox: {
    "& h6": {
      fontSize: "15px !important",
      fontWeight: "400",
      color: "#fff !important",
      width: "100%",
      maxWidth: "127px",
      "& span": {
        fontSize: "15px",
        fontWeight: "600",
        color: "#fff !important",
      },
    },
  },
  historybox: {
    padding: "20px",
  },
  textfieldbox: {
    "& input": {
      padding: "0px",
      paddingBottom: "13px",
      marginTop: "11px",
      marginLeft: "5px",
    },
  },
  formbox: {
    border: "1px solid #fff",
    "& select": {
      background: "#601fd0",
      // border: "1px solid #FFFFFF",
    },
  },
  marginbox: {
    "& select": {
      background: "#601fd0",
      border: "1px solid #FFFFFF",
    },
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
export default function BestSeller() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [search, setsearch] = React.useState("");
  const [toDate, setToDate] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState();
  const [userlist, setuserlist] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const hancleClear = () => {
    setSelectedDate();
    setsearch("");
    setToDate();
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const options = {
    series: [
      {
        name: "Desktops",
        data: [0, 5, 3, 7, 8, 13, 11, 16, 20],
      },
    ],
    options: {
      chart: {
        height: 350,
        foreColor: "#fff",
        type: "line",
        zoom: {
          enabled: false,
        },

        categories: {
          color: "#fff",
          fontSize: "15px !important",
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      // title: {
      //   text: "Daily Performance",
      //   align: "left",
      // },

      xaxis: {
        categories: [],
      },
    },
  };

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.dexBox}>
        <Box className={classes.historybox}>
          <Box mt={1}>
            <Typography variant="h3" color="secondary">
              Price History
            </Typography>
          </Box>

          <Box className={classes.textfieldbox}>
            <Grid container>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item lg={5} md={5} sm={12} xs={12}>
                    <FormControl className={classes.marginbox}>
                      <NativeSelect
                        id="demo-customized-select-native"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <option value={10}>All Time</option>
                        <option value={20}>1 Year</option>
                        <option value={30}>11 Month</option>
                        <option value={30}>10 Month</option>
                        <option value={30}>7 Month</option>
                        <option value={30}>6 Month</option>
                        <option value={30}>4 Month</option>
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                  <Grid item lg={7} md={7} sm={12} xs={12}>
                    <Box>
                      <Typography variant="h6">All time Avg. price</Typography>
                      <Typography variant="h4">13,5649</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className={classes.ChartBox} pl={1}>
          {" "}
          <Chart
            options={options.options}
            series={options.series}
            type="line"
            className="customClass"
            width={"90%"}
            height="200px"
          />
        </Box>
      </Box>
    </Box>
  );
}
