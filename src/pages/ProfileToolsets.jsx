import React from 'react'
import { toolsets } from '../constant/constant'


const ProfileToolsets = () => {
  return (
    <div className='grid grid-cols-3 gap-1 p-6' >
            {
                toolsets.map((el)=>(
                    <div>
                        <img className='w-full h-full' src={el.image} alt='img' />
                    </div>
                ))
            }
    </div>
  )
}

export default ProfileToolsets
