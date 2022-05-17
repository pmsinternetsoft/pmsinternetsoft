import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Grid,
  withStyles,
  Divider,
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

    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
    "& span": {
      color: "#000 !important",
      fontSize: "15px !important",
    },
    "& h3": {
      fontSize: "22px",
      fontWeight: "400",
      // letterSpacing: "2px",
    },
    "& h6": {
      fontSize: "15px",
      fontWeight: "400",
      display: "flex",
      alignItems: "center",
      "@media(max-width:616px)": {
        fontSize: "13px",
      },
      "@media(max-width:326px)": {
        display: "block",
      },
    },
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
  margin: {
    "& select": {
      background: "#170C41",
      border: "1px solid #FFFFFF",
    },
  },

  icon: {
    color: "#969696",
    fontSize: "20px",
  },
  subbox: {
    padding: "20px",
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
      borderColor: "#E19C32",
      boxShadow: "none",
    },
  },
}))(InputBase);
export default function BestSeller() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
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
        <Box className={classes.subbox}>
          <Grid container spacing={2}>
            <Grid item lg={8} sm={12} md={6} xs={12}>
              <Box mt={1}>
                <Typography variant="h3">Daily Performance</Typography>
              </Box>
            </Grid>
            <Grid item lg={4} sm={12} md={6} xs={12}>
              <Grid container alignItems="center">
                <Grid item lg={8} md={8} sm={8} xs={7}>
                  <Box>
                    <Typography color="secondary" variant="h6">
                      Updated: 1min ago
                      <IoMdDownload className={classes.icon} />
                    </Typography>{" "}
                  </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={5}>
                  <FormControl className={classes.margin}>
                    <NativeSelect
                      id="demo-customized-select-native"
                      value={age}
                      onChange={handleChange}
                      input={<BootstrapInput />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <option value={10}>Month</option>
                      <option value={20}>Year</option>
                      <option value={30}>Day</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box mt={2} mb={1}>
            <Divider />
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
