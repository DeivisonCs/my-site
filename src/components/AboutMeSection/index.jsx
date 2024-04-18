import { React, useLayoutEffect, useRef} from "react";
import { AboutMeDiv } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMeSection = () => {

    const aboutRef = useRef(); 
    // const timeLine = useRef(); 

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                scrub: true,
                // markers:true,
                start: "top 50%",
                end: "top 10%"
            }
        });

        animateTimeline(timeline);

        return () => {
            timeline.kill();
        };
    }, []);

    const animateTimeline = (timeline) => {
        timeline.fromTo("#about-me-title, #about-me-underline", {
            opacity: 0,
            y: 200
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.2
        }).fromTo("#about-me-text", {
            opacity: 0,
            x: 200
        }, {
            opacity: 1,
            x: 0
        }).fromTo(".about-me-text", {
            opacity: 0,
            x: -100
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.2
        });
    };


    return(
        <AboutMeDiv className="AboutMeSection" id="aboutMe" ref={aboutRef}>
            <h2 className="AboutMeContent" id="about-me-title">About Me</h2>
            <span className="AboutMeContent" id="about-me-underline"></span>

            <div className="AboutMeContent" id="about-me-text">
            <p className="AboutMeContent about-me-text">
                    Hi, I'm Deivison Cassimiro dos Santos. I'm always trying to learn something new and that's inspired me to study programming. I live in Brazil and I started my career at the college, beside that I always try to do some courses to improve my knowledge.
                </p> 
                <p className="AboutMeContent about-me-text">
                    I started learning <mark>C</mark> at the college and study <mark>JavaScript</mark>, <mark>HTML</mark> and <mark>CSS</mark> on my own. Later that year a professor invited me to work on a project for the university itself, which made me to study <mark>Python</mark> to deal with this new challenge. Unfortunately, the project was stopped, and I couldn't finish it, but learned a lot working there.
                </p>
                <p className="AboutMeContent about-me-text">
                    I want to work as a Full-Stack developer or Mobile Developer, but I know there's a long journey ahead, but right now, I just wanna learn everything I can to become a better professional
                </p>
            </div>
        </AboutMeDiv>
    );
}

export { AboutMeSection };