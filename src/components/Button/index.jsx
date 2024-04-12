import React from "react";
import {ButtonText, ButtonContainer} from "./styles";

export const scrollTo = (sectionId) => {
    let section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const Button = ({text, linkedTo, typeEdit}) => {


    return (
        <ButtonContainer className={typeEdit}>
            <ButtonText onClick={() => scrollTo(linkedTo)}>{text}</ButtonText>
        </ButtonContainer>
    );
}

export {Button};