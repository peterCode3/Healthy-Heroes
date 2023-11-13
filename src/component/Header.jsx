import React from 'react'
import Container from './Container'
import Logo from './atoms/Logo'
import Navbar from './Navigation'
import TopBar from './TopBar'

function Header() {
  return (
    <header>
      <TopBar/>
      <div className='ssc-hdr'>
        <Container>
          <div className='inr-hdr'>
              <div className='ssc-logo'>
                  <Logo 
                      href='/'
                      logo='/healthlogo.png'
                      logoclass='ssc-logo-main'
                  />
              </div>
              <Navbar/>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header
