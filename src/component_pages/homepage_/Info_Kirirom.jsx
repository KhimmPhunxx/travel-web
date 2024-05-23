import React from 'react'
import krr2 from './../../assets/image/home/krr2.jpg'

const Info_Kirirom = () => {
    const data = [
        {
            id : 1,
            title: 'Kirirom Mountain.',
            desc :'Kirirom National Park, officially called Preah Suramarit-Kossamak Kirirom National Park, is a national park in Cambodia located in the eastern part of the Cardamom Mountains at a mean elevation of 675 m (2,215 ft). It is Cambodia first officially designated national park.[2]. The meaning of "Kirirom" is "Happy Mountain". This name was given to the area by King Monivong in the 1930s. The ancient name of the place was Phnom Vorvong Sorvong for the main two hills there were connected with the Cambodian popular legend about two heroic princely brothers Vorvong and',
            image: krr2
        }
    ]
  return (
    <main className=' w-full'>
        <section className=' max-w-7xl mx-auto bg-white'>
            <div className=' w-full h-64 lg:h-[500px] border'> 
                <img src={data[0].image} alt="" className='w-full h-full object-cover rounded'/>
            </div>
            <div className='p-5'>
                <h1 className='text-4xl text-gray-700 font-semibold'>{data[0].title}</h1>
                <p className='text-lg text-gray-500'>{data[0].desc}</p>
            </div>
        </section>
    </main>
  )
}

export default Info_Kirirom
