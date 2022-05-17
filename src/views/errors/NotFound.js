import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Page from "src/component/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#21115E",
    "& h1": {
      color: "#FFFFFF",
      padding:"8px 0px"
    },
    "& h4": {
      color: "#FFFFFF",
      padding:"8px 0px"
    }
  }
}));

export default function NotFound(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Page title="page not found!">
        <Box pt={20} textAlign="center" className={classes.root}>
          <Typography variant="h1" align="center">
            Oops!
          </Typography>
          <Typography variant="h1" align="center" >
            404 Not Found
          </Typography>
          <Typography variant="h4" align="center" >
            Sorry, an error has occured, Requested page not found!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
          >
            Go to Home Page
          </Button>
        </Box>
      </Page>
    </>
  );
}
