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
class App extends Component {
  constructor(){
    super();
    this.state ={
      input : '',
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onButtonSubmit = () =>{
    console.log('Click');
  }
  render(){
  return (
    <div className="App">
       <Particles className ='particles'
        params = {ParticlesOptions}/>
       <Navigation/>
       <Logo/>
       <ImageLinkForm onInputChange ={this.onInputChange} 
       onButtonSubmit = {this.onButtonSubmit}/>
       <Rank/>
      {/*
      
      <FaceRecognittion/>*/
      } 
      </div>
    );
    }
}

export default App;
