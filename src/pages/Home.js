import React from 'react'

function Home() {
  return (
    <main className='lg:bg-home-desktop md:bg-home-tablet bg-home-mobile'>
      <section className='flex flex-col items-center text-center lg:text-start lg:flex-row lg:justify-around mt-20'>
        <div className='flex flex-col gap-4 md:gap-7 w-1/2 text-white lg:pl-12 '>
          <h3 className='text-base lg:text-lg'>SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className='text-4xl md:text-6xl lg:text-9xl'>SPACE</h1>
          <p className='text-sm lg:text-base text-slate-400 mt-3 leading-relaxed'>
            Space Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit back, and
            relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <button className='text-2xl bg-white w-32 h-32 lg:w-48 lg:h-48 rounded-full mt-8 md:mt-12'>EXPLORE</button>
        </div>
      </section>
    </main>
  )
}

export default Home