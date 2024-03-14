import {React, useLayoutEffect} from "react";
import {NameSection, NameDiv, FirstName, LastName, WhatIam} from "./styles";
import { Button } from "../Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { getSelectionRange } from "@testing-library/user-event/dist/utils";

const MyNameSection = ({name_1, name_2, office, buttonText}) => {

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".mainNameDiv", {
            position: 'fixed',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            top: 10,
            left: 0,
            
            scrollTrigger: {
                trigger: ".nameMainSection",
                markers: true,
                start: 'top 50px',
                scrub: true
            }
        })

        gsap.to('.firstName', {
            fontSize: "1.5rem",
            x: 20,

            scrollTrigger: {
                trigger: ".nameMainSection",
                markers: true,
                start: 'top 50px',
                scrub: true,
            }
        })
        
        gsap.to('.lastName', {
            fontSize: "1.5rem",
            // x: 20,
            // y: 20,
            marginTop: '30px',
            marginLeft: '-110px',

            scrollTrigger: {
                trigger: ".nameMainSection",
                markers: true,
                start: 'top 50px',
                scrub: true,
            }
        })

        gsap.to(".subTextDiv", {
            opacity: 0,
            y: 100,

            scrollTrigger: {
                trigger: ".nameMainSection",
                start: 'top 50px',
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf(".firstName, .lastName, .mainNameDiv");
        }
    }, []);


    return(
        <NameSection>
            <NameDiv className="nameMainSection">
                <div className="mainNameDiv">
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