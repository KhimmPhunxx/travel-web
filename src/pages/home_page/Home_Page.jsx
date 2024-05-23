import React from 'react'
import Hero_Section from '../../component_pages/homepage_/Hero_Section'
import Imformation from '../../component_pages/homepage_/Imformation'
import Travel_Method from '../../component_pages/homepage_/Travel_Method'
import Info_Kirirom from '../../component_pages/homepage_/Info_Kirirom'
import Info_Knornrpsar from '../../component_pages/homepage_/Info_Knornrpsar'

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

        <section className='mt-3 lg:mt-10'>
          <Travel_Method />
        </section>

        <section className='mt-3 lg:mt-10'>
          <Info_Kirirom/>
        </section>

        <section className='mt-3 lg:mt-10'>
          <Info_Knornrpsar/>
        </section>

    </main>
  )
}

export default Home_Page
