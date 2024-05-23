import React, { useEffect } from 'react'
import kirirom from './../../assets/image/home/kirirom.jpg'
import oral from './../../assets/image/home/oral.jpg'
import kng_psa from './../../assets/image/home/kng_psa.jpg'
import outdong from './../../assets/image/home/outdong.jpg'
import { MdOutlineStarPurple500 } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Imformation() {

    useEffect(() => {
        AOS.init({
            duration: 900
        });
    }, []);

    const data_arr = [
        {
            id:1,
            title:'Kirirom Mountain.',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.',
            image: kirirom
        },
        {
            id:2,
            title:'Aural Mountain.',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.',
            image: oral
        },
        {
            id:3,
            title:'Knang Psar.',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.' ,
            image: kng_psa
        },
        {
            id:4,
            title:'Udong Mountain.',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.' ,
            image: outdong
        }
    ]

    // for loop star
    const star = [];
    for (let i = 0; i < 5; i++) {
        star.push(<MdOutlineStarPurple500 key={i} className='text-yellow-400'/>);
    }


  return (
    <main className=' w-full'>
        <section className=' max-w-7xl mx-auto'>
            <h1 className=' text-xl lg:text-3xl text-center font-semibold text-gray-700'>About Travel Places.</h1>
            <p className='text-center text-xs lg:text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5'>
                {
                    data_arr.map((data)=>(
                        <div key={data.id} className='bg-white rounded-sm shadow overflow-hidden box-border' data-aos='fade-up' >
                           
                            <div className='w-full h-48 cursor-pointer '>
                                <img src={data.image} alt='kirirom' className='w-full h-full object-cover rounded-sm hover:scale-105 duration-300'/>
                            </div>
                           
                            <div className='flex justify-center p-3'>
                                <div className='w-full'>
                                    <h1 className='text-lg font-[500] text-gray-800'>{data.title}</h1>
                                    <p className='text-sm flex'>{star}  5/5</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </main>
  )
}

export default Imformation
