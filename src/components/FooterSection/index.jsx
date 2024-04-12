import React from "react"; 
import {FooterContainer, ContacsContainer, MyName} from "./styles";

import email_icon    from "../../imgs/header_icons/email_icon.svg";
import gitHub_icon   from "../../imgs/header_icons/github_icon.svg";
import linkedin_icon from "../../imgs/header_icons/linkedin_icon.svg";
import whatsapp_icon from "../../imgs/header_icons/whatsapp_icon.svg";

const FooterSection = ({email, linkedin, number, github}) => {
    return (
        <FooterContainer>
            <ContacsContainer>
                <a>
                    <img src={whatsapp_icon} alt="whatsApp icon" />
                    <span>(71) 9 9167-7474</span>
                </a>

                <a>
                    <img src={email_icon} alt="email icon" />
                    <span>deivisonddj3@gmail.com</span>
                </a>

                <a>
                    <img src={gitHub_icon} alt="github icon" />
                    <span>DeivisonCs</span>
                </a>

                <a>
                    <img src={linkedin_icon} alt="linkedin icon" />
                    <span>Deivison Cassimiro</span>
                </a>
            </ContacsContainer>

            <MyName>
                <span className="">Deivison</span>
                <span>Santos</span>
            </MyName>
        </FooterContainer>
    );
};

export { FooterSection };