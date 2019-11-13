import React from "react";
import "./css.css";

function ImageCreate(props) {
    return (
        <div className="container">
            {props.characters.map(char =>
                (
                    <div className="image" key={char.id}>
                        <img src={char.image} alt="..." className="img-thumbnail" ></img>
                    </div>
                )
            )}
        </div>
    )
}

export default ImageCreate;
