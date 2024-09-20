import './App.css'
import HeroSection from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import Navbar from './components/NavBar'
import { ServicesSection } from './components/ServicesSection'
import TeamSection from './components/Team'
import { ContactSection } from './components/Contact'
import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className='bg-white dark:bg-slate-950'>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <HeroSection isDark={isDark}/>
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer/>
    </div>
  )
}

export default App
