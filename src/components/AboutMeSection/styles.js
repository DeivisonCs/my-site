import styled from "styled-components";

export const AboutMeDiv = styled.section`
    min-height: 50vh;
    height: auto;
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
        background-image: linear-gradient(to left, #ffffff00, #b7b7b7, #ffffff00);
        width: 400px;
        padding: 1px;
        border-radius: 5px;

        margin-top: -70px;
    }

    & div p {
        font-family: 'Courier New', Courier, monospace;
        color: #ffffffd6;
        max-width: 700px;
        line-height: 30px;

        font-size: 1.2rem;
        letter-spacing: 3px;
        text-align: center;
        text-align: justify;
        text-indent: 40px;
    }

    & div p mark {
        background-color: transparent;
        color: #fff;
        filter: drop-shadow(1px 1px 1px #fff);
    }
`