import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiToolbar: {
      gutters: {
        paddingLeft: "0px",
        "@media(min-width:600px)": {
          paddingLeft: "0px",
          paddingRight: "0px",
        },
      },
    },
    MuiSelect: {
      selectMenu: {
        // border: "1px solid #8a8b8b",
        width: "100%",
        borderRadius: "5px",
        fontSize: "13px",
        height: "36px",
        margin: "0",
        display: "block",
        padding: "10px 12px 7px",
        display: "flex",
        alignItems: "center",
        // border: "1px solid #e09b32 !important",
        // backgroundColor: "#3F3F3F !important",
      },
      select: {
        "&:focus": {
          borderRadius: "5px",
        },
      },
      icon: {
        color: "#FFFFFF",
      },
    },
    MuiDivider: {
      root: {
        border: "none",
        height: "1px",
        margin: "0",
        flexShrink: "0",
        backgroundColor: "#EFEFEF",
      },
    },
    MuiInput: {
      underline: {
        "&::before": {
          left: "0",
          right: "0",
          bottom: "0",
          content: '"\\00a0"',
          position: "absolute",
          transition:
            "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderBottom: "none",
          pointerEvents: "none",
          display: "none",
          "&:active": {
            borderBottom: "none",
          },
        },
        "&::after": {
          borderBottom: "0px",
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "0px",
      },
    },
    MuiTableBody: {
      root: {
        // background: "rgba(23, 12, 65, 0.4)",
      },
    },
    MuiNativeSelect: {
      icon: {
        color: "#777575",
      },
      select: {
        backgroundColor: "#272727",
      },
    },
    MuiTableCell: {
      root: {
        border: "1px solid #7231c4",
        borderBottom: "1px solid #7231c4",
        fontSize: "16px",
        fontWeight: "300 !important",
        fontFamily: "'Inter', sans-serif",
        "@media (max-width: 768px)": {
          fontSize: "14px",
        },
      },
      head: {
        color: "#e9c4c4",
        background: "#7a2cff",
        fontWeight: "500 !important",
      },
      body: {
        color: "#fff",
      },
    },
    MuiFormControl: {
      root: {
        backgroundColor: "#5319b5",
        borderRadius: "5px",
        width: "100%",
        // height: "38px",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#837F7F",
        fontSize: "18px",
        fontWeight: "600",

        fontFamily: "'Inter', sans-serif",
        marginTop: "5px",
      },
      colorSecondary: {
        "&.Mui-focused": {
          color: "#222",
        },
      },
    },
    MuiListSubheader: {
      root: {
        color: "#000000",
        fontSize: "22px !important",
        fontWeight: "600 !important",
        lineHeight: "33px !important",
      },
    },
    MuiOutlinedInput: {
      colorSecondary: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          color: "#222",
          borderColor: "#222",
        },
        "&.Mui-focused": {
          color: "#222",
        },
      },
      inputMarginDense: {
        paddingTop: "18.5px",
        paddingBottom: "18.5px",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "1E104D",
        // color: "#fff",
      },
      outlined: {
        padding: "20px",
        width: "100%",
      },
    },
    MuiList: {
      padding: {
        margin: "0px 5px",
      },
      root: {
        background: "#ad3bf9",
        border: "1px solid #7231c4",
        boxSizing: "border-box",
        color: "#fff",
      },
    },
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: "#ad3bf9",
      },
      containerLandscape: {
        flexDirection: "column",
      },
    },

    MuiMenuItem: {
      root: {
        fontSize: "14px",
        margin: "0px 9px",
        fontWeight: "600",
      },
    },
    MuiAccordionSummary: {
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // borderBottom: "1px solid #555555",
        backgroundColor: "#272727",

        padding: "0px 10px 0px 10px",
      },
    },
    MuiIconButton: {
      root: {
        color: "#fff",
      },
    },
    MuiPopover: {
      root: {
        zIndex: 99999,
      },
      paper: {
        backgroundColor: "#170C41",
        color: "#fff",
      },
    },
    MuiListItem: {
      root: {
        alignItems: "self-start",
      },
      gutters: {
        paddingLeft: "5px",
      },
    },
    MuiCheckbox: {
      root: {
        padding: "4px",
        fontSize: "12px",
      },
      colorSecondary: {
        "&.Mui-checked": { color: "#000" },
      },
    },
    MuiFormControlLabel: {
      root: {
        paddingBottom: "0",
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        right: 0,
      },
    },
    MuiDialog: {
      paperScrollPaper: {
        Width: 450,
        maxWidth: "100%",
      },
      paper: {
        overflowY: "unset",
        background: "#6612d6",
        border: "1px solid #7231c4",
        boxSizing: "border-box",
      },
      paperWidthSm: {
        maxWidth: "900px !important",
        width: "100%",
      },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: "#6612d6",
        color: "#fff",
      },
    },
    MuiInputBase: {
      "& :focus": {
        borderColor: "#fff",
      },
      input: {
        fontSize: 14,
        color: "#ffffff",
        height: "1.1876em",
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#6612d6",
      },
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: "#8F8F8F",
        fontSize: "16px",
        fontWeight: "400",
        margin: "0 15px",
      },
      toolbarBtnSelected: {
        margin: "0px 5px",
        marginTop: "7px",
      },
    },
    MuiPickersModal: {
      dialogRoot: {
        width: "100%",
        maxWidth: "326px !important",
      },
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: "#fff",
        color: "#170C41",
      },
      switchHeader: {
        backgroundColor: "#531aa0",
        color: "#fff",
        marginTop: "0px",
        marginBottom: "12px",
      },
      dayLabel: {
        color: "#fff",
      },
    },

    // MuiPickersCalendarHeader: {
    //   switchHeader: {
    //     marginTop: "0px",
    //     marginBottom: "12px",
    //     backgroundColor: "#000",
    //   },
    // },
    MuiBackdrop: {
      root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
    },
    MuiButton: {
      textPrimary: {
        color: "#190059",
      },
      containedSecondary: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "50px",
        color: "#fff",
        fontSize: "14px",
        backgroundColor: "#f30065",
        padding: "5px 19px",
      },

      containedPrimary: {
        backgroundColor: "#4b20ff",
        borderRadius: "5px",
        fontSize: "12px !important",
        color: "#fff",
        // height: "32px",
        "&:hover": {
          // border: "1px solid #fff",
          color: "#fff",
          backgroundColor: "#E547ff",
        },
      },
      contained: {
        // borderRadius: "50px",
        color: "#f3006",
        fontWeight: 700,
        "&:hover": {
          // border: "1px solid #fff",
          color: "#fff",
          backgroundColor: "#7231c4",
        },
      },
      outlined: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        padding: "5px 15px",
      },
      outlinedPrimary: {
        borderRadius: "10px",
        color: "#fff",
        fontWeight: 400,
        padding: "7px 21px",
        border: "1px solid #fff",
        "&:hover": {
          // backgroundColor: "#713FFF",
          // border: "2px solid #E19C32",
          color: "#fff",
        },
      },
      outlinedSizeSmall: {
        padding: "6px 23px",
        fontSize: "16px",
        lineHeight: " 24px",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "0",
      },
    },
    MuiMenu: {
      paper: { top: "47px" },
    },
    MuiTypography: {
      subtitle1: {
        color: "#fff",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: " 16px",
        colorSecondary: {
          color: "#8d8989",
        },
      },
    },
    MuiTable: {
      root: {
        borderCollapse: "none !important",
        "@media(max-width:1225px)": {
          width: "1000px",
        },
      },
      MuiOutlinedInput: {
        notchedOutline: {
          border: "none",
        },
      },
    },
    MuiTableContainer: {
      root: {
        overflowX: "auto",
      },
    },
  },
};

const themesOptions = {
  typography: {
    fontWeight: 400,
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    type: "light",
    action: {
      primary: "#20509e",
    },
    background: {
      default: "#FBFBFD",
      dark: "#f3f7f9",
      paper: colors.common.white,
    },
    primary: {
      main: "#898989",
      dark: "#de0d0d",
      light: "#de0d0d",
    },
    secondary: {
      main: "#fff",
    },
    warning: {
      main: "#ffae33",
      dark: "#ffae33",
      light: "#fff1dc",
    },
    success: {
      main: "#54e18c",
      dark: "#54e18c",
      light: "#e2faec",
    },
    error: {
      main: "#ff7d68",
      dark: "#ff7d68",
      light: "#ffe9e6",
    },
    text: {
      primary: "#52565c",
      secondary: "#999999",
    },
    common: {
      black: "#222222",
    },
  },
};

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
