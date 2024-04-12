import styled from "styled-components";

export const HeaderContainer = styled.div `
    height: 80px;
    width: 100vw;
    padding: 30px;
    opacity: .4;

    z-index: 1;
    position: fixed;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:hover {
        opacity: 1;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;

    // display: none;
`

export const NameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    cursor: pointer;

    display: flex;
    flex-direction: column;

    & span{
        color: #fff;
        font-family: CinzelDecorative, arial, sans-serif;
        font-size: 1rem;
        letter-spacing: 2px;
    }

    & .lastNameHeader {
        transform: translate(25px, -5px);
    }
`

export const ContactsContainer = styled.div`
    // background-color: cyan;

    display: flex;
    flex-direction: row;
    align-items: center;


    gap: 30px;
    
    & a img {
        width: 30px;
    }

    & a:hover {
        filter: drop-shadow(0px 0px 5px #ffffff9c);
        animation: pulsingAnimation 2s infinite;
    }

    @keyframes pulsingAnimation {
        0%{
            scale: 1;
        }
        50%{
            scale: 1.2;
        }
        100%{
            scale: 1;
        }
    }
`

export const NavHiddenMenu = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;

    display: none;
    position: relative;


    // -------------- Menu Bars -----------------
    & .menuBars {
        width: 100%;
        height: 100%;
        padding: 10px 5px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    & .menuBars span {
        background-color: #fff;
        
        width: 100%;
        height: 5px;
    }

    // -------------- Hidden Menu ----------------

    & .hiddenMenu {
        background-color: #c0c0c0;
        border: solid 1px #333;
        border-top: none;
        height: 0;
        opacity: 0;

        color: #fff;

        transition: height 2s ease;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        gap: 0;
        
        position: absolute;
        top: 100%;

        overflow: hidden;
    }

    & .hiddenMenu button {
        background-color: transparent;
        font-family: BebasNeue, arial, sans-serif;
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
        letter-spacing: 2px;
        
        border: solid 1px #fff;
        border-radius: 0px;
        border-top: none;

        padding: 7px;
        width: 100px;

        text-align: center;
        cursor: pointer;
    }
`