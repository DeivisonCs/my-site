import React from "react";
import { AboutMeDiv } from "./styles"; 

const DetailsSection = ({title, text}) => {
    return(
    <>
        <AboutMeDiv>
            <h2 className="AboutMeContent">{title}</h2>
            <span className="AboutMeContent"></span>

            <p className="AboutMeContent">{text}</p>
        </AboutMeDiv>
    </>
    );
}

export { DetailsSection };