import React from 'react';
import { Image } from 'react-bootstrap';


function Header(props) {

    //  If window.location === whatever , change classname attribute to whatever for background

    // OR //

    //  In App.js, if window.location === whatever, 
    //  setBackground state to url of asset and then src={backgroundState}

    // or src= {()=> setSRC('url of image')}

    return (
        <div>
            <Image src={props.src} />
        </div>
    )
};

export default Header;