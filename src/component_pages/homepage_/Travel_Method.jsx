import React from 'react'
import { FaTaxi } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { MdPedalBike } from "react-icons/md";

const Travel_Method = () => {
    
    const data_travel = [
        {
            id : 1,
            title: 'Taxi',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.',
            icon: <FaTaxi />
        },
        {
            id : 2,
            title: 'Bus',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.',
            icon: <FaBusAlt />
        },
        {
            id : 3,
            title: 'Motorcycle',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.',
            icon: <FaMotorcycle />
        },
        {
            id : 4,
            title: 'Bicycle',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.',
            icon: <MdPedalBike />
        }
    ]

  return (
    <>
    <main className=' w-full bg-gray-200'>
      <section className='h-full max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            {
                data_travel.map((data)=>(
                    <div key={data.id} className='rounded-sm overflow-hidden box-border p-8 cursor-pointer'>
                        <h1 className=' text-5xl text-green-500 flex justify-center hover:scale-110 duration-300' >
                            {
                                data.icon
                            }
                        </h1>
                        <div className='mt-5'>
                            <h1 className='text-4xl text-gray-700 font-medium text-center'>{data.title}</h1>
                        </div>  
                    </div>
                ))
            }
        </div>
      </section>
    </main>
    </>
  )
}

export default Travel_Method
