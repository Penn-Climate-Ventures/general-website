import React from "react"
import s from "styled-components"
import { STEEL_BLUE } from "../../utils/constants"


export const PageTitle = s.h1`
  color: ${STEEL_BLUE};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`

export const SectionHeader = s.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  // text-shadow: 3px 3px 5px #bbdddddd;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

export const TextP = s.p`
  font-weight: ${({ bold }) => ( bold ? "bold" : "normal")};
  text-align: ${({ center }) => ( center ? "center" : "left")};
  line-height: 1.15rem;
  margin-bottom: 1rem;
`

export const UrlLink = s.a`
  color: ${STEEL_BLUE};
  font-weight: ${({ bold }) => ( bold ? "bold" : "normal")};
  text-align: ${({ center }) => ( center ? "center" : "left")};
  margin-bottom: 1rem;
  
  &:hover {
    color: ${STEEL_BLUE};
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Email = () => {
  return (
    <a href={'mailto:pennclimateventures@gmail.com'}>pennclimateventures@gmail.com</a>
  )
}

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
