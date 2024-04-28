import {React, useLayoutEffect, useRef} from "react";
import { OuterContainer, ContentContainer, SectionName } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import calculatorProject from "../../imgs/projects_imgs/calculatorProject.png";
import appleProject from "../../imgs/projects_imgs/landingPageProject.png";
import inputValidation from "../../imgs/projects_imgs/inputValidationProject.png";
import MyGallery from "../../imgs/projects_imgs/GalleryProject.png";
import Pokedex from "../../imgs/projects_imgs/PokedexProject.png";

import jsIcon from "../../imgs/languages_icons/js_icon.jpeg";
import cssIcon from "../../imgs/languages_icons/css_icon.png";
import htmlIcon from "../../imgs/languages_icons/html_icon.png";
import reactIcon from "../../imgs/languages_icons/react_icon.png";
import pythonIcon from "../../imgs/languages_icons/python_icon.png";


const Projects = () => {

    const projectTitleSectionRef = useRef();
    const projectSectionRef = useRef();
    
    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const titleTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: projectTitleSectionRef.current,
                scrub: true,
                // markers: true,
                start: "top 70%",
                end: "top 30%"
            }
        });
        titleProjectsTimelineAnimation(titleTimeline);


        const projectsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: projectSectionRef.current,
                scrub: true,
                // markers: true,
                start: "top 70%",
                end: "top 0%"
            }
        })
        projectsTimelineAnimation(projectsTimeline);



        return(() => {
            titleTimeline.kill();
            projectsTimeline.kill();
        })
    })

    const titleProjectsTimelineAnimation = (itens) => {
        itens.fromTo("#projects-title, .projects-underscore", {
            opacity: 0,
            x: "-200px"
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.4
        })
    }

    const projectsTimelineAnimation = (itens) => {
        const projectsCard = document.querySelectorAll(".projectContainer");

        projectsCard.forEach(x => {
            itens.fromTo(x, {
                opacity: 0     
            }, {
                opacity: 1,
                stagger: 0.3
            })
        });  
    }

    return (
        <>
        <SectionName id="projectViewControler" ref={projectTitleSectionRef}>
            <h1 className="projectTitleContent" id="projects-title">Projects</h1>
            <span className="projectTitleContent projects-underscore"></span>
        </SectionName>

        <OuterContainer className="projectsSection" ref={projectSectionRef}>

            <ContentContainer className="projectContainer">

                <a className="projectImage" href="https://calculator-react-rosy-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={calculatorProject} alt="Project" />
                </a>

                <h2>Calculator</h2>

                <div className="tecnologiesUsed">
                    <span>
                        <img src={jsIcon} alt="icon JavaScript"/>
                    </span>
                    <span>
                        <img src={reactIcon} alt="icon React"/>
                    </span>
                    <span>
                        <img src={htmlIcon} alt="icon HTML"/>
                    </span>
                    <span>
                        <img src={cssIcon} alt="icon CSS"/>
                    </span>
                </div>


                <p>A calculator built using JavaScript and React. I did it to learn more about how React works.</p>

            </ContentContainer>

            <ContentContainer className="projectContainer">

                <a className="projectImage" href="https://deivisoncs.github.io/Product-Landing-Page/" target="_blank" rel="noopener noreferrer">
                    <img src={appleProject} alt="Project" />
                </a>

                <h2>iPhone Page</h2>

                <div className="tecnologiesUsed">
                    <span>
                        <img src={jsIcon} alt="icon JavaScript"/>
                    </span>
                    <span>
                        <img src={htmlIcon} alt="icon HTML"/>
                    </span>
                    <span>
                        <img src={cssIcon} alt="icon CSS"/>
                    </span>
                </div>


                <p>My first product page, using JavaScript.</p>

            </ContentContainer>

            <ContentContainer className="projectContainer">

                <a className="projectImage" href="https://deivisoncs.github.io/InputValidation-JS/" target="_blank" rel="noopener noreferrer">
                    <img src={inputValidation} alt="Project" />
                </a>

                <h2>Input Validation</h2>

                <div className="tecnologiesUsed">
                    <span>
                        <img src={jsIcon} alt="icon JavaScript"/>
                    </span>
                    <span>
                        <img src={reactIcon} alt="icon React"/>
                    </span>
                    <span>
                        <img src={htmlIcon} alt="icon HTML"/>
                    </span>
                    <span>
                        <img src={cssIcon} alt="icon CSS"/>
                    </span>
                </div>


                <p>An log in form with regex validation. I built it to exercise my React skills and learn how to use regex to validate input fields.</p>

            </ContentContainer>

            <ContentContainer className="projectContainer">
                <a className="projectImage" href="https://deivisoncs.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                    <img src={MyGallery} alt="Project" />
                </a>

                <h2>My Gallery</h2>

                <div className="tecnologiesUsed">
                    <span>
                        <img src={pythonIcon} alt="icon Python"/>
                    </span>
                    <span>
                        <img src={htmlIcon} alt="icon HTML"/>
                    </span>
                    <span>
                        <img src={cssIcon} alt="icon CSS"/>
                    </span>
                </div>


                <p>A gallery made using Python, SQLite and Django. Done as a training to a job.</p>

            </ContentContainer>

            <ContentContainer className="projectContainer">

                <a className="projectImage" href="https://deivisoncs.github.io/Pokedex/" target="_blank" rel="noopener noreferrer">
                    <img src={Pokedex} alt="Project" />
                </a>

                <h2>Pokedex</h2>

                <div className="tecnologiesUsed">
                    <span>
                        <img src={jsIcon} alt="icon JavaScript"/>
                    </span>
                    <span>
                        <img src={htmlIcon} alt="icon HTML"/>
                    </span>
                    <span>
                        <img src={cssIcon} alt="icon CSS"/>
                    </span>
                </div>


                <p>The classic Pokedex project. I did it to learn how to use an API for the first time.</p>
            </ContentContainer>
            
        </OuterContainer>
        </>
    )
};

export { Projects };
