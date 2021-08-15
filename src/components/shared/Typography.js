import s from "styled-components"
import { LIGHT_BLUE, DARK_BLUE } from "../../utils/constants"


export const Title = s.h1`
  font-size:${({ fontSize }) => fontSize || `3.5rem`};
  font-family: Lato;
  font-weight: bold;
  color: ${LIGHT_BLUE};
  padding-bottom: 8px;
`

export const Subtitle = s.h2`
  font-size:${({ fontSize }) => fontSize || `1.5rem`};
  font-family: Lato;
  font-weight: bold;
  ${({center}) => center && `text-align: center`};
  text-transform: uppercase;
  letter-spacing: 8px;
  color: #3A8EFB;
`

export const Text = s.p`
  font-size:${({ fontSize }) => fontSize || `1.1rem`};
  font-family: Lato;
  color: ${({fontColor}) => fontColor || `black`};
  ${({bold}) => bold && `font-weight: bold`};
  ${({center}) => center && `text-align: center`};
`

export const SubText = s.p`
  font-size:${({ fontSize }) => fontSize || `1.1rem`};
  font-family: Lato;
`
