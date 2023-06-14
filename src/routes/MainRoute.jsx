import { Route,Routes } from "react-router-dom"

import Profile from "../pages/Profile"
import Projects from "../pages/Projects"
import Skills from "../pages/Skills"
import Contacts from "../pages/Contacts"
import Toolsets from "../pages/Toolsets"
import GithubStats from "../pages/GithubStats"

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<Profile/>} ></Route>
      <Route path="/projects" element={<Projects/>} ></Route>
      <Route path="/skills" element={<Skills/>} ></Route>
      <Route path="/contacts" element={<Contacts/>} ></Route>
      <Route path="/toolsets" element={<Toolsets/>} ></Route>
      <Route path="/githubstats" element={<GithubStats/>} ></Route>
    </Routes>
  )
}

export default MainRoute
