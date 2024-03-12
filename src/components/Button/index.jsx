import React from "react";
import {ButtonText, ButtonContainer} from "./styles";

const Button = ({text, linkedTo, typeEdit}) => {
    return (
        <ButtonContainer className={typeEdit}>
            <ButtonText href={linkedTo}>{text}</ButtonText>
        </ButtonContainer>
    );
}

export {Button};