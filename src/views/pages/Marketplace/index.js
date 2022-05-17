import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ListIcon from "@material-ui/icons/List";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import MarketplaceCard from "src/component/MarketplaceCard";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PCard from "./PCard";
import AdminCard from "./AdminCard";

const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "140px",
    paddingBottom: "50px",
    "& .heading": {
      padding: "0px 10px 0px 10px",
      "& svg": {
        color: "#fff",
        fontSize: "25px",
      },
    },
    "& h4": {
      fontSize: "25px",
      fontWeight: "700",
      color: "#fff",
      marginTop: "15px",
    },
  },
  root: {
    width: "100%",
  },

  btn: {
    height: "38px",

    color: "#C2C2C2",
    fontSize: "14px",
    fontWeight: "500",

    background: "#7a2cff",
    border: "1px solid #3319a1",
    boxSizing: "border-box",
  },
  btntext: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "500",
  },
  ethbtn: {
    height: "50px",
    "& h6": {
      fontSize: "18px",
      fontWeight: "500",
      color: "#fff",
    },
  },
  features: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #555555",
    backgroundColor: "#272727",

    padding: "3px 10px 3px 10px",
    "& svg": {
      color: "#fff",
      fontSize: "25px",
    },
  },

  svgbtn: {
    padding: "0px",
  },
  TabBox: {
    "& .buttonBox": {
      backgroundColor: "#30274E",

      // borderBottom: "5px solid #272727",
      // [theme.breakpoints.down("xs")]: {
      //     padding: "0 0px",
      //     margin: "0 10px",
      //     display: "inline-block",
      // },
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
        // borderBottom: "5px solid #272727",
        [theme.breakpoints.down("xs")]: {
          fontSize: "12px",
        },
        "&:hover": {
          textDecoration: "none",
          color: "#d3c9ef",
          // borderBottom: "5px solid #fff",
        },
        "&.active": {
          color: "#fff",
          // borderBottom: "5px solid #fff",
          paddingTop: "16px",
          paddingBottom: "16px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "17px",
          backgroundColor: "#713FFF",
        },
      },
    },
  },
  accord: {
    background: "rgba(23, 12, 65, 0.4)",
    border: " 1px solid #332262",
    boxSizing: "border-box",
  },
  accordsumm: {
    background: "#7a2cff",
    border: "1px solid #7231c4",
    boxSizing: "border-box",
    borderRadius: "4px",
  },
}));
function Banner() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");
  const [expanded2, setExpanded2] = React.useState("panel2");
  const [expanded3, setExpanded3] = React.useState("panel3");
  const [tabview, setTabView] = useState("PCard");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false);
  };
  const handleChange3 = (panel) => (event, newExpanded) => {
    setExpanded3(newExpanded ? panel : false);
  };
  return (
    <Box className={classes.bannerbox}>
      <Container>
        <Grid container spacing={8}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box className={classes.sidebox}>
              <div className={classes.root}>
                <Accordion
                  square
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    className={classes.accordsumm}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Box className="heading" pt={2} pb={2}>
                      <Typography className={classes.btntext}>
                        Status
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accord}>
                    <Box className={classes.buttonboxlist} mt={1} width="100%">
                      <Grid container spacing={2}>
                        <Grid item={6} md={6} sm={6} xs={12}>
                          {" "}
                          <Button fullWidth className={classes.btn}>
                            Newly List
                          </Button>
                        </Grid>
                        <Grid item={6} md={6} sm={6} xs={12}>
                          {" "}
                          <Button fullWidth className={classes.btn}>
                            Favorites
                          </Button>
                        </Grid>
                        <Grid item={6} md={6} sm={6} xs={12}>
                          {" "}
                          <Button fullWidth className={classes.btn}>
                            Newly List
                          </Button>
                        </Grid>
                        <Grid item={6} md={6} sm={6} xs={12}>
                          {" "}
                          <Button fullWidth className={classes.btn}>
                            Favorites
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className={classes.root}>
                <Accordion
                  square
                  expanded={expanded2 === "panel2"}
                  onChange={handleChange2("panel2")}
                >
                  <AccordionSummary
                    className={classes.accordsumm}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Box className="heading" pt={2} pb={2}>
                      <Typography className={classes.btntext}>Price</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accord}>
                    <Box className={classes.buttonboxlist} width="100%" mt={1}>
                      <Grid container spacing={2}>
                        <Grid item={12} md={12} sm={12} xs={12}>
                          <Box mt={1}>
                            <Button
                              className={classes.ethbtn}
                              variant="contained"
                              color="primary"
                              fullWidth
                            >
                              <Box width="100%">
                                <Box
                                  display="flex"
                                  justifyContent="center"
                                  alignItems="center"
                                >
                                  <Box>
                                    <img
                                      src="images/ethwhite.png"
                                      alt=""
                                      width="100%"
                                      style={{
                                        width: "100%",
                                        maxWidth: "14px",
                                      }}
                                    />
                                  </Box>
                                  &nbsp; &nbsp;
                                  <Box>
                                    <Typography variant="h6">ETH</Typography>
                                  </Box>
                                </Box>
                              </Box>
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item={6} md={6} sm={6} xs={12}>
                          {" "}
                          <Button fullWidth className={classes.btn}>
                            MIN
                          </Button>
                        </Grid>
                        <Grid item={6} md={6} sm={6} xs={12}>
                          {" "}
                          <Button fullWidth className={classes.btn}>
                            MAX
                          </Button>
                        </Grid>
                      </Grid>
                      <Box>
                        <Typography variant="h4">Features</Typography>
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className={classes.root}>
                <Box className={classes.subbox}>
                  <Accordion>
                    <AccordionSummary
                      className={classes.accordsumm}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Box className="heading" pt={2} pb={2}>
                        <Box display="flex">
                          <IconButton className={classes.svgbtn}>
                            <ListIcon />
                          </IconButton>
                          &nbsp; &nbsp;
                          <Typography className={classes.btntext}>
                            Board
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accord}>
                      <Box
                        className={classes.buttonboxlist}
                        width="100%"
                        mt={1}
                      >
                        <Grid container spacing={2}>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              CBSE
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              CISCE
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              IGCSE
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              CIE
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </div>
              <div className={classes.root}>
                <Box className={classes.subbox}>
                  <Accordion>
                    <AccordionSummary
                      className={classes.accordsumm}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Box className="heading" pt={2} pb={2}>
                        <Box display="flex">
                          <IconButton className={classes.svgbtn}>
                            <ListIcon />
                          </IconButton>
                          &nbsp; &nbsp;
                          <Typography className={classes.btntext}>
                            Gender
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accord}>
                      <Box
                        className={classes.buttonboxlist}
                        width="100%"
                        mt={1}
                      >
                        <Grid container spacing={2}>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              Gelding
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              Mare
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </div>
              <div className={classes.root}>
                <Box className={classes.subbox}>
                  <Accordion
                    square
                    expanded={expanded3 === "panel3"}
                    onChange={handleChange3("panel3")}
                  >
                    <AccordionSummary
                      className={classes.accordsumm}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Box className="heading" pt={2} pb={2}>
                        <Box display="flex">
                          <IconButton className={classes.svgbtn}>
                            <ListIcon />
                          </IconButton>
                          &nbsp; &nbsp;
                          <Typography className={classes.btntext}>
                            Gender Type
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accord}>
                      <Box
                        className={classes.buttonboxlist}
                        width="100%"
                        mt={1}
                      >
                        <Grid container spacing={2}>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              Colt
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              Filly
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              Gelding
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              Stallion
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              Mare
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </div>
              <div className={classes.root}>
                <Box className={classes.subbox}>
                  <Accordion>
                    <AccordionSummary
                      className={classes.accordsumm}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Box className="heading" pt={2} pb={2}>
                        <Box display="flex">
                          <IconButton className={classes.svgbtn}>
                            <ListIcon />
                          </IconButton>
                          &nbsp; &nbsp;
                          <Typography className={classes.btntext}>
                            Colour
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accord}>
                      <Box
                        className={classes.buttonboxlist}
                        width="100%"
                        mt={1}
                      >
                        <Grid container spacing={2}>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              GREY
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              PALOMINO
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              white
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              Dun
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </div>
              <div className={classes.root}>
                <Box className={classes.subbox}>
                  <Accordion>
                    <AccordionSummary
                      className={classes.accordsumm}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Box className="heading" pt={2} pb={2}>
                        <Box display="flex">
                          <IconButton className={classes.svgbtn}>
                            <ListIcon />
                          </IconButton>
                          &nbsp; &nbsp;
                          <Typography className={classes.btntext}>
                            Age
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accord}>
                      <Box
                        className={classes.buttonboxlist}
                        width="100%"
                        mt={1}
                      >
                        <Grid container spacing={2}>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              46th YEARS
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              20 YEARS
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              10 YEARS
                            </Button>
                          </Grid>
                          <Grid item={6} md={6} sm={6} xs={12}>
                            {" "}
                            <Button fullWidth className={classes.btn}>
                              18 YEARS
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </div>
            </Box>
          </Grid>

          <Grid item lg={8} md={8} sm={12} xs={12}>
            {/* <Box className={classes.TabBox}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4} lg={4}>
                  <Box className="buttonBox">
                    <Link
                      className={tabview === "PCard" ? "active" : " "}
                      onClick={() => setTabView("PCard")}
                    >
                      P2P
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4}>
                  <Box className="buttonBox">
                    <Link
                      className={tabview === "AdminCard" ? "active" : " "}
                      onClick={() => setTabView("AdminCard")}
                    >
                      Admin
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={4}>
              {tabview === "PCard" ? <PCard /> : ""}
              {tabview === "AdminCard" ? <AdminCard /> : ""}
            </Box> */}
            <Box>
              <PCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;
