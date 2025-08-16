import React from 'react'
import { graphql } from 'gatsby'

export const WhoWeAre = ({ slice }) => {
    const img_alt = (slice.primary.section_image.alt)? slice.primary.section_image.alt : "Who we are"
    return (
      <section className='who-we-are'>
        <div className='tlt-wrapper'>
          <h2>{slice.primary.section_title.text}</h2>
        </div>
        <div className='row'>
          <div className='col-lg-6 img-wrapper overflow-hidden'>
            <img src={slice.primary.section_image.url} alt={img_alt} with="100%" />
          </div>
          <div className='col-lg-6 '>
            <div className='pl-3 pr-5 content-wrapper'>
              <div className='desc-wrapper' dangerouslySetInnerHTML={{__html: slice.primary.section_description.html}} />
              <button className='btn btn-primary-2'>
                <span>{slice.primary.section_link_text.text}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}

export const query = graphql`
    fragment PageDataBodyWhoWeAreSection on PrismicHomepageDataBodyWhoWeAreSection {
        primary {
            section_description {
              text
              html
            }
            section_image {
              url
              alt
            }
            section_link {
              url
            }
            section_link_text {
              text
            }
            section_title {
              text
            }
        }
    }
`