import React from "react";
import { DetailsContainer, SkillsContainer, EducationContainer } from "./styles";

const DetailsSection = () => {
    return (
        <DetailsContainer>
            <SkillsContainer>
                <h2>Skills</h2>
                <span className="title_undercore"></span>

                <ul>
                    <li>
                        {/* logo da linguagem */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                    <li>
                        {/* logo da linguagem */}
                        <img src="" alt="" />
                        {/* nome da linguagem */}
                        <span>JavaScript</span>
                    </li>
                </ul>
            </SkillsContainer>

            <EducationContainer>
                <h2>Education</h2>
                <span className="title_undercore"></span>

                <ul>
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