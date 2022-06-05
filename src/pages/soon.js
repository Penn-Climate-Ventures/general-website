import React, {Component} from "react"

import {
  Container,
  Navbar,
  Footer
} from "../components"
import {Title} from "../ui/Typography";
import SEO from "../components/seo";

export default class Soon extends Component {
  render() {
    return (
      <>
      <SEO title="Coming Soon!" defer={false} />
      <Navbar />
      <Container>
        <Title>This page is coming soon!</Title>
        <Footer />
      </Container>
      </>
    )
  }
}
