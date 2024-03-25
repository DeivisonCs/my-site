import styled from "styled-components";

export const ButtonText  = styled.button`
    background-color: #ffffff2c;
    color: #fff;
    font-family: BebasNeue, Arial;
    letter-spacing: 1px;

    padding: 7px 17px;
    border: 1px solid #fff;
    border-radius: 15px;

    cursor: pointer;
    z-index: 2;

    &:hover {
        box-shadow: 0px 0px 5px #000 inset;
        border-color: transparent;
        color: #1E1E1E;
    }

`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    &.view_more{
        overflow: hidden;
        width: 40%;
        opacity: 0;
    }

    &.view_more button{
        font-size: 1.2rem;
        border-radius: 30px;
        padding: 7px 20px;
        

        box-shadow: none;
        border: none;
        background-color: transparent;
    }

    &.view_more button:hover {
        color: #fff;
        text-shadow: 0px 0px 7px #fff;
        letter-spacing: 2px;
    }

    &.view_more::before {
        content: '';

        position: absolute;
        background-color: #fff;
        // background-image: linear-gradient(#fff, #333, #1E1E1E);

        height: 300px;
        width: 20px;

        animation: rotation 3s linear 2s infinite;
    }

    &.view_more::after {
        content: '';

        position: absolute;
        background-color: #1E1E1E;
        border-radius: 10px;
        height: 90%;
        width: 95%;
    }


    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`