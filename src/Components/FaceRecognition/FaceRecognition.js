import React from 'react';
import './fr.css';
const FaceRecognition = ({imageUrl, box}) =>{
    return(
        <div className = 'center na'>
        <div className ='absolute mt2'>
            <img id = 'inputimage' src= {imageUrl} alt= 'Prediction' height ='auto'/>
              <div className = 'bouding-box' style ={{top:box.topRow, right: box.rightCol, bottom : box.bottomRow , left: box.leftCol}}>
            </div>
            
            </div>
            
        </div>
    );
}

export default FaceRecognition;