import React from "react"
import { graphql, StaticQuery, Link /*useStaticQuery*/ } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Bio from "../components/bio"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  /* const {site} = useStaticQuery(
    graphql`
    query{
      site{
        siteMetadata{
          description
          siteUrl
        }
      }
    }
`



  )
  */
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OffshoreOcean",
    description: data.site.siteMetadata.description,
    alternateName: "Offshore Ocean",
    url: data.site.siteMetadata.siteUrl,
    logo: "https://offshoreocean.com/static/offshore-ocean-logo.png",
    sameAs: "https://instagram.com/offshore_olly",
  }

  return (
    <Layout title={siteTitle}>
      <Seo
        title="Posts"
        schemaMarkup={schema}
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
          <Link to="editor" color="#fffff">
            Read a note from The Editor
          </Link>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.id}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query index {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`

const Index = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)

export default Index
