import React, {Component} from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from  "./Components/Logo/Logo";
import "./App.css";
import "./Components/Imagelinkform/ImageLinkForm.css"
import "./index.js"; 
import ImageLinkForm from "./Components/Imagelinkform/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particles from 'react-particles-js';

const ParticlesOptions = {
  "particles": { 
      "number": {
          "value": 100
      },
      "size": {
          "value": 3 
      },
      "density":{
          "enable" : true,
          "value_area" : 700
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

function App() {
  return (
    <div className="App">
       <Particles className ='particles'
        params = {ParticlesOptions}/>
       <Navigation/>
       <Logo/>
       <ImageLinkForm/>
       <Rank/>
      {/*
      
      <FaceRecognittion/>*/
      } 
    </div>
  );
}

export default App;
