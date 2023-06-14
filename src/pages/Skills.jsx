import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
import {ImHtmlFive} from 'react-icons/im'
import {GrNode} from 'react-icons/gr'
import {BsFillBootstrapFill} from "react-icons/bs"
import {SiTypescript,SiCss3,SiJavascript,SiRedux,SiTailwindcss,SiExpress,SiChakraui,SiNextdotjs,SiMongodb} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {VscProject} from 'react-icons/vsc'

const Skills = () => {
  return (
    <div className='bg-black min-h-screen w-full p-2' >
        <input type='text' placeholder='   Search' className='bg-gray-900 w-11/12 m-5 rounded-md text-white '/>
        
        <div className='grid grid-cols-3 gap-1' >
          {
            icons.map((el)=>(
              <a href={el.link} target='_blank' >
                <div style={{backgroundColor:el.backgroundColor}}>
                  <div style={{fontSize:'100px',color:el.color}} className='flex justify-center items-center py-4  ' >{el.icons}</div>
                  <div style={{fontSize:'20px',color:el.color}} className='text-center font-bold'>{el.name}</div>
                </div>
              </a>
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

let icons = [
  {
    name : 'HTML',
    icons : <ImHtmlFive/>,
    backgroundColor : 'white',
    color : 'orange',
    link : 'https://html.com'
  },
  {
    name : 'CSS',
    icons : <SiCss3/>,
    backgroundColor : 'white',
    color : 'blue',
    link : 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    name : 'JavaScript',
    icons : <SiJavascript/>,
    backgroundColor : 'white',
    color : 'yellow',
    link : 'https://www.javascript.com/'
  },
  {
    name : 'React',
    icons : <GrReactjs/>,
    backgroundColor : 'white',
    color : '#80DEEA',
    link : 'https://reactjs.org/'
  },
  {
    name : 'Redux',
    icons : <SiRedux/>,
    backgroundColor : 'white',
    color : '#7E57C2',
    link : 'https://redux.js.org/'
  },
  {
    name : 'TypeScript',  
    icons : <SiTypescript/>,
    backgroundColor : 'white',
    color : '#1976D2',
    link : 'https://www.typescriptlang.org/'
  },
  {
    name : 'Nodejs',  
    icons : <GrNode/>,
    backgroundColor : 'white',
    color : '#388E3C',
    link : 'https://nodejs.org/en/'
  },
  {
    name : 'MongoDB',  
    icons : <SiMongodb/>,
    backgroundColor : 'white',
    color : '#94D82D',
    link : 'https://www.mongodb.com/'
  },
  {
    name : 'Next.js',  
    icons : <SiNextdotjs/>,
    backgroundColor : 'white',
    color : '#212121',
    link : 'https://nextjs.org/'
  },
  {
    name : 'Chakra UI',  
    icons : <SiChakraui/>,
    backgroundColor : 'white',
    color : '#4DB6AC',
    link : 'https://chakra-ui.com/'
  },
  {
    name : 'Exressjs',  
    icons : <SiExpress/>,
    backgroundColor : 'white',
    color : '#212121',
    link : 'https://expressjs.com/'
  },
  {
    name : 'Bootstrap',  
    icons : <BsFillBootstrapFill/>,
    backgroundColor : 'white',
    color : '#673AB7',
    link : 'https://getbootstrap.com/'
  },
  {
    name : 'Tailwind CSS',  
    icons : <SiTailwindcss/>,
    backgroundColor : 'white',
    color : '#38BDF8',
    link : 'https://tailwindcss.com/'
  }
]


