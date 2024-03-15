import styled from "styled-components";

export const DetailsContainer = styled.div`
    height: fit-content;
    padding: 30px;
    margin-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 200px;

    & section ul{
        list-style: none;
    }

    & section h2 {
        color: #b7b7b7;
        font-size: 4rem;
        font-family: Bebas Neue, Arial;
        letter-spacing: .7rem;
    }
`

export const SkillsContainer = styled.section`
    width: 100%;
    max-height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
    
    & ul{
        list-style: none;
    }

    & h2 {
        color: #b7b7b7;
        font-size: 4rem;
    }

    & .title_undercore {
        background-color: #b7b7b7;
        width: 300px;
        padding: 1px;
        border-radius: 5px;

        transform: translateX(-10px);
        margin-top: -50px;
    }

    & ul {
        max-height: 300px;
        color: #fff;
        font-size: 1.2rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
    }

    & ul li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    & ul li img {
        width: 30px;
        border-radius: 5px;
    }
`

export const EducationContainer = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 50px;

    & ul{
        list-style: none;
    }

    & h2 {
        color: #b7b7b7;
        font-size: 4rem;
    }

    & .title_undercore {
        background-color: #b7b7b7;
        width: 400px;
        padding: 1px;
        border-radius: 5px;

        transform: translateX(10px);
        margin-top: -50px;
    }

    & ul {
        color: #fff;
        font-size: 1.2rem;
        margin-right: 20px;
        letter-spacing: 2px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    & ul li {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
`

export const ContactMeContainer = styled.section`
    background-color: cyan;
    width: 100%;
`