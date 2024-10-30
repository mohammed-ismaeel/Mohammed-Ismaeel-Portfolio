import './ServicesCardStyle.css'

const ServicesCard = ({ icon, title, desc }) => {
  return (
    <div className="card  bg-white dark:bg-slate-200 rounded-lg text-center w-1/4 min-w-64 py-10 px-2 hover:border-2 hover:border-blue hover:border-solid hover:scale-110">
      <i className={icon}></i>
      <h2 className="text-blacky text-lg">{title}</h2>
      <p className="text-mygray pt-3 text-sm">{desc} </p>
    </div>
  )
}

export default ServicesCard
