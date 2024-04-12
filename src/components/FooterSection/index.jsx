import React from "react"; 
import {FooterContainer, ContacsContainer, MyName} from "./styles";
import {scrollTo} from "../../components/Button";

import email_icon    from "../../imgs/header_icons/email_icon.svg";
import gitHub_icon   from "../../imgs/header_icons/github_icon.svg";
import linkedin_icon from "../../imgs/header_icons/linkedin_icon.svg";
import whatsapp_icon from "../../imgs/header_icons/whatsapp_icon.svg";

const FooterSection = ({email, linkedin, number, github}) => {
    return (
        <FooterContainer id="Contact_Section">
            <ContacsContainer>
                <a href="whatsapp://send?phone=71991677474" target="_blank" rel="noreferrer noopener">
                    <img src={whatsapp_icon} alt="whatsApp icon" />
                    <span>{number}</span>
                </a>

                <a href="mailto:deivisonddj3@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img src={email_icon} alt="email icon" />
                    <span>{email}</span>
                </a>

                <a href="https://github.com/DeivisonCs" target="_blank" rel="noreferrer noopener">
                    <img src={gitHub_icon} alt="github icon" />
                    <span>{github}</span>
                </a>

                <a href="https://www.linkedin.com/in/deivison-cassimiro-3ab207238/" target="_blank" rel="noreferrer noopener">
                    <img src={linkedin_icon} alt="linkedin icon" />
                    <span>{linkedin}</span>
                </a>
            </ContacsContainer>

            <MyName onClick={() => scrollTo("homeSection")}>
                <span>Deivison</span>
                <span>Santos</span>
            </MyName>
        </FooterContainer>
    );
};

export { FooterSection };