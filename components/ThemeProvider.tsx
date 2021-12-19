import { grey } from "@material-ui/core/colors";
import React, { FunctionComponent } from "react";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: grey,
    secondary: grey,
  },
});

const ThemeProvider: FunctionComponent = function ({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
