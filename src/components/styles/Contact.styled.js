import styled from "styled-components"
import { NavLink as Link } from 'react-router-dom';

export const Heading = styled.div`
    text-align: center;
    padding-top: 100px;
    font-size: 17px;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 60vh;

    @media screen and (max-width: 1110px){
        flex-wrap: wrap;
        height: 100%;
        justify-content: space-around;
        width: 90vw;
        margin: 0;
    }

    @media screen and (max-width: 600px){
        justify-content: center;
        margin: 2rem auto;
        height: 100vh;
    }
`

export const EmailInputs = styled.div`
    width: 100%;
    max-width: 500px;
    height: 400px;
    margin: 2rem 6rem 0rem 6rem;

    @media screen and (max-width: 530px){
        margin: 0 auto;   
    }
`

export const EmailForm = styled.form`
    width: 100%;

    .subject{
        width: 100%;
    }

    textarea{
        width: 100%;
    }
`

export const NE = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    input{
        width: 245px;
    }

    @media (max-width: 530px){
        flex-direction: column;

        input{
            max-width: 500px;
            width: 100%;
            min-width: 50px;
        }
    }
`

export const ContactInfo = styled.div`
    padding-top: 2rem;
    max-width: 500px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1042px){
        width: 100%;
        margin: auto;
    }

    @media screen and (max-width: 600px){
        margin-top: 2rem;
    }

    @media screen and (max-width: 590px){
        justify-content: center;
        height: 70vh;
    }
`

export const ContactCard = styled.div`
    background-color: #7d01a8;
    display: flex;
    width: 100%;
    max-width: 400px;
    height: 170px;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(87, 64, 64, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);

    @media screen and (max-width: 444px){
        max-width: 100%;
        justify-content: center;

        hr{
            visibility: hidden;
        }
    }
`

export const CardLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 444px){
        display: none;
    }
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    justify-content: center;
    height: 100%;

    & p{
        padding: 0px 0 5px 0;
        font-size: 13px;
    }
`

export const Location = styled.div`
`

export const Phone = styled(Link)`
    text-decoration: none;
`

export const Email = styled(Link)`
    text-align: center;
    text-decoration: none;
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;
`