import React from "react"
import Helmet from "react-helmet"
import "./styles.scss"

import {
  Layout,
  Navbar,
  PageTitle,
  TextP,
  Email,
  News,
  Footer,
} from "../components"


const CollaboratePage = () => {
  return (
    <Layout>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <PageTitle>Collaborate</PageTitle>
      <TextP bold="true">
        Club Co-Sponsor, Speak/Mentor/Judge/Advise Interest, Corporate Sponsor Interest, Donate
      </TextP>
      <TextP>
        If you or your group would like to support us, please contact us at <Email/> with a
        statement of your area of interest and your involvement capacities.
      </TextP>
      <TextP>If you have press inquiries, please contact us at <Email/>.</TextP>
      <News />
      <Footer />
    </Layout>
  )
}
export default CollaboratePage
