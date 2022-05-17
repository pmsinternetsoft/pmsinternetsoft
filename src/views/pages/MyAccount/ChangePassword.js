import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  FormHelperText,
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InvestCard from "src/component/InvestCard";
import { GoVerified } from "react-icons/go";
import { RiShieldCheckFill } from "react-icons/ri";
import EditIcon from "@material-ui/icons/Edit";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
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
    },
    "& h4": {
      fontSize: "17px",
      fontWeight: "400",

      color: "#fff",
      marginBottom: "10px",
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
    backgroundColor: "#272727",
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
    backgroundColor: "#272727",
    "& input": {
      marginTop: "14px",
      borderBottom: "2px solid #585858",
    },
  },
  address: {
    marginTop: "60px",
    marginBottom: "30px",
  },
  text: {
    color: "white",
    borderRadius: "5px",
  },
}));
function Banner() {
  const classes = useStyles();
  const [tabview, setTabView] = useState("MyNft");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  return (
    <Box className={classes.bannerbox}>
      <Box className={classes.bannerbox}>
        <Box className={classes.mainbox}>
          <Box>
            <Box>
              <Typography variant="h4">OLD PASSWORD</Typography>
            </Box>
            <TextField
              placeholder="Enter your old password"
              variant="outlined"
              fullWidth
              className={classes.text}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword1(!showPassword1)}
                      edge="end"
                    >
                      <Box className={classes.passsec}>
                        {showPassword1 ? (
                          <Visibility
                            style={{
                              color: "#fff",
                              color: "#fff",
                              fontSize: "16px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        ) : (
                          <VisibilityOff
                            style={{
                              color: "#fff",
                              color: "#fff",
                              fontSize: "16px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        )}
                      </Box>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box mt={3}>
            <Box>
              <Typography variant="h4">NEW PASSWORD</Typography>
            </Box>
            <TextField
              placeholder="Enter your old password"
              variant="outlined"
              fullWidth
              className={classes.text}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword2(!showPassword2)}
                      edge="end"
                    >
                      <Box className={classes.passsec}>
                        {showPassword2 ? (
                          <Visibility
                            style={{
                              color: "#fff",
                              color: "#fff",
                              fontSize: "16px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        ) : (
                          <VisibilityOff
                            style={{
                              color: "#fff",
                              color: "#fff",
                              fontSize: "16px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        )}
                      </Box>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box mt={3}>
            <Box>
              <Typography variant="h4">CONFIRM PASSWORD</Typography>
            </Box>
            <TextField
              placeholder="Enter your old password"
              variant="outlined"
              fullWidth
              className={classes.text}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword3(!showPassword3)}
                      edge="end"
                    >
                      <Box className={classes.passsec}>
                        {showPassword3 ? (
                          <Visibility
                            style={{
                              color: "#fff",
                              color: "#fff",
                              fontSize: "16px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        ) : (
                          <VisibilityOff
                            style={{
                              color: "#fff",
                              color: "#fff",
                              fontSize: "16px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        )}
                      </Box>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}
          >
            <Button variant="contained" color="primary" fullwidth>
              UPDATE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
