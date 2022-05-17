import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  InputAdornment,
  FormControl,
  OutlinedInput,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { FaPlus, FaSearch } from "react-icons/fa";
import MarketplaceCard from "src/component/MarketplaceCard";
import SearchIcon from "@material-ui/icons/Search";
import { CSVLink } from "react-csv";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const TeamMap = [
  {
    image: "images/nft1.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Last win",
    img2: "images/ethblue.png",
    text12: "12.0353",
    text13: "10.012",
  },
  {
    image: "images/nft2.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Last win",
    img2: "images/ethblue.png",
    text12: "12.0353",
    text13: "10.012",
  },
  {
    image: "images/nft3.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Last win",
    img2: "images/ethblue.png",
    text12: "12.0353",
    text13: "10.012",
  },
  {
    image: "images/nft4.png",
    text1: "Rapid Stone",
    text2: "Age :",
    text: " 2yr",
    text3: "Breed",
    text4: "Thorughbred",
    text5: "Gender",
    text6: "Female",
    text7: "Type ",
    text8: "Filly",
    text9: "Colour ",
    text10: "Bay",
    text11: "Last win",

    img2: "images/ethblue.png",
    text12: "12.0353",
    text13: "10.012",
  },
];

const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "40px",
    paddingBottom: "50px",
    "& h1": {
      fontSize: "38px",
      fontWeight: "400",
      color: "#fff",
      letterSpacing: "2px",
      paddingBottom: "0px",
    },
  },
  clearButton: {
    border: "1px solid",
    background: "#1690F0",
    borderRadius: "9px",
    width: "130px",
    color: "white",
    marginTop: "28px",
    height: "48px",

    "&:hover": {
      backgroundColor: "#000",
    },
    "@media(max-width:960px)": {
      marginTop: "0px",
    },
  },
  csvButton: {
    background: "#1690F0",
    borderRadius: "10px",
    padding: "12px",

    maxWidth: "120px",
    color: "white",
    "@media(max-width:360px)": {
      width: "120px",
    },
    "@media(max-width:960px)": {
      marginTop: "0px",
    },
  },
  mainfilter: {},
  field: {
    "& input": {
      paddingTop: "25px",
      fontSize: "18px !important",
    },
  },
  text: {
    backgroundColor: "#3F3F3F",
    color: "#837F7F",
    borderRadius: "5px",
  },
  btnbox: {
    paddingTop: "15px",
    paddingBottom: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "600",
  },
}));
function Banner() {
  const classes = useStyles();
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
  return (
    <Box className={classes.bannerbox}>
      <Container>
        <Box>
          <Typography variant="h1">Manage Market</Typography>
        </Box>
        <Box className={classes.mainfilter} mt={7}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={3} md={3} sm={6}>
              <FormControl variant="outlined" width="100%" fullWidth>
                <InputLabel
                  margin="dense"
                  htmlFor="outlined-adornment-password"
                >
                  Search
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  label="Search"
                  fullWidth
                  className={classes.root}
                  margin="dense"
                  endAdornment={
                    <InputAdornment
                      className={classes.inputAdornment}
                      position="end"
                    >
                      <span style={{ fontSize: "14px" }}></span>
                      &nbsp;&nbsp; <FaSearch size={14} />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={2} md={2} sm={6}>
              <KeyboardDatePicker
                fullWidth
                placeholder="From Date"
                value={selectedDate}
                onChange={(date) => {
                  setSelectedDate(new Date(date));
                }}
                format="DD/MM/YYYY"
                inputVariant="outlined"
                margin="dense"
                name="startDate"
              />
            </Grid>
            <Grid item xs={12} lg={2} md={2} sm={6}>
              <KeyboardDatePicker
                placeholder="To Date"
                fullWidth
                value={toDate}
                onChange={(date) => {
                  setToDate(new Date(date));
                }}
                format="DD/MM/YYYY"
                inputVariant="outlined"
                margin="dense"
                name="startDate"
              />
            </Grid>
            <Grid item xs={12} lg={2} md={2} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel margin="dense">Status</InputLabel>
                <Select
                  // value={age}

                  label="Select Currency"
                  margin="dense"
                  name="currency"

                  //   onBlur={handleBlur}
                  //   onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  <MenuItem value={"USD"}>USD</MenuItem>
                  <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={3} xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.btnbox}
                fullWidth
              >
                Filter by Features
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box>
            <Grid container spacing={3}>
              {TeamMap.map((data, i) => {
                return (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <MarketplaceCard data={data} index={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;
