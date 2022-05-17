import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InvestCard from "src/component/InvestCard";

const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "81px",
    paddingBottom: "40px",
    "& .headbox": {
      // backgroundImage: "url(images/contactbg.png)",
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      // backgroundRepeat: "no-repeat",
      width: "100%",
      paddingTop: "40px",
      paddingBottom: "40px",
      "& h1": {
        fontSize: "38px",
        letterSpacing: "2px",
        color: "#fff",
        fontWeight: "900",
        marginBottom: "10px",
      },
      "& h6": {
        fontSize: "16px",
        fontWeight: "400",
        color: "#EAE9E9",
      },
    },
  },
  contactbox: {
    background: "#ad3bf9",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "45px",
  },
  text: {
    color: "#fff",
    borderRadius: "5px",
  },
  textarea: {
    paddingTop: "70px",
    paddingBottom: "70px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  },
  buttonbox: {
    width: "100%",
    maxWidth: "224px",
    height: "50px",
    fontSize: "18px !important",
    fontWeight: "700 !important",
    color: "#fff",
  },
  detailbox: {
    "& h5": {
      fontSize: "26px",
      fontWeight: "600",
      color: "#fff",
      marginBottom: "30px",
    },
    "& h4": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#d4d4d4",
      marginBottom: "16px",
      "& span": {
        fontSize: "19px",
        fontWeight: "600",
        color: "#fff",
      },
    },
  },
}));
function ContactUs() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerbox}>
      <Box className="headbox">
        <Box textAlign="center">
          <Typography variant="h1">Contact Us</Typography>
          <Typography variant="h6">
            Complete this form to submit your questions or comments.
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box className={classes.textarea}>
          <Grid container spacing={3}>
            <Grid item lg={7} md={7} sm={7} xs={12}>
              <Box className={classes.contactbox}>
                <Grid container spacing={3}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.box}>
                      <TextField
                        placeholder="Name"
                        variant="outlined"
                        fullWidth
                        className={classes.text}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.box}>
                      <TextField
                        placeholder="Email "
                        variant="outlined"
                        fullWidth
                        className={classes.text}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box className={classes.box}>
                      <TextField
                        placeholder="Phone"
                        variant="outlined"
                        fullWidth
                        className={classes.text}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box className={classes.box}>
                      <TextField
                        placeholder="Subject"
                        variant="outlined"
                        fullWidth
                        className={classes.text}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box className={classes.box}>
                      <TextField
                        multiline
                        rows={5}
                        placeholder="Message"
                        variant="outlined"
                        fullWidth
                        className={classes.text}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={3}
                >
                  <Button
                    className={classes.buttonbox}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              lg={5}
              md={5}
              sm={5}
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box className={classes.detailbox}>
                <Box>
                  <Typography variant="h5">
                    You can also email us directly
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4">
                    <span>Contact :</span> &nbsp;Contact@omnihorse.com
                  </Typography>
                  {/* <Typography variant="h4">
                    <span>Sales :</span> &nbsp;sales@omnihorse.com
                  </Typography>
                  <Typography variant="h4">
                    <span>Media :</span> &nbsp;media@omnihorse.com
                  </Typography>
                  <Typography variant="h4">
                    <span>Premium Partnerships :</span>{" "}
                    &nbsp;premium@omnihorse.com
                  </Typography> */}
                  <Typography variant="h4">
                    <span>Looking For Mint Nft Horse</span>
                  </Typography>
                  <Typography variant="h4">
                    <span>MRH?</span> &nbsp;listings@omnihorse.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
