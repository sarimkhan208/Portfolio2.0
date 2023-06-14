import React from 'react'
import TopNavbar from '../components/TopNavbar'
import BottomNavbar from '../components/BottomNavbar'
import {TfiStatsUp} from 'react-icons/tfi'
import GitHubCalendar from "react-github-calendar";
import {FcCalendar} from 'react-icons/fc'

const GithubStats = () => {
  return (
    <div>
        <div className='sm:hidden' >
            {<TopNavbar/>}
        </div >
            <div className='mt-20 flex mx-auto w-full justify-center font-bold'>
                <div className='text-2xl text-white mr-4 mt-1' >{<TfiStatsUp/>}</div>
                <div className='text-white text-2xl ' >My Github Statistics</div>
            </div>
            
            <div className='p-6 '>
                <img className='my-2' src='https://github-readme-streak-stats.herokuapp.com?user=sarimkhan208&_border=true&theme=dark&hide_border=true&theme=react'/>
                <img className='mx-auto my-2' src='https://github-readme-stats.vercel.app/api/top-langs/?username=sarimkhan208&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true'/>
                <img className='my-2' src='https://github-readme-stats.vercel.app/api?username=sarimkhan208&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true'/>
                <img className='my-2' src='https://github-readme-activity-graph.vercel.app/graph?username=sarimkhan208&bg_color=000000&color=1dc2d7&line=42fffc&point=faffff&area=true&hide_border=true'/>
            </div>
            
            <div className='mb-12 flex mx-auto w-full justify-center font-bold'>
                <div className='text-2xl text-white mr-4 mt-1' >{<FcCalendar/>}</div>
                <div className='text-white text-2xl ' >My Github Calender</div>
            </div>
            <div className='text-white  mb-20 w-11/12 mx-auto '>
            {<GitHubCalendar
                className="react-activity-calendar"
                username="sarimkhan208"
                blockSize={15}
                blockMargin={5}
                fontSize={16}
            />}
            </div>
        <div className='sm:hidden' >
            {<BottomNavbar/>}
        </div>
    </div>
  )
}

export default GithubStats
