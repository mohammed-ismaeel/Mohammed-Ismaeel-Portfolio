import React, { useState, useEffect, useContext } from 'react'
import Contact from '../components/Contact/Contact'
import Discuss from '../components/Discuss/Discuss'
import Footer from '../components/Footer/Footer'
import Projects from '../components/ProjectsSection/Projects'
import Skills from '../components/Skills/Skills'
import Services from '../components/Services/Services'
import Header from '../components/Header/Header'
import { ThemeContext } from '../components/context/ThemeContext'
import About from '../components/About/About'
// import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
const HomePage = ({ onClick }) => {
  const theme = useContext(ThemeContext)
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset === 0) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className={`home-page ${theme} dark:bg-darkybg`}>
      {isVisible && (
        <a
          href="#"
          className="go-top text-white fixed bottom-8 right-10 z-50 bg-blue px-3 py-2 rounded-md max-sm:right-5 bottom-4"
        >
          <i className="fa-solid fa-angles-up"></i>
        </a>
      )}
      <Header onClick={onClick} />
      <About />
      <Services />
      {/* <Education /> */}
      <Skills />
      <Projects />
      <Discuss />
      <Contact />
      <Footer />
      {/* </div> */}
      {/* <ProjectDetails /> */}
    </div>
  )
}

export default HomePage
