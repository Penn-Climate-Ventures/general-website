import React from 'react'
import s from "styled-components"
import  { NavMenu, NavButton } from './Navbar'


const FooterMenu = s(NavMenu)`
  margin: auto;
  color: red;
`

const FooterWrapper = s.footer`
  bottom: 0;
  background-color: white;
  display: flex;
  text-align: center;
  margin: 60px auto 60px auto;
`

export const FooterLayout = () => (
  <FooterWrapper>
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
)

export const Footer = s(FooterLayout)`
`
