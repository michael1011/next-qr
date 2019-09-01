import React, { FunctionComponent } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
  },
});

const ThemeProvider: FunctionComponent = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
