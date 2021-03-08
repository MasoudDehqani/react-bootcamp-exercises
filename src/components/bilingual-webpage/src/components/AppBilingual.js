import React, { Component } from "react";
import Navbar from "./Navbar";
import LanguageProvider from "./Language"
import "../index.css"

const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  )
}

export default App;