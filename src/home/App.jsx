
import {React, useLayoutEffect} from "react";
import {Header} from "../components/Header";
import {MyNameSection} from "../components/MainNameSection";
import {AboutMeSection} from "../components/AboutMeSection";
import {DetailsSection} from "../components/DetailsSection";
import {Projects} from "../components/ProjectsSection";
import {FooterSection} from "../components/FooterSection";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".mainNameDiv", {
            scale: 0,
            opacity: 0,
            scrollTrigger: {
                trigger: ".nameMainSection",
                // markers: true,
                start: 'top 50px',
                scrub: true
            }
        })
        gsap.to(".subTextDiv", {
            opacity: 0,
            y: 300,

            scrollTrigger: {
                trigger: ".nameMainSection",
                start: 'top 50px',
                scrub: true
            }
        })
        gsap.to(".myLogoHeader", {
            opacity: 1,

            scrollTrigger: {
                trigger: ".AboutMeSection",
                scrub: true,
                start: "top 500px",
                end: "top 400px"
            }
        })

        return () => {
            gsap.killTweensOf(".firstName, .lastName, .mainNameDiv");
        }
    }, []); 

    return (
    <>
        <Header name="D.C.Santos"/>
        <MyNameSection name_1="Deivison" name_2="Santos" office="Developer" buttonText="View More"/>
        
        <AboutMeSection/>

        <DetailsSection/>
        
        <Projects/>

        <FooterSection
            number="(71) 9 9167-7474"
            email="deivisonddj3@gmail.com"
            github="DeivisonCs"
            linkedin="Deivison Cassimiro"
        />
    </>
    );
}

export default App;
