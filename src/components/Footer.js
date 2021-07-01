import React from 'react'
import s from "styled-components"

import { MIDNIGHT_BLUE, GREEN } from "../utils/constants"
import {FaInstagram, FaFacebookF, FaLinkedinIn} from "react-icons/Fa";

const FooterMenu = s.div`
  display: flex;
  margin: auto;
  color: red;
  flex-wrap: wrap;
  justify-content: center;
`

const NavButton = s.a`
  color: ${MIDNIGHT_BLUE};
  font-weight: 600;
  margin: 5px 10px;
  cursor: pointer;
  
  &:hover {
    color: ${GREEN};
  }
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
      <NavButton rel="noreferrer noopener" href='/membership'>Membership</NavButton>
      <NavButton rel="noreferrer noopener" href='/rules'>Calendar</NavButton>
      <NavButton rel="noreferrer noopener" href='/class'>Class</NavButton>
      <NavButton rel="noreferrer noopener" href='/fellowships'>Fellowships</NavButton>
      <NavButton rel="noreferrer noopener" href='/prize'>Prize</NavButton>
      <NavButton rel="noreferrer noopener" href='/collaborate'>Collaborate</NavButton>
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
    </FooterMenu>
  </FooterWrapper>
)

export const Footer = s(FooterLayout)`
`
