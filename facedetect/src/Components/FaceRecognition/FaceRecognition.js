import React from 'react';

const FaceRecognition = (imageUrl) =>{
    return(
        <div className = 'center'>
            <img src= {imageUrl} alt= 'Prediction'>

            </img>
        </div>
    );
}

export default FaceRecognition;