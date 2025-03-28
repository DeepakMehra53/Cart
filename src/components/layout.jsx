import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import CartTab from "./carttab";
import Footer from "./footer";
import { useSelector } from "react-redux";

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  return (
    <div className="bg-zinc-200 min-h-screen flex flex-col">
      <main
        className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 flex-grow
        ${statusTabCart === false ? "" : "-translate-x-56"}`}
      >
        <Header />
        <Outlet />
      </main>
      <CartTab />
      <Footer />
    </div>
  );
};

export default Layout;
