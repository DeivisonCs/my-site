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
    const educationSection_Ref = useRef();


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

    // --------------------- Skills Section Animation ---------------------
        const skillsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: skillSection_Ref.current,
                scrub: true,
                // markers: true,
                start: "top 70%",
                end: "top 40%"
            }
        });
        titleSkillsAnimation(skillsTimeline);


    // --------------------- Education Section Animation ---------------------

        const educationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: educationSection_Ref.current,
                scrub: true,
                // markers: true,
                start: "top 70%",
                end: "top 45%"
            }
        });
        titleEducationAnimation(educationTimeline);

        return(() => {
            gsap.killTweensOf(".skillContent .education-content");
        })
    })

    const titleSkillsAnimation = (itens) => {
        itens.fromTo("#skill-title, #skill-underscore", {
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
            x: 0,
            stagger: 0.2
        })    
    }

    const titleEducationAnimation = (itens) => {
        itens.fromTo("#education-title, #education-underscore", {
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
            x: 0,
            stagger: 0.2
        })  
    }


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