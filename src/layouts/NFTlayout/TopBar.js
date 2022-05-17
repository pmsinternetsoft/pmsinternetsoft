import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  InputBase,
  Drawer,
  Grid,
  Link,
  MenuItem,
  Box,
  Container,
  TextField,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Logo from "./../../component/Logo";
// import { UserContext } from "src/context/User";
import { useWeb3React } from "@web3-react/core";
import { FaUser } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";

const headersData = [
  {
    label: "Status",
    href: "/status",
  },
  {
    label: "Help",
    href: "/help",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    height: "68px",
    position: "absolute",
    backgroundColor: "transparent",
    paddingRight: "0",
    paddingLeft: "0px",
    "@media (max-width: 1280px)": {
      paddingLeft: "0",
      paddingRight: "0px",
      height: "70px",
      paddingTop: "5px",
    },
    "@media (max-width: 900px)": {
      paddingLeft: "0px",
      paddingRight: "0px",
      height: "70px",
      paddingTop: "5px",
    },
  },
  menuButton: {
    size: "16px",
    marginLeft: "16px",
    fontWeight: 600,

    textTransform: "uppercase",
    letterSpacing: "1px",
    "@media (max-width: 900px)": {
      fontSize: "16px",
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "-0.6px",
      lineHeight: "1.75",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    "MuiInput-underline:hover": {
      borderBottom: "0px solid #52565c",
    },
    "@media (max-width: 900px)": {
      paddingLeft: "75px",
      paddingRight: "20px",
      height: "100%",
    },
  },
  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  logoDrawer: {
    paddingLeft: "10px",
    width: "60px",
    marginBottom: "30px",
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  drawericon: {
    color: "#000",
    position: "absolute",
    top: "3px",
    right: "0px",
    fontSize: "25px",
  },
  logoImg: {
    width: "165px",
    marginTop: "10px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "110px",
    },
  },
  menuMobile: {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: "-0.6px",
    lineHeight: "1.75",
    color: "#fff",
    borderBottom: "1px solid #3e3e3e",
    padding: "16px",
  },
  paper1: {
    background: "black",
    color: "white",
  },
  containerHeight: {
    height: "100%",
    padding: "10px",
    paddingBottom: "10px",
  },
  mainHeader: {
    //justifyContent: "space-between",
    padding: "0px",
  },
  search: {
    // position: "relative",
    // width: "240px",
    // maxWidth: "300px",
    // border: "0 ",
    // borderRadius: "3px",
    // marginRight: "62px",
    // boxShadow:
    //   "0 1px 2px 0 rgba(60, 64, 67, 0.10), 0 2px 6px 2px rgba(60, 64, 67 , 0.05)",
    // // borderRadius: theme.shape.borderRadius,
    // backgroundColor: "#fff",
    // "&:hover": {
    //   backgroundColor: "#fff",
    // },
    "@media (max-width: 900px)": {
      width: "300px",
      maxWidth: "400px",
    },
    // marginRight: theme.spacing(2),

    // width: "100%",
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    // padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "flex-end",
    color: "black",
    width: "100%",
    color: "rgba(34,196,254,1)",
  },
  faUser: {
    height: "35px",
    width: "35px",
    borderRadius: "50%",
    background: "#713FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "Center",
    margin: "10px 10px",
  },
  margin: {
    paddingTop: "8px",
    borderRadius: "5rem",
    paddingLeft: "8px",
    textDecoration: "none",
    borderBottom: "none",
    "&:before": {
      borderBottom: "none",
      "&:active": {
        borderBottom: "none",
      },
    },
    "@media(max-width:570px)": {
      display: "none",
    },
    "@media(max-width:450px)": {
      width: "137px",
    },
  },
  textformfield: {
    paddingTop: "8px",
    borderRadius: "5rem",
    paddingLeft: "8px",
    width: "25rem",
    paddingBottom: "8px",
  },
}));

export default function Header() {
  const {
    header,
    menuMobile,
    menuButton,
    toolbar,
    drawerContainer,
    drawericon,
    logoImg,
    logoDrawer,
    containerHeight,
    search,
    searchIcon,
    mainHeader,
    headerInner,
  } = useStyles();
  const history = useHistory();
  const classes = useStyles();
  const { account, chainId } = useWeb3React();
  // const user = useContext(UserContext);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 950
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const [searchInput, setSearchInput] = useState("");
  const [myOptions, setmyOptions] = useState("");

  const onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      if (searchInput !== "") {
        history.push({
          pathname: "/search",
          search: searchInput,
        });
        // alert(searchInput);
      } else {
        setSearchInput("");
        history.push({
          pathname: "/search",
          search: searchInput,
        });
        // alert("empty");
        // window.location.href = "/search";
      }
    }
  };

  // $(document).on("click", "#go", myFunction).on("keypress", this, myFunction);
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <Grid container>
          <Grid item direction="row" style={{ paddingLeft: "20px" }} lg={4}>
            <TextField
              placeholder="Search "
              className={classes.textformfield}
              autoFocus={true}
              inputProps={{ "aria-label": "search" }}
              value={searchInput}
              onKeyDown={onKeyDown}
              onChange={(e) => setSearchInput(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        history.push({
                          pathname: "/search",
                          search: searchInput,
                        })
                      }
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {/* </div> */}
          <Grid
            item
            lg={8}
            direction="row"
            style={{
              paddingLeft: "20px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            {getMenuButtons()}

            <Box className={classes.faUser}>
              <FaUser />
            </Box>

            <BiWallet
              style={{
                color: "#fff",
                width: "29px",
                height: "23px",
                margin: "16px 16px",
              }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img className={logoDrawer} src="images/logo.png" alt="" />

            {getDrawerChoices()}

            <Link
              component={RouterLink}
              to={"/Login"}
              color="inherit"
              style={{ textDecoration: "none" }}
              key="label"
            >
              <MenuItem className={menuMobile}>
                {typeof account !== "undefined" ? "Profile" : "Connect"}
              </MenuItem>
            </Link>
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <div style={{ paddingLeft: "20px" }}>
          <div className={search}>
            {/* <Button onClick={searchHandler}> */}

            {/* </Button> */}
            <TextField
              className={classes.margin}
              placeholder="Search"
              autoFocus={true}
              inputProps={{ "aria-label": "search" }}
              value={searchInput}
              onKeyDown={onKeyDown}
              onChange={(e) => setSearchInput(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        history.push({
                          pathname: "/search",
                          search: searchInput,
                        })
                      }
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <IconButton
            className={drawericon}
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon
              width="60px"
              height="60px"
              style={{
                marginTop: "5px",
                color: "#E19C32",
              }}
            />
          </IconButton>
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem className={menuMobile}>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Box>
      <Link href="/">
        <Logo className={logoImg} />
      </Link>
    </Box>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <AppBar
      position="relative"
      className={
        history.location.pathname !== "/" ? { header } : { headerInner }
      }
      elevation={0}
      style={
        history.location.pathname !== "/"
          ? {
              position: "relative !important",
              background:
                "linear-gradient(152.97deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)",
              backdropFilter: "blur(100px)",
              position: "fixed",
            }
          : { backgroundColor: "transparent", position: "absolute" }
      }
    >
      <Container
        maxWidth={history.location.pathname !== "/" ? "lg" : "fixed"}
        className={containerHeight}
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </Container>
    </AppBar>
  );
}
