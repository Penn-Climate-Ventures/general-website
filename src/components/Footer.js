import React from 'react'
import s from "styled-components"
import { Text } from './shared/Typography'
import Button from './shared/Button'
import { MIDNIGHT_BLUE, mediaMaxWidth } from '../utils/constants'
import  { NavWrapper, NavMenu, NavButton, SmIcon } from './Navbar'


const FooterWrapper = s.footer`
  bottom: 0;
  background-color: white;
  display: flex;
  text-align: center;
  margin: 30px auto 60px auto;
`

const FooterMenu = s(NavMenu)`
  margin: auto;
  color: red;
`

export const Footer = () => {
  return <FooterWrapper>
    <FooterMenu>
      <NavButton target="_blank" rel="noreferrer noopener" href='/tracks'>Membership</NavButton>
      <NavButton target="_blank" rel="noreferrer noopener" href='/rules'>Calendar</NavButton>
      <NavButton target="_blank" rel="noreferrer noopener" href='/faq'>Class</NavButton>
      <NavButton target="_blank" rel="noreferrer noopener" href='/about'>Fellowships</NavButton>
      <NavButton target="_blank" rel="noreferrer noopener" href='/collaborate'>Prize</NavButton>
      <NavButton target="_blank" rel="noreferrer noopener" href='/collaborate'>Collaborate</NavButton>
      <NavButton target="_blank" rel="noreferrer noopener" href='https://www.instagram.com/pennclimateventures/'>IG</NavButton>
      <NavButton target="_blank" rel="noreferrer noopener" href='https://www.facebook.com/pennclimateventures/'>FB</NavButton>
      <NavButton target="_blank" rel="noreferrer noopener" href='https://www.linkedin.com/company/penn-climate-ventures/'>LI</NavButton>
    </FooterMenu>
  </FooterWrapper>
}
