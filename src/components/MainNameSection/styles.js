import styled from "styled-components";

export const NameSection = styled.section`
    background-image: radial-gradient(circle at 100% -80px, #ffffffa1, #cbcbcb4a, #bfbfbf00 50%);
    background-color: transparent;
    overflow: hidden;

    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    & .fadeInAnimation {
        animation: fadeInAnimation 2s ease-in 3.5s forwards;
    }

    @keyframes fadeInAnimation {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

export const NameDiv = styled.div`
    position: relative;
    width: 70vw;
    height: 50vh;
    min-height: 480px;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    & .mainNameDiv {
        position: relative;
        top: -10%;
    }

    & .subTextDiv {
        position: absolute;
        bottom: 10%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const FirstName = styled.h1`
    font-family: CinzelDecorative, arial, sans-serif;
    font-size: 8vw;
    text-shadow: -4px 5px 2px #000;
    color: #fff;
`

export const LastName = styled.h1`
    font-family: CinzelDecorative, arial, sans-serif;
    font-size: 7vw;
    text-shadow: -4px 5px 2px #000;
    color: #fff;

    transform: translate(22vw, -3vw);
    margin-bottom: 20px;
`

export const WhatIam = styled.p`

    font-family: GreatVibes, arial, sans-serif;
    text-align: center;
    letter-spacing: .7rem;
    font-size: 4rem;
    color: #c0c0c0;

    text-shadow: 0px 3px 2px #ffffff47;
    opacity: 0;
`