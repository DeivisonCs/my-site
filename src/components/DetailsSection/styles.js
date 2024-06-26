import styled from "styled-components";

export const DetailsContainer = styled.div`
    height: fit-content;
    padding: 30px;
    margin-top: 100px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 230px;

    & section ul{
        list-style: none;
    }

    & section h2 {
        color: #b7b7b7;
        font-size: 4rem;
        font-family: BebasNeue, Arial;
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
    

    & h2 {
        color: #b7b7b7;
        font-size: 4rem;
    }

    & .title_undercore {
        background-image: linear-gradient(to left, #ffffff00, #b7b7b7);
        width: 300px;
        max-width: 90vw;
        padding: 1px;
        border-radius: 5px;

        transform: translateX(-10px);
        margin-top: -50px;
    }

    & ul {
        max-height: 300px;
        width: 100%;
        color: #fff;
        font-size: 1.2rem;
        list-style: none;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
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

    & ul li:hover > .languageIcon {
        animation: rotateIcon .2s linear .2s forwards;
    }

    @keyframes rotateIcon {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(35deg);
        }
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
        background-image: linear-gradient(to right, #ffffff00, #b7b7b7);
        width: 400px;
        max-width: 90vw;
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