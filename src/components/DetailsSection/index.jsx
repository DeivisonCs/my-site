import { React, useLayoutEffect, useRef } from "react";
import { DetailsContainer, SkillsContainer, EducationContainer } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import jsIcon from "./../../imgs/languages_icons/js_icon.jpeg";
import reactIcon from "./../../imgs/languages_icons/react_icon.png";
import cssIcon from "./../../imgs/languages_icons/css_icon.png";
import htmlIcon from "./../../imgs/languages_icons/html_icon.png";
import pythonIcon from "./../../imgs/languages_icons/python_icon.png";
import cIcon from "./../../imgs/languages_icons/c_icon.png";

const DetailsSection = () => {

    const skillSection_Ref = useRef();
    const skillTimeline = useRef();
    
    const educationSection_Ref = useRef();
    const educationTimeline = useRef();


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

    // --------------------- Skills Section Animation ---------------------
        gsap.context(() => {

            skillTimeline.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".skillContent",
                    scrub: true,
                    // markers: true,
                    start: "top 70%",
                    end: "top 40%"
                }
            })
            .fromTo("#skill-title", {
                opacity: 0,
                x: "-200px"
            },{
                opacity: 1,
                x: 0
            })    
            .fromTo("#skill-underscore", {
                opacity: 0,
                x: "-200px"
            },{
                opacity: 1,
                x: 0
            })    
            .fromTo("#skill-list", {
                opacity: 0,
                x: "-200px"
            },{
                opacity: 1,
                x: 0
            })    
        }, skillSection_Ref)


    // --------------------- Education Section Animation ---------------------
        gsap.context(() => {

            educationTimeline.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".education-content",
                    scrub: true,
                    // markers: true,
                    start: "top 70%",
                    end: "top 45%"
                }
            })
            .fromTo("#education-title", {
                opacity: 0,
                x: "200px"
            },{
                opacity: 1,
                x: 0
            })    
            .fromTo("#education-underscore", {
                opacity: 0,
                x: "200px"
            },{
                opacity: 1,
                x: 0
            })    
            .fromTo("#education-list", {
                opacity: 0,
                x: "200px"
            },{
                opacity: 1,
                x: 0
            })  
        }, educationSection_Ref)

        return(() => {
            gsap.killTweensOf(".skillContent .education-content");
        })
    })



    return (
        <DetailsContainer>
            <SkillsContainer className="skillsContainer" id="Skills_Section" ref={skillSection_Ref}>
                <h2 className="skillContent" id="skill-title">Skills</h2>
                <span className="title_undercore skillContent" id="skill-underscore"></span>

                <ul className="skillContent" id="skill-list">
                    <li>
                        <img className="languageIcon" src={jsIcon} alt="" />
                        <span>JavaScript</span>
                    </li>

                    <li>
                        <img className="languageIcon" src={htmlIcon} alt="" />
                        <span>Html</span>
                    </li>

                    <li>
                        <img className="languageIcon" src={cssIcon} alt="" />
                        <span>Css</span>
                    </li>

                    <li>
                        <img className="languageIcon" src={pythonIcon} alt="" />
                        <span>Python</span>
                    </li>

                    <li>
                        <img className="languageIcon" src={reactIcon} alt="" />
                        <span>React</span>
                    </li>

                    <li>
                        <img className="languageIcon" src={cIcon} alt="" />
                        <span>C</span>
                    </li>
                </ul>
            </SkillsContainer>

            <EducationContainer id="Education_Section" ref={educationSection_Ref}>
                <h2 className="education-content" id="education-title">Education</h2>
                <span className="title_undercore education-content" id="education-underscore"></span>

                <ul className="education-content" id="education-list">
                    <li>
                        <span>Análise e Desenvolvimento de Sistemas</span>
                        <span>03/2022 - atual</span>
                    </li>
                </ul>
            </EducationContainer>
        </DetailsContainer>

    )
}

export { DetailsSection };