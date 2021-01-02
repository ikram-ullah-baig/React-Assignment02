import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MediaCard from './MediaCard'
import Gate from "./gate";


ReactDOM.render(
  <>
  <App Name="Ikram Ullah Baig" Age = {29}/>
  <MediaCard
    title = "Practice React"
    body = "A bit of theory and alot of practice is needed to learn React"
    imageUrl = "http://media.gadgetsin.com/uploads/2009/10/ropid_small_size_robot_1.JPG"/>
  <Gate isOpen = {true}/>
    
  </>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();