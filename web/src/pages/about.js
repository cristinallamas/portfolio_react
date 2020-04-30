import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {responsiveTitle1} from '../components/typography.module.css'
import ImageText from '../components/image-text'

import BlockContent from '../components/block-content'
export const query = graphql`
  query AboutPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      subtitle
      cv {
        asset {
          source {
            url
            name
          }
          path
        }
      }
      biography {
        _key
        _type
        style
        list
      }
      _rawBiography
      bioPic {
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
      name
    }
  }
`

const AboutPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 className={responsiveTitle1}>{site.title}</h1>
        <h2>{site.subtitle}</h2>
        <ImageText image={site.bioPic}>
          {site._rawBiography && <BlockContent blocks={site._rawBiography || []} />}
          <a href={site.cv.asset.path} download='Cristina-Llamas-CV'>
            Download my CV
          </a>
        </ImageText>
      </Container>
    </Layout>
  )
}

export default AboutPage
