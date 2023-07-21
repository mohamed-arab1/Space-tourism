import React from 'react'

function Home() {
  return (
    <main className='bg-home-desktop'>
      <section className='flex justify-around mt-20'>
        <div className='flex flex-col gap-7 w-1/2 text-white pl-32'>
          <h3 className='text-lg'>SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className='text-9xl'>SPACE</h1>
          <p className='text-base text-slate-400 mt-3 leading-relaxed'>
            Space Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit back, and
            relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <button className='text-2xl bg-white w-48 h-48 rounded-full mt-12'>EXPLORE</button>
        </div>
      </section>
    </main>
  )
}

export default Home