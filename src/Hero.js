import React from 'react';

const Hero = ({handleLogout}) =>{
    return(
        <selection className="hero">
            <nav>
                <h3>Welcome</h3>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </selection>
    );
};

export default Hero;