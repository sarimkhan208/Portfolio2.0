import './index.css'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import MainRoute from './routes/MainRoute'


function App() {

  return (
    <>
        <div className="flex w-100 ">
          <div className="hidden sm:flex w-0 sm:w-1/4 bg-black border border-gray-900 border-r-1">
            <LeftSidebar />
          </div>
          <div className="flex w-full sm:w-1/2 bg-black">
            <MainRoute />
          </div>
          <div className="hidden sm:flex w-0 sm:w-1/4 bg-black">
            <RightSidebar />
          </div>
        </div>
    </>
  )
}

export default App
