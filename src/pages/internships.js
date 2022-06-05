import React from "react"

import {
  Container,
  Navbar,
  Footer
} from "../components"
import {Email, Text, Title} from "../ui/Typography";
import SEO from "../components/seo";

const InternshipsPage = () => {
  return (
    <>
      <SEO title="Internships" defer={false} />
      <Navbar />
      <Container>
        <Title>Internships</Title>
        <br/>
        <Text>
          Explore hand-picked internships in the climate and sustainability space, ranging from
          non-profits to established companies. Contact <Email/> if you wish to add your company or
          organization's opportunities.
        </Text>
      </Container>
      <Container wide>
        <iframe className="airtable-embed"
          src="https://airtable.com/embed/shrfKreaRwGs2N50J?backgroundColor=cyan&layout=card&viewControls=on"
          frameBorder="0" onmousewheel="" width="100%"
          style={{background: 'transparent', border: '1px solid #ccc', height: '90vh'}}/>
        <Footer />
      </Container>
    </>
  )
}

export default InternshipsPage
