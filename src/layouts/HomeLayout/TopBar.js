import React, { useState, useEffect, useRef, useContext } from "react";
import clsx from "clsx";
import { useWeb3React } from "@web3-react/core";
import { Link } from "react-router-dom";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import Slide from "@material-ui/core/Slide";
import { BsWallet } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { sortAddress } from "src/utils";
import {
  AppBar,
  Divider,
  List,
  ListItem,
  Box,
  Select,
  MenuList,
  MenuItem,
  InputLabel,
  Toolbar,
  makeStyles,
  Input,
  Popper,
  Grow,
  Paper,
  Button,
  Hidden,
  TextField,
  Container,
  Typography,
  FormLabel,
  FormControl,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import SwipeableTemporaryDrawer from "./RightDrawer";
import { PieChart as PieChartIcon, Info as InfoIcon } from "react-feather";
import Logo from "src/component/Logo";
// import SearchBar from "@material-ui/core/SearchBar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
import { Card } from "@material-ui/core";
import { SUPPORTED_WALLETS } from "src/connectors";
import { UserContext } from "src/context/User";
const drawerWidth = 290;
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdb52d",
  },
  submenu: {
    borderTop: "3px solid #7231c4",
    top: "17px !important",
  },
  noborderselect: {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #484850",
      borderRadius: "5px 5px 0 0",
    },
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  drawerHeader: {
    padding: "5px 10px",
    backgroundColor: "#F2EDED",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h4": {
      fontWeight: 500,
      fontSize: "23px",
      lineHeight: "30px",
      color: "#403B58",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#fff",
  },
  noBorder: {
    border: "none",
  },
  toolbar: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
    borderRadius: 0,
    minWidth: "auto",
    color: "#000",
    height: "31px",
    padding: "0px 7px",
    fontFamily: "'Inter', sans-serif",
    marginLeft: "15px",
    marginRight: "20px",
    "@media (max-width: 900px)": {
      fontStyle: "normal",
      letterSpacing: "-0.6px",
      lineHeight: "24px",
      color: "#FFF",
      padding: "5px !important",
      height: "51px",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  navButton: {
    marginLeft: theme.spacing(1),
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    "& img": {
      width: "30px",
    },
    "& h3": {
      fontSize: "15px",
      fontWeight: "500",
      color: "#222",
    },
  },
  ButtonNav: {
    fontSize: 24,
    lineHeight: 9,
    fontWeight: 700,
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  connectWallet: {
    "& .MuiButton-root:hover": {
      textDecoration: "none",
      backgroundColor: "transparent",
    },
  },
  images: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    justifyContent: "space-evenly",
    "& img": {
      width: "220px",
    },
  },
  searchDiv: {
    textAlign: "right",
  },
  searchbox: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // textAlign:"center",
    maxWidth: "500px",
    margin: "auto",
    "& h5": {
      color: "#fff",
      fontSize: "30px",
    },
    "& div": {
      width: "100%",
    },
  },
  searchbutton: {
    position: "absolute",
    right: 0,
    color: "#fff",
  },
}));

const sections = [
  {
    items: [
      {
        title: "Home",
        icon: PieChartIcon,
        href: "/",
      },
      // {
      //   title: 'NFT Collection',
      //   icon: PieChartIcon,
      //   href: '/marketplace',
      // },
      // {
      //   title: 'About',
      //   icon: PieChartIcon,
      //   href: '/about',
      // },
    ],
  },
];

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar
      className={history.location.pathname !== "/" ? "InnerHeader" : "Header"}
      elevation={0}
      style={{
        border: "none",
        position: "fixed",
        // background: "rgba(255, 255, 255, 0.27)",
        backgroundColor: "#fff",
        backdropFilter: "blur(100px)",
      }}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <TopBarData />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => {},
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default TopBar;

