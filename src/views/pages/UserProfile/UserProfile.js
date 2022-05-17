import React, { useState, useContext } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Divider,
  makeStyles,
  withStyles,
  Button,
  Link,
  MenuItem,
  FormControl,
  InputBase,
  NativeSelect,
  Dialog,
  IconButton,
  Table,
  TextField,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { RiListSettingsFill } from "react-icons/ri";
import MatricsChart from "src/views/pages/UserProfile/MatricsChart";
import LeaderBoardTable from "./LeaderBoardTable";
import RealizedGains from "./RealizedGains";
import EditIcon from "@material-ui/icons/Edit";
import { toast } from "react-toastify";
import CloseIcon from "@material-ui/icons/Close";
import { Link as RouterLink } from "react-router-dom";
import Popover from "@material-ui/core/Popover";
import { MdReport } from "react-icons/md";
import MyNft from "./MyNft";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import MyFav from "./MyFav";
import axios from "axios";
import apiConfig from "src/APIconfig/ApiConfig";

import { UserContext } from "src/context/User";
const useStyles = makeStyles((theme) => ({
  mainbox: {
    paddingTop: "86px",
    paddingBottom: "60px",
    "& .subboxes": {
      background: "rgba(23, 12, 65, 0.4)",
      border: " 1px solid #332262",
      boxSizing: "border-box",
      "& h1": {
        fontSize: "20px",
        fontWeight: "400",
        marginTop: "15px",
      },
      "& h6": {
        fontSize: "14px",
        fontWeight: "700",
      },
      "& h2": {
        fontSize: "30px",
        fontWeight: "700",
        marginTop: "5px",
        [theme.breakpoints.down("md")]: {
          fontSize: "20px",
        },
      },
      "& button": {
        fontSize: "18px !important",
        fontWeight: "500",
        color: "#fff",
        height: "50px",
        "@media(max-width:998px)": {
          fontSize: "16px !important",
        },
      },
    },
    "& .boxImage": {
      position: "relative",
      display: "inline-block",
      width: "208px",
      "& span": {
        position: "absolute",
        top: "92px",
        right: "19px",
        backgroundColor: "#E19C32",
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      },
    },
    "& .dot": {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#58DA75",
      marginLeft: "1rem",
    },
  },
  margin: {
    background: "#272727",
    border: "1px solid #fff",
    "& select": {
      background: "#170C41",
      border: "1px solid #FFFFFF",
    },
  },
  table: {
    "& th": {
      border: "0.5px solid rgb(150,150,150,0.5) !important",
      padding: "10px !important",
      fontWeight: "400 !important",
      lineHeight: "19px",
      color: "#969696",
      fontSize: "16px",
    },
    "& td": {
      border: "0.5px solid rgb(150,150,150,0.5) !important",
      padding: "10px !important",
      fontWeight: "400 !important",
      lineHeight: "19px",
      fontSize: "16px",
      color: "white",
    },
  },
  TabBox: {
    marginTop: "20px",
    "& .buttonBox": {
      background: "#6612d6",
      "& a": {
        width: "100%",
        cursor: "pointer",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "17px",
        fontFamily: "'Inter', sans-serif",
        color: "#fff",
        paddingTop: "16px",
        paddingBottom: "16px",
        [theme.breakpoints.down("xs")]: {
          fontSize: "12px",
        },
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "#b399ff",
        },
        "&.active": {
          color: "#fff",
          backgroundColor: "#791dd6",
          paddingTop: "16px",
          paddingBottom: "16px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "17px",
        },
      },
    },
  },
  flexbox: {
    width: "100%",
    maxWidth: "90px",
    display: "flex",
    justifyContent: "flex-end",
  },
  navigateselectbox: {
    "& input": {
      paddingBottom: "10px",
    },
  },
  popbox: {
    padding: theme.spacing(2),
    backgroundColor: "#6612d6",
  },
  mainBoxcreate: {
    padding: "20px",
    color: "#fff",
    "& span": {
      fontFamily: "'Inter', sans-serif",
    },
    "& h1": {
      fontSize: "20px",
      fontWeight: "400",
    },
    "& p": {
      fontSize: "12px",
      fontWeight: "400",
      color: "#fff",
    },
    "& button": {
      fontFamily: "'Inter', sans-serif",
    },
    "& .profileadd": {
      border: "1px solid #898989",
      height: "100px",
      borderRadius: "25px",
    },
  },

  textfieldbox: {
    color: "#fff",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  typecell: {
    border: "none !important",
  },
  mainmodal: {
    padding: "0px 32px 32px 32px",
    "& h1": {
      fontSize: "30px",
      fontWeight: "500",
      color: "#fff",
    },
    "& h4": {
      fontSize: "22px",
      fontWeight: "400",
      lineHeight: "27px",
    },
    "@media(max-width:473px)": {
      display: "block",
    },
    "& button": {
      fontSize: "18px !important",
      fontWeight: "500",
      color: "#fff",
      height: "50px",
      "@media(max-width:998px)": {
        fontSize: "16px !important",
      },
    },
  },
  coverImg: {
    height: "100px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "25px",
    background: "rgba(0,0,0,0.7)",
    backgroundSize: "100% !important",
    backgroundRepeat: "no-repeat !important",
    backgroundPosition: "center !important",
    "@media(max-width:767px)": {
      height: "100px",
    },
    "& img": {
      top: "50%",
      left: "50%",
      width: "auto",
      height: "auto",
      position: "absolute",
      minWidth: "100%",
      transform: "translate(-50%, -50%)",
      minHeight: "100%",
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
    // "@media(max-width:457px)": {
    //   right: "53px",
    // },
    // "@media(max-width:365px)": {
    //   right: "90px",
    // },
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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
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

const graphData = [
  {
    total: " Total Revenue",
    amount: " 3.34k",
    percentage: " +162.58%",
  },
  {
    total: " Total Spent",
    amount: " 3.34k",
    percentage: " +162.58%",
  },
  {
    total: " Total Profit",
    amount: " 3.34k",
    percentage: " +162.58%",
  },
  {
    total: "Realized Gains/Loss",
    amount: " 3.34k",
    percentage: " +162.58%",
  },
];
const tableData = [
  {
    breeding: "Breeding",
    HorseName: "Rapid Stone",
    WiningPrice: "#150,000",
    share: "10%",
    Rewards: "#15,000",
    CurrentRate: "1",
    $OHORSE: "15,000",
    Date: "01/25/2022",
  },
  {
    breeding: "Winning",
    HorseName: "Rapid Stone",
    WiningPrice: "#150,000",
    share: "10%",
    Rewards: "#15,000",
    CurrentRate: "1",
    $OHORSE: "15,000",
    Date: "01/25/2022",
  },
];
export const getBase64 = (file, cb) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (err) {
    console.log("Error: ", err);
  };
};
export default function UserProfile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl(null);
  };

  const open3 = Boolean(anchorEl);
  const id = open3 ? "simple-popover" : undefined;
  const user = useContext(UserContext);
  const [open4, setOpen4] = React.useState(false);
  const [coverImage64, setCoverImage64] = useState();
  const [coverImage, setCoverImage] = useState();
  const [userName1, setUserName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [profilepic1, setProfilepic] = useState();

  const handleClickOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  const [tabview, setTabView] = useState("MyNft");
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const editprofile = async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "PUT",
        url: apiConfig.updateProfile,
        headers: {
          token: window.sessionStorage.getItem("accessToken"),
        },
        data: {
          userName: userName1,
          profilePic: coverImage64,
        },
      });
      if (res.data.responseCode === 200)
        toast.success(res.data.responseMessage);
      setIsLoading(false);

      console.log("data===", res.data.result);
    } catch (error) {
      toast.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Box className={classes.mainbox}>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={3} sm={6} md={3} xs={12}>
              <Box padding={4} className="subboxes">
                <Box textAlign="center">
                  <Box className="boxImage">
                    <img src={user?.userData?.profilePic} />
                    <Box
                      onClick={() => {
                        handleClickOpen4();
                      }}
                    >
                      <span>
                        <EditIcon
                          style={{
                            color: "#fff",
                          }}
                        />
                      </span>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h1">
                      {user?.userData?.userName}
                    </Typography>
                    <Box className="dot" />
                  </Box>
                  <Typography
                    variant="h6"
                    style={{ color: "#d4d4d4", marginTop: "0.6rem" }}
                  >
                    0x3edf...45aa
                  </Typography>
                </Box>
                <Box>
                  <Box mt={2} mb={2}>
                    <Divider />
                  </Box>
                  <Typography variant="body2">Net Worth (est.)</Typography>
                  <Typography variant="h2">$550,685.25</Typography>
                  <Box display="flex" justifyContent="space-between" mt={2}>
                    <Typography variant="body2" style={{ color: "#989898" }}>
                      Asset (ETH)
                    </Typography>
                    <Typography variant="h6" color="secondary">
                      4956.54
                    </Typography>
                  </Box>
                  <Box mt={4} mb={4}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={handleClickOpen}
                    >
                      Claim Rewards
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* <Grid item lg={9} sm={7} md={9} xs={12}>
              <Box padding={2} className={classes.box1}>               
                <Grid container spacing={3}>
                  {graphData.map((data, i) => {
                    return (
                      <Grid item lg={3} sm={6} md={6} xs={12}>
                        <Box style={{ background: "#170C41" }}>
                          <Box textAlign="center" pt={3} mt={3}>
                            <Typography variant="h6" color="secondary">
                              {data?.total}
                            </Typography>
                            <Typography
                              variant="h2"
                              color="secondary"
                              style={{ marginTop: "1rem" }}
                            >
                              {data?.amount}
                            </Typography>
                            <Typography
                              variant="h5"
                              style={{ color: "#58DA75", marginTop: "1rem" }}
                            >
                              {data?.percentage}
                            </Typography>
                          </Box>
                          <img
                            src="images/vector.png"
                            style={{ width: "100%" }}
                          />
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
                <Box mt={3}>
                  <MatricsChart />
                </Box>
                <Box mt={3}>
                  <LeaderBoardTable />
                </Box>
                <Box mt={3}>
                  <RealizedGains />
                </Box>
              </Box>
            </Grid> */}
            <Grid item lg={9} sm={6} md={9} xs={12}>
              <Box className={classes.TabBox}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={4} lg={4}>
                    <Box className="buttonBox">
                      <Link
                        className={tabview === "MyNft" ? "active" : " "}
                        onClick={() => setTabView("MyNft")}
                      >
                        My NFT
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={4}>
                    <Box className="buttonBox">
                      <Link
                        className={tabview === "MyFav" ? "active" : " "}
                        onClick={() => setTabView("MyFav")}
                      >
                        My Favorites
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={4}>
                    <Box className="buttonBox">
                      <Link
                        className={tabview === "NFTActivity" ? "active" : " "}
                        onClick={() => setTabView("NFTActivity")}
                      >
                        Sold NFT
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={4}>
                {tabview === "MyNft" ? <MyNft /> : ""}
                {tabview === "MyFav" ? <MyFav /> : ""}
              </Box>
            </Grid>
          </Grid>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            disableScrollLock
          >
            <DialogContent>
              <DialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              ></DialogTitle>
              <Box className={classes.mainmodal}>
                <Box mb={2}>
                  <Typography variant="h1">Available Rewards</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box display="flex" alignItems="center">
                    <Typography variant="h4" color="secondary">
                      Winning Rewards
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
                      open={open3}
                      anchorEl={anchorEl}
                      onClose={handleClose3}
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
                  <Typography variant="h6" style={{ color: "#fff" }}>
                    Updated: 1min ago
                  </Typography>
                </Box>
                <Box style={{ borderTop: ".5px solid #585858" }} mt={2} pt={2}>
                  <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell variant="h6">Horse Name</TableCell>
                          <TableCell variant="h6">Wining Price</TableCell>
                          <TableCell variant="h6">% of share</TableCell>
                          <TableCell variant="h6">Rewards</TableCell>
                          {/* <TableCell variant="h6">Current Rate</TableCell> */}
                          <TableCell variant="h6">$OHORSE</TableCell>
                          <TableCell variant="h6">Date</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {tableData.map((data, i) => {
                          return (
                            <>
                              <TableRow className={classes.tbody}>
                                <TableCell>{data?.HorseName}</TableCell>
                                <TableCell>{data?.WiningPrice}</TableCell>
                                <TableCell>{data?.share}</TableCell>
                                <TableCell>{data?.Rewards}</TableCell>
                                {/* <TableCell> {data?.CurrentRate}</TableCell> */}
                                <TableCell>{data?.$OHORSE}</TableCell>
                                <TableCell>{data?.Date}</TableCell>
                              </TableRow>
                            </>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box textAlign="end" mt={2} mb={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={handleClickOpen1}
                    >
                      Confirm
                    </Button>
                  </Box>
                  <Box>
                    <Box display="flex" justifyContent="space-between">
                      <Box display="flex" alignItems="center">
                        <Typography variant="h4" color="secondary">
                          Breeding Rewards
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
                          open={open3}
                          anchorEl={anchorEl}
                          onClose={handleClose3}
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
                      <Typography variant="h6" style={{ color: "#fff" }}>
                        Updated: 1min ago
                      </Typography>
                    </Box>
                    <Box
                      style={{ borderTop: ".5px solid #585858" }}
                      mt={2}
                      pt={2}
                    >
                      <TableContainer>
                        <Table
                          className={classes.table}
                          aria-label="simple table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell variant="h6">Horse Name</TableCell>
                              <TableCell variant="h6">Wining Price</TableCell>
                              <TableCell variant="h6">% of share</TableCell>
                              <TableCell variant="h6">Rewards</TableCell>
                              {/* <TableCell variant="h6">Current Rate</TableCell> */}
                              <TableCell variant="h6">$OHORSE</TableCell>
                              <TableCell variant="h6">Date</TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            {tableData.map((data, i) => {
                              return (
                                <>
                                  <TableRow className={classes.tbody}>
                                    <TableCell>{data?.HorseName}</TableCell>
                                    <TableCell>{data?.WiningPrice}</TableCell>
                                    <TableCell>{data?.share}</TableCell>
                                    <TableCell>{data?.Rewards}</TableCell>
                                    {/* <TableCell> {data?.CurrentRate}</TableCell> */}
                                    <TableCell>{data?.$OHORSE}</TableCell>
                                    <TableCell>{data?.Date}</TableCell>
                                  </TableRow>
                                </>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Box textAlign="end" mt={2} mb={2}>
                        <Button
                          variant="contained"
                          color="primary"

                          // onClick={handleClickOpen1}
                        >
                          Confirm
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h4" style={{ color: "#fff" }}>
                      History
                    </Typography>
                    <Box mt={2}>
                      <TableContainer>
                        <Table
                          className={classes.table}
                          aria-label="simple table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell
                                variant="h6"
                                className={classes.typecell}
                              >
                                Type
                              </TableCell>
                              <TableCell variant="h6">Horse Name</TableCell>
                              <TableCell variant="h6">Wining Price</TableCell>
                              <TableCell variant="h6">% of share</TableCell>
                              <TableCell variant="h6">Rewards</TableCell>
                              {/* <TableCell variant="h6">Current Rate</TableCell> */}
                              <TableCell variant="h6">$OHORSE</TableCell>
                              <TableCell variant="h6">Date</TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            {tableData.map((data, i) => {
                              return (
                                <>
                                  <TableRow className={classes.tbody}>
                                    <TableCell>{data?.breeding}</TableCell>
                                    <TableCell>{data?.HorseName}</TableCell>
                                    <TableCell>{data?.WiningPrice}</TableCell>
                                    <TableCell>{data?.share}</TableCell>
                                    <TableCell>{data?.Rewards}</TableCell>
                                    {/* <TableCell>{data?.CurrentRate}</TableCell> */}
                                    <TableCell>{data?.$OHORSE}</TableCell>
                                    <TableCell>{data?.Date}</TableCell>
                                  </TableRow>
                                </>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
          </Dialog>
        </Box>
        <Dialog
          onClose={handleClose4}
          aria-labelledby="customized-dialog-title"
          open={open4}
          maxWidth="xs"
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose4}
          ></DialogTitle>
          <Box className={classes.mainBoxcreate}>
            <Box pb={2}>
              <Typography variant="h1">Add profile Image</Typography>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box className="profileadd">
                    {coverImage64 && (
                      <figure className={classes.coverImg}>
                        <img
                          className={classes.Box}
                          src={coverImage64}
                          alt=""
                        />
                      </figure>
                    )}
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  {/* <Box align="left" mt={4} mb={2}>
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="raised-button-file-cover"
                      multiple
                      name="coverPic"
                      type="file"
                      onChange={(e) => {
                        setCoverImage(URL.createObjectURL(e.target.files[0]));
                        getBase64(e.target.files[0], (result) => {
                          setCoverImage64(result);
                        });
                      }}
                    />
                    <label htmlFor="raised-button-file-cover">
                      <Button variant="contained" color="primary">
                        CHOOSE FILE
                      </Button>
                    </label>
                  </Box> */}
                  <Box align="left" mt={1} mb={4}>
                    <input
                      accept="image/*"
                      style={{ display: "none", overflow: "hidden" }}
                      id="raised-button-file-cover"
                      multiple
                      name="coverPic"
                      type="file"
                      // onChange={(e) => setProfilepic(e.target.value)}
                      onChange={(e) => {
                        setCoverImage(URL.createObjectURL(e.target.files[0]));
                        getBase64(e.target.files[0], (result) => {
                          setCoverImage64(result);
                        });
                        setProfilepic(e.target.value);
                      }}
                      // onChange={onBannerImageChange}
                    />
                    <label htmlFor="raised-button-file-cover">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                      >
                        CHOOSE FILE
                      </Button>
                    </label>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Typography variant="body1">
                We recommend an image of at least 400x400. Gifs work too.
              </Typography>
            </Box>
            <Box mt={2}>
              <TextField
                placeholder="Username"
                variant="outlined"
                fullWidth
                className={classes.textfieldbox}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Box>
            <label>
              <Button variant="contained" color="primary" onClick={editprofile}>
                Update {isLoading && <ButtonCircularProgress />}
              </Button>
            </label>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
}
