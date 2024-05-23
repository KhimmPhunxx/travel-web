import React from 'react'
import kng_psa2 from './../../assets/image/home/kng_psa2.jpg'

const Info_Knornrpsar = () => {
    const data = [
        {
            id : 1,
            title: 'Knornrpsar Mountain.',
            desc :'It’s been too long since I last published. I was supposed to be in SEOUL in April but then this whole pandemic happened and I had to cancel all my plans in 2020. In case you’re reading this article from outside of Cambodia, you should know that COVID-19 situation here is quite good compared to other countries globally. But this doesn t mean that you can go around carelessly, you still need to practice all the new normals.Khnorng Psa is not the first trip I made during COVID-19. I had a few other trips, but none was worth to write about because I went with the wrong group of people to the destinations I had already been to.I spent one night in Khnorng Psa last week and it’s definitely not for the faint of heart and foot! In this article, you’ll find a list of things you need to know before planning your trip to Khnorng Psa.',
            image: kng_psa2
        }
    ]
  return (
    <main className=' w-full'>
        <section className=' max-w-7xl mx-auto bg-white rounded'>
            <div className=' w-full h-64 lg:h-[500px] border'> 
                <img src={data[0].image} alt="" className='w-full h-full object-cover rounded'/>
            </div>
            <div className='p-5 lg:p-5'>
                <h1 className='text-4xl text-gray-700 font-semibold'>{data[0].title}</h1>
                <p className='text-lg text-gray-500'>{data[0].desc}</p>
            </div>
        </section>
    </main>
  )
}

export default Info_Knornrpsar
