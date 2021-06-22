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

export const Layout = s.div`
  padding: 2rem 1rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    padding: 2rem 3rem;
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    padding: 2rem 5rem;
    max-width: 1140px;
  }
`
