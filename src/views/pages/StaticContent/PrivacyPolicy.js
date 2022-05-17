import React from "react";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "84px",
    paddingBottom: "40px",
    "& .headbox": {
      // backgroundImage: `url(images/terms.png)`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "40px",
      "& h1": {
        marginTop: "2rem",
        color: "white",
        fontSize: "38px",
        fontWeight: "900",
        lineHeight: "46px",
      },
    },
    "& .mainbox": {
      // padding: "30px",

      borderRadius: "10px",
      "& p": {
        color: "white",
        "@media(max-width:767px)": {
          fontSize: "14px",
        },
      },
      "& .text": {
        marginTop: "15px",
        "& h4": {
          textAlign: "inherit",
          color: "white",
          fontWeight: "600",
          padding: "7px 0px",
          lineHeight: "22px",
        },
        "& h6": {
          textAlign: "inherit",
          color: "#EAE9E9",
          fontWeight: "400",
          padding: "7px 0px",
          lineHeight: "22px",
          fontSize: "14px",
        },
      },
    },
  },
}));

function Terms() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className="headbox">
          <Typography variant="h1">Privacy Policy</Typography>
        </Box>
        <Container>
          <Box className="mainbox">
            <Box className="text">
              <Typography variant="h4">Foreword and Preamble </Typography>
              <Typography variant="h6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Typography>
              <Box>
                <Typography variant="h6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Typography>
              </Box>
            </Box>
            <Box className="text">
              <Typography variant="h4">Interpretation </Typography>
              <Typography variant="h6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>
            <Box className="text">
              <Typography variant="h4">Definitions </Typography>
              <Typography variant="h6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
              <Box>
                <Typography variant="h6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Typography>
              </Box>
            </Box>
            <Box className="text">
              <Typography variant="h4">Definitions </Typography>
              <Typography variant="h6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
              <Box>
                <Typography variant="h6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Terms;
