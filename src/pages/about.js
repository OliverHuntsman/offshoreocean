import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Offshore Ocean takes a deep dive into the Sportfishing Market, focusing on World Class Center Consoles.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.thirtySevenCat.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>The powerful 37' Invincible Catamaran</figcaption>
          </figure>
          <h3 id="dynamic-styles">Going Offshore</h3>
          <p>
            We love life Offshore and everything which comes with it, bing on your boat in the water, the salt in 
            your hair and the either on the hunt or with tight lines.
          </p>
          <p>
            This site aims to bring Sportfishing on board Center Consoles, popular in the US, to the rest of the World,
            getting up close and personal with brands like 
            {" "}
            <a href="https://invincibleboats.com/">
              Invincible Boats
            </a>{" "} and {" "} <a href = "https://yellowfinoffshor.com"> Yellowfin, </a>{" "}

            to provide key insights into life Offshore in high performance Center Consoles.
          </p>
          <p>
            Don't forget to check us out on Social Media, or use an RSS reader like {" "}
            <a href="https://feedly.com/">
              Feedly
            </a>{" "} to stay up to date with our latest posts.
            <p/>
            <p>
              Tight Lines!
            </p>
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    thirtySevenCat: file(
      relativePath: { eq: "Invincible-Boats-37-Ft-Catamaran.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
