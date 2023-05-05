import React from 'react';
import './Footer.css'

function Footer(props) {
    return (
        <div className='footer'>
          Made with ❤️ by <span> </span>
          <a href="https://www.linkedin.com/in/oli-chowdhury-ganguly-b9a4aa207/"
          style={{ cursor:"pointer",textDecoration:"none"}}
          >Oli</a>
        </div>
    );
}

export default Footer;