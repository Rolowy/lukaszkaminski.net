import React from "react";

import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.lazy";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import styled from "styled-components";


function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
