import {React, useLayoutEffect, useRef} from "react";
import { OuterContainer, ContentContainer, SectionName } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import calculatorProject from "../../imgs/projects_imgs/calculatorProject.png";
import appleProject from "../../imgs/projects_imgs/landingPageProject.png";
import inputValidation from "../../imgs/projects_imgs/inputValidationProject.png";
import MyGallery from "../../imgs/projects_imgs/GalleryProject.png";
import Pokedex from "../../imgs/projects_imgs/PokedexProject.png";


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
        itens.fromTo(".projects-title, .projects-underscore", {
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
            <h1 className="projectTitleContent projects-title">Projects</h1>
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                    </span>
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                    </span>
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                    </span>
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                    </span>
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                    </span>
                </div>


                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus asperiores dolores tempore labore eius voluptatem exercitationem alias quam laborum. Dolorum est repudiandae itaque aut placeat fugiat vero quo velit?</p>

            </ContentContainer>

            <ContentContainer className="projectContainer">

                <a className="projectImage" href="https://deivisoncs.github.io/Product-Landing-Page/" target="_blank" rel="noopener noreferrer">
                    <img src={appleProject} alt="Project" />
                </a>

                <h2>iPhone Page</h2>

                <div className="tecnologiesUsed">
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt=""/>
                    </span>
                </div>


                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus asperiores dolores tempore labore eius voluptatem exercitationem alias quam laborum. Dolorum est repudiandae itaque aut placeat fugiat vero quo velit?</p>

            </ContentContainer>

            <ContentContainer className="projectContainer">

                <a className="projectImage" href="https://deivisoncs.github.io/InputValidation-JS/" target="_blank" rel="noopener noreferrer">
                    <img src={inputValidation} alt="Project" />
                </a>

                <h2>Input Validation</h2>

                <div className="tecnologiesUsed">
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt=""/>
                    </span>
                </div>


                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus asperiores dolores tempore labore eius voluptatem exercitationem alias quam laborum. Dolorum est repudiandae itaque aut placeat fugiat vero quo velit?</p>

            </ContentContainer>

            <ContentContainer className="projectContainer">
                <a className="projectImage" href="https://deivisoncs.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                    <img src={MyGallery} alt="Project" />
                </a>

                <h2>My Gallery</h2>

                <div className="tecnologiesUsed">
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt=""/>
                    </span>
                </div>


                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus asperiores dolores tempore labore eius voluptatem exercitationem alias quam laborum. Dolorum est repudiandae itaque aut placeat fugiat vero quo velit?</p>

            </ContentContainer>

            <ContentContainer className="projectContainer">

                <a className="projectImage" href="https://deivisoncs.github.io/Pokedex/" target="_blank" rel="noopener noreferrer">
                    <img src={Pokedex} alt="Project" />
                </a>

                <h2>Pokedex</h2>

                <div className="tecnologiesUsed">
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt=""/>
                    </span>
                </div>


                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus asperiores dolores tempore labore eius voluptatem exercitationem alias quam laborum. Dolorum est repudiandae itaque aut placeat fugiat vero quo velit?</p>
            </ContentContainer>
            
        </OuterContainer>
        </>
    )
};

export { Projects };
