import {React, useLayoutEffect} from "react";
import { OuterContainer, ContentContainer, SectionName } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import calculatorProject from "../../imgs/calculatorProject.png";
import appleProject from "../../imgs/landingPageProject.png";
import inputValidation from "../../imgs/inputValidationProject.png";
import MyGallery from "../../imgs/GalleryProject.png";
import Pokedex from "../../imgs/PokedexProject.png";


const Projects = () => {
    
    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        // // --------------- Horizontal Scroll -----------------------
        // let projects = gsap.utils.toArray(".projectContainer");
        // gsap.to(projects, {
        //     xPercent: -100 * (projects.length -1),
        //     ease: "none",

        //     scrollTrigger: {
        //         trigger: ".projectsSection",
        //         scrub: 1,
        //         pin: true,
        //         start: "top top",
        //         // markers:true,
        //         snap: 1 / (projects.length - 1),
        //         // Define o fim do scroll lateral
        //         end: "right 10%"
        //     }
        // });

        // return(() => {
        //     gsap.killTweensOf(projects);
        // })
    })

    return (
        <>
        <SectionName id="projectViewControler">
            <h1>Projects</h1>
            <span></span>
        </SectionName>

        <OuterContainer className="projectsSection">

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
