import * as React from "react"
import { Link } from "gatsby"

import {Container, PageLayout} from "../ui/layout"
import {Text} from "../ui/Typography"


const NotFoundPage = () => {
  return (
    <PageLayout title="Not Found">
      <Container>
        <Text bold>
          The page you were looking for was not found.
        </Text>
        <Text>
          Return to the home page <Link to={'/'}>here</Link>.
        </Text>
      </Container>
    </PageLayout>
  )
}

export default NotFoundPage
