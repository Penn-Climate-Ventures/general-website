import React, { useRef } from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "./styles.scss"

import {
  Layout,
  Navbar,
  PageTitle,
  SectionText,
  UpcomingLectures,
  PastLectures,
  ConsultingProductDemos,
  Footer,
} from "../components"


const ClassPage = () => {
  return (
    <Layout>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <PageTitle>Fellowships</PageTitle>
      <SectionText bold="true">
        Conecting undergards with companies, giving students exposure to careers in the
        sustainability space.
      </SectionText>
      <SectionText>
        The fellowships team (1) organizes speaker events to get students acquainted with career
        paths and prospects in climate tech and (2) coordinates teams of students to work on
        real-world projects with climate startups (think a consulting club but specifically for
        climate tech).
      </SectionText>
      <UpcomingLectures />
      <PastLectures />
      <ConsultingProductDemos />
      <Footer />
    </Layout>
  )
}
export default ClassPage
