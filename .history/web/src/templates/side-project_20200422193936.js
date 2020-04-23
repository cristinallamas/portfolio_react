import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query SideProjectTemplateQuery($id: String!) {
    sampleProject: sanitySideProject(id: {eq: $id}) {
      id
      categories {
        _id
        title
      }

      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
    }
  }
`

const ProjectTemplate = props => {
  const {data, errors} = props
  const project = data && data.sampleProject
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {project && (
        <SEO title={project.title || 'Untitled'} subtitle={project.subtitle || 'Untitled'} />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} />}
    </Layout>
  )
}

export default ProjectTemplate
