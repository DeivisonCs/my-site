import React from "react";
import { HeaderContainer } from "./styles";
import { Button } from "../RollButton" 

const Header = () => {
    return (
    <>
        <HeaderContainer>
            <Button text="About Me"/>
            <Button text="Skills"/>
            <Button text="Education"/>
            <Button text="Contac Me"/>
        </HeaderContainer>
    </>
    )
}

export { Header };