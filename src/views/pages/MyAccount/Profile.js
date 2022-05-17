import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  FormHelperText,
  TextField,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InvestCard from "src/component/InvestCard";
import { GoVerified } from "react-icons/go";
import { RiShieldCheckFill } from "react-icons/ri";
import EditIcon from "@material-ui/icons/Edit";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountTable from "./AccountTable";
import MyNft from "./MyNft";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "14px",
    paddingBottom: "30px",
    "& h2": {
      fontSize: "33px",
      fontWeight: "400",
      letterSpacing: "2px",
      color: "#E19C32",
      marginTop: "10px",
    },
    "& svg": {
      color: "#0CB9F0",
    },
    "& h6": {
      fontSize: "18px",
      fontWeight: "400",
    },
    "& h5": {
      fontSize: "20px",
      fontWeight: "400",

      color: "#fff",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px !important",
      },
    },
  },

  mainbox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "20px",
  },
  textbox: {
    border: "none",
    color: "#fff",
    background: "none",
    "& input": {
      marginTop: "14px",
      borderBottom: "2px solid #585858",
    },
  },
  downtext: {
    marginTop: "30px",
    marginBottom: "50px",
  },

  textboxes: {
    border: "none",
    color: "#fff",
    background: "none",
    "& input": {
      marginTop: "14px",
      borderBottom: "2px solid #585858",
    },
  },
  address: {
    marginTop: "60px",
    marginBottom: "30px",
  },
  gridprop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "470px",
    "@media(max-width:419px)": {
      display: "block",
    },
  },
  profilebox: {
    width: "100%",
    maxWidth: "70%",
    "@media(max-width:538px)": {
      width: "100%",
      maxWidth: "100%",
    },
  },
}));
function Banner() {
  const classes = useStyles();
  const [tabview, setTabView] = useState("MyNft");
  return (
    <Box className={classes.bannerbox}>
      <Box className={classes.bannerbox}>
        <Box className={classes.mainbox}>
          <Box>
            <TextField
              id="standard-basic"
              label="Profile"
              name="firstName"
              fullWidth
              className={classes.textbox}
            />
          </Box>
          <Box className={classes.profilebox} mt={1}>
            <TextField
              id="standard-basic"
              label="Name"
              name="firstName"
              fullWidth
              className={classes.textboxes}
            />
          </Box>
          <Box className={classes.profilebox} mt={1}>
            <TextField
              id="standard-basic"
              label="Bio"
              name="firstName"
              fullWidth
              className={classes.textboxes}
            />
          </Box>
          <Box className={classes.profilebox} mt={1}>
            <TextField
              id="standard-basic"
              label="Email"
              name="firstName"
              fullWidth
              className={classes.textboxes}
            />
          </Box>
          <Box className={classes.profilebox} mt={1}>
            <TextField
              id="standard-basic"
              label="Phone No"
              name="firstName"
              fullWidth
              className={classes.textboxes}
            />
          </Box>
          <Box className={classes.profilebox} mt={1}>
            <TextField
              id="standard-basic"
              label="Social Url"
              name="firstName"
              fullWidth
              className={classes.textboxes}
            />
          </Box>
          <Box className={classes.address}>
            <Box className={classes.gridprop}>
              <Typography variant="h5">Wallet Address :</Typography>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h5">jshduiw#kdKHF123dgfbgdb</Typography>
                &nbsp; &nbsp;
                <CopyToClipboard text={"jshduiw#kdKHF123dgfbgdb"}>
                  <FiCopy
                    onClick={() => toast.info("Copied")}
                    style={{ cursor: "pointer", color: "#E19C32" }}
                  />
                </CopyToClipboard>
              </Box>
            </Box>
          </Box>
          {/* <Box>
            <AccountTable />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
