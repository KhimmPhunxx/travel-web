import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <main>
        <nav>
            <div className='flex justify-between'>
                <div className='flex space-x-3'>
                    <div className='p-2'>
                        <NavLink to='/' 
                        className={({isActive}) => isActive ? 'text-green-500 font-medium hover:text-green-500 duration-200 ' : 'text-gray-700 font-medium hover:text-green-500 duration-200 '}
                        >Home</NavLink>
                    </div>
                    <div className='p-2'>
                        <NavLink to='/contact'
                        className={({isActive}) => isActive ? 'text-green-500 font-medium hover:text-green-500 duration-200 ' : 'text-gray-700 font-medium hover:text-green-500 duration-200 '}
                         >About</NavLink>
                    </div>
                    <div className='p-2'>
                        <NavLink to='#' className='text-gray-700 font-medium hover:text-green-500 duration-200'>Service</NavLink>
                    </div>
                </div>
                
            </div>
        </nav>
    </main>
  )
}

export default NavigationBar
