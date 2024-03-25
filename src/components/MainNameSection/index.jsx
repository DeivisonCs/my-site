import {React, useLayoutEffect} from "react";
import {NameSection, NameDiv, FirstName, LastName, WhatIam} from "./styles";
import { Button } from "../Button";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


const MyNameSection = ({name_1, name_2, office, buttonText}) => {


    useLayoutEffect(() => {
    
        gsap.fromTo('.firstName', {
            opacity: 0,
            y: '-50px',
        }, {
            opacity: 1,
            y: 0,
            duration: 2.8,
            delay: 2
        })

        gsap.fromTo('.lastName', {
            opacity: 0,
            x: 300,
        }, {
            opacity: 1,
            x: 150,
            duration: 1.5,
            delay: 1.3
        })


        // gsap.fromTo('.subTextDiv', {
        //     opacity: 0,
        //     y: 40
        // }, {
        //     opacity: 1,
        //     y: 0,
        //     duration: 2,
        //     delay: 4.8
        // })
    })

    return(
        <NameSection>
            <NameDiv className="nameMainSection">
                <div className="mainNameDiv" id="mainNameContent">
                    <FirstName className="firstName" id="changeFontSizeFirstName">{name_1}</FirstName>
                    <LastName className="lastName" id="changeFontSizeLastName">{name_2}</LastName>
                </div>

                <div className="subTextDiv" id="mainContentSubText">
                    <WhatIam className="fadeInAnimation">{office}</WhatIam>
                    <Button
                        linkedTo="aboutMe" 
                        typeEdit="view_more fadeInAnimation"
                        text={buttonText}
                        />
                </div>
            </NameDiv>
        </NameSection>
    )
}

export {MyNameSection};