import React from "react"
import s from "styled-components"


export const Layout = s.div`
  padding: 2rem 1rem;
  margin: 75px auto 0 auto;
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

export const WideLayout = s.div`
  padding: 2rem 1rem;
  margin: 75px auto 0 auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 100%;
    padding: 2rem 3rem;
  }

`

