import { lazy, Suspense } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'

const About = lazy(() => import('./sections/About'))
const Project = lazy(() => import('./sections/Project'))
const Experience = lazy(() => import('./sections/Experience'))
const Contact = lazy(() => import('./sections/Contact'))

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Project />
        <Experience />
        <Contact />
      </Suspense>
      <Footer />
    </main>
  )
}

export default App
