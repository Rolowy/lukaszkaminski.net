import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.lazy";
import styled, { ThemeContext } from "styled-components";


import './App.css'

import Home from "./pages/home/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoFound from "./pages/NoFound";


export const Theme = createContext(null);

const Style = styled.div`
  //something here will be
`

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    //console.log('Poszło');
    setTheme((val) => (val === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Style id={theme}>
      <Navigation toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NoFound />}></Route>
      </Routes>
    </Style>
    </ThemeContext.Provider>
  );
}

export default App;
