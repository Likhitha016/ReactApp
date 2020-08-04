import React from 'react';
import Input from "../src/components/atoms/inputField/input"
import Card from "./components/molecules/cards/card"
import Item from "./components/organisms/menuItems/menu"
import LandingPage from "./components/pages/landingPage/landingPage"
import './App.css';
import {ThemeProvider} from "@material-ui/styles";

function App() {
    
  return (
    <ThemeProvider theme={theme}>
      <div>
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
