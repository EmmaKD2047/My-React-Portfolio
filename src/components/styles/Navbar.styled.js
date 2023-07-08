import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: transparent;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 100;
    width: 100vw;

    @media (max-width: 580px){
        overflow: hidden;
    }
`

export const Logo = styled(Link)`
    padding: 20px 0 0 20px;
`

export const Home = styled(Link)`
    text-decoration: none;
    font-size: 1.14rem;
    margin: 35px 30px;
    position: relative;
    padding-bottom: 30px;

    &::after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #7d01a8;
    transform-origin: center;
    transition: transform 0.25s ease-out;
    }

    &:hover::after{
        transform: scaleX(1);
        transform-origin: center;
    }
`

export const NavLinks = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px){
        visibility: hidden;
    }
`

export const Icon = styled.div`
    display: none;

    @media screen and (max-width: 750px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        margin-top: 2rem;
        margin-right: 1.5rem;
    }
`