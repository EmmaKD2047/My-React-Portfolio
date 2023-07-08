import styled from 'styled-components'
import background from './../../background2.webp';
import { NavLink as Link } from 'react-router-dom'

export const Background = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100vh;
    color: white;
    justify-content: center;
    backdrop-filter: blur(5px);

    animation: fadeIn 3s;

  @keyFrames fadeIn{
      0%{opacity: 0;}
      100%{opacity: 1;}
  }

  &::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(5px);
    z-index: -1;
    height: 100vh;
  }
`

export const Intro = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Name = styled.div`
  width: 90vw;
  text-align: center;
  font-size: 3.5rem;

  @media screen and (max-width: 300px){
    width: 70vw;

    h1{
      margin-left: -3rem;
    }
  }
`

export const Job = styled.div`
  width: 70%;
  height: 5%;
  text-align: center;
`

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 13rem;
  left: 2em;
  width: 3rem;
  height: 3rem;
`
export const Whatsapp = styled(Link)`
  width: 4rem;
  height: 2rem;
  position: relative;
`

export const LinkedIn = styled(Link)`
  width: 4rem;
  height: 2rem;
  position: relative;
`

export const Twitter = styled(Link)`
  width: 4rem;
  height: 2rem;
  position: relative;
`

export const Instagram = styled(Link)`
  width: 4rem;
  height: 2rem;
  position: relative;
`