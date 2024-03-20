import styled from "styled-components";

export const OuterContainer = styled.section`
    width: 500%;
    height: 100vh;
    // background-color: cyan;
    overscroll-behavior: none;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;

`

export const ContentContainer = styled.div`
    // background-color: blue;
    width: 80%;
    height: 70%;
    padding: 40px;
    color: #fff;

    position: relative;


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
        box-shadow: 0px 0px 5px #333;
        scale: 1.01;
        cursor: pointer;
    }

    & h2 {
        font-size: 2rem;
    }

    & p{
        text-align: justify;
        max-width: 500px;
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

    & img.direction_arrow {
        position: absolute;
        opacity: .2;
        width: 80px;
        top: 30%;  
    }

    & img.forward_arrow {    
        right: 10%;
    }

    & img.back_arrow {    
        left: 10%; 
    }
`