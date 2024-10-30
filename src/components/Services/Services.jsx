import './ServicesStyle.css'
import softwareEngineerImage from './../../../public/software-engineer (1).png'
import problemSolvingImage from './../../../public/problem-solving.png'
import skillsImage from './../../../public/hard-skills.png'

const Services = () => {
  return (
    <section
      className="services w-4/5 max-lg:w-11/12 mx-auto my-0 py-36 max-sm:py-20 px-0 "
      id="Services"
    >
      <h1 className="text-blacky text-center text-4xl font-semibold pb-6 dark:text-white">
        Education & <span className="text-blue">Experience</span>
      </h1>
      <p className="text-mygray text-center w-11/12 my-0 mx-auto dark:text-gray-200">
        I will show you some of my skills in designing and programming user
        interfaces, in addition to mmy experience in using modern web
        technologies and creative tools, Find out how I can help you turn your
        ideas into user experiences Amazing and innovative on the web!
      </p>
      <div className="cards flex justify-between gap-6 mt-12 max-xl:flex-wrap max-xl:justify-center">
        <div className="left w-1/2 max-lg:w-full max-lg:items-center flex justify-between flex-col gap-10">
          <div className="w-4/5 flex max-sm:w-11/12 max-lg:justify-center gap-4">
            <div className="w-20">
              <img src={softwareEngineerImage} alt="" className="w-full" />
            </div>
            <div className="w-96 max-lg:w-full">
              <h1 className="text-blue text-2xl max-sm:text-xl font-semibold">
                Software Engineering
              </h1>
              <p className="dark:text-gray-200 text-lg max-sm:text-base">
                Fourth-year Information Technology student at Al-Sham Private
                University.
              </p>
            </div>
          </div>

          <div className="w-4/5 flex gap-4 max-sm:w-11/12 max-lg:justify-center">
            <div className="w-20">
              <img src={problemSolvingImage} alt="" className="w-full" />
            </div>
            <div className="w-96 max-lg:w-full">
              <h1 className="text-blue text-2xl max-sm:text-xl font-semibold">
                Problem-Solving Skills
              </h1>
              <p className="dark:text-gray-200 text-lg max-sm:text-base">
                Exceptional analytical skills and intuition for solving complex
                problems, with practical experience in delivering effective
                solutions in web development projects.
              </p>
            </div>
          </div>
        </div>
        <div className="right w-1/2 max-lg:w-full flex max-lg:items-center justify-between flex-col gap-10">
          <div className="w-4/5 max-sm:w-11/12 flex gap-4 max-lg:justify-center">
            <div className="w-20">
              <img src={skillsImage} alt="" className="w-full" />
            </div>
            <div className="w-96 max-lg:w-full">
              <h1 className="text-blue text-2xl max-sm:text-xl font-semibold">
                Ambition and Skills
              </h1>
              <p className="dark:text-gray-200 text-lg max-sm:text-base">
                Ambitious and committed to mastering programming; proficient in
                3 programming languages and knowledgeable in the basics of 5.
              </p>
            </div>
          </div>
          <div className="w-4/5 max-sm:w-11/12 flex gap-4 max-lg:justify-center">
            <div className="w-20">
              <img src={softwareEngineerImage} alt="" className="w-full" />
            </div>
            <div className="w-96 max-lg:w-full">
              <h1 className="text-blue text-2xl max-sm:text-xl font-semibold">
                Fullstack Developer
              </h1>
              <p className="dark:text-gray-200 text-lg max-sm:text-base">
                Fullstack web developer with over a year of experience, highly
                skilled in React.JS and Laravel, along with expertise in various
                libraries and frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
