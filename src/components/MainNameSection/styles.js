import styled from "styled-components";

export const NameSection = styled.section`
    background-image: radial-gradient(circle at -80px -80px, #fff, #000);
    height: 800px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const NameDiv = styled.div`
    width: 70vw;
    height: 50vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FirstName = styled.h1`
    font-family: Cinzel Decorative, arial, sans-serif;
    font-size: 6.5rem;
    margin-bottom: -45px;

    transform: translate(-50px, 0px);
`

export const LastName = styled.h1`
    font-family: Cinzel Decorative, arial, sans-serif;
    font-size: 5.8rem;

    transform: translate(80px, 0px);
`

export const WhatIam = styled.p`
    font-family: Bebas Neue, arial, sans-serif;
    font-size: 3rem;

    transform: translate(-40px, -10px);
`