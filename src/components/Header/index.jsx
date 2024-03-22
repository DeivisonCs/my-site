import React from "react";
import { HeaderContainer, ButtonsContainer, NameContainer, NavHiddenMenu } from "./styles";
import { Button } from "../Button" 

const Header = () => {

    const scrollTo = (sectionId) => {
        let section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <HeaderContainer>
            <NameContainer className="myLogoHeader">
                <span className="firstNameHeader">Deivison</span>
                <span className="lastNameHeader">Santos</span>
            </NameContainer>


            <ButtonsContainer id="visibleMenu">
                <Button text="About Me"/>
                <Button text="Skills"/>
                <Button text="Education"/>
                <Button text="Contac Me"/>
            </ButtonsContainer>

            <NavHiddenMenu id="ocultMenu">
                <div className="menuBars">
                    <span id="menuBar1"></span>
                    <span id="menuBar2"></span>
                    <span id="menuBar3"></span>
                </div>
                
                <ButtonsContainer className="hiddenMenu">
                    <button onClick={() => scrollTo("aboutMe")}>About Me</button>
                    <button onClick={() => scrollTo("Skills_Section")}>Skills</button>
                    <button onClick={() => scrollTo("Education_Section")}>Education</button>
                    <button onClick={() => scrollTo("projectViewControler")}>Projects</button>
                    <button onClick={() => scrollTo("aboutMe")}>Contact Me</button>
                </ButtonsContainer>
            </NavHiddenMenu>
        </HeaderContainer>
    )
}

export { Header };