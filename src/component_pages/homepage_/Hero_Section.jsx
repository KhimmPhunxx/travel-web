import React from 'react'
import hero_sec_image from './../../assets/image/home/hero_section_image.jpg'

const Hero_Section = () => {
  return (
   <main className=' w-full h-72 lg:h-screen bg-gray-400'>
        <section className='w-full h-full bg-no-repeat bg-cover bg-center bg-opacity-50'
        style={{backgroundImage : `url(${hero_sec_image})`}}
        >
            
        </section>
   </main>
  )
}

export default Hero_Section
