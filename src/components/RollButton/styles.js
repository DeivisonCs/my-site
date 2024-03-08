import styled from "styled-components";

export const ButtonStyle  = styled.a`
    background-color: #ffffff2c;
    color: #fff;
    padding: 7px 17px;
    border: 1px solid #fff;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 5px #000 inset;
        border-color: transparent;
        color: #000;
    }

    &.view_more{
        font-size: 1.2rem;
        border-radius: 30px;
        padding: 7px 20px;
        transform: translate(-40px, -10px);
    }
`