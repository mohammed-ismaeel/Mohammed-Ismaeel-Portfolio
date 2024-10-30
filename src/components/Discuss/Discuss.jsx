const Discuss = () => {
  return (
    <div className="Discuss bg-blacky dark:bg-black w-full h-80 text-center flex justify-center items-center max-sm:h-auto py-10">
      <div className="content max-w-xl max-sm:px-10">
        <h1 className="text-white text-4xl max-sm:text-3xl font-semibold">
          Do you have Project Idea? <br /> Let's discuss your project!
        </h1>
        <p className=" text-gray-400 py-5">
          Hi! we will work together to discuss projects that interest you and
          you need to devlop innovative web interfaces on the web. feel free to
          shre your thoughts and challenges, and we will work to achieve your
          goals in the best possible way!
        </p>
        <a
          href="#Contact"
          className="button text-white no-underline text-sm font-semibold bg-blue border-none rounded-md py-3 px-6 cursor-pointer hover:bg-white hover:text-blue hover:border-2 hover:border-solid hover:border-blue"
        >
          Let's work Together
        </a>
      </div>
    </div>
  )
}

export default Discuss
