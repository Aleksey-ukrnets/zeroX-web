import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import variables from './styles/variables.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: variables.defaultBackground,
      paper: variables.glassColor,
    },
  },
});

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
