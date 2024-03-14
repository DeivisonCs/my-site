import styled from "styled-components";

export const HeaderContainer = styled.div `
    // background-image: linear-gradient(to bottom, #000, #0e0e0e,#3b3a3a57);
    height: 80px;
    width: 100vw;
    padding: 30px;
    opacity: 0;
    transform: translateY(-80px);

    z-index: 1;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    animation: fadeInHeaderAnimation 2s 3s forwards;

    @keyframes fadeInHeaderAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const NameStyle = styled.span`
    color: #fff;
    font-family: Great Vibes, arial, sans-serif;
    font-size: 1.6rem;
    letter-spacing: 2px;
`