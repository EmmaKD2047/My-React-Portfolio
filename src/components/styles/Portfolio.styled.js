import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom'

export const ProjectCards = styled.div`
    height: 28.125rem auto;
    background-size: cover;
`

export const ProjectLinks = styled(Link)`
`

export const Projects = styled.div`
    width: 70vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem auto;
`

export const ProjectCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    position relative;
    width: 300px;
    height: 200px;
    border-radius: 5px;

    & img{
        width: 100%;
        height: 100%;
    }

    &:hover .overlay{
        opacity: 1;
    }
`