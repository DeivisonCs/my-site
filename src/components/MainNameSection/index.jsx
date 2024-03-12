import React from "react";
import {NameSection, NameDiv, FirstName, LastName, WhatIam} from "./styles";
import { Button } from "../Button";

const MyNameSection = ({name_1, name_2, office, buttonText}) => {
    return(
        <NameSection>
            <NameDiv>
                <FirstName>{name_1}</FirstName>
                <LastName>{name_2}</LastName>

                <WhatIam className="fadeInAnimation">{office}</WhatIam>

                <Button 
                    typeEdit="view_more fadeInAnimation"
                    text={buttonText}
                />
            </NameDiv>
        </NameSection>
    )
}

export {MyNameSection};