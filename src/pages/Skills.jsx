import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
import { skills } from '../constant/constant'

const Skills = () => {
  return (
    <div className='bg-black min-h-screen w-full p-2' >
        <input type='text' placeholder='   Search' className='bg-gray-900 w-11/12 m-5 rounded-md text-white '/>

        <div className='grid grid-cols-3 gap-1' >
            {
                skills.map((el)=>(
                    <div>
                        <img className='w-full h-full' src={el.image} alt='img' />
                    </div>
                ))
            }
        </div>
        <div className="sm:hidden">
          <BottomNavbar/>
        </div>

    </div>
  )
}

export default Skills
