import React, {Component} from "react"
import Helmet from "react-helmet"

import {
  Layout,
  Navbar,
  PageTitle,
  Footer
} from "../components"

export default class Soon extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="Penn Climate Ventures" defer={false} />
        <Navbar />
        <PageTitle>This page is coming soon!</PageTitle>
        <Footer />
      </Layout>
    )
  }
}
