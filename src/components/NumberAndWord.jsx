import React from "react";
import { useParams } from "react-router-dom";


const Number = (props) => {
    const { num } = useParams();

    return (
        isNaN(num) 
        ? <h1>Your word is: { num }</h1>
        : <h1>Your number is: { num }</h1>
    )
}

export default Number;