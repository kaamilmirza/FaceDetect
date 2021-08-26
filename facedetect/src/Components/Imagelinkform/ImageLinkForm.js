import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = () =>{
    return(
        <div>
            <div className ='pa4 br4 shadow-5 form center' style = {{background: 'white' }} >
            <p classname ='f3 '>
                {'This app will detect faces in your pictures'}
            </p>
                <div className = 'space '>
                    <input className = 'f4 pa2 w-70 br3 ph7 pv3 mb2 dib' type = 'text' />
                    <button className ='f4 link dim br4 ph3 mb2 white bg-white grow' style = {{color : 'black'}}>Detect</button>
                </div> 
            </div>
    </div>

    );
}

export default ImageLinkForm;