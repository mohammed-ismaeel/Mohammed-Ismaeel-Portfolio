import { useContext } from 'react'
import AchievementCard from '../AchievementCard/AchievementCard'
import Button from '../Button/Button'
import { ThemeContext } from '../context/ThemeContext'
import heroImg from './../../assets/images/my.jpg'
const Hero = () => {
  const theme = useContext(ThemeContext)
  return (
    <section
      className="hero w-4/5 lg:h-screen flex justify-between items-center my-0 mx-auto pt-20 gap-10 max-xl:w-10/12 max-lg:flex-wrap max-lg:justify-center max-lg:text-center max-lg:py-44"
      id="Home"
    >
      <div className="hero-text relative max-w-lg">
        <h1
          className={`text-blacky text-5xl font-semibold dark:text-white max-xl:text-4xl max-sm:text-3xl`}
        >
          Hello, I'm <span className="text-blue">Mohammed Ismaeel</span>
        </h1>
        <p className="my-info text-mygray text-lg py-4 px-0 dark:text-gray-300 max-xl:text-base">
          I'm a Full Stack Developer with expertise in building dynamic and
          efficient web applications. I create seamless user experiences by
          blending clean front-end designs with powerful back-end functionality
          using the latest technologies.
        </p>
        <Button contentButton={'Say Hello'} href={'#Contact'} />
        <div className="achievements-cards flex w-full gap-1 mt-16">
          <AchievementCard value={'1 Y.'} detail={'Experince'} />
          <AchievementCard value={'12 +'} detail={'Project'} />
          <AchievementCard value={'5'} detail={'Happy Client'} />
        </div>
      </div>
      <div className="hero-img w-96 rounded-t-full rounded-b-full bg-white outline-blue outline-1 outline">
        <img src={heroImg} alt="" className="w-full rounded-full" />
      </div>
    </section>
  )
}

export default Hero
