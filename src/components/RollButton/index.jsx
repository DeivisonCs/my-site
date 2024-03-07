import React from "react";
import {ButtonStyle} from "./styles";

const Button = ({text, linkedTo}) => {
    return (
        <ButtonStyle href={linkedTo}>{text}</ButtonStyle>
    );
}

export {Button};