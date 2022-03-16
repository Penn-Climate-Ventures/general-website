import React from "react"
import "../styles/base.scss"

import {
  Layout,
  Navbar,
  News,
  Footer
} from "../components"
import {Email, Text, Title, UrlLink} from "../ui/Typography";
import SEO from "../components/seo";


const CollaboratePage = () => {
  return (
    <>
    <SEO title="Collaborate" defer={false} />
    <Navbar />
    <Layout>
      <Title>Collaborate</Title>
      <Text bold>
        Club Co-Sponsor, Speak/Mentor/Judge/Advise Interest, Corporate Sponsor Interest, Donate
      </Text>
      <Text>
        If you or your group would like to support us, please contact us at <Email/> with a
        statement of your area of interest and your involvement capacities.
      </Text>
      <Text>If you have press inquiries, please contact us at <Email/>.</Text>
      <Text>
        If you would like to submit a piece to the blog, please email{' '}
        <UrlLink href={'mailto:preeths@sas.upenn.edu'}>preeths@sas.upenn.edu</UrlLink>.
      </Text>
      <News />
      <Footer />
    </Layout>
    </>
  )
}
export default CollaboratePage
