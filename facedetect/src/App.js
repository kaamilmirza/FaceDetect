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
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
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
      box : {},
      route: 'signin',
      issignedin : false,
    }
  }

  calculateFaceL = (facedata) =>{
      const clarifaiFace = facedata.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return{
        leftCol: clarifaiFace.left_col * width,
        topRow : clarifaiFace.top_row * height,
        rightCol : width - (clarifaiFace.right_col * width),
        bottomRow :height - (clarifaiFace.bottom_row) * height,
  }
}

displayFaceBox = (box) =>{
  this.setState({box:box})
  console.log(box);
}
  onInputChange = (event) =>{
    this.setState({input: event.target.valmue});
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl:this.state.input});
    app.models.predict('f76196b43bbd45c99b4f3cd8e8b40a8a', this.state.input).then(
      response =>
        this.displayFaceBox(this.calculateFaceL(response)))
        .catch(err => console.log(err));
  }
  onRouteChange=(route) =>{
    if(route === 'signout'){
      this.setState({issignedin : false})
    }
    else if(route === 'home'){
    this.setState({issignedin : true})
    }
    this.setState({route :route});
  }

  render(){
    const {issignedin, imageUrl, route, box} = this.state;
  return (
    <div className="App">
       <Particles className ='particles'
        params = {ParticlesOptions}/>
       <Navigation  isSignedIn={issignedin} onRouteChange={this.onRouteChange}/>
       { 
         
         route === 'home' 
        ? <div>
       <Logo/>
       <ImageLinkForm onInputChange ={this.onInputChange} 
       onButtonSubmit = {this.onButtonSubmit}/>
       <Rank/>
      <FaceRecognition box={box} imageUrl={imageUrl}
      /> 
      </div>
        :
      (
        route === 'signin'
        ?<Signin onRouteChange={this.onRouteChange}/>
        : 
        <Register onRouteChange={this.onRouteChange}/>
      )
        }
      </div>
  
    );
    }
}

export default App;
