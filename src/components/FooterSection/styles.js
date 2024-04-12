import styled from "styled-components";

export const FooterContainer = styled.div`
    background-image: linear-gradient(to top, #000 70%, #000000ad, #0000000d);

    width: 100%;
    height: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    margin-top: -50px;
`
export const ContacsContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        text-decoration: none;

        color: #fff;
        cursor: pointer;
    }

    & a:hover {
        filter: drop-shadow(2px 2px 3px #fff);
    }

    & a img{
        width: 30px;
    }
`
export const MyName = styled.div`
    margin-top: 60px;
    margin-bottom: 10px;
    cursor: pointer;

    display: flex;
    flex-direction: column;

    & span {
        color: #fff;
        font-family: CinzelDecorative, arial, sans-serif;
        font-size: 32px;
        letter-spacing: 2px;
        text-align: center;
    }

    & span:first-child {
        transform: translateX(-15px);
    }
    & span:last-child {
        transform: translateX(40px);
    }

` 