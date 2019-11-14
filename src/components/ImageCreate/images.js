import React from "react";
import "./css.css";
// var shuffle = require('shuffle-array');

function ImageCreate(props) {

    return (
        <img src={props.image} alt={props.name} className="img-thumbnail img-fluid image" data-clicked={props.clicked}
            onClick={() => props.change(props.id)}></img>
    )
}

export default ImageCreate;
