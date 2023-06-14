import { Routes, Route } from "react-router-dom";
import Projects from '../pages/ProfileProjects'
import Skills from '../pages/Skills'
import Toolsets from '../pages/Toolsets'
import ProfileSingleProjects from "../pages/ProfileSingleProjects";
import ProfileProjects from "../pages/ProfileProjects";
import ProfileSkills from "../pages/ProfileSkills";
import ProfileToolsets from "../pages/ProfileToolsets";

export default function UserProfileRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProfileProjects/>}></Route>
      <Route path="/userreels" element={<Skills/>}></Route>
      <Route path="/usertags" element={<Toolsets/>}></Route>
      <Route path='/profile/singleprojects' element={<ProfileSingleProjects/>} ></Route>
      <Route path='/profile/skills' element={<ProfileSkills/>} ></Route>
      <Route path='/profile/toolsets' element={<ProfileToolsets/>} ></Route>
    </Routes>
  );
}
