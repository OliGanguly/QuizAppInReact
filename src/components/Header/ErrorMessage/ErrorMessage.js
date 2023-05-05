import React from 'react';

function ErrorMessage({errorMsg}) {
    return (
        <div style={{
            width:"100%",
            padding:"10px",
            marginTop:"10px",
            backgroundColor:"red",
            color:"white",
            textAlign:"center",
            borderRadius:"5px"
        }}>
           {errorMsg} 
        </div>
    );
}

export default ErrorMessage;