import s from "styled-components"


export const Button = s.a`
  background-color: var(--c-bg-0);
  color: var(--c-text-link-unclicked);
  text-align: center;
  margin: auto;
  padding: 10px 30px;
  border: 2px solid var(--c-accent-primary);
  border-radius: 30px;
  transition: all ease-in-out 0.15s;
  cursor: pointer;
  z-index: 10;
  
  :hover {
    background-color: var(--c-accent-primary);
    color: white;
  }
`

export const ButtonInverted = s(Button)`
  border: 2px solid var(--c-bg-0);
`

export default Button
