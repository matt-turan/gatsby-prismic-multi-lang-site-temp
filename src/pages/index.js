import * as React from 'react'
import { graphql } from 'gatsby'
import { SliceZone } from '@prismicio/react'

import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import { components } from '../slices'

//components
import HomeHero from '../components/HomeHero'

const Homepage = ({data}) => {
  if (!data) return null
  const doc = data.prismicHomepage.data
  console.log(doc);
  return(
    <Layout>
      <Seo />
      {/* <HomepageBanner />
      <MainContent /> */}
      <HomeHero
        title={doc.banner_title.text}
        backgroundUrl={doc.banner_background.url}
      />
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}


export const query = graphql`
  query MyQuery {
    prismicHomepage {
      data {
        banner_title {
          text
        }
        banner_background {
          url
        },
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBodyFeaturedProductSection
          ...PageDataBodyWhoWeAreSection
        }
      }
    }
  }
`

export default Homepage