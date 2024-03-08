import React from "react";
import {ButtonStyle} from "./styles";

const Button = ({text, linkedTo, typeEdit}) => {
    return (
        <ButtonStyle className={typeEdit} href={linkedTo}>{text}</ButtonStyle>
    );
}

export {Button};