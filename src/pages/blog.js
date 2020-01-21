import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Templates/Layout';

import SEO from '../components/Templates/seo';
import { rhythm } from '../utils/typography';

import styled from 'styled-components';
const Heading = styled.h1`
  font-family: 'Untitled Sans', Helvetica, Arial, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-variant-ligatures: none;
  font-weight: 700;
  text-align: center;
  // color: white;
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Heading as="h3">Blog Posts</Heading>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const readingTimeString =
            node.timeToRead > 1 ? 'minutes' : 'minute';
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <small>
                  {node.frontmatter.date} - Reading Time:{' '}
                  {node.timeToRead} {readingTimeString}
                </small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
