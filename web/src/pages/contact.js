import React from 'react'
import Container from '../components/container'
// import SEO from '../components/seo'
import Layout from '../containers/layout'

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
