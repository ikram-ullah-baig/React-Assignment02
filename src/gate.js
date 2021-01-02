import React from 'react';

const Gate = ({isOpen}) => (
    
    <div className = "App">
        <br/>
        <h3 className = "App-border">
         Gate component
        </h3>
        <p>The Gate is: <b>{ isOpen === true ? "open" : "closed"}</b></p>

    </div>
)

export default Gate;