import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Carttab } from './carttab'
import {useSelector} from 'react-redux'
export const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTabCart)
  return (
    <div className="bg-zinc-200">
        <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transfrom duration-500 ${statusTabCart === false ?"" : "-translate-x-56"}`}>
            <Header/>
            <Outlet/>
        </main>
        <Carttab/>
    </div>
  )
}
