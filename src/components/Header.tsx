import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegCheckSquare } from "react-icons/fa";

function Header() {
  
    return (
      <div className="flex justify-between w-full h-16 items-center bg-gray-400">
        <h1 className="font-bold text-2xl ml-72 text-gray-900">Goals</h1>
        <div className="flex items-center">
          <button className="flex items-center bg-gray-900 text-white m-2 py-2 px-5 rounded-lg hover:opacity-50">
          <p className="mx-4">Clear Completed</p> <FaRegCheckSquare size={30}/>
            </button>
          <button className="flex mx-12 bg-gray-900 text-white m-2 py-2 px-5 rounded-lg hover:opacity-50 items-center">
            <p className="mx-4">Add Task</p> <IoIosAddCircleOutline size={30} className="hover:opacity-50"/>
          </button>
        </div>
      </div>
    )
  }
  
  export default Header
  