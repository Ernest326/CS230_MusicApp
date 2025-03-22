import { Container, Typography } from "@mui/material";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Home from "./pages/Home";
import Albums from "./pages/Albums/Albums";
import Artist from "./pages/Artist/Artist";
import Songs from "./pages/Songs/Songs";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
    background: {
      default: '#2b2b2b',
      paper: '#333'
    },
    text: {
      primary: '#fff',
      secondary: '#fff'
    }
  },
  
  typography: {
    fontFamily: 'Roboto, Arial',
    h1: {
      fontSize: '5rem',
      fontWeight: 500
    },
    button: {
      textTransform: 'none',
    }
  }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;
