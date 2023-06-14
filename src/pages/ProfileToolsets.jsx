import React from 'react'
import {SiReplit,SiNetlify,} from 'react-icons/si'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {GoMarkGithub} from 'react-icons/go'
import {TbBrandVscode,TbBrandNpm,TbBrandVercel,} from 'react-icons/tb'
import {BsGit} from 'react-icons/bs'
import {FiCodepen} from 'react-icons/fi'


const ProfileToolsets = () => {
  return (
        <div className='grid grid-cols-3 gap-1 w-full' >
          {
            toolsets.map((el)=>(
              <a href={el.link} target='_blank' >
                <div key={el.name} style={{backgroundColor:el.backgroundColor}}>
                  <div style={{fontSize:'100px',color:el.color}} className='flex justify-center items-center py-4  ' >{el.icons}</div>
                  <div style={{fontSize:'20px',color:el.color}} className='text-center font-bold'>{el.name}</div>
                </div>
              </a>
            ))
          }
        </div>
  )
}

export default ProfileToolsets




let toolsets = [
  {
    name : 'VS Code',
    icons : <TbBrandVscode/>,
    backgroundColor : 'white',
    color : '#29B6F6',
    link : 'https://code.visualstudio.com/'
  },
  {
    name : 'Github',
    icons : <GoMarkGithub/>,
    backgroundColor : 'white',
    color : '#191919',
    link : 'https://github.com/'
  },
  {
    name : 'Replit',
    icons : <SiReplit/>,
    backgroundColor : 'white',
    color : '#FB8C00',
    link : 'https://replit.com/'
  },
  {
    name : 'NPM',
    icons : <TbBrandNpm/>,
    backgroundColor : 'white',
    color : '#D50000',
    link : 'https://www.npmjs.com/'
  },
  {
    name : 'Netlify',
    icons : <SiNetlify/>,
    backgroundColor : 'white',
    color : '#80DEEA',
    link : 'https://www.netlify.com/'
  },
  {
    name : 'Vercel',
    icons : <TbBrandVercel/>,
    backgroundColor : 'white',
    color : 'black',
    link : 'https://vercel.com/'
  },
  {
    name : 'Codesandbox',
    icons : <AiOutlineCodeSandbox/>,
    backgroundColor : 'white',
    color : 'black',
    link : 'http://codesandbox.io/'
  },
  {
    name : 'Codepen',
    icons : <FiCodepen/>,
    backgroundColor : 'white',
    color : 'black',
    link : 'https://codepen.io/'
  },
  {
    name : 'Git',
    icons : <BsGit/>,
    backgroundColor : 'white',
    color : '#F4511E',
    link : 'https://git-scm.com/'
  }
]
