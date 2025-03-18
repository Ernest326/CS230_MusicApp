import { Container, Typography } from "@mui/material";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Albums from "./pages/Albums/Albums";
import Artist from "./pages/Artist/Artist";
import Songs from "./pages/Songs/Songs";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
