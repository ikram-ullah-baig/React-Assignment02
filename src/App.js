import React from "react";
import './App.css';

function App({Name, Age}) {
  return <div className = "App-body">
    <h1 className = "App-header">Basic React App</h1>
    <h3 className = "App"><strong>{Name} </strong> says Hello! </h3>
    
    <br/>
    
    <p> Prerequisites for Bootcamp2020:</p>
    <ol> 
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ol>

    <p> Currently learning:</p>
    <ul> 
      <li><b>React</b> (a JS library for building user interfaces)</li>
    </ul>
      
    <p>Expected time to complete BootCamp2020 = <q><strong>{1+2} months</strong></q>
    </p>
    
    <br/>
  </div>
}
export default App;
