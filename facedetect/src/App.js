import React, {Component} from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from  "./Components/Logo/Logo";
import Clarifai from 'clarifai'; 
import "./App.css";
import "./Components/Imagelinkform/ImageLinkForm.css"
import "./index.js"; 
import ImageLinkForm from "./Components/Imagelinkform/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey : 'c45424fb6f73418c939cc9b7fd260bb3'
});


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
      imageUrl: '',
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{
    console.log('Click');
    this.setState({imageUrl:this.state.input})
    app.models.predict('f76196b43bbd45c99b4f3cd8e8b40a8a', 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg').then(
      function(response){
        console.log(response);
      },
      function(err){

      }
    );
    
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
      <FaceRecognition imageUrl={this.state.imageUrl}/> 
      </div>
    );
    }
}

export default App;
