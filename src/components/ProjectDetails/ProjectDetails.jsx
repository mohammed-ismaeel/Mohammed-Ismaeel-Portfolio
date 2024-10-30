import NavBar from './../NavBar/NavBar'
import { Link, useParams } from 'react-router-dom'
import MyProjects from '../MyProjects'
import './ProjectStyle.css'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'
import Sidebar from '../Sidebar/Sidebar'
const ProjectDetails = ({ onClick }) => {
  let key = useParams()
  let x = MyProjects.find((e) => e.id == key.id)
  return (
    <div className="all">
      <NavBar onClick={onClick} />
      {/* <Sidebar
        navLinks={[
          'Home',
          'About',
          'Services',
          'Skills',
          'Projects',
          'Contact',
        ]}
      /> */}
      <div className="project-details w-screen h-screen bg-white mx-auto my-0 flex items-center dark:bg-darkybg max-xl:h-auto">
        <div className="detail-card w-5/6 max-xl:mt-32 max-xl:mb-16 mx-auto my-0 p-12 max-sm:px-4 max-sm:py-16 relative flex  gap-10 border border-solid border-blue rounded-xl max-xl:flex-wrap">
          <Link
            to="/#Projects"
            className="absolute top-0 right-0 bg-blue p-3 max-sm:p-2 rounded-tr-xl text-white dark:hover:bg-white dark:hover:text-blue"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
          <div className="project-image touch-auto max-h-80 border border-solid border-blacky rounded overflow-hidden relative">
            <img src={x.urlimage} alt="" className=" w-full" />
            <div className="overlay absolute -top-28 left-0 right-0 bottom-0 invisible flex justify-center items-center">
              <a
                href=""
                className="bg-sky-600 border-solid border border-white rounded-md p-2 max-sm:p-1 font-semibold text-xl text-white hover:underline"
              >
                Preview <i class="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
          <div className="info max-w-lg">
            <div className="about-project">
              <h1 className="title-project text-3xl max-sm:text-2xl text-blue font-semibold dark:text-blue">
                {x.title}
              </h1>
              <p className="info-project pt-5 max-sm:pt-1 text-gray-700 text-xl max-sm:text-base dark:dark:text-gray-200">
                {x.desc}
              </p>
              <div className="tools pt-5 pb-10">
                <div className="flex flex-wrap">
                  <h3 className=" text-xl max-sm:text-lg text-nowrap max-sm:flex-wrap text-blacky inline-block mr-5 max-sm:mr-1 dark:text-white">
                    Basic Languages:
                  </h3>
                  <p className="tools flex gap-2  max-sm:gap-1  text-blue font-semibold text-xl">
                    {x.basicLanguages.map((tool, index) => (
                      <span key={index}>{tool}</span>
                    ))}
                  </p>
                </div>
                {x.frameworks == '' ? (
                  ''
                ) : (
                  <div>
                    <h3 className=" text-xl text-nowrap max-sm:text-lg max-sm:flex-wrap text-blacky inline-block mr-5 max-sm:mr-1 dark:text-white">
                      Frameworks:
                    </h3>
                    <span className=" text-xl text-blue font-semibold">
                      {x.frameworks}
                    </span>
                  </div>
                )}

                {x.libraries == '' ? (
                  ''
                ) : (
                  <div>
                    <h3 className=" text-xl text-nowrap  max-sm:text-lg max-sm:flex-wrap text-blacky inline-block mr-5 max-sm:mr-1 dark:text-white">
                      Libraries:
                    </h3>
                    <span className=" text-xl text-blue font-semibold">
                      {x.libraries}
                    </span>
                  </div>
                )}
              </div>

              <div className="link-project">
                <a
                  href={x.github}
                  target="_blank"
                  className="bg-blue py-3 px-5 font-semibold text-white rounded-md no-underline hover:text-blue hover:bg-white hover:border-solid hover:border hover:border-blue hover:transition-all"
                >
                  <span>Github Repo</span>
                  <LuArrowUpRightFromCircle className="inline-block ml-2 text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
