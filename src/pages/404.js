import * as React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet";
import {Footer, Layout, Navbar} from "../components";
import {Text, Title} from "../ui/Typography";

const NotFoundPage = () => {
  return (
    <>
      <Helmet title="Penn Climate Ventures | Not Found" defer={false} />
      <Navbar />
      <Layout>
        <Title>404 Not Found</Title>
        <Text bold>
          The page you were looking for was not found.
        </Text>
        <Text>
          Return to the home page <Link to={'/'}>here</Link>.
        </Text>
        <Footer/>
      </Layout>
    </>
  )
}

export default NotFoundPage
