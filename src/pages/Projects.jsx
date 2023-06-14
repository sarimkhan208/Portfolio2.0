import BottomNavbar from "../components/BottomNavbar"
import ProjectCard from "../components/ProjectCard"
import TopNavbar from "../components/TopNavbar"
import { projectsDetail } from "../constant/constant"






const Projects = () => {
  return (
      <div>
        <div className="sm:hidden">
          <TopNavbar/>
        </div>
        <div className=" mt-20 sm:mt-14  mb-20" >
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

export default Projects
