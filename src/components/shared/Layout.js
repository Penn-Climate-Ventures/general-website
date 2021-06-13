import React from "react"
import s from "styled-components"
import { STEEL_BLUE } from "../../utils/constants"


export const PageTitle = s.h1`
    color: ${STEEL_BLUE};
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`

export const SectionHeading = s.h2`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`

export const SectionText = s.p`
    font-weight: ${({ bold }) => ( bold ? "bold" : "normal")};
    text-align: center;
`
