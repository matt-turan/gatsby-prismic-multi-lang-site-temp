import * as React from 'react'

const HomeHero = ( {  title, backgroundUrl } ) => {

  return (
    <section className='home__hero d-flex justify-content-center align-items-center' style={{backgroundImage: `url(${backgroundUrl})`}}>
        <div className='home__hero-content text-center'>
          <h2>{title}</h2>
        </div>
    </section>
  )
}

export default HomeHero
