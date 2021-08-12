import s from 'styled-components'
import {STEEL_BLUE, mediaMaxWidth, STEEL_BLUE} from "../../utils/constants"

const Button = s.a`
    background-color: transparent;
    border: .2rem solid ${STEEL_BLUE};
    outline: none;
    float: ${({ right }) => right ? "right" : "left"};
    padding: 1rem 4.5rem 1rem 4.5rem;
    color: ${STEEL_BLUE};
    cursor: pointer;
    border-radius: 999px;
    z-index: -1;
    font-size: calc(${({ fontSize }) => fontSize || '1rem'} + 1vw);
    font-family: Metropolis;
    font-weight: bold;

    :hover {
        background-color: ${STEEL_BLUE};
        color: white;
    }

    ${mediaMaxWidth("768px")} {
        padding: .5rem 1.25rem .5rem 1.25rem;
    }
`

export const ActionButton = s.a`
  color: ${STEEL_BLUE};
  text-align: center;
  width: 250px;
  font-size: 1rem;
  font-weight: bold;
  border: 1.5px solid ${STEEL_BLUE};
  border-radius: 25px;
  padding: 10px 15px;
  margin: auto;

  &:hover {
    color: ${STEEL_BLUE};
  }
`

export default Button
