import React, { useRef } from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "./styles.scss"

import {
  Navbar,
  PageTitle,
  SectionText,
  PastWorkshops,
  UpcomingWorkshops,
  Footer,
} from "../components"


const OrientationAndNewsGrid = s.div`
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`

const ClassPage = () => {
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <div css={`margin: auto 3rem;`}>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <PageTitle>Class</PageTitle>
      <SectionText bold="true">
          Providing students with practical climate and business knowledge to
          use regardless of what industry they pursue.
      </SectionText>
      <SectionText>
          The class team (1) lobbies Penn administration to push more climate
          oriented classes (think everyday classes like accounting,
          mathematics, or management with a climate focus!) and (2) creates
          educational climate and business workshops (Waste Management Ideation
          Workshop, A Guide to B-Corp Certification, Sustainable Finance 101,
          etc.)
      </SectionText>
      <UpcomingWorkshops />
      <PastWorkshops />
      <Footer />
    </div>
  )
}
export default ClassPage
