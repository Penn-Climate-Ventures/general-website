import * as React from "react"
import { Link } from "gatsby"
import {Footer, Container, Navbar} from "../components";
import {Text, Title} from "../ui/Typography";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Not Found" defer={false} />
      <Navbar />
      <Container>
        <Title>404 Not Found</Title>
        <Text bold>
          The page you were looking for was not found.
        </Text>
        <Text>
          Return to the home page <Link to={'/'}>here</Link>.
        </Text>
        <Footer/>
      </Container>
    </>
  )
}

export default NotFoundPage
