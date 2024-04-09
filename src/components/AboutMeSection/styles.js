import styled from "styled-components";

export const AboutMeDiv = styled.section`
    height: 50vh;
    // background-color: cyan;
    padding: 15%;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;


    & h2 {
        color: #b7b7b7;
        font-size: 4rem;
        text-align: center;
        font-family: BebasNeue, Arial;
        letter-spacing: .7rem;
    }

    & span {
        // background-color: #b7b7b7;
        background-image: linear-gradient(to left, #ffffff00, #b7b7b7, #ffffff00);
        width: 400px;
        padding: 1px;
        border-radius: 5px;

        margin-top: -70px;
    }

    & p {
        color: #fff;
        max-width: 700px;
        line-height: 1.3em;

        font-size: 1.2rem;
        text-align: center;
    }
`