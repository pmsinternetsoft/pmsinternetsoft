import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  FormControl,
  Dialog,
  MenuItem,
  NativeSelect,
  Grid,
  withStyles,
  InputBase,
  Button,
  TextField,
  IconButton,
  Checkbox,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Nftmarkettable from "./Nftmarkettable";
import ActivityOwner from "./ActivityOwner";
import { MdReport } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Listing from "./Listing";
import Popover from "@material-ui/core/Popover";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Offers from "./Offers";
import PriceChart from "./PriceChart";
import BackTopbar from "src/component/BackTopbar";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Scroll from "react-scroll";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const ScrollLink = Scroll.Link;

const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "100px",
    paddingBottom: "50px",

    "& h2": {
      fontSize: "40px",
      color: "#fff",
    },
    "& p": {
      fontSize: "16px",
      maxWidth: "611px",
      lineHeight: "25px",
      width: "100%",
    },
    "& h1": {
      fontSize: "22px",
      fontWeight: "400",
      letterSpacing: "1.74px",
    },
  },
  pricebox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "25px 25px 42px 25px",
    marginTop: "16px",
    borderRadius: "4px",
    "& h6": {
      fontSize: "22px",
      fontWeight: "700",

      color: "#fff",
      marginTop: "6px",
    },
    "& h5": {
      fontSize: "16px",
      fontWeight: "400",
      marginTop: "6px",
      color: "#d4d4d4",
    },
    "& button": {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      fontSize: "16px !important",
      fontWeight: "600",
      borderRadius: "5px",
      color: "#fff",
      "& svg": {
        color: "#fff",
      },
    },
  },
  addressbox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "25px 17px 38px 25px",
    marginTop: "30px",
    borderRadius: "4px",
    "& .heading": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    "& h6": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
      marginBottom: "20px",
    },
    "& h5": {
      fontSize: "15px",
      fontWeight: "400",
      color: "#d4d4d4",
      marginBottom: "20px",
    },
  },
  detailprofile: {
    "& .detailimg": {
      "& img": {
        width: "100%",
      },
    },
  },
  detailbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  detailbutton: {
    fontSize: "16px !important",
    fontWeight: "600 !important",
    borderRadius: "5px !important",
    color: "#fff",
  },
  property: {
    "& h6": {
      fontSize: "14px",
      fontWeight: "300",
      color: "#d4d4d4",
      marginBottom: "10px",
    },
    "& h5": {
      fontSize: "18px",
      marginBottom: "10px",
    },
  },
  btn: {
    fontSize: "18px !important",
    fontWeight: "500",
    color: "#fff",
    height: "50px",
  },
  text: {
    color: "#fff",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  popbox: {
    padding: theme.spacing(2),
    backgroundColor: "#6612d6",
  },
  leftfield: {
    marginTop: "20px",
  },
  fieldarea: {
    "& input": {
      paddingTop: "14px",
      paddingBottom: "14px",
    },
  },
  blocktext: {
    marginTop: "48px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginTop: "0px",
    },
    "& h6": {
      fontSize: "18px",
      fontWeight: "400",
      color: "#d4d4d4",
      "& span": {
        color: "#fff",
        fontSize: "19px",
        fontWeight: "500",
      },
    },
  },
  textfieldbox: {
    "& input": {
      padding: "0px",
      paddingBottom: "19px",
      marginTop: "19px",
      marginLeft: "13px",
    },
  },
  offermodal: {
    padding: "24px",
    "& .offerflex": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "5px",
      "& h3": {
        fontSize: "22px",
        fontWeight: "400 !important",
        lineHeight: "27px",
      },
      "@media(max-width:354px)": {
        display: "block",
      },
      "& h6": {
        textDecoration: "underline",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "19px",
        marginTop: "5px",
      },
    },
    "& .qty": {
      borderTop: "1px solid #585858",
      borderBottom: "1px solid #585858",
      "& h6": {
        fontSize: "16px",
        fontWeight: "400",
        color: "#fff",
        marginBottom: "3px",
      },
      "& .formbox": {
        "& select": {
          background: "#32236D",
        },
      },
    },
    "& .marginbox": {
      "& select": {
        background: "#601fd0",
        border: "1px solid #FFFFFF",
      },
    },

    "& a": {
      color: "#1690F0",
      cursor: "pointer",
      fontSize: "12px",
      fontFamily: "'Inter', sans-serif",
    },
  },
  buymodal: {
    padding: "24px",
    "& .buyflex": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "5px",
      "& h3": {
        fontSize: "22px",
        fontWeight: "400 !important",
        lineHeight: "27px",
      },
      "@media(max-width:354px)": {
        display: "block",
      },
      "& h6": {
        textDecoration: "underline",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "19px",
        marginTop: "5px",
      },
    },
    "& .qty": {
      borderTop: "1px solid #585858",
      borderBottom: "1px solid #585858",
      "& h6": {
        fontSize: "16px",
        fontWeight: "400",
        color: "#fff",
        marginBottom: "3px",
      },
    },
    "& a": {
      color: "#1690F0",
      cursor: "pointer",
      fontSize: "12px",
      fontFamily: "'Inter', sans-serif",
    },

    "& .quantityfield": {
      "& input": {
        padding: "0px",
        paddingBottom: "13px",
        marginTop: "11px",
        marginLeft: "5px",
      },
    },
    "& .fixingbox": {
      display: "flex",
      marginTop: "24px",
      "@media(max-width:599px)": {
        marginTop: "0px",
        marginBottom: "10px",
      },
    },
    "& .omni": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& h6": {
        lineHeight: "19px",
      },
      "& svg": {
        color: "#fff",
      },
    },
    "& .total": {
      display: "flex",
      justifyContent: "space-between",
      "& h6": {
        lineHeight: "19px",
      },
      "& h4": {
        fontWeight: "700",
        fontSize: "22px",
        lineHeight: "27px",
      },
    },
  },
}));
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    overflow: "auto !important",
  },
}))(MuiDialogContent);
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
function Banner(props) {
  const classes = useStyles();
  const [fromData, setFromData] = useState();
  const [agree, setAgree] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [age, setAge] = React.useState("");
  const [search, setsearch] = React.useState("");
  const [toDate, setToDate] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState();
  const [expirationDate, setExpirationDate] = useState("20");
  console.log("expirationDate", expirationDate);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const hancleClear = () => {
    setSelectedDate();
    setsearch("");
    setToDate();
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };

  const refs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    roadmap: useRef(null),
    contact: useRef(null),
  };

  const onButtonClick = (abc) => {
    // console.log(abc);
    // const data = refs[abc].current;
    // console.log(data);
    window.scrollTo({
      top: refs[abc].current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleShow = (e) => {
    var get = document.getElementById("demo1");
    get.style.display = "block";
  };
  const handleHidden = (e) => {
    var get = document.getElementById("demo1");
    get.style.display = "none";
  };
  const value = "80";

  console.log("expirationDate------", expirationDate);

  return (
    <Box className={classes.bannerbox}>
      <BackTopbar />
      <Container>
        <Box>
          <Grid container spacing={7}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box className={classes.detailprofile}>
                <figure className="detailimg">
                  <img src="images/nftimg.png" alt="" width="100%" />
                </figure>
              </Box>
              <Box className={classes.addressbox}>
                <Box className="heading">
                  <Typography variant="h6">Contact Address </Typography>
                  <Typography variant="h5">0x3edf...45aa</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6"> Total Issued Token</Typography>
                  <Typography variant="h5">10,000</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6">Token ID </Typography>
                  <Typography variant="h5">887</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6">Token Standard</Typography>
                  <Typography variant="h6">ERC - 1155</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6">Blockchain</Typography>
                  <Typography variant="h6">Ethereum</Typography>
                </Box>
                <Box className={classes.detailbox}>
                  <Box width="100%" maxWidth="50%">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      component={Link}
                      to="/horse-profile"
                      className={classes.detailbutton}
                    >
                      Details
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box className={classes.blocktext}>
                <RouterLink to="/horse-profile">
                  <Typography variant="h2">Rapid Stone</Typography>&nbsp; &nbsp;
                </RouterLink>
                <Box display="flex">
                  <Box>
                    <RiShieldCheckFill
                      style={{ fontSize: "30px", color: "#fff" }}
                    />
                    &nbsp; &nbsp;
                  </Box>
                  <Typography variant="h6">
                    {" "}
                    Created by&nbsp;<span>OmniHorse</span>
                  </Typography>
                  &nbsp;&nbsp;
                </Box>
              </Box>
              <Box mt={1}>
                <Typography variant="body2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type an.
                </Typography>
              </Box>
              <Box mt={4} className={classes.property}>
                <Grid container spacing={4}>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Age</Typography>
                      <Typography variant="h6">2yr</Typography>
                      <Typography variant="h5">Gender type</Typography>
                      <Typography variant="h6">Filly</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Breed</Typography>
                      <Typography variant="h6">Thorughbred</Typography>
                      <Typography variant="h5">Breed</Typography>
                      <Typography variant="h6">Thorughbred</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Gender</Typography>
                      <Typography variant="h6">Female</Typography>
                      <Typography variant="h5">Gender</Typography>
                      <Typography variant="h6">Female</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Colour</Typography>
                      <Typography variant="h6">Bay</Typography>
                      <Typography variant="h5">Colour</Typography>
                      <Typography variant="h6">Bay</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Divider />
                </Box>
              </Box>
              <Box className={classes.pricebox}>
                <Box mb={3}>
                  <Typography variant="h1">Current price</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                  maxWidth="250px"
                >
                  <Box>
                    <img src="images/wineth.png" alt="" width="100%" />
                  </Box>
                  <Typography variant="h6">12.0353</Typography>
                  <Typography variant="h5">($576,626.76)</Typography>
                </Box>
                <Box mt={3}>
                  <Grid container>
                    <Grid item lg={8} md={12} sm={12} xs={12}>
                      <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Button
                            onClick={handleClickOpen5}
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                          >
                            <ShoppingCartIcon />
                            Buy now
                          </Button>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Box>
                            <Button
                              onClick={handleClickOpen1}
                              variant="outlined"
                              color="primary"
                              fullWidth
                            >
                              <LocalOfferIcon />
                              Make offers
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box mt={4}>
                <PriceChart />
              </Box>
            </Grid>
          </Grid>

          <Box buttonClick={onButtonClick}>
            <div ref={refs.home} id="section1">
              {/* <Nftmarkettable /> */}
              <Listing />
            </div>
          </Box>
          <Box>
            <Offers />
          </Box>
          <Box>
            <ActivityOwner />
          </Box>
        </Box>
        <Dialog
          disableScrollLock
          onClose={handleClose1}
          aria-labelledby="customized-dialog-title"
          open={open1}
          maxWidth="xs"
        >
          <DialogContent>
            <DialogTitle
              id="customized-dialog-title"
              onClose={handleClose1}
            ></DialogTitle>
            <Box className={classes.offermodal}>
              <Box className="offerflex">
                <Typography variant="h3" color="secondary">
                  Make Offer
                </Typography>
                <Box>
                  <RouterLink>
                    <Typography variant="h6">Connect Wallet</Typography>
                  </RouterLink>
                </Box>
              </Box>
              <Box mt={1} pt={2} mb={2} pb={2} className="qty">
                <Box>
                  <Typography variant="h6">Price </Typography>
                  <Box>
                    <TextField
                      placeholder="Amount"
                      variant="outlined"
                      fullWidth
                      className={classes.text}
                    />
                  </Box>
                  <Typography variant="h6">Quantity</Typography>
                  <Box mb={1}>
                    <FormControl className="formbox">
                      <TextField
                        className={classes.textfieldbox}
                        id="outlined-basic"
                        type="number"
                        placeholder="Enter the quantity "
                        size="small"
                        style={{ width: "100%" }}
                        variant="outlined"
                        onChange={(e) => setsearch(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <Typography variant="h6">Expiration</Typography>
                      <Box>
                        <FormControl className="marginbox">
                          <NativeSelect
                            multiple={true}
                            id="demo-customized-select-native"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            input={<BootstrapInput />}
                          >
                            <option value={20}>7 days</option>
                            <option value={30}>1 day</option>
                            <option value={40}>3 days</option>
                            <option value={50}>7 days</option>
                            <option value={60}>1 Month</option>

                            <option value={100}>Custom date</option>
                          </NativeSelect>
                        </FormControl>
                      </Box>
                    </Grid>

                    {expirationDate === "100" && (
                      <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box className={classes.leftfield}>
                          <FormControl
                            className="marginbox"
                            style={{ marginTop: "10px" }}
                          >
                            {/* <TextField
                            className={classes.fieldarea}
                            id="outlined-basic"
                            type="date"
                            variant="outlined"
                            fullWidth
                            name="fromDate"
                            onChange={(e) => setFromData(e.target.value)}
                          /> */}
                            <TextField
                              className={classes.fieldarea}
                              id="datetime-local"
                              variant="outlined"
                              type="datetime-local"
                              defaultValue="2017-05-24T10:30"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </FormControl>
                        </Box>
                      </Grid>
                    )}
                    {expirationDate === "60" && (
                      <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box className={classes.leftfield}>
                          <FormControl
                            className="marginbox"
                            style={{ marginTop: "10px" }}
                          >
                            <TextField
                              id="time"
                              className={classes.fieldarea}
                              type="time"
                              variant="outlined"
                              fullWidth
                              defaultValue="07:30"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              inputProps={{
                                step: 300, // 5 min
                              }}
                            />
                          </FormControl>
                        </Box>
                      </Grid>
                    )}

                    {expirationDate === "50" && (
                      <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box className={classes.leftfield}>
                          <FormControl
                            className="marginbox"
                            style={{ marginTop: "10px" }}
                          >
                            <TextField
                              id="time"
                              className={classes.fieldarea}
                              type="time"
                              variant="outlined"
                              fullWidth
                              defaultValue="07:30"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              inputProps={{
                                step: 300, // 5 min
                              }}
                            />
                          </FormControl>
                        </Box>
                      </Grid>
                    )}
                    {expirationDate === "40" && (
                      <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box className={classes.leftfield}>
                          <FormControl
                            className="marginbox"
                            style={{ marginTop: "10px" }}
                          >
                            <TextField
                              id="time"
                              type="time"
                              className={classes.fieldarea}
                              variant="outlined"
                              fullWidth
                              defaultValue="07:30"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              inputProps={{
                                step: 300, // 5 min
                              }}
                            />
                          </FormControl>
                        </Box>
                      </Grid>
                    )}

                    {expirationDate === "30" && (
                      <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box className={classes.leftfield}>
                          <FormControl
                            className="marginbox"
                            style={{ marginTop: "10px" }}
                          >
                            <TextField
                              id="time"
                              type="time"
                              variant="outlined"
                              className={classes.fieldarea}
                              fullWidth
                              defaultValue="07:30"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              inputProps={{
                                step: 300, // 5 min
                              }}
                            />
                          </FormControl>
                        </Box>
                      </Grid>
                    )}

                    {expirationDate === "20" && (
                      <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box className={classes.leftfield}>
                          <FormControl
                            className="marginbox"
                            style={{ marginTop: "10px" }}
                          >
                            <TextField
                              className={classes.fieldarea}
                              id="time"
                              type="time"
                              variant="outlined"
                              fullWidth
                              defaultValue="07:30"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              inputProps={{
                                step: 300, // 5 min
                              }}
                            />
                          </FormControl>
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                </Box>
              </Box>
              <Box>
                <Checkbox
                  color="green"
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  inputProps={{
                    "aria-label": "secondary checkbox",
                  }}
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span
                  style={{
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                  }}
                >
                  I agree to OmniHorse’s
                </span>
                &nbsp;
                <Link target="_blank" to="/term-conditions">
                  Terms Of Services
                </Link>
              </Box>
              <Box mt={2} mb={3}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.btn}
                >
                  Submit
                </Button>
              </Box>
              <Typography style={{ color: "#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </Typography>
            </Box>
          </DialogContent>
        </Dialog>
        <Dialog
          disableScrollLock
          onClose={handleClose5}
          aria-labelledby="customized-dialog-title"
          open={open5}
          maxWidth="xs"
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose5}
          ></DialogTitle>
          <Box padding={3} className={classes.buymodal}>
            <Box className="buyflex">
              <Typography variant="h3" color="secondary">
                Purchase
              </Typography>
              <Box className={classes.url}>
                <RouterLink>
                  <Typography variant="h6">Connect Wallet</Typography>
                </RouterLink>
              </Box>
            </Box>
            <Box mt={2} mb={2} className="qty">
              <Grid container spacing={1}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box mt={2}>
                    <FormControl className="margin">
                      <TextField
                        className="quantityfield"
                        id="outlined-basic"
                        // label="All Time"
                        type="number"
                        placeholder="Enter the Quantity"
                        size="small"
                        // style={{ width: "100%" }}
                        variant="outlined"
                        onChange={(e) => setsearch(e.target.value)}
                      />
                    </FormControl>{" "}
                  </Box>
                  &nbsp;
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box className="fixingbox">
                    <Typography variant="h6" color="secondary">
                      X
                    </Typography>
                    &nbsp;
                    <Typography
                      variant="h6"
                      color="secondary"
                      style={{ color: "#ad3bf9" }}
                    >
                      12.0353
                    </Typography>
                    &nbsp;
                    <Typography variant="h6" color="secondary">
                      =
                    </Typography>
                    &nbsp;
                    <Box display="flex" alignItems="center">
                      <img src="images/ethwhite.png" />
                      <Typography
                        variant="h4"
                        color="secondary"
                        className={classes.typo}
                      >
                        <span style={{ color: "#fff" }}>12.0353</span>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              style={{
                borderBottom: "1px solid #585858",
              }}
              mb={1}
              mt={1}
            >
              <Box className="omni">
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" color="secondary">
                    OmniHorse Fee &nbsp;
                  </Typography>
                  <IconButton
                    aria-describedby={id}
                    color="primary"
                    onClick={handleClick}
                  >
                    <MdReport />
                  </IconButton>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography className={classes.popbox}>
                      The content of the OmniHorse.
                    </Typography>
                  </Popover>
                </Box>
                &nbsp;
                <Typography variant="h6" color="secondary">
                  12.0353
                </Typography>
              </Box>
            </Box>
            <Box className="total" mb={2}>
              <Typography variant="h6" color="secondary">
                Total
              </Typography>
              <Box display="flex" justifyContent="Center" alignItems="center">
                <Box>
                  <img src="images/ethwhite.png" />
                </Box>
                &nbsp;
                <Typography variant="h4" color="secondary">
                  12.0353
                </Typography>
              </Box>
            </Box>
            <Box mb={1}>
              <Checkbox
                color="green"
                type="checkbox"
                name="acceptTerms"
                id="acceptTerms"
                inputProps={{
                  "aria-label": "secondary checkbox",
                }}
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span
                style={{
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                }}
              >
                I agree to OmniHorse’s
              </span>
              &nbsp;
              <Link
                target="_blank"
                to="/term-conditions"
                className={classes.link}
              >
                Terms Of Services
              </Link>
            </Box>
            <Box mb={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.btn}
              >
                Submit
              </Button>
            </Box>
            <Typography variant="body1" style={{ color: "#fff" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dumm
            </Typography>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
}

export default Banner;
