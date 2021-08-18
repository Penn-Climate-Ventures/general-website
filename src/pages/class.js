import React from "react"
import Helmet from "react-helmet"
import "./styles.scss"

import {
  Layout,
  Navbar,
  PageTitle,
  TextP,
  PastWorkshops,
  UpcomingWorkshops,
  Footer,
} from "../components"


const ClassPage = () => {
  return (
    <>
    <Helmet title="Penn Climate Ventures" defer={false} />
    <Navbar />
    <Layout>
      <PageTitle>Class</PageTitle>
      <TextP bold="true" center={"center"}>
          Providing students with practical climate and business knowledge to
          use regardless of what industry they pursue.
      </TextP>
      <TextP center={"center"}>
          The class team (1) lobbies Penn administration to push more climate
          oriented classes (think everyday classes like accounting,
          mathematics, or management with a climate focus!) and (2) creates
          educational climate and business workshops (Waste Management Ideation
          Workshop, A Guide to B-Corp Certification, Sustainable Finance 101,
          etc.)
      </TextP>
      <UpcomingWorkshops />
      {/*<PastWorkshops />*/}
      <Footer />
    </Layout>
    </>
  )
}
export default ClassPage
