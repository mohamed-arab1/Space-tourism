import React, { useState, useEffect } from 'react'
import { destinationData } from '../data/destinationData';


function Destination() {
  const [planet, setPlanet] = useState(localStorage.getItem('planet') ? localStorage.getItem('planet') : "Moon");

  const filterPlanets = destinationData.filter(data =>  data.name === planet);

  useEffect(() => {
    localStorage.setItem('planet', planet)
  }, [planet])

  return (
    <main className='bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop'>
        <section className='flex flex-col items-center lg:flex-row mt-10'>
          <div className=' md:w-1/2 lg:pl-40 flex flex-col gap-4 md:gap-8'> 
            <div className='text-white'>
              <h2 className='text-xl md:text-2xl'><span className='text-slate-700 '>01</span> PICK YOUR DESTINATION</h2>
            </div>
            <div className='flex justify-center'>
              <img src={filterPlanets[0].images.png} alt="image_" className=' w-40 lg:w-auto ' />
            </div>
          </div>
          <div className='w-3/4 lg:w-1/2 text-white flex justify-center items-center mt-4 lg:mt-8'>
            <div className='lg:w-1/2 flex flex-col gap-3 lg:gap-6'>
              <ul className='flex gap-5 text-sm'>
                <li className={`cursor-pointer pb-2 ${planet === "Moon" ? " border-white border-b-2" : "border-none"}`} onClick={() => setPlanet("Moon")}>MOON</li>
                <li className={`cursor-pointer pb-2 ${planet === "Mars" ? " border-white border-b-2" : "border-none"}`} onClick={() => setPlanet("Mars")}>MARS</li>
                <li className={`cursor-pointer pb-2 ${planet === "Europa" ? " border-white border-b-2" : "border-none"}`} onClick={() => setPlanet("Europa")}>EUROPA</li>
                <li className={`cursor-pointer pb-2 ${planet === "Titan" ? " border-white border-b-2" : "border-none"}`} onClick={() => setPlanet("Titan")}>TITAN</li>
              </ul>
              <div>
                <h1 className='text-4xl lg:text-7xl'>{filterPlanets[0].name}</h1>
                <p className='text-sm text-slate-400 leading-4 lg:leading-6 mt-2 lg:mt-5'>
                  {filterPlanets[0].description}
                </p>
                <hr className='mt-4 md:mt-8'/>
                <div className='flex justify-start gap-4 lg:gap-8 mt-4 lg:mt-8'>
                  <div>
                    <span className='text-sm text-slate-400'>AVG. DISTANCE</span>
                    <h3 className='text-2xl'>{filterPlanets[0].distance}</h3>
                  </div>
                  <div>
                    <span className=' text-sm text-slate-400'>EST TRAVEL TIME</span>
                    <h3 className='text-2xl'>{filterPlanets[0].travel}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Destination