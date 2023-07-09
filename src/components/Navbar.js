import { Home, Icon, Logo, Nav, NavLinks } from '../components/styles/Navbar.styled';
import logo from './../logo.png';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {

  const [ open, setOpen ] = useState(false);

  const isOpen = () => {
    setOpen(true);
  }

  const closeMenu = () => {
    setOpen(false);
  }

  // //animation
  // const item = {
  //   exit: {
  //     opacity: 0,
  //     height: 0,
  //     transition: {
  //       ease: 'easeInOut',
  //       duration: 0.3,
  //       delay: .3
  //     }
  //   }
  // }

  return (
        <>
          <Nav>
            <Logo to='/'>
              <img src={logo} alt='logo' style={{ width:'3.5rem' }} />
            </Logo>
            <NavLinks>
              <Home to='/'>
                <p>Home</p>
              </Home>
              <Home to='about'>
                <p>About</p>
              </Home>
              <Home to='portfolio'>
                <p>Portfolio</p>
              </Home>
              <Home to='contact'>
                <p>Contact</p>
              </Home>
            </NavLinks>
            <Icon>
              <HiOutlineMenuAlt3 style={{ color: 'white', fontSize: '30px' }} onClick={isOpen}/>
            </Icon>
          </Nav>
            {
              open && (
                <div className='menu'>
                  <div className='btn-close' onClick={closeMenu}><MdClose /></div>
                  <a href='/' rel='noreferrer' className='overlaylink'>
                    <p>Home</p>
                  </a>
                  <a href='about' rel='noreferrer' className='overlaylink'>
                    <p>About</p>
                  </a>
                  <a href='portfolio' rel='noreferrer' className='overlaylink'>
                    <p>Portfolio</p>
                  </a>
                  <a href='contact' rel='noreferrer' className='overlaylink'>
                    <p>Contact</p>
                  </a>
                </div>
              )
            }
        </>
  )
}

export default Navbar