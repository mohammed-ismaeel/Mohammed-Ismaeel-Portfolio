import Button from '../Button/Button'
import './AboutStyle.css'
import aboutImg from './../../assets/images/my.jpg'
import myCV from './../../../public/Mohammed Ismaeel.pdf'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
const About = () => {
  const theme = useContext(ThemeContext)
  // console.log(myCV)
  return (
    <section
      className="about w-4/5 relative mx-auto flex justify-between items-center py-12 px-24 rounded-xl max-xl:w-11/12 max-lg:flex-wrap max-lg:justify-center max-lg:text-left max-lg:px-4 gap-10 bg-white dark:bg-black"
      id="About"
    >
      <div className="about-img relative w-80">
        <img src={aboutImg} alt="" className="w-full" />
        <div className="social-icons w-4/5 bg-white dark:bg-black absolute bottom-0 left-1/2 p-1 rounded-md">
          <ul className="flex list-none justify-between">
            <li className=" hover:scale-125 hover:transition-all">
              <a
                href="https://www.facebook.com/profile.php?id=100021454752122&mibextid=ZbWKwL"
                target="_blank"
                className=" text-4xl text-blue dark:text-white"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li className=" hover:scale-125 hover:transition-all">
              <a
                href="https://t.me/Moh_Ismaeel"
                target="_blank"
                className=" text-4xl text-blue  dark:text-white"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>
            <li className=" hover:scale-125 hover:transition-all">
              <a
                href="www.linkedin.com"
                target="_blank"
                className=" text-4xl text-blue  dark:text-white"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className=" hover:scale-125 hover:transition-all">
              <a
                href=""
                target="_blank"
                className=" text-4xl text-blue  dark:text-white"
              >
                <i className="fa-brands fa-square-github"></i>
              </a>
            </li>
            <li className=" hover:scale-125 hover:transition-all">
              <a
                href="https://www.instagram.com/mohammad___ismaeel?igsh=MTE5ZGoycWZiejIwbw=="
                target="_blank"
                className=" text-4xl text-blue  dark:text-white"
              >
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-desc w-1/2 max-md:w-11/12">
        <h1 className="text-blacky dark:text-white font-semibold text-3xl">
          I am Junior Front-End Developer{' '}
        </h1>
        <p className="pt-6 text-mygray dark:text-gray-200">
          I am a Full Stack Developer Hello! <br /> I'm Mohammed, a skilled Full
          Stack Developer with a passion for building efficient and scalable web
          applications. With expertise in both front-end and back-end
          technologies, I create responsive, interactive, and user-friendly web
          solutions that provide a seamless experience for both users and
          administrators. I specialize in combining modern UI/UX design with
          robust server-side functionality to develop high-performance
          applications. I enjoy collaborating with individuals and businesses to
          deliver custom-built solutions that transform ideas into impactful
          digital products.
        </p>
        <div className="buttons pt-5 flex gap-3 max-sm:pb-10">
          <Button contentButton={'My Project'} href={'#Projects'} />
          <a
            id="download-button"
            href={myCV}
            download={'CV Mohammed Ismaeel'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 bg-transparent w-48 text-blue border border-solid border-blue hover:bg-blue hover:text-white hover:cursor-pointer dark:hover:border dark:hover:border-solid dark:hover:border-white dark:text-white"
          >
            <span> Download CV </span>
            <i className="fa-solid fa-circle-down"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
