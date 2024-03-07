import styled from "styled-components";

export const HeaderContainer = styled.div `
    background-image: linear-gradient(to bottom, #000, #0e0e0e,#3b3a3a57);
    height: 80px;
    padding: 30px;
    border-bottom: 2px solid #0e0e0e;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const NameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NameStyle = styled.span`
    color: #fff;
    font-family: Great Vibes, arial, sans-serif;
    font-size: 1.6rem;
    letter-spacing: 2px;
`