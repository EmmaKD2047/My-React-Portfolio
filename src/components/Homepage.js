import React from 'react';
// import Helmet from 'react-helmet';
import {Background, Instagram, Intro, Job, LinkedIn, Name, Socials, Twitter, Whatsapp} from './styles/Homepage.styled';
import whatsapp from './whatsapp.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import Typewriter from 'typewriter-effect';

const Homepage = () => {
  return (
    <Background>
      <Intro>
        <Name>
          <strong><h1 style={{ padding: '1rem', fontSize: 'calc(2.5rem + 1vw)'}}>I AM EMMANUEL KADIRI</h1></strong>
        </Name>
        <Job>
          <Typewriter style={{ width: '80%', textAlign: 'center' }}
          onInit = {(typewriter) => {
            typewriter.typeString('FRONTEND DEVELOPER AND AFFILIATE MARKETER').pauseFor(1000).deleteAll().typeString('NICE TO  MEET YOU ; )').start();
          }}/>
        </Job>
      </Intro>
      <Socials>
        <Whatsapp style={{width: '50px', marginBottom: '.7rem'}} to='https://wa.me/+2348025946532' target='_blank'>
          <img src={whatsapp} style={{width: '2em'}} alt='whatsapp'/>
        </Whatsapp>
        <LinkedIn style={{width: '50px', marginBottom: '.7rem'}} to='https://www.linkedin.com/in/emmanuel-kadiri-930259b8/' target='_blank'>
          <img src={linkedin} style={{width: '2em'}} alt='linkedin'/>
        </LinkedIn>
        <Twitter style={{width: '50px', marginBottom: '.7rem'}} to='https://twitter.com/kdcoding' target='_blank'>
          <img src={twitter} style={{width: '2em'}} alt='twitter'/>
        </Twitter>
        <Instagram style={{width: '50px', marginBottom: '.7rem'}} to='https://www.instagram.com/kdcoding/' target='_blank'>
          <img src={instagram} style={{width: '2em'}} alt='instagram'/>
        </Instagram>
      </Socials>
    </Background>
  )
}

export default Homepage