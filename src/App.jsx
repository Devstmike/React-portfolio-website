import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/experience'
import Projects from './components/Projects'
import Contact from './components/contact'

function App() {
  
  return (
    <section className='max-w-[1640px]'>
      <section className="fixed bg-gradient-to-r from-slate-900 to-slate-700 h-screen w-full top-0 left-0 z-[-10]"></section>
      <section className=' p-10'>
        <Header />
      </section>
      <section className=' px-10 py-20'>
        <Hero />
      </section>
      <section className='max-w-[940px] mx-auto  px-10 py-20'>
        <About />
      </section>
      <section className='max-w-[940px] mx-auto  px-10 py-20'>
        <Skills />
      </section>
      <section className='max-w-[940px] mx-auto  px-10 py-20'>
        <Experience />
      </section>
      <section className='max-w-[940px] mx-auto  px-10 py-20'>
        <Projects />
      </section>
      <section className='max-w-[940px] mx-auto  px-10 py-20'>
        <Contact />
      </section>
    </section>
  )
}

export default App
