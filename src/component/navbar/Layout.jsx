import React from 'react'
import Logo from './Logo'
import NavigationBar from './NavigationBar'
import ActionButton from './ActionButton'
import { Outlet } from 'react-router-dom'
import FooterPage from './FooterPage'

const Layout = () => {
  return (
    <>
      <header className='w-full bg-white shadow-sm z-40 bg-opacity-40 sticky top-0'>
        <nav className='max-w-7xl px-3 lg:px-0 mx-auto flex justify-between'>
          <div className='w-12'>
            <Logo />
          </div>
          <div className='p-2 hidden lg:block'>
            <NavigationBar />
          </div>
          <div className='flex'>
            <ActionButton />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterPage />
      </footer>
    </>
  )
}

export default Layout
