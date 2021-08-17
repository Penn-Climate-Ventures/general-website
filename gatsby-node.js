const { createFilePath } = require(`gatsby-source-filesystem`)

// Add fields to nodes.
exports.onCreateNode = ({ node, getNode, actions }) => {
  // Add the slug field to the MarkdownRemark nodes.
  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = actions
    const slug = '/blog' + createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`)
    const result = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: blogTemplate,
        context: { slug: node.fields.slug, }
      })
    })
  }