export function TopBarData() {
  const handleToggle = (name) => {
    setOpen1({ ...open1, [name]: !open1[name] });
  };
  const { account } = useWeb3React();
  const anchorRef = { community: useRef(null), user: useRef(null) };
  const classes = useStyles();
  const history = useHistory();
  const [open1, setOpen1] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const user = useContext(UserContext);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClose2 = (event, name) => {
    if (
      anchorRef[name].current &&
      anchorRef[name].current.contains(event.target)
    ) {
      return;
    }

    setOpen1({ ...open1, [name]: false });
  };

  function handleListKeyDown(event, name) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1({ ...open1, [name]: false });
    }
  }
  return (
    <>
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <Grid className="dflex justifybetween">
          <Logo
            onClick={() => {
              history.push("/");
            }}
          />
          {/* <Box flexGrow={1} /> */}
          <Hidden smDown>
            <Box>
              {sections[0].items.map((item, index) => {
                return (
                  <Link className={classes.navButton} to={item.href}>
                    {" "}
                    <Button className={classes.toolbar} key={`nav${index}`}>
                      {item.title}
                    </Button>
                  </Link>
                );
              })}
              {/* <Button
                ref={anchorRef.community}
                aria-controls={open1.community ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                className={classes.toolbar}
                onClick={() => handleToggle("community")}
                endIcon={<ExpandMoreIcon />}
                style={{ margin: "0px 10px" }}
              >
                Account
              </Button> */}
              {/* <Popper
                open={open1.community}
                anchorEl={anchorRef.community.current}
                role={undefined}
                transition
                disablePortal
                className={classes.submenu}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener
                        onClickAway={(e) => handleClose2(e, "community")}
                      >
                        <MenuList
                          autoFocusItem={open1}
                          id="menu-list-grow"
                          onKeyDown={(e) => handleListKeyDown(e, "community")}
                        >
                          <MenuItem component={Link} to="/userProfile">
                            User Profile
                          </MenuItem>
                          <MenuItem component={Link} to="/">
                            Logout
                          </MenuItem>
                        
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper> */}
              {/* {account ? (
                <Button
                  color="inherit"
                  aria-label="open drawer"
                  variant="contained"
                  // color="primary"
                  onClick={() => user.deactivateWallet()}
                  className={clsx(open && classes.hide)}
                >
                  Disconnect {account ? sortAddress(account) : ""}
                </Button>
              ) : (
                <Button
                  color="inherit"
                  aria-label="open drawer"
                  variant="contained"
                  // color="primary"
                  onClick={() => setOpen(true)}
                  className={clsx(open && classes.hide)}
                >
                  Connect Wallet{" "}
                </Button>
              )} */}
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Box>
              {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <BsWallet style={{ color: "#190059" }} />
              </IconButton> */}

              {/* <SwipeableTemporaryDrawer sections={sections} /> */}
            </Box>
          </Hidden>
        </Grid>
      </Container>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h4">Wallet</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <GrClose />
          </IconButton>
        </div>
        <Box
          mb={2}
          p={2}
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <figure>
            <img src="/images/product1.png" alt="" />
          </figure>
          <Box>
            <Typography variant="body2">
              Connect with one of our available wallet providers.
            </Typography>
          </Box>
        </Box>
        <Box className="subTotalBox" mt={2}>
          <Box p={2}>
            <Divider />
          </Box>

          <Box mt={3} p={2} className="walletlist">
            <List style={{ padding: "10px !important" }}>
              {SUPPORTED_WALLETS?.map((item, i) => {
                return (
                  <ListItem key={i}>
                    <Button
                      className={classes.link}
                      onClick={() => {
                        window.localStorage.removeItem("walletName");
                        window.localStorage.setItem("walletName", item.name);
                        user.connectWallet(item.data);
                      }}
                    >
                      <Typography variant="h3">{item.data.name}</Typography>
                      <img src={item.data.iconName} alt="" />
                    </Button>
                  </ListItem>
                );
              })}

              {/* <Box mt={1}>
                <ListItem>
                  <Box className={classes.link}>
                    <Typography variant="h3">Wallet Connect</Typography>
                    <img src="/images/wallet.png" alt="metamask" />
                  </Box>
                </ListItem>
              </Box> */}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
