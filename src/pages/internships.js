import React from "react"

import {Container, PageLayout} from "../ui/layout"
import {Email, Text} from "../ui/Typography"


const InternshipsPage = () => {
  return (
    <PageLayout title="Internships">
      <Container>
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
      </Container>
    </PageLayout>
  )
}

export default InternshipsPage
