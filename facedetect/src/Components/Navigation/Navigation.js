import React from 'react';

const Navigation = () =>{
    return(
        <nav style ={{display: 'flex' , justifyContent : 'flex-end'}}>
            <p className = 'f3 link dim underline pa3 pointer' style = {{zIndex:'2'}}>Sign out</p>
        </nav>
    );
}

export default Navigation;