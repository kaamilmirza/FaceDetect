import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({ onInputChange ,onButtonSubmit}) =>{
    return(
        <div>
            <div className ='pa4 br4 shadow-5 form center ma4 mt0 center' style = {{background: 'white' }} >
            <p className ='f3 '>
                {'This app will detect faces in your pictures'}
            </p>
                <div className = 'space zaxis '>
                    <input className = 'f4 w-80 br3 pv3 mb2 inputfield' type = 'tex' onChange ={onInputChange}/>
                    <button 
                    onClick = {onButtonSubmit}
                    className ='f4 link dim br4 ph3 mb2 white bg-white grow' 
                    style = {{color : 'black'}}
                    >Detect</button>
                </div> 
            </div>
    </div>

    );
}

export default ImageLinkForm;