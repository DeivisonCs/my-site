import { React, useLayoutEffect, useRef } from "react";
import { DetailsContainer, SkillsContainer, EducationContainer } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                    start: "top 900px",
                    end: "top 500px"
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
                    start: "top 900px",
                    end: "top 600px"
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
                        {/* logo da linguagem */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                </ul>
            </SkillsContainer>

            <EducationContainer id="Education_Section" ref={educationSection_Ref}>
                <h2 className="education-content" id="education-title">Education</h2>
                <span className="title_undercore education-content" id="education-underscore"></span>

                <ul className="education-content" id="education-list">
                    <li>
                        {/* Nome da Formação */}
                        <span>Análise e Desenvolvimento de Sistemas</span>
                        {/* Periodo/Tempo da Formação */}
                        <span>3/2022 - atual</span>
                    </li>
                    <li>
                        {/* Nome da Formação */}
                        <span>Análise e Desenvolvimento de Sistemas</span>
                        {/* Periodo/Tempo da Formação */}
                        <span>3/2022 - atual</span>
                    </li>
                    <li>
                        {/* Nome da Formação */}
                        <span>Análise e Desenvolvimento de Sistemas</span>
                        {/* Periodo/Tempo da Formação */}
                        <span>3/2022 - atual</span>
                    </li>
                </ul>
            </EducationContainer>
        </DetailsContainer>

    )
}

export { DetailsSection };