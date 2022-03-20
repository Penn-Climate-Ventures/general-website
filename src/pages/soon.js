import React, {Component} from "react"

import {
  Layout,
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
      <Layout>
        <Title>This page is coming soon!</Title>
        <Footer />
      </Layout>
      </>
    )
  }
}
