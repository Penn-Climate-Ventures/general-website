import React from "react"
import Helmet from "react-helmet"

import {
  Layout,
  Navbar,
  PageTitle,
  Footer, TextP, Email, WideLayout
} from "../components"

const InternshipsPage = () => {
  return (
    <>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      <WideLayout>
        <PageTitle>Internships</PageTitle>
        <br/>
        <TextP>
          Explore hand-picked internships in the climate and sustainability space, ranging from
          non-profits to established companies. Contact <Email/> if you wish to add your company or
          organization's opportunities.
        </TextP>
        <br/><br/>
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
