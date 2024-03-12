import styled from "styled-components";

export const AboutMeDiv = styled.div`
    height: 50vh;
    // background-color: cyan;
    padding: 15%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;


    & h2 {
        color: #b7b7b7;
        font-size: 3rem;

        // text-decoration: underline;
        // background-color: cyan;
    }

    & span {
        background-color: #b7b7b7;
        width: 50%;
        padding: 1px;

        margin-top: -70px;
    }

    & p {
        color: #fff;

        font-size: 1.2rem;
        text-align: center;
    }
`