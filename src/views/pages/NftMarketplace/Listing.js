import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Divider,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  Paper,
  TableBody,
  Checkbox,
  TableRow,
  FormControl,
  Dialog,
  MenuItem,
  NativeSelect,
  withStyles,
  InputBase,
  TextField,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import Popover from "@material-ui/core/Popover";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { MdReport } from "react-icons/md";
// import FaEthereum from "react-icons/fa";
const Ddata = [
  {
    Value: "34,4963",
    usd: "$4,935.53",
    qnt: "1",
    exp: "22 hours",

    from: "abcc.com",
    finish: "1",
  },
  {
    Value: "34,4963",
    usd: "$4,935.53",
    qnt: "1",
    exp: "22 hours",

    from: "abcc.com",
    finish: "1",
  },
  {
    Value: "34,4963",
    usd: "$4,935.53",
    qnt: "1",
    exp: "22 hours",

    from: "abcc.com",
    finish: "1",
  },
  {
    Value: "34,4963",
    usd: "$4,935.53",
    qnt: "1",
    exp: "22 hours",

    from: "abcc.com",
    finish: "1",
  },
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
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
    borderRadius: "4px",
    "& h2": {
      fontSize: "22px !important",
      fontWeight: "400",

      marginBottom: "10px",
      color: "#fff !important",
    },
  },
  dividemain: {
    borderBottom: "1px solid #585858",
  },
  btnview: {
    fontSize: "16px !important",
    fontWeight: "400",

    color: "#E19C32 !important",
  },
  btnbox: {
    height: "43px",
    fontSize: "16px !important",
    fontWeight: "600 !important",
    color: "#fff",
  },
  deigo: {
    display: "flex",
    justifyContent: "space-between",
    "& h3": {
      fontSize: "22px",
      fontWeight: "400 !important",
      lineHeight: "27px",
    },
    "@media(max-width:349px)": {
      display: "block",
    },
    "& h6": {
      textDecoration: "underline",
      color: "#fff !important",
      fontSize: "16px !important",
      fontWeight: "700 !important",

      marginTop: "5px",
    },
  },

  qty: {
    borderTop: "1px solid #fff",
    borderBottom: "1px solid #fff",
  },
  margin: {
    background: "#272727",
    border: "1px solid #fff",
    "& select": {
      background: "#170C41",
      border: "1px solid #FFFFFF",
    },
  },
  typo: {
    fontWeight: "700",
    fontSize: "22px",
  },
  popbox: {
    padding: theme.spacing(2),
    backgroundColor: "#6612d6",
  },
  omni: {
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
  total: {
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
  btn: {
    fontSize: "18px !important",
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
    marginBottom: "15px",
  },
  quantityfield: {
    "& input": {
      padding: "0px",
      paddingBottom: "13px",
      marginTop: "11px",
      marginLeft: "5px",
    },
  },
  modalbox: {
    "& h5": {
      fontSize: "16px",
      fontWeight: "500",
    },
    "& h6": {
      fontSize: "14px",
      fontWeight: "400",
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

function Banner() {
  const classes = useStyles();
  const [agree, setAgree] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [age, setAge] = React.useState("");
  const [search, setsearch] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const refs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    roadmap: useRef(null),
    contact: useRef(null),
  };
  return (
    <Box className={classes.bannerbox}>
      <Box>
        <Box mt={6} className={classes.tablemainbox}>
          <Box>
            <Typography variant="h2">Listing</Typography>
          </Box>
          <Box mb={2}>
            <Divider className={classes.dividemain} />
          </Box>
          <TableContainer className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className="TableHead">
                <TableRow className="TableHeadrow">
                  <TableCell align="left">Unit price</TableCell>

                  <TableCell align="left">USD Unit price</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Expiration</TableCell>
                  <TableCell align="left">From</TableCell>
                  <TableCell align="left">Finish</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Ddata.map((data) => (
                  <TableRow>
                    <TableCell>
                      {" "}
                      <Box
                        width="100%"
                        maxWidth="60%"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <FaEthereum color="#fff" style={{ fontSize: "24px" }} />
                        {data.Value}
                      </Box>
                    </TableCell>{" "}
                    <TableCell>{data.usd}</TableCell>
                    <TableCell>
                      <Box className={classes.activeparent}>{data.qnt}</Box>
                    </TableCell>
                    <TableCell>{data.exp}</TableCell>
                    <TableCell>{data.from}</TableCell>
                    <TableCell style={{ border: "none" }}>
                      {" "}
                      <Button
                        onClick={handleClickOpen1}
                        variant="outlined"
                        color="primary"
                        fullWidth
                        className={classes.btnbox}
                      >
                        Buy
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Dialog
        disableScrollLock
        onClose={handleClose1}
        aria-labelledby="customized-dialog-title"
        open={open1}
        maxWidth="xs"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose1}
        ></DialogTitle>
        <Box padding={3} className={classes.modalbox}>
          <Box className={classes.deigo}>
            <Typography variant="h3" color="secondary">
              Purchase
            </Typography>
            <Box className={classes.url}>
              <RouterLink>
                <Typography variant="h6">Connect Wallet</Typography>
              </RouterLink>
            </Box>
          </Box>
          <Box mt={1} mb={1} className={classes.qty}>
            <Box className={classes.total} mb={2} mt={2}>
              <Typography variant="h5" color="secondary">
                Unit Price
              </Typography>
              <Box>
                <Typography variant="h6" color="secondary">
                  1.2ETH / 23.00$
                </Typography>
              </Box>
            </Box>
            <Box className={classes.total} mb={2}>
              <Typography variant="h5" color="secondary">
                Quantity
              </Typography>
              <Box>
                <Typography variant="h6" color="secondary">
                  1
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              borderBottom: "1px solid #585858",
            }}
            mb={2}
            pb={2}
          >
            <Box className={classes.omni}>
              <Box display="flex" alignItems="center">
                <Typography variant="h5" color="secondary">
                  OmniHorse Fee
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
          <Box className={classes.total} mb={2}>
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
            <Link
              target="_blank"
              to="/term-conditions"
              style={{
                marginLeft: "4px !important",
                color: "#1690F0",
                cursor: "pointer",
                fontSize: "12px",
                fontFamily: "'Inter', sans-serif",
              }}
              className={classes.link}
            >
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
              Buy
            </Button>
          </Box>
          <Typography variant="body1" style={{ color: "#fff" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dumm
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Banner;
