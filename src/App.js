import React from 'react';
import './App.css';

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './app/pages/Home';



function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'light' : 'dark',
          primary: {
            // Purple and green play nicely together.
            // main: purple[500],
            main: red[900],
          },
          /*
          secondary: {
            // This is green.A700 as hex.
            main: '#ECECEC',
          },
          inherit: {
            // This is green.A700 as hex.
            main: '#FFF',
          },
          */
        },
      }),
    [prefersDarkMode],
  )


  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
