import styled from "styled-components";

export const OuterContainer = styled.section`
    width: 500%;
    height: 80vh;
    background-color: cyan;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`

export const ContentContainer = styled.div`
    background-color: blue;
    width: 80%;
    height: 70%;
    padding: 40px;
    color: #fff;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    & p{
        text-align: justify;
        max-width: 500px;
    }
`