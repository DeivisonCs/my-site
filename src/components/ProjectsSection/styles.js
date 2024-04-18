import styled from "styled-components";

export const SectionName = styled.div`
    margin-top: 200px;
    margin-left: 20px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 70px;

    & h1 {
        color: #b7b7b7;
        font-size: 5rem;
        font-family: BebasNeue, Arial;
        letter-spacing: .7rem;
    }

    & span {
        background-image: linear-gradient(to left, #ffffff00, #b7b7b7);
        width: 400px;
        padding: 1px;
        border-radius: 5px;

        margin-top: -70px;
    }
`

export const OuterContainer = styled.section`
    width: 100%;
    margin-top: 150px;
    overscroll-behavior: none;
    position: relative;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const ContentContainer = styled.div`
    color: #fff;

    margin-bottom: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;


    & .projectImage img {
        height: 500px;
        border-radius: 20px;
        margin-bottom: -20px;
    }
    & .projectImage img:hover {
        box-shadow: 0px 0px 50px #333;
        scale: 1.01;
        cursor: pointer;
    }

    & h2 {
        font-size: 2rem;
    }

    & p{
        text-align: justify;
        max-width: 500px;
        padding: 0px 20px;
    }


    & .tecnologiesUsed {
        margin-top: -27px;
        
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    & .tecnologiesUsed span img {
        border-radius: 5px;
        width: 20px;
        height: 20px;
    }
`