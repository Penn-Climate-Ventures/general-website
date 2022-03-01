import s from 'styled-components'
import {mediaMaxWidth, LIGHT_BLUE, WHITE} from "../../utils/constants"

export const Button = s.a`
  background-color: ${WHITE};
  color: ${LIGHT_BLUE};
  text-align: center;
  margin: auto;
  padding: 10px 30px;
  border: 2px solid ${LIGHT_BLUE};
  border-radius: 30px;
  transition: all ease-in-out 0.15s;
  cursor: pointer;
  z-index: 10;
  
  :hover {
    background-color: ${LIGHT_BLUE};
    color: white;
  }
`

export const ButtonInverted = s(Button)`
  border: 2px solid ${WHITE};
`

export default Button
