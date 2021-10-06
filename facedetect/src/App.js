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
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 9
        
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.24109807703499267,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.16849199663016,
        "opacity_min": 0.54759898904802,
        "sync": false
      }
    },
    "size": {
      "value": 87.29413134025597,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0,
        "size_min": 6.7396798652064005,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
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
      user: {
        email : '',
        id : '',
        entries : 0,
        joined : ''
      }
    }
  }
  loadUser = (data) =>{
    this.setState({user: {
      id: data.id,
      name : data.name,
      email : data.email,
      entries : data.entries,
      joined: data.joined,
    }})
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
}
  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl:this.state.input});
    app.models.predict(
      'f76196b43bbd45c99b4f3cd8e8b40a8a', this.state.input)
    .then(response =>{
        if(response){
          fetch('http://localhost:3000/image',
          {
            method : 'put',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
              id : this.state.user.id
            })
            
          })
         
        }
        this.displayFaceBox(this.calculateFaceL(response))
        .catch(err => console.log(err))
      }) .then(response => response.json())
         .then(count=>{
           this.setState({users: {
             entries : count
           }})
         } )

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
       <Rank
        loadUser={this.loadUser} onRouteChange={this.onRouteChange}
       />
       <ImageLinkForm onInputChange ={this.onInputChange} 
       onButtonSubmit = {this.onButtonSubmit}/>
        <FaceRecognition box={box} imageUrl={imageUrl}
      />
       
      </div>
        :
      (
        route === 'signin'
        ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        : 
        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      )
        }
      </div>
  
    );
    }
}

export default App;
