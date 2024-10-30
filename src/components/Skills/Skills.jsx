import './SkillsStyle.css'
import htmlIcon from './../../../public/html.webp'
import cssIcon from './../../../public/css.webp'
import bootstrapIcon from './../../../public/bootstrap.webp'
import tailwindIcon from './../../../public/tailwind.webp'
import gitIcon from './../../../public/git.webp'
import mysqlIcon from './../../../public/mysql.webp'
import reactIcon from './../../../public/react.webp'
// import typescriptIcon from './../../../public/typescript.webp'
// import sassIcon from './../../../public/sass.webp'
import phpIcon from './../../../public/php.png'
import laravelIcon from './../../../public/laravel.png'
import javascriptIcon from './../../../public/javascript.webp'
import SkillsCard from '../SkillsCard/SkillsCard'

const Skills = () => {
  return (
    <div className="parent">
      <section
        className="skills w-4/5 max-sm:w-11/12 mx-auto my-0 py-20 px-0 "
        id="Skills"
      >
        <div className="skills mx-auto my-0  px-0 " id="Skills">
          <h1 className="text-blacky top-title font-semibold text-center text-4xl pb-6 dark:text-white">
            My <span className="text-blue">SKills</span>
          </h1>
          <p className="text-mygray text-center w-11/12 my-0 mx-auto dark:text-gray-200 text-lg max-sm:text-base">
            Because I specialize in developing high-quality front-end interfaces
            with attravtive designs that attract customers, and I have
            experience and skills in using the latest technologies and tools in
            the field of front-end development.
          </p>
        </div>
        <div className="flex flex-wrap pt-10 gap-y-16 gap-x-28 max-sm:gap-y-10 justify-center ">
          <SkillsCard Icon={htmlIcon} title={'HTML'} />
          <SkillsCard Icon={cssIcon} title={'CSS'} />
          <SkillsCard Icon={javascriptIcon} title={'JavaScript'} />
          <SkillsCard Icon={bootstrapIcon} title={'Bootstrap'} />
          <SkillsCard Icon={tailwindIcon} title={'TailwindCss'} />
          <SkillsCard Icon={gitIcon} title={'Git'} />
          <SkillsCard Icon={reactIcon} title={'React'} />
          <SkillsCard Icon={phpIcon} title={'Php'} />
          <SkillsCard Icon={mysqlIcon} title={'Mysql'} />
          <SkillsCard Icon={laravelIcon} title={'Laravel'} />
        </div>
      </section>
    </div>
  )
}

export default Skills
