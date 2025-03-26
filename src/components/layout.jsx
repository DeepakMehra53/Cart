import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Carttab } from './carttab'
export const Layout = () => {
  return (
    <div className="bg-zinc-200">
        <main className='w-[1200px] max-w-full m-auto p-5'>
            <Header/>
            <Outlet/>
        </main>
        <Carttab/>
    </div>
  )
}
