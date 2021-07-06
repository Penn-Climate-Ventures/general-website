import React, {Component } from 'react'
import s from "styled-components"
import Logo from '../images/logo.png'
import { MIDNIGHT_BLUE, GREEN } from "../utils/constants"
import {FaInstagram, FaFacebookF, FaLinkedinIn} from "react-icons/Fa";


export const NavWrapper = s.nav`
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  height: 75px;
  width: 100%;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`

const NavBrand = s.a`
`

const NavBrandImg = s.img`
  height: 45px;
  width: auto;
`

const ToggleMenuButton = s.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  
  &:hover > *, &:focus > * {
    background-color: ${GREEN};
  }
  
  @media screen and (min-width: 780px) {
    display: none;
  }
`

const IconBar = s.span`
  background-color: ${MIDNIGHT_BLUE};
  height: 2px;
  width: 25px;
  margin: 3px;
  display: block;
  transition: all 0.3s;
`

const NavOverlay = s.div`
  position: fixed;
  top: 75px;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
`

export const NavMenu = s.div`
  position: fixed;
  top: 75px;
  right: 0;
  bottom: 0;
  left: 100%;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  
  @media screen and (min-width: 780px) {
    all: unset;
    position: static;
    display: flex;
    height: 100%;
  }
`

const NavLinks = s.div`
  background-color: transparent;
  max-height: 0;
  overflow: hidden;
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media screen and (min-width: 780px) {
    all: unset;
    display: flex;
    flex-direction: row;
    max-height: max-content;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 0;
  }
`

export const NavButton = s.a`
  color: ${MIDNIGHT_BLUE};
  font-weight: 600;
  margin: 5px 10px;
  cursor: pointer;
  display: flex;
  
  &:hover {
    color: ${GREEN};
  }
  
  @media screen and (min-width: 780px) {
    margin: auto 10px;
    height: 100%;
    align-items: center;
  }
`

export class Navbar extends Component {
  state = {
    opened: false
  }

  handleMenuClose = () => {
    this.setState({
      opened: false
    })
    this.getOpened()
  }
  handleMenuToggle = () => {
    this.setState({
      opened: !this.state.opened
    })
    this.getOpened()
  }

  getOpened = () => {
    return this.state.opened
  }


  render() {
    // close navbar when window closes
    window.addEventListener('resize', this.handleMenuClose)

    // for animating menu icon bars toggling
    const firstIconBarStyle = {
      marginBottom: '-5px',
      marginRight: '-2px',
      transform: 'rotate(-45deg)'
    }
    const secondIconBarStyle = {
      opacity: '0'
    }
    const thirdIconBarStyle = {
      marginTop: '-5px',
      marginRight: '-2px',
      transform: 'rotate(45deg)'
    }

    // styles for when the nav menu is opened in mobile mode
    const navMenuOpenedStyle = {
      backgroundColor: 'white',
      left: '60%',
      opacity: '1',
      visibility: 'visible',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const navOverlayOpenedStyle = {
      backgroundColor: 'rgb(0, 0, 0)',
      opacity: '0.3',
      visibility: 'visible'
    }
    const navLinksOpenedStyle = {
      padding: '1em',
      maxHeight: 'none',
      top: '0'
    }
    const navIconsOpenedStyle = {
      padding: '1em',
      maxHeight: 'none',
      bottom: '0',
      display: 'flex',
      flexDirection: 'row'
    }

    return (
      <nav css={`margin-top: 90px`}>
        <NavWrapper>
          <NavBrand rel="noreferrer noopener" href='/'>
            <NavBrandImg src={Logo}/>
          </NavBrand>
          <ToggleMenuButton onClick={this.handleMenuToggle}>
            <IconBar style={this.getOpened() ? firstIconBarStyle : null}/>
            <IconBar style={this.getOpened() ? secondIconBarStyle : null}/>
            <IconBar style={this.getOpened() ? thirdIconBarStyle : null}/>
          </ToggleMenuButton>
          <NavOverlay onClick={this.handleMenuClose}
                      style={this.getOpened() ? navOverlayOpenedStyle : null}/>
          <NavMenu style={this.getOpened() ? navMenuOpenedStyle : null}>
            <NavLinks style={this.getOpened() ? navLinksOpenedStyle : null}>
              <NavButton rel="noreferrer noopener" href='/membership'>Membership</NavButton>
              {/*<NavButton rel="noreferrer noopener" href='/calendar'>Calendar</NavButton>*/}
              <NavButton rel="noreferrer noopener" href='/class'>Class</NavButton>
              <NavButton rel="noreferrer noopener" href='/fellowships'>Fellowships</NavButton>
              <NavButton rel="noreferrer noopener" href='/prize'>Prize</NavButton>
              <NavButton rel="noreferrer noopener" href='/collaborate'>Collaborate</NavButton>
            </NavLinks>
            <NavLinks style={this.getOpened() ? navIconsOpenedStyle : null}>
              <NavButton target="_blank"
                         rel="noreferrer noopener"
                         href='https://www.instagram.com/pennclimateventures/'>
                <FaInstagram fontSize={'20px'}/>
              </NavButton>
              <NavButton target="_blank"
                         rel="noreferrer noopener"
                         href='https://www.facebook.com/pennclimateventures/'>
                <FaFacebookF fontSize={'20px'}/>
              </NavButton>
              <NavButton target="_blank"
                         rel="noreferrer noopener"
                         href='https://www.linkedin.com/company/penn-climate-ventures/'>
                <FaLinkedinIn fontSize={'20px'}/>
              </NavButton>
            </NavLinks>
          </NavMenu>
        </NavWrapper>
      </nav>
    )
  }
}
