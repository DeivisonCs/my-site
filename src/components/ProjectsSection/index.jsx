import {React, useLayoutEffect} from "react";
import { OuterContainer, ContentContainer } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Projects = () => {

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        let projects = gsap.utils.toArray(".projectContainer");

        gsap.to(projects, {
            xPercent: -100 * (projects.length -1),
            ease: "none",

            scrollTrigger: {
                trigger: ".projectsSection",
                scrub: 1,
                pin: true,
                // Define o fim do scroll lateral
                end: "+=2800"
            }
        });

        return(() => {
            gsap.killTweensOf(projects);
        })
    })

    return (
        <OuterContainer className="projectsSection">
            <ContentContainer className="projectContainer">
                <a>
                    <img src="" alt="" />
                </a>

                <h1>Project Name</h1>

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
                <a>
                    <img src="" alt="" />
                </a>

                <h1>Project Name</h1>

                <div className="tecnologiesUsed">
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt=""/>
                    </span>
                </div>


                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus asperiores dolores tempore labore eius voluptatem exercitationem alias quam laborum. Dolorum est repudiandae itaque aut placeat fugiat vero quo velit?</p>
            </ContentContainer>

            <ContentContainer className="projectContainer">
                <a>
                    <img src="" alt="" />
                </a>

                <h1>Project Name</h1>

                <div className="tecnologiesUsed">
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt=""/>
                    </span>
                </div>


                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus asperiores dolores tempore labore eius voluptatem exercitationem alias quam laborum. Dolorum est repudiandae itaque aut placeat fugiat vero quo velit?</p>
            </ContentContainer>
            
            <ContentContainer className="projectContainer">
                <a>
                    <img src="" alt="" />
                </a>

                <h1>Project Name</h1>

                <div className="tecnologiesUsed">
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt=""/>
                    </span>
                </div>


                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus asperiores dolores tempore labore eius voluptatem exercitationem alias quam laborum. Dolorum est repudiandae itaque aut placeat fugiat vero quo velit?</p>
            </ContentContainer>

            <ContentContainer className="projectContainer">
                <a>
                    <img src="" alt="" />
                </a>

                <h1>Project Name</h1>

                <div className="tecnologiesUsed">
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt=""/>
                    </span>
                </div>


                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus asperiores dolores tempore labore eius voluptatem exercitationem alias quam laborum. Dolorum est repudiandae itaque aut placeat fugiat vero quo velit?</p>
            </ContentContainer>
        </OuterContainer>
    )
};

export { Projects };
