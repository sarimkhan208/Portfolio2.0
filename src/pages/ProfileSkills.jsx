import React from 'react'
import { skills } from '../constant/constant'

const ProfileSkills = () => {
  return (
    <div className='grid grid-cols-3 gap-1 p-6' >
            {
                skills.map((el)=>(
                    <div>
                        <img className='w-full h-full' src={el.image} alt='img' />
                    </div>
                ))
            }
    </div>
  )
}

export default ProfileSkills
