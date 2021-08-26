import React, {Component} from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from  "./Components/Logo/Logo";
import "./App.css";
import "./Components/Imagelinkform/ImageLinkForm.css"
import "./index.js"; 
import ImageLinkForm from "./Components/Imagelinkform/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particles from 'react-particles-js';
import { tsParticles  } from "tsparticles";

function App() {
  return (
    <div className="App">
       <Navigation/>
       <Logo/>
       <ImageLinkForm/>
       <Rank/>
       <Particles/>
      {/*
      
      <FaceRecognittion/>*/
      } 
    </div>
  );
}

export default App;
