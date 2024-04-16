import { IoMenuSharp } from "react-icons/io5";
import { TfiLayoutGrid4, TfiLayoutGrid3, TfiLayoutGrid2 } from "react-icons/tfi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegCircle,FaReact } from "react-icons/fa";

function Sidebar() {
    
    const sidebar = document.querySelector("#sidebar");
    //const toggleBtn = document.getElementById("toggle-btn");

    function toggle () {
        console.log("clicked")
        sidebar?.classList.toggle("active");
    };

    return (
      <div id="sidebar">
        <nav className="fixed top-0 left-0 w-64 h-full bg-indigo-500">
            <div className="flex justify-left items-center w-full h-16">
                <FaReact size={30} className="text-white m-4 flex align-center"/>
                <h2 className="text-white flex align-center font-bold text-2xl">ToDo</h2>
                <IoMenuSharp size={30} onClick={toggle} className="text-white m-4 flex align-center absolute translate-x-48
                hover:bg-indigo-800 transition ease-in-out delay-150 rounded-md"/>
            </div>

            <ul className="list-none p-2">
                <div className="active">
                    <li className="flex w-full h-12 text-white mt-4 items-center  font-bold rounded-md list-none active:bg-indigo-800 hover:bg-indigo-800 transition ease-in-out delay-150">
                        <a href="#" className="flex">
                            <FaRegCircle className="flex m-3.5 font-bold"/>
                            <span className="align-middle leading-10">Day</span>
                        </a>
                    </li>
                </div>
                
                <li className="flex w-full h-12 text-white mt-4 items-center  font-bold rounded-md list-none hover:bg-indigo-800">
                    <a href="#" className="flex">
                        <MdCheckBoxOutlineBlank className="flex m-3.5 font-bold"/>
                        <span className="align-middle leading-10">Week</span>
                    </a>
                </li>
                <li className="flex w-full h-12 text-white mt-4 items-center  font-bold rounded-md list-none hover:bg-indigo-800">
                    <a href="#" className="flex">
                        <TfiLayoutGrid2 className="flex m-3.5 font-bold"/>
                        <span className="align-middle leading-10">Month</span>
                    </a>
                </li>
                <li className="flex w-full h-12 text-white mt-4 items-center  font-bold rounded-md list-none hover:bg-indigo-800">
                    <a href="#" className="flex">
                        <TfiLayoutGrid3 className="flex m-3.5 font-bold"/>
                        <span className="align-middle leading-10">Quarter</span>
                    </a>
                </li>
                <li className="flex w-full h-12 text-white mt-4 items-center  font-bold rounded-md list-none hover:bg-indigo-800">
                    <a href="#" className="flex">
                        <TfiLayoutGrid4 className="flex m-3.5 font-bold"/>
                        <span className="align-middle leading-10">Year</span>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
    )
  }
  
  export default Sidebar
  