import React from 'react';


const MediaCard = ({title, body, imageUrl})=> (
    <div className = "App">
        <p>(The following para was written using MediaCard component)</p>
        <h2 className = "App-border">{title}</h2>
        <p>{body}</p>
        <br/>
        <br/>
        <img className="App-logo" src={imageUrl} alt=""/>
    </div>
);

export default MediaCard;