import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "../HomeLayout/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#21115E",
  },
  mainBox: {
    position: "relative",
    overflow: "hidden",
    minHeight: "calc(100vh - 415px)",
    // minHeight: 'calc(100vh - 215px)',
    zIndex: "1",
  },
  shade: {
    position: "fixed",
    left: "auto",
    top: "auto",
    right: "0",
    bottom: "10%",
    transform: "rotate(45deg)",
    zIndex: "-1",
    width: " 300px",
    height: "300px",
    borderRadius: " 1000px",
    backgroundImage:
      "radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(56 9 57) 0%, rgb(56 9 57) 95.78%)",
    filter: "blur(100px)",
  },
  shade2: {
    position: "fixed",
    left: "auto",
    top: "5%",
    right: "10%",
    bottom: "auto",
    zIndex: " -1",
    width: " 300px",
    height: "300px",
    borderRadius: " 1000px",
    backgroundImage:
      "radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(56 9 57) 0%, rgb(56 9 57) 95.78%)",
    filter: "blur(100px)",
  },
  shade3: {
    position: "fixed",
    left: "0",
    top: "15%",
    right: "auto",
    bottom: "auto",
    transform: "rotate(45deg)",
    zIndex: " 0",
    width: " 250px",
    height: "250px",
    opacity: "0.8",
    borderRadius: " 1000px",
    backgroundImage:
      "radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(14 42 62) 0%, rgb(28 72 103) 95.78%)",
    filter: "blur(100px)",
  },
  shade4: {
    position: "fixed",
    left: "10%",
    bottom: "10%",
    right: "auto",
    top: "auto",
    transform: "rotate(45deg)",
    zIndex: " -1",
    width: " 250px",
    height: "250px",
    opacity: "0.8",
    borderRadius: " 1000px",
    backgroundImage:
      "radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(42 123 135 / 48%) 0%, rgb(39 121 124 / 72%) 95.78%)",
    filter: "blur(100px)",
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  console.log(history.location);
  return (
    <div className={classes.root}>
      <TopBar />
      <div
        style={
          history.location.pathname !== "/"
            ? { display: "block" }
            : { display: "none" }
        }
      ></div>
      <div className={classes.mainBox}>
        <div className={classes.shade}></div>
        <div className={classes.shade2}></div>
        <div className={classes.shade3}></div>
        <div className={classes.shade4}></div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
