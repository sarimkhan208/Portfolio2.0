import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {VscProject} from 'react-icons/vsc'
import {FaTools} from 'react-icons/fa'
import {RxAvatar} from 'react-icons/rx'
import { Link as RouterLink } from 'react-router-dom'
import {TiDownload} from 'react-icons/ti'
import sarim from '../Resume/Mohd-Sarim-Khan-Resume.pdf'

const BottomNavbar = () => {


    function downloadFile() {
        let link = document.createElement("a");
        link.download = "Mohd-Sarim-Khan-Resume.pdf";
        link.href = sarim;
        link.click();
        link.remove();
    }

    
  return (
    <div className='flex fixed bottom-0 left-0 w-full bg-black justify-around'>
        <RouterLink to='/projects' >
        <div className='py-1' >
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <AiOutlineFundProjectionScreen className='text-2xl text-white' />
            </button>
        </div>
        </RouterLink>

        <RouterLink to='/skills'>
        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <VscProject className='text-2xl text-white' />
            </button>
        </div>
        </RouterLink>

        
        <div className='py-1'>
            <button onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1j0YQaNI8UdgvEcJKiHyv0C59Mx2stS3t/view?usp=sharing"
          );
          downloadFile();
        }} className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                    <a href={sarim} download={"Mohd-Sarim-Khan-Resume"} ><TiDownload className='text-2xl text-white' /></a>
                
            </button>
        </div>
        

        <RouterLink to='/toolsets'>
        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <FaTools className='text-2xl text-white' />
            </button>
        </div>
        </RouterLink>

        <RouterLink to='/'>
        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <RxAvatar className='text-2xl text-white' />
            </button>
        </div>
        </RouterLink>
      
    </div>
  )
}

export default BottomNavbar
