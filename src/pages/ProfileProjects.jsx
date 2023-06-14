import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { projectsDetail } from '../constant/constant'

const ProfileProjects = () => {
    return (
        <div className='bg-black min-h-screen w-full p-2' >
            <div className='grid grid-cols-3 gap-1' >
                {
                    projectsDetail.map((el)=>(
                        <RouterLink to='/profile/singleprojects' >
                            <div>
                                <img className='w-full h-full' src={el.imageDay} alt='img' />
                            </div>
                        </RouterLink>
                    ))
                }
            </div>
        </div>)
}

export default ProfileProjects




