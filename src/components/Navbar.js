import React, { useState } from 'react'
import s from "styled-components"
import Button from '../components/shared/Button'
import Logo from '../images/logo.png'
import { MIDNIGHT_BLUE, GREEN } from "../utils/constants"


export const NavWrapper = s.nav`
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  width: 100%;
  padding: 15px 30px;
  display: flex;
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

export const NavMenu = s.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const NavButton = s.a`
  color: ${MIDNIGHT_BLUE};
  font-weight: 600;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: ${GREEN};
  }
`

export const SmIcon = s.i`
`

export const Navbar = () => {
    return <div css={`margin-top: 120px`}>
    <NavWrapper>
        <NavBrand target="_blank" rel="noreferrer noopener" href='/'>
          <NavBrandImg src={Logo} />
        </NavBrand>
        <NavMenu>
          <NavButton rel="noreferrer noopener" href='/membership'>Membership</NavButton>
          <NavButton rel="noreferrer noopener" href='/rules'>Calendar</NavButton>
          <NavButton rel="noreferrer noopener" href='/class'>Class</NavButton>
          <NavButton rel="noreferrer noopener" href='/about'>Fellowships</NavButton>
          <NavButton rel="noreferrer noopener" href='/collaborate'>Prize</NavButton>
          <NavButton rel="noreferrer noopener" href='/collaborate'>Collaborate</NavButton>
          <NavButton target="_blank" rel="noreferrer noopener" href='https://www.instagram.com/pennclimateventures/'>IG</NavButton>
          <NavButton target="_blank" rel="noreferrer noopener" href='https://www.facebook.com/pennclimateventures/'>FB</NavButton>
          <NavButton target="_blank" rel="noreferrer noopener" href='https://www.linkedin.com/company/penn-climate-ventures/'>LI</NavButton>
        </NavMenu>
    </NavWrapper>
    </div>
}
