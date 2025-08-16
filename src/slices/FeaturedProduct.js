//FeaturedProduct.js file

import React, {useRef, useState, useEffect} from 'react'
import { graphql } from 'gatsby'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from 'swiper'

// Import React Icons
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'

// Import Swiper styles
import "swiper/css";

SwiperCore.use([Autoplay])
SwiperCore.use([Navigation])

export const FeaturedProduct = ({ slice }) => {

    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            noSwiping: false,
        },
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay: {
            delay: 250000,
        },
        loop: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }
    }

    return (
        <section className='featured-product'>
            <div className='row m-0'>
                <div className='col-lg-6 d-flex justify-content-center align-items-center tlt-wrapper'>
                    <div>
                        <span className='sub-tlt'>{slice.primary.section_subtitle.text}</span>
                        <h2>{slice.primary.section_title.text}</h2>
                        <p className='desc'>
                            {slice.primary.section_description.text}
                        </p>
                    </div>
                </div>
                <div className='col-lg-6 d-flex justify-content-center align-items-center product-wrapper position-relative'>
                    {/* Featured Products Carousel */}
                    <Swiper className="featured-product-items featured-product-carousel" {...params}>
                        {slice.items.map((item, idx) => (
                            <SwiperSlide className='featured-product-item' key={"featured-product-item-" + idx}>
                                <FeaturedProductItem item={item} idx={idx} key={"featured-product" + idx} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='swiper-button-prev'>
                        <IoMdArrowDropleft />
                    </div>
                    <div className='swiper-button-next'>
                        <IoMdArrowDropright />
                    </div>
                </div>
            </div>
        </section>
    )
}

const FeaturedProductItem = ({ item, idx }) => {
    const ref = useRef(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(ref.current.offsetWidth)
    }, [])

    console.log(width);
    return(
        <div>
            {/* Image */}
            <div className='bottle-shot'></div>
            <h3 className='font-title mt-4'>{item.product_title.text}</h3>
            <p className='desc mt-3'>{item.product_description.text}</p>
            {(width !== 0)?
            <button className='btn btn-primary-1' style={{ width: (width + 10) + "px" }} key="1">
                <span>{item.product_link_text.text}</span>
                <span className='btn-hover'>Find where to buy</span>
            </button>
            : <button className='btn btn-primary-1 test' ref={ref} key="2">
                <span>{item.product_link_text.text}</span>
                <span className='btn-hover'>Find where to buy</span>
            </button>}
        </div>
    )
}

export const query = graphql`
    fragment PageDataBodyFeaturedProductSection on PrismicHomepageDataBodyFeaturedProductSection {
        items {
            product_description {
                text
            }
            product_link_text {
                text
            }
            product_title {
                text
            }
        }
        primary {
            section_description {
                text
            }
            section_subtitle {
                text
            }
            section_title {
                text
            }
        }
    }
`