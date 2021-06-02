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
    <div css={`margin: auto 3rem;`}>
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
