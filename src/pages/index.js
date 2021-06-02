import React, { useRef } from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "./styles.scss"

import {
  Navbar,
  Imagine,
  Orientation,
  News,
  Community,
  Team,
  Footer,
} from "../components"

import {
  FOREST_GREEN,
  GREEN,
  IVORY,
  STEEL_BLUE,
  MIDNIGHT_BLUE,
  OXFORD_BLUE
} from "../utils/constants"

const ProblemStatement = () => (
  <div className="grid" css={`display: grid; grid-auto-flow: column`}>
    <div className="col">
      <p>Imagine a campus where students line up to work for the biggest moveers in climate innovation.</p>
      <p>Imagine a campus where sustainability and climate analyses are integrated into our course plans, just like intro statistics or calulus.</p>
      <p css={`font-weight: 700;`}>Imagine a campus where climate is just... common sense.</p>
    </div>
    <div className="col" css={`color: blue; border: 1px solid blue; border-radius: 10px; text-align: center; padding: 10px; align-items: center; display: flex;`}>
      <div>
        <p>That's what we're building.</p>
        <p>Let's push Penn into Climate.</p>
      </div>
    </div>
  </div>
)


const OrientationAndNewsGrid = s.div`
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`

const IndexPage = () => {
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <div css={`margin: auto 1rem;`}>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <Imagine />
        <OrientationAndNewsGrid>
          <Orientation />
          <News />
        </OrientationAndNewsGrid>
      <Community />
      <Team />
      <Footer />
    </div>
  )
}
export default IndexPage
