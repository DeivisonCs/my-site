import React from "react";
import { HeaderContainer, ButtonsContainer, NameContainer, NameStyle } from "./styles";
import { Button } from "../Button" 

const Header = ({name}) => {
    return (
    <>
        <HeaderContainer>
            <ButtonsContainer>
                <Button text="About Me"/>
                <Button text="Skills"/>
                <Button text="Education"/>
                <Button text="Contac Me"/>
            </ButtonsContainer>
        </HeaderContainer>
    </>
    )
}

export { Header };