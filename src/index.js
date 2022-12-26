import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import variables from './styles/variables.scss';
import { Provider } from 'react-redux';
import store from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: variables.defaultBackground,
      paper: variables.glassColor,
    },
    primary: {
      main: variables.colorLimeAccent,
    },
    secondary: {
      main: variables.colorGrayDark,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
      desktopLarge: 1536,
    },
  },
});

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
