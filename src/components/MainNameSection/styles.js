import styled from "styled-components";

// tentar fazer circulo do gradiente entrar, dar uma volta na tela e iluminar ao carregar o site;
// o nome teria um efeito de fade-in
export const NameSection = styled.section`
    background-image: radial-gradient(circle at 100% -80px, #757575, #434343, #1E1E1E 50%);
    height: 100vh;


    display: flex;
    align-items: center;
    justify-content: center;
`

export const NameDiv = styled.div`
    width: 70vw;
    height: 50vh;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FirstName = styled.h1`
    font-family: Cinzel Decorative, arial, sans-serif;
    font-size: 6.5rem;
    margin-bottom: -45px;
    text-shadow: -4px 5px 2px #000;

    transform: translate(-50px, 0px);
`

export const LastName = styled.h1`
    font-family: Cinzel Decorative, arial, sans-serif;
    font-size: 5.8rem;
    text-shadow: -4px 5px 2px #000;

    transform: translate(80px, 0px);
`

export const WhatIam = styled.p`
    font-family: Bebas Neue, arial, sans-serif;
    font-size: 3rem;
    color: #b7b7b7;
    text-shadow: 0px 3px 2px #ffffff47;

    transform: translate(-40px, -10px);
`