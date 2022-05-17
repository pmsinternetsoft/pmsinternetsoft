import React from "react";
import {
  Box,
  Typography,
  Dialog,
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
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    "& h2": {
      fontSize: "22px",
      fontWeight: "400",

      color: "#fff",
    },
    "& h6": {
      fontSize: "14px",
      fontWeight: "400",
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
      "& h1": {
        fontWeight: 400,
        fontSize: "22px",
        textAlign: "center",
        color: "#453183",
        paddingBottom: "24px",
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
      "& button": {
        // marginTop: "10px",
        // fontWeight: 400,
        // fontSize: "16px",
        // lineHeight: "23px",
        // textAlign: "center",
        // letterSpacing: "0.05em",

        // minWidth: "150px",
        height: "45px",
      },
      "& figure": {
        width: "100%",
        margin: 0,
        overflow: "hidden",
        height: "300px",

        transition: "0.5s",
        marginBottom: "20px",
        position: "relative",
        borderRadius: "20px",
        "&:hover": {
          "& img": {
            transform: " scale(1.1)",
          },
        },
        "& label": {
          fontWeight: 500,
          fontSize: "12px",
          padding: "8px 20px",
          lineHeight: "12px",
          color: "#FFFFFF",
          background: "rgba(42, 173, 20, 0.7)",
          border: "1px solid #2AAD14",
          boxSizing: "border-box",
          borderRadius: "20px",
          position: "absolute",
          top: "15px",
          left: "15px",
          fontFamily: "'Inter', sans-serif",
        },
        "& img": {
          width: "100%",
          height: "100%",
          transform: "scale(1.02)",
          objectFit: "cover",
          transition: "0.5s",
        },
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
      fontFamily: "'Inter', sans-serif",
    },
  },
  qty: {
    borderTop: "1px solid #585858",
    borderBottom: "1px solid #585858",
  },

  btn: {
    backgroundColor: "#713FFF",
    fontSize: "18px",
    fontWeight: "500",
    color: "#fff",
    height: "50px",
  },
  pricemodal: {
    "& h6": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
    },
  },
  text: {
    backgroundColor: "#32236D",
    color: "white",
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

function Banner(props) {
  const classes = useStyles();
  const [search, setsearch] = React.useState("");
  const [toDate, setToDate] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState();
  const { data } = props;
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  return <Box className={`${classes.bannerbox} wow slideInRight`}></Box>;
}

export default Banner;
