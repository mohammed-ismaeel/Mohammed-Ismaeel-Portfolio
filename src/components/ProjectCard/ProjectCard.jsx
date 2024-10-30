import { Link, Navigate } from 'react-router-dom'
import './ProjectCardStyle.css'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'
const ProjectCard = ({
  keyy,
  projectImg,
  projectType,
  projectTitle,
  description,
  projectTools,
  frameworks,
  libraries,
}) => {
  return (
    <div
      className="project-card pb-8 relative overflow-hidden 
     text-left border border-solid border-gray-400  rounded-tr-lg rounded-tl-lg bg-gray-100 relative hover:border-blue hover:shadow-blue hover:shadow-sm"
    >
      <div
        className="img h-44 overflow-hidden relative rounded-t-lg border-b border-b-gray-300  "
        id="proj-img"
      >
        <div className="over flex gap-5 justify-between items-center w-full rounded-tr-lg rounded-tl-lg absolute top-0 left-0 z-20 h-full">
          <Link
            to={`/Details/${keyy}`}
            className="view-more flex text-xl text-nowrap max-sm:text-lg text-blue font-bold z-50 bg-white px-2 rounded-md border-2 border-blue border-solid "
          >
            <span>View More</span>
            <LuArrowUpRightFromCircle className="inline-block ml-2" />
          </Link>
        </div>
        <img src={projectImg} alt="" className="w-full " />
      </div>
      <div className="desc w-full px-6 py-4">
        <h1 className="text-blue text-center text-xl font-semibold -mt-1 pb-1">
          {projectTitle}
        </h1>
        <p className="description text-center  text-sm pb-6 text-zinc-700">
          {description}
        </p>
        <p className="tools absolute bottom-2 left-2 flex gap-2 flex-wrap text-blue font-semibold text-base">
          {Array.isArray(projectTools)
            ? projectTools.map((tool, index) => <span key={index}>{tool}</span>)
            : ''}
          <span>{frameworks}</span>
          <span>{libraries}</span>
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
