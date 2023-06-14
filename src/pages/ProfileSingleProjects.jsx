import React from 'react'
import ProjectCard from '../components/ProjectCard'
import BottomNavbar from '../components/BottomNavbar'
import { projectsDetail } from '../constant/constant'

const ProfileSingleProjects = () => {
  return (
    <div>
        <div className="sm:mt-14" >
          {
            projectsDetail.map((el)=>(<ProjectCard key={el.id} id={el.id} project={el.project} title={el.title} desc={el.desc} image={el.imageDay} likeCount={el.likeCount} github={el.github} liveDemo={el.liveDemo} icons={el.icons} time={el.time} />))
          }
        </div>
        <div className="sm:hidden">
          <BottomNavbar/>
        </div>
    </div>
  )
}

export default ProfileSingleProjects
