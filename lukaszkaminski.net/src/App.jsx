import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.lazy";
import { ThemeContext } from "styled-components";


import './App.css'

import Home from "./pages/home/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


export const Theme = createContext(null);


function App() {
  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    setTheme((val) => (val === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div id="app" data-theme={theme}>
      <Navigation toggleTheme={toggleTheme} theme={theme}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
