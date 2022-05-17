/* eslint-disable no-use-before-define */
import React, { useState, useRef } from "react";
import { useLocation, matchPath } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Box,
  Drawer,
  List,
  ListSubheader,
  makeStyles,
  InputBase,MenuItem,Popper,Grow,Paper,MenuList, Button,
  IconButton,
} from "@material-ui/core";
import Logo from "src/component/Logo";
import { alpha } from "@material-ui/core/styles";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { Menu } from "react-feather";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import NavItem from "src/layouts/DashboardLayout/NavBar/NavItem";

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  toolbar:{
    color: "#000",
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    fontSize:"16px",
    letterSpacing: 0,
    width: "100%",
    borderLeft: "solid 3px transparent",
    borderRadius: 0,
    
    "&.depth-0": {
      "& $title": {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  desktopDrawer: {
    width: 256,
    top: 0,
    height: "100%",
    background: "#f5f5f5",
  },
  avatar: {
    cursor: "pointer",
    width: 50,
    height: 50,
  },
  avatarBig: {
    cursor: "pointer",
    width: 150,
    height: 150,
  },

  search: {
    border: "1px solid #4689c1",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  iconSocial: {
    width: 22,
    height: 22,
    margin: "0 4px",
    color: "#444444",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const NavBar = ({ sections }) => {
  const classes = useStyles();
  const [rightBar, setRightBar] = useState(false);
  const location = useLocation();
  const handleToggle = (name) => {
    setOpen1({ ...open1, [name]: !open1[name] });
  };
  const anchorRef = { community: useRef(null), user: useRef(null) };
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
  const [open1, setOpen1] = React.useState(false);
  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Box p={2}>
          <Logo width="132" />
        </Box>
        
        <Box py={2} className="mobileMenu">
          {sections.map((section, i) => (
            <List
              key={`menu${i}`}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: section.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
        <Button
                ref={anchorRef.community}
                aria-controls={open1.community ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                className={classes.toolbar}
                onClick={() => handleToggle("community")}
                endIcon={<ExpandMoreIcon />}
                style={{     marginTop: "-25px",
                  marginLeft: "5px" }}
              >
                Account
              </Button>
              <Popper
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
                          {/* <MenuItem>Voting</MenuItem>  */}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
       
       <Box className="socialIconsBox">
          <FaFacebookF className={classes.iconSocial} />
          <FaTwitter className={classes.iconSocial} />
          <FaYoutube className={classes.iconSocial} />
          <ImPinterest2 className={classes.iconSocial} />
        </Box>
      
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={() => {
          setRightBar(!rightBar);
        }}
      >
        <Menu color="#222" style={{ width: 23, height: 23 }} />
      </IconButton>

      <Drawer
        anchor="right"
        classes={{ paper: classes.desktopDrawer }}
        open={rightBar}
        onClose={() => {
          setRightBar(false);
        }}
      >
        {content}
      </Drawer>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
