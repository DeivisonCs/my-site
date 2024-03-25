import React from "react";
import { HeaderContainer, ButtonsContainer, NameContainer, NavHiddenMenu } from "./styles";
import { Button } from "../Button" 

const Header = () => {

    const activeMenu = () => {
        const menu = document.getElementById('ocultMenu');
        const buttonsMenu = document.getElementById('buttonsNavHiddenMenu');

        if(menu.classList.value.includes('menuHiddenButton')){
            menu.classList.remove('menuHiddenButton');
            buttonsMenu.classList.remove('navButtonsMenuHidden');
        }
        else {
            menu.classList.add('menuHiddenButton');
            buttonsMenu.classList.add('navButtonsMenuHidden');
        }
    }


    return (
        <HeaderContainer>
            <NameContainer className="myLogoHeader">
                <span className="firstNameHeader">Deivison</span>
                <span className="lastNameHeader">Santos</span>
            </NameContainer>


            <ButtonsContainer id="visibleMenu">
                <Button linkedTo="aboutMe" text="About Me"/>
                <Button linkedTo="Skills_Section" text="Skills"/>
                <Button linkedTo="Education_Section" text="Education"/>
                <Button linkedTo="projectViewControler" text="Projects"/>
                <Button linkedTo="aboutMe" text="Contac Me"/>
            </ButtonsContainer>

            <NavHiddenMenu id="ocultMenu" onClick={() => activeMenu()}>
                <div className="menuBars">
                    <span id="menuBar1"></span>
                    <span id="menuBar2"></span>
                    <span id="menuBar3"></span>
                </div>
                
                <ButtonsContainer id="buttonsNavHiddenMenu" className="hiddenMenu">
                    <Button linkedTo="aboutMe" text="About Me"/>
                    <Button linkedTo="Skills_Section" text="Skills"/>
                    <Button linkedTo="Education_Section" text="Education"/>
                    <Button linkedTo="projectViewControler" text="Projects"/>
                    <Button linkedTo="aboutMe" text="Contact Me"/>
                    {/* <button onClick={() => scrollTo("aboutMe")}>About Me</button> */}
                    {/* <button onClick={() => scrollTo("Skills_Section")}>Skills</button> */}
                    {/* <button onClick={() => scrollTo("Education_Section")}>Education</button>
                    <button onClick={() => scrollTo("projectViewControler")}>Projects</button>
                    <button onClick={() => scrollTo("aboutMe")}>Contact Me</button> */}
                </ButtonsContainer>
            </NavHiddenMenu>
        </HeaderContainer>
    )
}

export { Header };