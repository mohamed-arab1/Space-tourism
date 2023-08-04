import React, { useState, useEffect } from 'react'
import { crewData } from '../data/crewData'

function Crew() {
  
  const [name, setName] = useState(localStorage.getItem('name') ? localStorage.getItem('name') : "Douglas Hurley")
  const filterCrews = crewData.filter( data => data.name === name);

  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name])

  return (
    <main className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop">
      <section className='flex flex-col lg:flex-row mt-14 lg:mt-0 text-white'>
        <div className='lg:w-1/2 lg:h-screen justify-center flex flex-col md:gap:4 lg:gap-16 lg:pl-24'>
          <div className='text-lg lg:text-xl tracking-widest pl-10 md:pl-24 lg:pl-0'><span className='text-slate-400 font-bold '>02</span> MEET YOUR CREW</div>
          <div className='flex flex-col text-center px-2 md:px-24 lg:px-0 lg:text-start gap-1 md:gap-3'>
            <h3 className='text-lg md:text-xl lg:text-3xl text-slate-400 uppercase'>{filterCrews[0].role}</h3>
            <h2 className='text-xl md:text-3xl lg:text-5xl uppercase mb-2 md:mb-4 lg:mb-10'>{filterCrews[0].name}</h2>
            <p className='lg:w-3/4 text-sm text-slate-400'>{filterCrews[0].bio}</p>
          </div>
          <div className='w-full my-2 md:my-5 lg:my-0 flex justify-center lg:justify-start gap-4' >
            <div className={`w-3 h-3 rounded-full cursor-pointer ${name === "Douglas Hurley" ? "bg-white" : "bg-slate-700"}`} onClick={() => setName("Douglas Hurley")}></div>
            <div className={`w-3 h-3 rounded-full cursor-pointer ${name === "Anousheh Ansari" ? "bg-white" : "bg-slate-700"}`} onClick={() => setName("Anousheh Ansari")}></div>
            <div className={`w-3 h-3 rounded-full cursor-pointer ${name === "Mark Shuttleworth" ? "bg-white" : "bg-slate-700"}`} onClick={() => setName("Mark Shuttleworth")}></div>
            <div className={`w-3 h-3 rounded-full cursor-pointer ${name === "Victor Glover" ? "bg-white" : "bg-slate-700"}`} onClick={() => setName("Victor Glover")}></div>
          </div>
        </div>
        <div className='lg:w-1/2 flex justify-center items-end'>
          <img className='w-56 lg:w-96' src={filterCrews[0].images.png} alt="" />
        </div>
      </section>
    </main>
  )
}

export default Crew