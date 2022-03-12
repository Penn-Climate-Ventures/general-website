import s from "styled-components"
import {LIGHT_BLUE} from "../utils/constants"
import React from "react";


export const Title = s.h1`
  font-size:${({ fontSize }) => fontSize || `1.7rem`};
  color: ${({fontColor}) => fontColor || 'var(--c-text-primary)'};
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`

export const Subtitle = s.h2`
  font-size:${({ fontSize }) => fontSize || `1.3rem`};
  color: ${({fontColor}) => fontColor || LIGHT_BLUE};
  ${({bold}) => bold && `font-weight: bold`};
  ${({center}) => center && `text-align: center`};
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

export const Text = s.p`
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
