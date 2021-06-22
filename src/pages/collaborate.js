import React, { useRef } from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "./styles.scss"

import {
  Layout,
  Navbar,
  PageTitle,
  SectionText,
  News,
  Footer,
} from "../components"


const CollaboratePage = () => {
  return (
    <Layout>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <PageTitle>Collaborate</PageTitle>
      <SectionText bold="true">
        Club Co-Sponsor, Speak/Mentor/Judge/Advise Interest, Corporate Sponsor Interest, Donate
      </SectionText>
      <SectionText>
        If you or your group would like to support us, please contact us at
        pennclimateventures@gmail.com with a statement of your area of interest
        and your involvement capacities.
      </SectionText>
      <SectionText>
        If you have press inquiries, please contact us at
        pennclimateventures@gmail.com.
      </SectionText>
      <News />
      <Footer />
    </Layout>
  )
}
export default CollaboratePage
