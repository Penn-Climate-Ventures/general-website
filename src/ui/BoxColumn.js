import React from 'react'
import s from "styled-components"


export const BoxHeading = s.p`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin: 10px auto;
`

export const BoxColumn = s.div`
    border-radius: ${({ round }) => ( round ? "10px" : "0")};
    box-shadow: 0 3px 15px 1px #00000016;
    margin: 10px;
    padding: 30px 20px;
    text-align: ${({ alignLeft }) => ( alignLeft ? "left" : "center")};
    align-items: center;
    display: ${({ center }) => ( center ? "flex" : "block") };
`