import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const EditorPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="From the Editor" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            {/* For those of you who rise before dawn to get to the best fishing grounds. */}
          How do we both Stand out, grow our audience and 'Hack' our way to the top?
          </h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <h3 id="dynamic-styles">Here we go....</h3>
          <p>
            Go anywhere online today and you are obliterated with enormous volmes of short form content which,
            all too often, leaves you Insta-Unsatisfied .
          </p>
          <p>
            My idea for Offshore Ocean is to take a Long-form look at the Short-form world 
          </p>
          <p>
            By featuring the likes of Peter Miller or Gale Force Twins (for example) who have strong followings we can piggy back on their followers to increase our reach.


          </p>
          <p>My idea would be to look at fishing, spearfishing, leisure cruising, superyachts and pull together some excellent content.</p>

          <p>

            Lets go to the Lurrsen factory or Royal Huisman, profile the team there and drop in yes this is analagous to our export business for Invincible Boats.
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
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
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
      <EditorPage location={props.location} data={data} {...props} />
    )}
  />
)
