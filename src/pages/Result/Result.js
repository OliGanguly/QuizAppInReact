import React from 'react';

function Result({score}) {
    return (
        <div style={{
            height:"100vh",
            display:"flex",
            // border:"2px solid red",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"

        }}>
            <p>Final Score:{score}</p>
            <button>Go To Homepage</button>
        </div>
    );
}

export default Result;