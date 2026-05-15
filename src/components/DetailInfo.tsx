import React from 'react'
import { CometCard } from './ui/CometCard'
import NavbarDemo from './resizable-navbar-demo'
import uk1st from '@/assets/uk1st.png'
import uk2nd from "@/assets/uk2nd.png"
import uk3rd from "@/assets/uk3rd.png"
import { thingsToDo } from '@/assets/thingstodo'
import { Cards } from './ui/Cards'

const DetailInfo = () => {
  return (
    <div className='min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500/30'>
      <NavbarDemo />

      {/* Hero Section (First Main Block) */}
      <div className='max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-12'>
        
        {/* Top Header Row */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 min-h-[13rem]'>
          <div className='w-full md:w-[40%] space-y-4'> 
            <h1 className='font-extrabold text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500'>
              Bali, Indonesia
            </h1>
            <p className='text-slate-400 text-sm sm:text-base leading-relaxed max-w-md'>
              An immersive island experience. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tenetur, nihil magni, ullam aspernatur, quidem non officia impedit saepe facilis unde 
              cumque possimus minima expedita earum sit hic esse sint quibusdam.
            </p>
          </div>
          
          <div className='w-full md:w-[60%] flex justify-end items-center bg-slate-900/40 border border-slate-800/60 p-4 rounded-2xl backdrop-blur-sm'>
            <CometCard imageSrc={uk1st} width={600} imageHeight='12rem' />
          </div>
        </div>

        {/* Gallery Grid Row */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-start min-h-[35rem]'>
          <div className='lg:col-span-3 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm flex flex-col md:flex-row gap-6 items-center'>
            
            <div className='w-full md:w-auto shrink-0'>
              <CometCard imageSrc={uk2nd} width={400} imageHeight='22rem' />
            </div>
            
            <div className='flex flex-col gap-6 w-full'>
              <CometCard imageSrc={uk3rd} width={500} imageHeight='10rem' />
              <CometCard imageSrc={''} width={500} imageHeight='10rem' />
            </div>
          </div>

          {/* Sidebar / Info Box */}
          <div className='bg-gradient-to-br from-purple-900/20 to-slate-900 border border-purple-500/20 rounded-2xl p-6 h-full flex items-center justify-center text-purple-300 font-medium tracking-wide shadow-xl shadow-purple-950/20'>
            Side Highlights
          </div>
        </div>

      </div>

      {/* Explorer Section (Second Main Block) */}
      <div className='bg-slate-900/60 border-t border-slate-800 py-16 mt-12'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12 space-y-8'>
          
          {/* Header Filter Placeholder */}
          <div className='flex justify-between items-center border-b border-slate-800 pb-4'>
            <div className='h-8 w-32 bg-slate-800 rounded-lg animate-pulse'></div>
            <div className='h-8 w-48 bg-slate-800 rounded-lg animate-pulse'></div>
          </div>

          {/* Carousel Layout */}
          <div className='space-y-6'>
            <h2 className='font-bold text-3xl tracking-tight text-slate-100'>Top Places</h2>
            
           <div className="overflow-hidden relative w-full">
  <div className="flex gap-6 w-max animate-scroll">
    
    {[...thingsToDo, ...thingsToDo].map((data, i) => (
      <div
        key={i}
        className="shrink-0 transition-transform duration-300 hover:-translate-y-2"
      >
        <Cards
          imageHeight="14rem"
          width={300}
          rank={data.rank}
          attraction_name={data.attraction_name}
          attraction_image_url={data.attraction_image_url}
          rating={data.rating}
          category={data.category}
          review_count={data.review_count}
        />
      </div>
    ))}

  </div>
</div>
          </div>

        </div>
      </div>

      {/* Footer Spacer (Third Block) */}
      <footer className='py-8 text-center text-xs text-slate-600'>
        {/* Empty placeholder kept structural */}
      </footer>
    </div>
  )
}

export default DetailInfo