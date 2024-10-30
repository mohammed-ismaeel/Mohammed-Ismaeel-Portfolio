import { useContext } from 'react'
import { ThemeContext } from '../components/context/ThemeContext'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'

const Details = ({ onClick }) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`${theme} dark:bg-darkybg`}>
      <ProjectDetails onClick={onClick} />
    </div>
  )
}

export default Details
