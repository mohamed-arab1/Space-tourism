import React, { useState } from 'react'
import { technologyData } from '../data/technologyData'


function Technology() {

  const [ technology, setTechnology ] = useState("Launch vehicle");
  const filterTechnologies = technologyData.filter(
    data => data.name === technology
    )

  return (
    <main className='bg-technology-desktop'>
      <section className='flex justify-between'>
        <div className='flex flex-col gap-12 pl-24 w-3/4 text-white'>
          <div>
            <h3 className='text-lg uppercase'><span className="font-bold text-slate-400">03</span> space launch 101</h3>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-5'>
              <div className={`flex justify-center items-center text-2xl w-20 h-20 bg-transparent border border-white cursor-pointer rounded-full ${technology === "Launch vehicle" ? "bg-white text-black" : ""}`} onClick={() => setTechnology("Launch vehicle")}>1</div>
              <div className={`flex justify-center items-center text-2xl w-20 h-20 bg-transparent border border-white cursor-pointer rounded-full ${technology === "Spaceport" ? "bg-white text-black" : ""}`} onClick={() => setTechnology("Spaceport")}>2</div>
              <div className={`flex justify-center items-center text-2xl w-20 h-20 bg-transparent border border-white cursor-pointer rounded-full ${technology === "Space capsule" ? "bg-white text-black" : ""}`} onClick={() => setTechnology("Space capsule")}>3</div>
            </div>
            <div className='flex flex-col w-2/3  justify-between'>
              <span className='uppercase'>the technology...</span>
              <h2 className='text-5xl uppercase'>
                {filterTechnologies[0].name}
              </h2>
              <p className='text-base text-slate-400 mt-3 leading-relaxed w-2/3'>
                {filterTechnologies[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className='w-1/4'>
          <img className='h-full' src={filterTechnologies[0].images.portrait} alt='' />
        </div>
      </section>
    </main>
  )
}

export default Technology