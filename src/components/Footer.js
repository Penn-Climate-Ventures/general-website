import React from 'react'
import s from "styled-components"
import { Text } from './shared/Typography'
import Button from './shared/Button'
import { MIDNIGHT_BLUE, mediaMaxWidth } from '../utils/constants'

const FooterLink = s.a`
    text-decoration: underline;
    color: ${MIDNIGHT_BLUE};
`

const FooterButton = s(Button).attrs(() => ({
    fontSize: `1rem`
}))`
    margin: 1vw;
    flex: 1;
    padding: .5rem;
    cursor: pointer;
    z-index: 999;
`

const FooterLevel = s.div`
    display: flex;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;

    ${mediaMaxWidth("768px")} {
        flex-direction: column;
    }
`

const FooterLayout = ({ className }) => <footer className={`footer has-text-centered ${className}`}>
    <Text css="word-break: break-all;">
        Reach out to <FooterLink href="mailto:pennclimateventures@gmail.com">pennclimateventures@gmail.com</FooterLink>
    </Text>
    <FooterLevel>
        <FooterButton href="/">About</FooterButton>
        <FooterButton>Rules</FooterButton>
        <FooterButton>FAQs</FooterButton>
        <FooterButton>PCV</FooterButton>
        <FooterButton>Collab</FooterButton>
    </FooterLevel>
    <br />
    <br />
    <br />
    <Text fontSize="1rem">
        Special thanks to <a href="https://github.com/sigmachirality" target="_blank">Daniel Tao</a> for web dev ❤️
    </Text>
</footer>

export const Footer = s(FooterLayout)`
    background-color: transparent;
`