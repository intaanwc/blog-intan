import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPost from './pages/ProjectPost'

function Home({ dark, toggle }) {
  return (
    <div className="bg-[#fbf3ee] dark:bg-[#150d07] transition-colors duration-300">
      <Navbar dark={dark} onToggle={toggle} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const { dark, toggle } = useTheme()
  return (
    <Routes>
      <Route path="/" element={<Home dark={dark} toggle={toggle} />} />
      <Route path="/projects/:slug" element={<ProjectPost dark={dark} toggle={toggle} />} />
    </Routes>
  )
}
