import React from "react";
import { HeaderContainer, ButtonsContainer, NameContainer } from "./styles";
import { Button } from "../Button" 

const Header = () => {
    return (
    <>
        <HeaderContainer>
            <NameContainer className="myLogoHeader">
                <span className="firstNameHeader">Deivison</span>
                <span className="lastNameHeader">Santos</span>
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