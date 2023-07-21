import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/shared/logo.svg"

function Navbar() {

  const [selected, setSelected] = useState(localStorage.getItem('page') ? localStorage.getItem('page') : "home");

  useEffect(() => {
    localStorage.setItem("page", selected)
  }, [selected])

  return (
    <div className='absolute top-5 left-0 lg:w-full h-16 flex justify-between items-center'>
        <div className='flex justify-between items-center w-1/2 pl-6'>
          <div >
            <img src={logo} alt="logo" />
          </div>
          <hr className='w-3/4 z-10'></hr>
        </div>
        <div className='w-1/2 bg-navColor h-full flex items-center pl-16'>
          <ul className='h-full flex justify-center items-center text-white'>
            <Link to="/" onClick={() => setSelected("home")} className={`flex h-full items-center gap-2 text-base ml-5 border-b-4 ${selected === "home" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>00</span> HOME</Link>
            <Link to="/destination" onClick={() => setSelected("destination")} className={`flex h-full items-center gap-2 text-base ml-5 border-b-4 ${selected === "destination" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>01</span> DESTINATION</Link>
            <Link to="/crew" onClick={() => setSelected("crew")} className={`flex h-full items-center gap-2 text-base ml-5 border-b-4 ${selected === "crew" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>02</span> CREW</Link>
            <Link to="/technology" onClick={() => setSelected("technology")} className={`flex h-full items-center gap-2 text-base ml-5 border-b-4 ${selected === "technology" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>03</span> TECHNOLOGY</Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar