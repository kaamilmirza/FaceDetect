import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './icons8-brain-50.png';
const Logo = () =>{
    return(
        <div className= "ma4 mt0 center" >
            <Tilt className="Tilt br2 shadow-3" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img style ={{paddingTop : '40px'}} alt="Logo" src ={brain}/> 
                    </div>
            </Tilt>
            
        </div>

    );
}

export default Logo;