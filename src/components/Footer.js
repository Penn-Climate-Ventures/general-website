import React from 'react'
import s from "styled-components"

import { LIGHT_BLUE, DARK_BLUE } from "../utils/constants"
import { navLinks, smLinks } from "../data/navigation"


const FooterWrapper = s.footer`
  bottom: 0;
  background-color: white;
  display: flex;
  text-align: center;
  margin: 120px auto 60px auto;
`

const FooterMenu = s.div`
  display: flex;
  margin: auto;
  color: red;
  flex-wrap: wrap;
  justify-content: center;
`

const NavButton = s.a`
  color: black;
  font-weight: 600;
  margin: 5px 10px;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
    color: ${LIGHT_BLUE};
  }
`

export const FooterLayout = () => (
  <FooterWrapper>
    <FooterMenu>
      { navLinks.map( navLink => (
        <NavButton rel="noreferrer noopener" href={navLink.url} >
          {navLink.linkName}
        </NavButton>
      )) }

      { smLinks.map( smLink => (
        <NavButton target="_blank" rel="noreferrer noopener" href={smLink.url} >
          {smLink.icon}
        </NavButton>
      )) }
    </FooterMenu>
  </FooterWrapper>
)

export const Footer = s(FooterLayout)`
`
