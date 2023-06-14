import React from 'react'
import TopNavbar from '../components/TopNavbar'
import BottomNavbar from '../components/BottomNavbar'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'

const Contacts = () => {
  return (
    <div className='w-full min-h-screen' >
        <div className="sm:hidden">
          <TopNavbar/>
        </div>
        <div className=' w-11/12 sm:w-2/3  m-auto mt-20 border border-gray-900 text-white rounded-lg p-6'>
            <div className='text-2xl text-center' >Contact Me</div>
            <form className="flex flex-col space-y-4">
                <label for="name" className="text-white">Name:</label>
                <input type="text" id="name" className="bg-gray-800 text-white rounded-lg py-2 px-4"/>

                <label for="email" className="text-white">Email:</label>
                <input type="email" id="email" className="bg-gray-800 text-white rounded-lg py-2 px-4"/>

                <label for="password" className="text-white">Message</label>
                <input type="text-area" id="password" className="bg-gray-800 text-white rounded-lg py-2 px-4"/>
                
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4">Send</button>
            </form>
            <div className='my-10 border border-gray-900' ></div>
            <div className='flex justify-around' >
                <a href='https://github.com/sarimkhan208' target='_blank' ><div className='text-3xl' >{<AiFillGithub/>}</div></a>
                <a href='https://www.linkedin.com/in/sarim-khan-40a446233/' target='_blank' ><div className='text-3xl' >{<AiFillLinkedin/>}</div></a>
                <a href='https://twitter.com/SARimCASM' target='_blank' ><div className='text-3xl' >{<FaTwitter/>}</div></a>
            </div>



        </div>
        <div className="sm:hidden">
          <BottomNavbar/>
        </div>
    </div>
  )
}

export default Contacts
