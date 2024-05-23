import React from 'react'
import Hero_Section from '../../component_pages/homepage_/Hero_Section'
import Imformation from '../../component_pages/homepage_/Imformation'

const Home_Page = () => {
  return  (
    <main className=' pb-10'>
        {/* h1 */}
        <section className='mt-[-56px] z-10'>
           <Hero_Section />
        </section>
        
        <section className='mt-3 lg:mt-10'>
          <Imformation />
        </section>

    </main>
  )
}

export default Home_Page
