import { React, useLayoutEffect, useRef} from "react";
import { AboutMeDiv } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMeSection = ({title, text}) => {

    const aboutRef = useRef(); 
    const timeLine = useRef(); 

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.context(() => {

            timeLine.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".AboutMeContent",
                    scrub: true,
                    // markers: true,
                    start: "top 80%",
                    end: "top 50%"
                }
            })
            .fromTo("#about-me-title", {
                opacity: 0,
                y: 200
            }, {
                opacity: 1,
                y: 0
            })
            .fromTo("#about-me-underline", {
                opacity: 0,
                y: 200
            }, {
                opacity: 1,
                y: 0
            })
            .fromTo("#about-me-text", {
                opacity: 0,
                y: 200
            }, {
                opacity: 1,
                y: 0
            })
        }, aboutRef)

        return(() => {
            gsap.killTweensOf(".AboutMeContent");
        })
    }, []);


    return(
        <AboutMeDiv className="AboutMeSection" id="aboutMe" ref={aboutRef}>
            <h2 className="AboutMeContent" id="about-me-title">{title}</h2>
            <span className="AboutMeContent" id="about-me-underline"></span>

            <p className="AboutMeContent" id="about-me-text">{text}</p>
        </AboutMeDiv>
    );
}

export { AboutMeSection };