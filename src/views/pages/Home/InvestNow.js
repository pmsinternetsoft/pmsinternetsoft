import React from "react";
import {
  Box,
  Typography,
  Dialog,
  Divider,
  Container,
  Grid,
  TextField,
  FormControl,
  InputBase,
  withStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link as RouterLink } from "react-router-dom";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { BsArrowRightShort } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InvestCard from "src/component/InvestCard";

const useStyles = makeStyles((theme) => ({
  headbox: {
    paddingTop: "140px",
    position: "relative",
    paddingBottom: "100px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "100px",

      paddingBottom: "50px",
    },
  },
  mainBox: {
    "& h1": {
      fontSize: "60px",
      fontWeight: "400",
      // letterSpacing: "2px",

      color: "#FFFEFD",
      [theme.breakpoints.down("md")]: {
        fontSize: "45px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    "& p": {
      fontSize: "16px",

      marginTop: "30px",
      maxWidth: "955px",
      width: "100%",
      lineHeight: "25px",
      margin: "0 auto",
    },
  },

  bannerbox: {
    "& h2": {
      fontSize: "22px",
    },
    "& h6": {
      fontSize: "14px",

      color: "#0F0F0F",
      marginTop: "8px",
    },

    "& .imagebox": {
      backgroundColor: "#fff",
      // border: "1px solid #D6D6D6",
      borderRadius: "20px",
      boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      boxSizing: "border-box",

      border: "1px solid  #fff",
      marginTop: "80px",
      position: "relative",
      width: "100%",
      maxWidth: "346px",
      padding: "39px",
      "& img": {
        width: "125px",
        margin: "0 auto 10px",
        display: "block",
      },
      "& h1": {
        fontWeight: 400,
        fontSize: "22px",
        color: "#453183",
        paddingBottom: "5px",
        paddingTop: "5px",
      },

      "& h5": {
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "36px",
        color: "#616161",
      },
      "& p": {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "20px",
        textAlign: "center",
        color: "#616161",
        padding: "10px 20px",
      },
    },
  },

  btnbox: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    width: "100%",
    maxWidth: "134px",
  },
  subtext: {
    width: "100%",
    maxWidth: "301px",
    marginTop: "30px",
  },
  deigo: {
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
  },
  url: {
    "& h6": {
      textDecoration: "underline",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "19px",
      marginTop: "5px",
    },
  },
  qty: {
    borderTop: "1px solid #585858",
    borderBottom: "1px solid #585858",
    "& h6": {
      fontSize: "13px",
      color: "#fff",
    },
  },

  text: {
    color: "#fff",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  detailbutton: {
    fontSize: "16px !important",
    fontWeight: "600 !important",
    borderRadius: "5px !important",
    color: "#fff",
  },
  textfieldbox: {
    "& input": {
      padding: "0px",
      paddingBottom: "19px",
      marginTop: "19px",
      marginLeft: "13px",
    },
  },
  formbox: {
    // border: "1px solid #fff",
    "& select": {
      background: "#32236D",
      // border: "1px solid #FFFFFF",
    },
  },
  modalpadding: {
    padding: "0px 20px 20px 20px",

    "& h6": {
      fontSize: "16px",
      color: "#fff",
      fontWeight: "400",
      marginBottom: "10px",
    },
    "& h5": {
      fontSize: "15px",
      color: "#d4d4d4",
      fontWeight: "400",
      marginBottom: "10px",
    },
  },
  disabledBox: {
    position: "relative",
    "& .imagebox": {
      position: "relative",

      "&::after": {
        position: "absolute",
        content: "' ' ",
        width: "100%",
        height: "100%",
        background: "rgba(113, 63, 255, 0.7)",
        top: "0px",
        left: "0px",
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

function InvestNow() {
  const classes = useStyles();
  const [search, setsearch] = React.useState("");
  const [toDate, setToDate] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState();
  // const { data } = props;
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.headbox}>
          <Box className={classes.mainBox}>
            <Box textAlign="center">
              <Typography variant="h1" className="wow slideInRight">
                Pre-Sale-Event
              </Typography>
              <Typography variant="body2" className="wow slideInLeft">
                Featuring a complete NFT own-to-earn ecosystem where you can
                participate in decentralized, community-run horse races, and
                breed NFT horses with unique characteristics and traits. Become
                a horse owner, investor, or NFT minter to earn while you join
                the community.
              </Typography>
            </Box>
          </Box>
          <Box className={`${classes.bannerbox} wow slideInRight`}>
            <Grid container spacing={3}>
              <Grid
                item
                lg={4}
                md={4}
                sm={6}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Box>
                    <Box className="imagebox scale11">
                      <img src="/images/ticket.png" alt="" />
                      <Typography variant="h1">Get Whitelist</Typography>
                      <Typography variant="h6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the.Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the.
                      </Typography>
                      {/* <Box
                         textAlign="right"
                         mt={3}
                      >
                        <Button
                          onClick={handleClickOpen1}
                          variant="text"
                          color="primary"
                          endIcon={<BsArrowRightShort />}
                        >
                          Get Whitelist
                        </Button>
                      </Box> */}
                    </Box>
                  </Box>
                  <Dialog
                    onClose={handleClose1}
                    aria-labelledby="customized-dialog-title"
                    open={open1}
                    disableScrollLock
                    maxWidth="xs"
                  >
                    <DialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose1}
                    ></DialogTitle>
                    <Box padding={3}>
                      <Box className={classes.deigo}>
                        <Typography variant="h3" color="secondary">
                          Get Whitelist
                        </Typography>
                        <Box className={classes.url}>
                          <RouterLink to="/login">
                            <Typography variant="h6">Connect Wallet</Typography>
                          </RouterLink>
                        </Box>
                      </Box>
                      <Box mt={1} pt={2} mb={2} pb={2} className={classes.qty}>
                        <Typography variant="h6">
                          Wallet Address(Min wallet value of 0.01ETH){" "}
                        </Typography>
                        <Box className={classes.box}>
                          <TextField
                            placeholder="Wallet address only"
                            variant="outlined"
                            fullWidth
                            className={classes.text}
                          />
                        </Box>
                        <Typography variant="h6">Twiter Handle</Typography>
                        <Box className={classes.box}>
                          <TextField
                            placeholder="@prakashsingh"
                            variant="outlined"
                            fullWidth
                            className={classes.text}
                          />
                        </Box>
                        <Typography variant="h6">Telegram Handle</Typography>
                        <Box className={classes.box}>
                          <TextField
                            placeholder="Username"
                            variant="outlined"
                            fullWidth
                            className={classes.text}
                          />
                        </Box>
                      </Box>

                      <Box mt={3} mb={3}>
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dumm
                      </Typography>
                    </Box>
                  </Dialog>
                </Box>
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                sm={6}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Box>
                    <Box className="imagebox">
                      <img src="/images/mysteryBox.png" alt="" />
                      <Typography variant="h1">Mysterious Box</Typography>
                      <Typography variant="h6">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the.Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the.
                      </Typography>
                      {/* <Box textAlign="right" mt={3}>
                        <Button
                          onClick={handleClickOpen2}
                          variant="text"
                          color="primary"
                          endIcon={<BsArrowRightShort />}
                        >
                          Buy Now
                        </Button>
                      </Box> */}
                    </Box>
                  </Box>
                  <Dialog
                    onClose={handleClose2}
                    aria-labelledby="customized-dialog-title"
                    open={open2}
                    disableScrollLock
                    maxWidth="xs"
                  >
                    <DialogTitle
                      style={{ padding: "0px" }}
                      id="customized-dialog-title"
                      onClose={handleClose2}
                    ></DialogTitle>

                    <Box className={classes.modalpadding}>
                      <Box
                        display="flex"
                        justifyContent="Center"
                        alignItems="center"
                      >
                        <img
                          src="images/mystery.png"
                          alt=""
                          width="100%"
                          style={{ width: "100%", maxWidth: "250px" }}
                        />
                      </Box>
                      <Box>
                        <Box mb={1}>
                          <Divider />
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography variant="h6">Price</Typography>
                          <Typography variant="h5">0.1ETH</Typography>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography variant="h6">Quantity</Typography>
                          <Typography variant="h5">12.0353</Typography>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography variant="h6">Wallet address</Typography>
                          <Typography variant="h5">0x3edf...45aa</Typography>
                        </Box>
                        <Divider />
                      </Box>
                      <Box mt={3} mb={3}>
                        <Button variant="contained" color="primary" fullWidth>
                          Buy
                        </Button>
                      </Box>
                      <Typography variant="body1" style={{ color: "#fff" }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dumm
                      </Typography>
                    </Box>
                  </Dialog>
                </Box>
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                sm={6}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Box className={classes.disabledBox}>
                    <Box className="imagebox">
                      <img src="/images/redeem.png" alt="" />
                      <Typography variant="h1">Redeem</Typography>
                      <Typography variant="h6">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the.Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the.
                      </Typography>
                      {/* <Box textAlign="right" mt={3}>
                        <Button
                          onClick={handleClickOpen3}
                          variant="text"
                          color="primary"
                          endIcon={<BsArrowRightShort />}
                        >
                          Redeem
                        </Button>
                      </Box> */}
                    </Box>
                  </Box>
                  <Dialog
                    onClose={handleClose3}
                    aria-labelledby="customized-dialog-title"
                    open={open3}
                    disableScrollLock
                    maxWidth="xs"
                  >
                    <DialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose3}
                    ></DialogTitle>
                    <Box padding={3}>
                      <Box className={classes.deigo}>
                        <Typography variant="h3" color="secondary">
                          Redeem
                        </Typography>
                        <Box className={classes.url}>
                          <RouterLink to="/login">
                            <Typography variant="h6">Connect Wallet</Typography>
                          </RouterLink>
                        </Box>
                      </Box>
                      <Box mt={1} pt={2} mb={2} pb={2} className={classes.qty}>
                        <Typography variant="h6">
                          Wallet Address(Min wallet value of 0.01ETH){" "}
                        </Typography>
                        <Box className={classes.box}>
                          <TextField
                            placeholder="Wallet address only"
                            variant="outlined"
                            fullWidth
                            className={classes.text}
                          />
                        </Box>
                        <Typography variant="h6">Twiter Handle</Typography>
                        <Box className={classes.box}>
                          <TextField
                            placeholder="@prakashsingh"
                            variant="outlined"
                            fullWidth
                            className={classes.text}
                          />
                        </Box>
                        <Typography variant="h6">Telegram Handle</Typography>
                        <Box className={classes.box}>
                          <TextField
                            placeholder="Username"
                            variant="outlined"
                            fullWidth
                            className={classes.text}
                          />
                        </Box>
                      </Box>

                      <Box mt={3} mb={3}>
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dumm
                      </Typography>
                    </Box>
                  </Dialog>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default InvestNow;
