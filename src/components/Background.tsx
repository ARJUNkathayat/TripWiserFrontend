import BackgroundImag1 from '@/assets/BackgroundImag1.png'
import React from 'react'
import NavbarDemo from './resizable-navbar-demo'
// Icons import (Make sure to install lucide-react: npm install lucide-react)
import { Search, MapPin, Tent, Hotel, LayoutGrid } from 'lucide-react'
import SearchPageButton from './SearchPageButton'

const Background = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center overflow-hidden flex flex-col font-sans"
      style={{
        backgroundImage: `url(${BackgroundImag1})`,
      }}
    >
      {/* Top Section: Navbar and Hero Text */}
      <div className='h-auto pt-6 px-10'>
        <NavbarDemo />
        
        <div className='mt-12 text-center md:text-left md:ml-20'>
          <h1 className='font-bold text-5xl md:text-7xl leading-tight text-white drop-shadow-lg'>
            Discover place you <br />
            will{' '}
            <span className='font-extrabold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent'>
              Love
            </span>
          </h1>

          <h3 className='text-gray-200 text-xl mt-6 leading-relaxed max-w-2xl'>
            Explore top destinations, hidden gems, and 
            unforgettable experiences around the globe.
          </h3>
        </div>
      </div>

      {/* Bottom Section: Enhanced Glassmorphism Card */}
      <div className="flex-1 flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-auto py-12 px-10 rounded-[3rem] bg-white/10 backdrop-filter backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          {/* Categories Row with Icons */}
          <div className='flex flex-wrap items-center justify-center gap-6 mb-10'>
            <div className='flex items-center gap-2 px-5 py-2.5 text-white hover:bg-white hover:text-purple-600 font-medium rounded-full text-sm transition-all cursor-pointer border border-white/20 bg-white/5'>
              <LayoutGrid size={18} /> All Categories
            </div>
            <div className='flex items-center gap-2 px-5 py-2.5 text-white hover:bg-white hover:text-purple-600 font-medium rounded-full text-sm transition-all cursor-pointer border border-white/20 bg-white/5'>
              <MapPin size={18} /> Destinations
            </div>
            <div className='flex items-center gap-2 px-5 py-2.5 text-white hover:bg-white hover:text-purple-600 font-medium rounded-full text-sm transition-all cursor-pointer border border-white/20 bg-white/5'>
              <Tent size={18} /> Activities
            </div>
            <div className='flex items-center gap-2 px-5 py-2.5 text-white hover:bg-white hover:text-purple-600 font-medium rounded-full text-sm transition-all cursor-pointer border border-white/20 bg-white/5'>
              <Hotel size={18} /> Hotels
            </div>
          </div>

          {/* Styled Search Input Area with Gradient Button */}
          <div className='relative max-w-3xl mx-auto flex items-center'>
            <div className='absolute left-5 text-purple-400'>
                <Search size={22} />
            </div>
            <input 
              type="text"  
              className='h-16 w-full pl-14 pr-40 text-gray-800 font-medium rounded-full bg-white shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-400/30 placeholder:text-gray-400 text-lg' 
              placeholder='Where do you want to go?'
            />
          

             <SearchPageButton/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Background;