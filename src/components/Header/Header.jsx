import { useContext } from 'react'
import About from '../About/About'
import Hero from '../Hero/Hero'
import NavBar from '../NavBar/NavBar'
import './HeaderStyle.css'
import { ThemeContext } from '../context/ThemeContext'
import Sidebar from '../Sidebar/Sidebar'
const Header = ({ onClick }) => {
  const theme = useContext(ThemeContext)
  return (
    <header className=" relative bg-cover">
      <NavBar
        onClick={onClick}
        navLinks={[
          'Home',
          'About',
          'Services',
          'Skills',
          'Projects',
          'Contact',
        ]}
      />
      <Sidebar
        navLinks={[
          'Home',
          'About',
          'Services',
          'Skills',
          'Projects',
          'Contact',
        ]}
      />
      <Hero />
    </header>
  )
}

export default Header
