import React, { useRef } from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "./styles.scss"

import {
  Layout,

  Navbar,
  Imagine,
  Orientation,
  News,
  Community,
  Team,
  Footer,

  PageTitle,
  SectionText,
  // class.js
  UpcomingWorkshops,
  PastWorkshops,
} from "../components"

import {
  FOREST_GREEN,
  GREEN,
  IVORY,
  STEEL_BLUE,
  MIDNIGHT_BLUE,
  OXFORD_BLUE
} from "../utils/constants"


const IndexPage = () => {
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <Layout>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <Imagine />
      <Orientation />
      <News />
      <Community />
      <Team />
      <Footer />
    </Layout>
  )
}
export default IndexPage
