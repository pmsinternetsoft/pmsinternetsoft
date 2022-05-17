import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { Typography, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { BsFillCaretDownFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  faqmain: {
    "& h5": {
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "24px",
      "@media(max-width:880px)": {
        fontSize: "14px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },
  summary: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#fff",
    "@media(max-width:880px)": {
      fontSize: "12px",
    },
  },
}));
const Accordion = withStyles({
  root: {
    background: "none",

    //border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    background: "#7a2cff",
    color: "white",
    // borderBottom: "1px solid #272727",
    marginBottom: -1,
    minHeight: 55,
    borderRadius: "4px",
    "&$expanded": {
      minHeight: 55,
    },
  },

  content: {
    "&$expanded": {
      margin: "12px 0",
      color: "#FFFFFF",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: 0,
  },
}))(MuiAccordionDetails);

export default function FaqData({ data, index }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Box className={classes.faqmain}>
        <Accordion
          square
          defaultExpanded={index == 0 ? true : false}
          //expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            expandIcon={<BsFillCaretDownFill style={{ color: "#FFEBEB" }} />}
          >
            <Typography variant="h5">{data.head}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.summary}>{data.summary}</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
