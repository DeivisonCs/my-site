import React from "react";
import { AboutMeDiv } from "./styles"; 

const AboutMeSection = ({title, text}) => {
    return(
        <AboutMeDiv>
            <h2 className="AboutMeContent">{title}</h2>
            <span className="AboutMeContent"></span>

            <p className="AboutMeContent">{text}</p>
        </AboutMeDiv>
    );
}

export { AboutMeSection };