import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {
            data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                  <h2>
                    <Link to={`/blog/${node.frontmatter.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>Posted: {node.frontmatter.date}</p>
                  {/* <p>{node.excerpt}</p> */}
                </article>
            ))
            // data.allFile.nodes.map(node => (
            //     <li key={node.name}>
            //         {node.name}
            //     </li>
            // ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

// export const query = graphql`
//   query {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage