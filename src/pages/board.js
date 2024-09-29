import React from "react"

import {Container, PageLayout} from "../ui/layout"
import {Email, Text, UrlLink} from "../ui/Typography"
import {News} from "../components/News"

import "../styles/base.scss"


const BoardPage = () => {
  return (
    <PageLayout title="Meet The Board">
      <Container>
        <News />
      </Container>
    </PageLayout>
  )
}
export default BoardPage
