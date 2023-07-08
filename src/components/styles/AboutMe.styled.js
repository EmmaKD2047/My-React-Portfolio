import styled from "styled-components"
import image from './../aboutimage.webp'

export const Blackbackground = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    bottom: 0;
`

export const About = styled.div`
    display: flex;
    width: 100vw;
    height: 400px;
    margin-top: 50px;
    font-size: calc(.9rem + 0.1vw);
    left: 0;


    @media (max-width: 1090px){
        flex-wrap: wrap;
        margin: 5rem auto;
    }
`

export const MyImage =  styled.div`
    background-image: url(${image});
    width: 100%;
    width: 300px;
    height: 346px;
    margin: 1rem 1rem 1rem 7rem;
    border: 1px solid #7d01a8;
    padding: 1rem;

    @media (max-width: 1090px){
        margin: auto;
    }
`
export const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 1rem auto;
    margin-left: 4rem;

    @media (max-width: 1090px){
        margin: 2rem auto;
    }
`

export const Writeup = styled.div`
    max-width: 80vw;
`

export const OtherInfo = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    padding-top: 20px;

    @media (max-width: 1090px){
        flex-wrap: wrap;
    }
`

export const NL = styled.div`
padding-top: 1rem;
`

export const EA = styled.div`
padding-top: 1rem;
`

export const BA = styled.div`
display: flex;
justify-content: space-between;
padding-top: 20px;
margin-bottom: 2rem;
`