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
  Footer, UrlLink,
} from "../components"


const CollaboratePage = () => {
  return (
    <>
    <Helmet title="Penn Climate Ventures" defer={false} />
    <Navbar />
    <Layout>
      <PageTitle>Collaborate</PageTitle>
      <TextP bold="true">
        Club Co-Sponsor, Speak/Mentor/Judge/Advise Interest, Corporate Sponsor Interest, Donate
      </TextP>
      <TextP>
        If you or your group would like to support us, please contact us at <Email/> with a
        statement of your area of interest and your involvement capacities.
      </TextP>
      <TextP>If you have press inquiries, please contact us at <Email/>.</TextP>
      <TextP>
        If you would like to submit a piece to the blog, please email{' '}
        <UrlLink href={'mailto:preeths@sas.upenn.edu'}>preeths@sas.upenn.edu</UrlLink>.
      </TextP>
      <News />
      <Footer />
    </Layout>
    </>
  )
}
export default CollaboratePage
