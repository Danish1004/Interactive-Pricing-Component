import React, { useState } from "react";
import Heading from "./Heading";
import Card from "./Card";
import Footer from "./Footer";
import "./styles.css";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div className="appContainer" id={theme}>
        <div className="app">
          <Heading />
          <Card />
        </div>

        <div className="switch1">
          <label>{theme === "light" ? "Light Mode" : "Dark  Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
