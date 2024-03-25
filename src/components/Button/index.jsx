import React from "react";
import {ButtonText, ButtonContainer} from "./styles";

const Button = ({text, linkedTo, typeEdit}) => {

    const scrollTo = (sectionId) => {
        let section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <ButtonContainer className={typeEdit}>
            <ButtonText onClick={() => scrollTo(linkedTo)}>{text}</ButtonText>
        </ButtonContainer>
    );
}

export {Button};