import styled from "styled-components";

export const HeaderContainer = styled.div `
    height: 80px;
    width: 100vw;
    padding: 30px;
    opacity: .4;
    // transform: translateY(-80px);

    z-index: 1;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:hover {
        opacity: 1;
    }


    // animation: fadeInHeaderAnimation 2s 3s;

    // @keyframes fadeInHeaderAnimation {
    //     from {
    //         opacity: 0;
    //     }
    //     to {
    //         opacity: .4;
    //         transform: translateY(0);
    //     }
    // }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;

    display: none;
`

export const NameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;

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

export const NavHiddenMenu = styled.div`
    // background-color: cyan;
    width: 50px;
    height: 50px;
    cursor: pointer;
    // transform: translateX(30px);

    position: relative;

    &:hover {
        animation: activatedMenuBottom .3s ease-in-out .1s forwards;
    }
    &:hover .hiddenMenu {
        animation: activatedMenu .4s ease-in-out .2s forwards;
    }


    @keyframes activatedMenuBottom {
        to {
            width: 100px;
        }
    }

    @keyframes activatedMenu {
        to {
            height: 135px;
            opacity: 1;
        }
    }

    // -------------- Menu Bars -----------------
    & .menuBars {
        // background-color: #000;
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

    & .menuBars:hover #menuBar1 {
        animation: barRight_Animation .3s ease-in-out .1s forwards;
    }
    & .menuBars:hover #menuBar2 {
        animation: barLeft_Animation .3s ease-in-out .2s forwards;
    }
    & .menuBars:hover #menuBar3 {
        animation: barRight_Animation .3s ease-in-out .3s forwards;
    }

    @keyframes barRight_Animation {
        to {
            transform: translateX( -10px);
            width: 50%;
        }
    }
    @keyframes barLeft_Animation {
        to {
            transform: translateX( 10px);
            width: 50%;
        }
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
        // left: -100%;
        top: 100%;

        overflow: hidden;
    }

    & .hiddenMenu a {
        border: solid 1px #fff;
        border-top: none;

        padding: 7px;
        width: 100%;

        text-align: center;
        cursor: pointer;
    }
`