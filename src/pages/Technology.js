import React, { useState, useEffect } from 'react'
import { technologyData } from '../data/technologyData'


function Technology() {

  const [ technology, setTechnology ] = useState(localStorage.getItem('technology') ? localStorage.getItem('technology') : "Launch vehicle");
  const [ width, setWidth ] = useState(window.innerWidth);

  const filterTechnologies = technologyData.filter(
    data => data.name === technology
    )

    useEffect(() => {

      function handleRezise() {
        setWidth(window.innerWidth);
      }
      
      window.addEventListener("resize", handleRezise);
      return window.removeEventListener("resize", handleRezise)
    }, [])

    useEffect(() => {
      localStorage.setItem('technology', technology)
    }, [technology])

  return (
    <main className='bg-technology-desktop'>
      <section className='flex flex-col gap-10 lg:gap-16 mt-10'>
        <div className='text-white pl-12 md:pl-24'>
            <h3 className='text-lg uppercase'><span className="font-bold text-slate-400">03</span> space launch 101</h3>
        </div>
        <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6'>
          <div className='flex flex-col w-full gap-12 lg:pl-24 lg:w-3/4 text-white'>
            <div className='flex flex-col items-center lg:items-start lg:flex-row gap-8'>
              <div className='flex flex-row lg:flex-col gap-5'>
                <div className={`flex justify-center items-center text-2xl w-14 h-14 lg:w-20 lg:h-20 bg-transparent border border-white cursor-pointer rounded-full ${technology === "Launch vehicle" ? "bg-white text-black" : ""}`} onClick={() => setTechnology("Launch vehicle")}>1</div>
                <div className={`flex justify-center items-center text-2xl w-14 h-14 lg:w-20 lg:h-20 bg-transparent border border-white cursor-pointer rounded-full ${technology === "Spaceport" ? "bg-white text-black" : ""}`} onClick={() => setTechnology("Spaceport")}>2</div>
                <div className={`flex justify-center items-center text-2xl w-14 h-14 lg:w-20 lg:h-20 bg-transparent border border-white cursor-pointer rounded-full ${technology === "Space capsule" ? "bg-white text-black" : ""}`} onClick={() => setTechnology("Space capsule")}>3</div>
              </div>
              <div className='flex flex-col w-3/4 lg:w-2/3 text-center lg:text-start  justify-between'>
                <span className='uppercase'>the technology...</span>
                <h2 className='text-2xl md:text-5xl uppercase'>
                  {filterTechnologies[0].name}
                </h2>
                <p className='text-sm md:text-base text-slate-400 mt-3 leading-5 md:leading-relaxed lg:w-2/3'>
                  {filterTechnologies[0].description}
                </p>
              </div>
            </div>
          </div>
          <div className='w-3/4 md:w-1/2 lg:w-1/4'>
            <img className='h-full' src={width < 1024 ? filterTechnologies[0].images.landscape : filterTechnologies[0].images.portrait} alt='' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Technology