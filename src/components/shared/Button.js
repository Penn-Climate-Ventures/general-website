import s from 'styled-components'
import { MIDNIGHT_BLUE } from "../../utils/constants"

const Button = s.a`
    background-color: transparent;
    border: .2rem solid ${MIDNIGHT_BLUE};
    outline: none;
    float: ${({ right }) => right ? "right" : "left"};
    padding: 1rem 4.5rem 1rem 4.5rem;
    color: ${MIDNIGHT_BLUE};
    cursor: pointer;
    border-radius: 999px;
    z-index: -1;
    font-size: ${({ fontSize }) => fontSize || '2rem'};
    font-family: Metropolis;
    font-weight: bold;

    :hover {
        background-color: ${MIDNIGHT_BLUE};
        color: white;
    }
`

export default Button
