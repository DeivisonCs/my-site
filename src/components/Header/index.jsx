import { React, useLayoutEffect } from "react";
import { HeaderContainer, ButtonsContainer, NameContainer, NavHiddenMenu, ContactsContainer } from "./styles";
import { Button } from "../Button" ;
import {scrollTo} from "../../components/Button";
import gsap from 'gsap';

import email_icon    from "../../imgs/header_icons/email_icon.svg";
import gitHub_icon   from "../../imgs/header_icons/github_icon.svg";
import linkedin_icon from "../../imgs/header_icons/linkedin_icon.svg";
import whatsapp_icon from "../../imgs/header_icons/whatsapp_icon.svg";

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


    useLayoutEffect(() => {
        gsap.fromTo('.mainHeaderSection', {
            y: '-100px'
        }, {
            y: '0px',
            duration: 2,
            delay: 3.4
        })
    })


    return (
        <HeaderContainer className="mainHeaderSection">
            <NameContainer className="myLogoHeader" id="nameHeader" onClick={() => scrollTo("homeSection")}>
                    <span className="firstNameHeader">Deivison</span>
                    <span className="lastNameHeader">Santos</span>     
            </NameContainer>


            <ButtonsContainer id="visibleMenu">
                <Button linkedTo="aboutMe" text="About Me"/>
                <Button linkedTo="Skills_Section" text="Skills"/>
                <Button linkedTo="Education_Section" text="Education"/>
                <Button linkedTo="projectViewControler" text="Projects"/>
                <Button linkedTo="Contact_Section" text="Contac Me"/>
            </ButtonsContainer>

            <ContactsContainer id="contactLinksHeader">
                <a href="mailto:deivisonddj3@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img src={email_icon}    alt="Email Logo" />
                </a>
                
                <a href="https://www.linkedin.com/in/deivison-cassimiro-3ab207238/" target="_blank" rel="noreferrer noopener">
                    <img src={linkedin_icon} alt="LinkedIn Logo" />
                </a>

                <a href="https://github.com/DeivisonCs" target="_blank" rel="noreferrer noopener" >
                    <img src={gitHub_icon}   alt="GitHub Logo" />
                </a>

                <a href="whatsapp://send?phone=71991677474" target="_blank" rel="noreferrer noopener">
                    <img src={whatsapp_icon} alt="WhatsApp Logo" />
                </a>
            </ContactsContainer>

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
                    <Button linkedTo="Contact_Section" text="Contact Me"/>
                </ButtonsContainer>
            </NavHiddenMenu>
        </HeaderContainer>
    )
}

export { Header };