import React from "react";
import { HeaderContainer, ButtonsContainer, NameContainer, NavHiddenMenu } from "./styles";
import { Button } from "../Button" 

const Header = () => {
    return (
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

            <NavHiddenMenu>
                <div className="menuBars">
                    <span id="menuBar1"></span>
                    <span id="menuBar2"></span>
                    <span id="menuBar3"></span>
                </div>
                
                <ButtonsContainer className="hiddenMenu">
                    <a>About Me</a>
                    <a>Skills</a>
                    <a>Education</a>
                    <a>Contact Me</a>
                </ButtonsContainer>
            </NavHiddenMenu>
        </HeaderContainer>
    )
}

export { Header };