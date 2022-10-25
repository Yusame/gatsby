import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const Projects = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
      {
        data.allStrapiProject.nodes.map((project) => (
          <article key={project.id} style={{border:'1px solid black', margin: '20px', padding: '20px'}}>
            <p>Nom: {project.name}</p>
            <p>Date de livraison: {project.deliveryDate}</p>
            <p>Description: {project.description}</p>
            <p>Technos:</p>
            <ul>
              {project.technologies.map((techno) => (
                <li key={techno.id}>{techno.name}</li>
              ))}
            </ul>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiProject {
      nodes {
        id
        deliveryDate
        name
        description
        technologies {
          id
          name
        }
      }
    }
  }
`

export const Head = () => (
    <>
        <Seo title="Projects" />
        <meta name="project" content="My projects" />
    </>
)

export default Projects