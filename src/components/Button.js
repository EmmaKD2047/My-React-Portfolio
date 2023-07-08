import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    border-radius: 50px;
    text-decoration: none;
    background-color: #7d01a8;
    border: none;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;

    @media screen and (max-width: 530px){
        margin: auto;
    }
`   