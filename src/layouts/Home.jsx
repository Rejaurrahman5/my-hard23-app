import React from 'react'
import Navbar from '../components/Navbar'
import ImageCarousel from '../components/ImageCarousel'
import MovieGalary from '../components/MovieGalary'
import { Toaster } from 'react-hot-toast'


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <ImageCarousel></ImageCarousel>
     
     <main>
      <MovieGalary></MovieGalary>
      <Toaster position='top-right'></Toaster>
     </main>
      
    </div>
  )
}
