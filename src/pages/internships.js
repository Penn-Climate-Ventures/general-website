import React from "react"
import Helmet from "react-helmet"

import {
  WideLayout,
  Navbar,
  Footer, Layout
} from "../components"
import {Email, Text, Title} from "../ui/Typography";

const InternshipsPage = () => {
  return (
    <>
      <Helmet title="Penn Climate Ventures | Internships" defer={false} />
      <Navbar />
      <Layout>
        <Title>Internships</Title>
        <br/>
        <Text>
          Explore hand-picked internships in the climate and sustainability space, ranging from
          non-profits to established companies. Contact <Email/> if you wish to add your company or
          organization's opportunities.
        </Text>
      </Layout>
      <WideLayout>
        <iframe className="airtable-embed"
          src="https://airtable.com/embed/shrfKreaRwGs2N50J?backgroundColor=cyan&layout=card&viewControls=on"
          frameBorder="0" onmousewheel="" width="100%"
          style={{background: 'transparent', border: '1px solid #ccc', height: '90vh'}}/>
        <Footer />
      </WideLayout>
    </>
  )
}

export default InternshipsPage
