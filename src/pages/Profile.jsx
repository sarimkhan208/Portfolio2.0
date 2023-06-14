import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import UserProfileRoutes from '../routes/UserProfileRoutes'
import BottomNavbar from '../components/BottomNavbar'
import {VscProject} from 'react-icons/vsc'
import {FaTools} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { projectsDetail } from '../constant/constant'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import TopNavbar from '../components/TopNavbar'

const Profile = () => {
  return (
    <div className='text-white w-full min-h-screen' >
        {/* User Detail Section */}
        <div className="sm:hidden">
            <TopNavbar/>
        </div>
        <div>
            <div className='flex justify-between sm:justify-around mt-16 sm:mt-8 p-2' >
                <div>
                    <img className='rounded-full' height={'100px'} width={'100px'} src='https://i.postimg.cc/cJRn5Zhv/profile-pic.png' alt='profile-pic' />
                </div>
                <div className='flex w-9/12 items-center  justify-around' >
                    <div>
                        <div className='text-center' >{projectsDetail.length}</div>
                        <div>Projects</div>
                    </div>
                    <div>
                        <div className='text-center'>250+</div>
                        <div>Assignments</div>
                    </div>
                    <div>
                        <div className='text-center'>700+</div>
                        <div>DSA Problems</div>
                    </div>
                </div>
            </div>

            <div className='px-4 pt-4'>
                <h1 className='font-bold text-lg' >Sarim Khan</h1>
                <h1 className='font-bold text-lg mb-2' >A Full Stack Web Developer</h1>
                <h3 >About :- Dedicated and efficient full stack developer with over 1000 hours of hands-on coding experience in tech application and presentation layers, as well as tech databases. Proficient in building and optimizing user-focused tech websites and applications using MERN stack, JavaScript, MongoDB, and SQL. Expertise in both frontend and backend development, with solid knowledge of NodeJS, HTML, CSS, and Express framework.</h3>
            </div>
            <div className='flex my-4 ml-4' >
                <a href='https://github.com/sarimkhan208' target='_blank' ><div className='text-3xl' >{<AiFillGithub/>}</div></a>
                <a href='https://www.linkedin.com/in/sarim-khan-40a446233/' target='_blank' ><div className='text-3xl mx-6' >{<AiFillLinkedin/>}</div></a>
                <a href='https://twitter.com/SARimCASM' target='_blank' ><div className='text-3xl' >{<FaTwitter/>}</div></a>
            </div>
        </div>

        {/* User Post Post Reels Section */}
        <div className='flex justify-around mt-6 border-b border-gray-900 pb-2' >
            <RouterLink to='/' >
                <div>
                    <div className='flex justify-center mb-1 text-lg' ><AiOutlineFundProjectionScreen/></div>
                    <div>Projects</div>
                </div>
            </RouterLink>

            <RouterLink to='/profile/skills'>
                <div>
                    <div className='flex justify-center mb-1 text-lg' ><VscProject/></div>
                    <div>Skills</div>
                </div>
            </RouterLink>
            <RouterLink to='/profile/toolsets'>
                <div >
                    <div className='flex justify-center mb-1 text-lg' ><FaTools/></div>
                    <div>Toolsets</div>
                </div>
            </RouterLink>
        </div>
        <div>
            <UserProfileRoutes/>
        </div>

        <div className="sm:hidden">
            <BottomNavbar/>
        </div>

    </div>

  )
}

export default Profile
