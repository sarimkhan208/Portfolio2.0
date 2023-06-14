import {TbSend} from 'react-icons/tb'
import {FaRegComment} from 'react-icons/fa'
import{SiGithub} from 'react-icons/si'



const ProjectCard = ({id, title,github,likeCount,icons,image,desc,project,liveDemo}) => {
  return (
        <div key={id} className='bg-black  w-11/12 mx-1 sm:mx-auto border-b border-gray-900 sm:mb-10'  >
              {/* Header  */}
            <div className='flex mb-1 mx-2 ' >
              <div>
                <img className='rounded-full w-10 h-10 '  src='https://i.postimg.cc/cJRn5Zhv/profile-pic.png' alt='image' />
              </div>

              <div className=' mx-3 ' >
                <div className='text-white font-bold' >{title}<span className='text-white font-thin ml-2 '></span> </div>
                <div className='text-blue-400 text-xs ' >{project}</div>
              </div>
            </div>

              {/* Middle */}
            <div className='mt-4 h-480px sm:h-540px'>
              <img src={image} className='h-full w-full' alt='post-image' />
            </div>

              {/* Footer */}
            <div className='my-5 mx-2' >

              {/* Like Comment Share Logo */}
              <div className='flex justify-between' >
                  <div className='flex' >
                    <a href={github} target="_blank"><SiGithub className='text-white text-2xl'/></a>
                    <a href={liveDemo} target="_blank" ><FaRegComment className='text-white text-2xl mx-4'/></a>
                    <a href={liveDemo} target="_blank"><TbSend className='text-white text-2xl'/></a>
                  </div>
              </div>

              <div className=' mt-2 text-white text-base font-bold'>
                  {likeCount} likes
              </div>
              <div>
                  <div className='text-white text-base font-bold'>{title}</div>
                  <div className='text-white text-base'>{desc}</div>
              </div>
              <div>
                <div  className='flex my-2'>
                  {
                    icons.map((el)=>(
                      <div>
                        <div className='text-blue-400 mr-2' >#{el}</div>
                      </div>
                    ))
                  }
                </div>      
              </div>
              <div className='text-base text-gray-600 mt-2 cursor-pointer'>
                View all 5 comments
              </div>
              <div className='text-xs text-gray-600'>
                1 day ago
              </div>

            </div>


        </div>
  )
}

export default ProjectCard

