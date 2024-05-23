import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const ActionButton = () => {
    const [expanded, setExpanded] = useState(true)
  return (
    <main className=' w-full h-full'>
        <section>
            <div className='flex justify-center'>
                <div className='flex space-x-3'>
                    <div className='p-2'>
                        <button className='bg-green-500 hidden lg:block text-white px-4 py-2 rounded-sm hover:bg-green-600 duration-200'>Contact</button>
                    </div>
                    <div className='p-2 block lg:hidden'>
                        <button  onClick={()=> setExpanded((curr) => !curr)} className='bg-green-500 text-white px-2 py-2 rounded-md hover:bg-green-600 duration-200'> <HiMenuAlt3 className='text-2xl'/> </button>
                    </div>
                </div>
            </div>
        </section>
        <section onClick={
            ()=> setExpanded(true)
        } className={` ${ expanded ? 'w-0' : 'w-full'} absolute h-screen bg-opacity-50 p-0 m-0 bg-gray-500 left-0 top-0`}>
            <div className={`h-full  ${expanded ? 'w-0' : 'w-[220px]'} duration-200 bg-gray-100 overflow-hidden`}>
               <nav className={`${expanded ? 'w-0' : 'w-full'} overflow-hidden duration-200 p-5`}>
                    <div className={` justify-between  duration-200`}>
                        <div className=' border-b pb-2'> 
                            <h1 className={`overflow-hidden font-semibold text-gray-700 ${expanded ? 'hidden' : ' block'}`}>KPS Travel</h1>
                        </div>
                        <div className='flex flex-col space-y-4 pt-3'>
                            <NavLink href='#' className={`p-2 text-center dur border bg-gray-300 rounded-lg hover:bg-green-200 text-gray-700 font-medium hover:text-green-500 duration-200 ${expanded ? 'w-0' : ' w-[180px]'}`}>Home</NavLink>
                            
                            <NavLink href='#' className={`p-2 text-center border bg-gray-300 rounded-lg hover:bg-green-200 text-gray-700 font-medium hover:text-green-500 duration-200 ${expanded ? 'w-0' : ' w-[180px]'}`}>About</NavLink>

                            <NavLink href='#' className={`p-2 text-center border bg-gray-300 rounded-lg hover:bg-green-200 text-gray-700 font-medium hover:text-green-500 duration-200 ${expanded ? 'w-0' : ' w-[180px]'}`}>Service</NavLink>
                            <div className=' border-t pt-3'>
                                <button onClick={()=> setExpanded(true)} className='bg-green-500 text-white w-full px-2 py-2 rounded-md hover:bg-green-600 duration-200'>Contact</button>
                            </div>
                        </div>                       
                    </div>
               </nav>
            </div>
        </section>
    </main>
  )
}

export default ActionButton
