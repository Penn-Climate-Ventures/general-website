import React from "react"
import s from "styled-components"

import {LIGHT_BLUE} from "../utils/constants"


export const Title = s.h1`
  font-size:${({ fontSize }) => fontSize || `2.5rem`};
  color: ${({fontColor}) => fontColor || 'var(--c-text-primary)'};
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`

export const Subtitle = s.h2`
  font-size:${({ fontSize }) => fontSize || `1.8rem`};
  color: ${({fontColor}) => fontColor || LIGHT_BLUE};
  ${({bold}) => bold && `font-weight: bold`};
  ${({center}) => center && `text-align: center`};
  letter-spacing: 0.05ch;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

export const CenteredSubtitle = s.h2`
  font-size:${({ fontSize }) => fontSize || `1.8rem`};
  color: ${({fontColor}) => fontColor || LIGHT_BLUE};
  ${({bold}) => bold && `font-weight: bold`};
  ${({center}) => center && `text-align: center`};
  letter-spacing: 0.05ch;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = s.p`
  font-family: 'Montserrat';
  font-size:${({ fontSize }) => fontSize || `1rem`};
  color: ${({fontColor}) => fontColor || 'var(--c-text-primary)'};
  ${({bold}) => bold && `font-weight: bold`};
  ${({center}) => center && `text-align: center`};
  line-height: 1.5rem;
  margin-bottom: 1rem;
`

export const SubText = s.p`
  font-size:${({ fontSize }) => fontSize || `1rem`};
  ${({center}) => center && `text-align: center`};
`

export const UrlLink = s.a`
  color: ${LIGHT_BLUE};
  ${({bold}) => bold && `font-weight: bold`};
  ${({center}) => center && `text-align: center`};
  margin-bottom: 1rem;
  transition: 0.2s;
  
  &:hover {
    color: var(--c-text-link-hover);
    cursor: pointer;
  }
`

export const Email = () => {
  return (
    <UrlLink href={'mailto:pennclimateventures@gmail.com'}>pennclimateventures@gmail.com</UrlLink>
  )
}
