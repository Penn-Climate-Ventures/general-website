import React, {Component} from "react"
import Helmet from "react-helmet"

import {
  Layout,
  Navbar,
  Footer
} from "../components"
import {Title} from "../ui/Typography";

export default class Soon extends Component {
  render() {
    return (
      <>
      <Helmet title="Penn Climate Ventures | Soon!" defer={false} />
      <Navbar />
      <Layout>
        <Title>This page is coming soon!</Title>
        <Footer />
      </Layout>
      </>
    )
  }
}
