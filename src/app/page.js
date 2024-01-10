import Image from 'next/image'
import Navbar from './components/layout/navbar'
import Hero from './components/layout/hero'
import Categories from './components/layout/categories'



export default function Home() {
  return (

    <div>
      <div className="container mx-auto">
        <div className="bg-[url('/assets/images/hero-bg.jpg')]">
          <Navbar />
          <Hero />
          <Categories />

        </div>

      </div>

    </div>
  )
}
