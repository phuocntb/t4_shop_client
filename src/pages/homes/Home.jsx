import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div className='home_page'>
          <header>Header</header>
          <div className='home_page_container'>
            <Outlet/>
          </div>
          <footer>Footer</footer>
    </div>
  )
}
