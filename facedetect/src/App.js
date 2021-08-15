import React, {Component} from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from  "./Components/Logo/Logo";
import "./App.css";
import "./index.js"; 
function App() {
  return (
    <div className="App">
       <Navigation/>
       <Logo/>
      {/*
      <ImageLinkForm/>
      <FaceRecognittion/>*/
      } 
    </div>
  );
}

export default App;
