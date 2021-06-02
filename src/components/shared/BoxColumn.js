import React from 'react'
import s from "styled-components"
import { STEEL_BLUE } from "../../utils/constants"


export const BoxSectionHeading = s.p`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin: 40px auto 20px auto;
`


export const BoxHeading = s.p`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin: 10px auto;
`

export const BoxColumn = s.div`
    border: 2px solid ${STEEL_BLUE};
    border-radius: ${({ round }) => ( round ? "10px" : "0")};
    padding: 10px;
    text-align: ${({ alignLeft }) => ( alignLeft ? "left" : "center")};
    align-items: center;
    display: ${({ center }) => ( center ? "flex" : "block") };
`
