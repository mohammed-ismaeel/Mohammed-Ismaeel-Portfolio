import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectsStyle.css'
import Button from '../Button/Button'
import MyProjects from '../MyProjects'

const Projects = () => {
  return (
    <div className="parent ">
      <section
        className="projects w-4/5 my-0 mx-auto py-20 px-0 text-center"
        id="Projects"
      >
        <h1 className="text-4xl max-sm:text-3xl font-semibold text-blacky dark:text-white">
          My <span className="text-blue">Projects</span>
        </h1>
        <p className="text-mygray w-11/12 mx-auto dark:text-gray-200 text-lg pt-5">
          Welcome to the review section of my projects. Here you will find a
          collection of prjects that I have devloped using my skills in user
          interface design and programming. Get ready to explore a world of
          creativity and attractive design.
        </p>
        <div className="flex justify-center flex-wrap gap-12 pt-14 w-full mx-auto">
          {MyProjects?.map((ele, index) => {
            return (
              <ProjectCard
                keyy={index + 1}
                projectImg={ele.urlimage}
                projectType={ele.typeProject}
                projectTitle={ele.title}
                description={ele.desc}
                projectTools={ele.basicLanguages}
                frameworks={ele.frameworks}
                libraries={ele.libraries}
              />
            )
          })}
        </div>

        <Button
          contentButton={'More Projects'}
          href={'https://github.com/Moh-Ismaeel'}
          target={'_blank'}
        />
      </section>
    </div>
  )
}

export default Projects
