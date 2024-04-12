import { React, useLayoutEffect, useRef} from "react";
import { AboutMeDiv } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMeSection = () => {

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
                    end: "top 55%"
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
            .fromTo("#text_1", {
                opacity: 0,
                x: 100
            }, {
                opacity: 1,
                x: 0
            })
            .fromTo("#text_2", {
                opacity: 0,
                letterSpacing: 100
            }, {
                opacity: 1,
                letterSpacing: 0
            })
            .fromTo("#text_3", {
                opacity: 0,
                x: -100
            }, {
                opacity: 1,
                x: 0
            })
        }, aboutRef)

        return(() => {
            gsap.killTweensOf(".AboutMeContent");
        })
    }, []);


    return(
        <AboutMeDiv className="AboutMeSection" id="aboutMe" ref={aboutRef}>
            <h2 className="AboutMeContent" id="about-me-title">About Me</h2>
            <span className="AboutMeContent" id="about-me-underline"></span>

            <div className="AboutMeContent" id="about-me-text">
                <p id="text_1">
                    Hi, I'm Deivison Cassimiro dos Santos. I'm always trying to learn something new and that's inspired me to study programming. I live in Brazil and I started my career at the college, beside that I always try to do some courses to improve my knowledge.
                </p> 
                <p id="text_2">
                    I started learning <mark>C</mark> at the college and study <mark>JavaScript</mark>, <mark>HTML</mark> and <mark>CSS</mark> on my own. Later that year a professor invited me to work on a project for the university itself, which made me to study <mark>Python</mark> to deal with this new challenge. Unfortunately, the project was stopped, and I couldn't finish it, but learned a lot working there.
                </p>
                <p id="text_3">
                    I want to work as a Full-Stack developer or Mobile Developer, but I know there's a long journey  ahead, but right now, I just wanna learn everything I can to become a better professional
                </p>
            </div>
        </AboutMeDiv>
    );
}

export { AboutMeSection };