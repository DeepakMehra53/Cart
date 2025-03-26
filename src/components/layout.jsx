import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Carttab } from './carttab'
export const Layout = () => {
  return (
    <div>
        <main>
            <Header/>
        </main>
    </div>
  )
}
