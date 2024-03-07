import React from "react";
import { HeaderContainer, ButtonsContainer, NameContainer, NameStyle } from "./styles";
import { Button } from "../RollButton" 

const Header = ({name}) => {
    return (
    <>
        <HeaderContainer>
            <NameContainer>
                <NameStyle>{name}</NameStyle>
            </NameContainer>

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