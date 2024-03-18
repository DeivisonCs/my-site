import React from "react";
import {NameSection, NameDiv, FirstName, LastName, WhatIam} from "./styles";
import { Button } from "../Button";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


const MyNameSection = ({name_1, name_2, office, buttonText}) => {

    return(
        <NameSection>
            <NameDiv className="nameMainSection">
                <div className="mainNameDiv" id="mainNameContent">
                    <FirstName className="firstName" >{name_1}</FirstName>
                    <LastName className="lastName" >{name_2}</LastName>
                </div>

                <div className="subTextDiv">
                    <WhatIam className="fadeInAnimation">{office}</WhatIam>
                    <Button 
                        typeEdit="view_more fadeInAnimation"
                        text={buttonText}
                        />
                </div>
            </NameDiv>
        </NameSection>
    )
}

export {MyNameSection};