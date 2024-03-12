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
    padding-bottom: 90px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    & .fadeInAnimation {
        animation: fadeInAnimation 2s ease-in 3.5s forwards;
    }

    @keyframes fadeInAnimation {
        from {
            transform: translate(-40px, 20px);
            opacity: 0;
        }
        to {
            transform: translate(-40px, -10px);
            opacity: 1;
        }
    }
`

export const FirstName = styled.h1`
    font-family: Cinzel Decorative, arial, sans-serif;
    font-size: 6.5em;
    text-shadow: -4px 5px 2px #000;
    transform: translate(-50px, 0px);
    opacity: 0;

    position: absolute;
    top: 33%;

    animation: enteringFirstName 3s ease-in 2s forwards;

    @keyframes enteringFirstName {
        from {
            // transform: translateX(-800px);
            opacity:0;  
        }
        to {
            // transform: translateX(-50px);
            opacity: 1; 
        }
    }
`

export const LastName = styled.h1`
    font-family: Cinzel Decorative, arial, sans-serif;
    font-size: 5.8rem;
    text-shadow: -4px 5px 2px #000;
    transform: translate(80px, 0px);
    opacity: 0;

    position: absolute;
    top: 43%;

    animation: enteringLastName 2.5s ease-in 1s forwards;

    @keyframes enteringLastName {
        10% {
            transform: translateX(600px);
            opacity: 0;
        }
        90% {
            transform: translateX(50px);
            opacity: 1;
        }
        100% {
            transform: translateX(80px);
            opacity: 1; 
        }
    }
`

export const WhatIam = styled.p`
    font-family: Bebas Neue, arial, sans-serif;
    font-size: 3rem;
    color: #b7b7b7;
    text-shadow: 0px 3px 2px #ffffff47;
    transform: translate(-40px, -10px);
    opacity: 0;
`