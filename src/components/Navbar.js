import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import iconHamburger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'

function Navbar() {

  const [selected, setSelected] = useState("/");
  const [openNav, setOpenNav] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname)
  }, [location])

  return (
    <>
      <div className='absolute top-0 lg:top-5 left-0 w-full h-16 flex justify-between items-center z-50'>
          <div className='flex justify-between items-center lg:w-1/2 pl-6'>
            <div >
              <img src={logo} alt="logo" />
            </div>
            <hr className='w-3/4 z-10 hidden lg:block'></hr>
          </div>
          <div className='lg:w-1/2 hidden bg-transparent backdrop-blur-lg h-full md:flex items-center lg:pl-10'>
            <ul className='h-full flex justify-center items-center text-white'>
              <li className='h-full'>
                <Link to="/" onClick={() => setSelected("/")} className={`flex h-full items-center gap-2 text-base ml-4 border-b-4 ${selected === "/" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>00</span> HOME</Link>
              </li>
              <li className='h-full'>
                <Link to="/destination" onClick={() => setSelected("/destination")} className={`flex h-full items-center gap-2 text-base ml-4 border-b-4 ${selected === "/destination" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>01</span> DESTINATION</Link>
              </li>
              <li className='h-full'>
                <Link to="/crew" onClick={() => setSelected("/crew")} className={`flex h-full items-center gap-2 text-base ml-4 border-b-4 ${selected === "/crew" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>02</span> CREW</Link>
              </li>
              <li className='h-full'>
                <Link to="/technology" onClick={() => setSelected("/technology")} className={`flex h-full items-center gap-2 text-base ml-4 border-b-4 ${selected === "/technology" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>03</span> TECHNOLOGY</Link>
              </li>
            </ul>
          </div>
          <div className={`md:hidden mr-5 fixed top-5 right-0`}>
            {
              openNav 
              ? <img src={iconClose} alt='icon-close' className='cursor-pointer' onClick={() => setOpenNav(!openNav)} /> 
              : <img src={iconHamburger} alt='icon-hamburger' className='cursor-pointer' onClick={() => setOpenNav(!openNav)} />
            }
          </div>
      </div>
      {
        openNav && 
        <div className='absolute top-0 right-0 w-full h-screen bg-black'>
          <ul className='h-full flex flex-col justify-center items-center gap-16 text-white'>
          <li>
            <Link
             to="/" 
             onClick={
              () => {
                setSelected("/");
                setOpenNav(false);
              }
            } 
             className={`flex items-center gap-2 text-base  border-b-4 ${selected === "/" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>00</span> 
             HOME
            </Link>
          </li>
            <li>
              <Link
                to="/destination" 
                onClick={
                  () => {
                    setSelected("/destination");
                    setOpenNav(false);
                  }
                } 
                className={`flex items-center gap-2 text-base  border-b-4 ${selected === "/destination" ? "border-b-white":"border-transparent"}`}>
                <span className='font-bold'>01</span> 
                DESTINATION
              </Link>
            </li>
            <li>
              <Link 
              to="/crew" 
              onClick={
                () => {
                  setSelected("/crew");
                  setOpenNav(false);
                  }
                } 
                className={`flex items-center gap-2 text-base  border-b-4 ${selected === "/crew" ? "border-b-white":"border-transparent"}`}>
                <span className='font-bold'>02</span> 
                CREW
              </Link>
            </li>
            <li>
              <Link
              to="/technology" 
              onClick={
                () => {
                  setSelected("/technology");
                  setOpenNav(false)
                  }
                } 
                className={`flex items-center gap-2 text-base  border-b-4 ${selected === "/technology" ? "border-b-white":"border-transparent"}`}><span className='font-bold'>03</span>
                TECHNOLOGY
                </Link>
            </li>
          </ul>
        </div>
      }
    </>
  )
}

export default Navbar