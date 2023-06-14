import React from 'react'
import { toolsets } from '../constant/constant'
import TopNavbar from '../components/TopNavbar'
import BottomNavbar from '../components/BottomNavbar'

const Toolsets = () => {
  return (
    <div>
      <div className='sm:hidden' >
        {<TopNavbar/>}
      </div>
      <div className='grid grid-cols-3 gap-1 min-h-screen mt-4' >
              {
                  toolsets.map((el)=>(
                      <div>
                          <img className='w-full h-full' src={el.image} alt='img' />
                      </div>
                  ))
              }
      </div>
      <div className='sm:hidden' >
        {<BottomNavbar/>}
      </div>
    </div>
  )
}

export default Toolsets
