import React from "react";
import { useParams } from "react-router-dom";


const Color = (props) => {
    const { word, color1, color2 } = useParams();

    const colors = {
        color: color1,
        backgroundColor: color2
    }

    return (
        <h1 style={colors}>Your word is: { word } </h1>
    )
}

export default Color;