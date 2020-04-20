import React from 'react'
import {graphql} from 'gatsby'
// import {
//   mapEdgesToNodes,
//   filterOutDocsWithoutSlugs,
//   filterOutDocsPublishedInTheFuture
// } from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

// export const query = graphql`
//   query ContactPageQuery {

//   }
// `

const ContactPage = props => {
  // const {data, errors} = props
  // console.log(data)

  // if (errors) {
  //   return (
  //     <Layout>
  //       <GraphQLErrorList errors={errors} />
  //     </Layout>
  //   )
  // }

  // const site = (data || {}).site

  // if (!site) {
  //   throw new Error(
  //     'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
  //   )
  // }

  return (
    <Layout>
      {/* <SEO title="{site.title}" description={site.description} keywords={site.keywords} /> */}
      <Container>
        <h1>Contact</h1>
      </Container>
    </Layout>
  )
}

export default ContactPage
