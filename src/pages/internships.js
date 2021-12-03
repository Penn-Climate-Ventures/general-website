import React from "react"
import Helmet from "react-helmet"

import {
  Layout,
  Navbar,
  PageTitle,
  Footer
} from "../components"

const InternshipsPage = () => {
  return (
    <>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      <Layout>
        <PageTitle>Internships</PageTitle>

        <iframe className="airtable-embed"
                src="https://airtable.com/embed/shrDAq1TIXtAbX4iN?backgroundColor=cyan&layout=card"
                frameBorder="0" onmousewheel="" width="100%"
                style={{background: 'transparent', border: '1px solid #ccc', height: '60vh'}}/>

        <Footer />
      </Layout>
    </>
  )
}

export default InternshipsPage
