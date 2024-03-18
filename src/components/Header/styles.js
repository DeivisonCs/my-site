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
        font-family: Cinzel Decorative, arial, sans-serif;
        font-size: 1rem;
        letter-spacing: 2px;
    }

    & .lastNameHeader {
        transform: translate(25px, -5px);
    }
`