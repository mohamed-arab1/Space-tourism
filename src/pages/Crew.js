import React, { useState } from 'react'
import { crewData } from '../data/crewData'

function Crew() {
  
  const [name, setName] = useState("Douglas Hurley")
  const filterCrews = crewData.filter( data => data.name === name);

  return (
    <main className="bg-crew-desktop">
      <section className='flex text-white'>
        <div className='w-1/2 h-screen justify-center flex flex-col gap-16 pl-24'>
          <div className='text-xl tracking-widest'><span className='text-slate-400 font-bold '>02</span> MEET YOUR CREW</div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-3xl text-slate-400 uppercase'>{filterCrews[0].role}</h3>
            <h2 className='text-5xl uppercase mb-10'>{filterCrews[0].name}</h2>
            <p className='w-3/4 text-sm text-slate-400'>{filterCrews[0].bio}</p>
          </div>
          <div className='w-full h-12 flex gap-4' >
            <div className={`w-3 h-3 rounded-full cursor-pointer ${name === "Douglas Hurley" ? "bg-white" : "bg-slate-800"}`} onClick={() => setName("Douglas Hurley")}></div>
            <div className={`w-3 h-3 rounded-full cursor-pointer ${name === "Anousheh Ansari" ? "bg-white" : "bg-slate-800"}`} onClick={() => setName("Anousheh Ansari")}></div>
            <div className={`w-3 h-3 rounded-full cursor-pointer ${name === "Mark Shuttleworth" ? "bg-white" : "bg-slate-800"}`} onClick={() => setName("Mark Shuttleworth")}></div>
            <div className={`w-3 h-3 rounded-full cursor-pointer ${name === "Victor Glover" ? "bg-white" : "bg-slate-800"}`} onClick={() => setName("Victor Glover")}></div>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-end'>
          <img className='w-96' src={filterCrews[0].images.png} alt="" />
        </div>
      </section>
    </main>
  )
}

export default Crew