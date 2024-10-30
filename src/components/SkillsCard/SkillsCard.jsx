import React from 'react'

const SkillsCard = ({ Icon, title }) => {
  return (
    <div className="card flex flex-col justify-center items-center gap-3">
      <div className="skills-icon w-36 rounded-2xl p-2 flex justify-center items-center">
        <img src={Icon} alt="" className="w-full" />
      </div>
      <h3 className="dark:text-white text-lg font-semibold">{title}</h3>
    </div>
  )
}

export default SkillsCard
