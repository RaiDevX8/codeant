import {  IoIosCloudOutline } from "react-icons/io";
import { TbHome } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import Logo from "../assets/image.png";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } md:block fixed top-0 left-0 h-screen w-64 flex flex-col  pb-8 border-r border-gray-200 transition-all z-10`}
    >
      {/* Application title */}
      <div>
        <div className="flex justify-center items-center gap-2 mt-4">
          <img src={Logo} alt="CodeAnt Logo" className="w-7" />
          <span className="text-3xl font-normal text-gray-800">CodeAnt AI</span>
        </div>
        {/* Navigation links */}
        <nav className="mt-4 flex-grow">
          <ul>
            <li className="p-3 flex items-center gap-2 hover:bg-blue-600 hover:text-white rounded-md mx-4 text-gray-700">
              <TbHome className="text-xl" />
              <Link to="/repositories">Repositories</Link>
            </li>
            <li className="p-3 flex items-center gap-2 hover:bg-blue-600 hover:text-white rounded-md mx-4 text-gray-700">
              <IoCodeSlash />
              <Link to="/ai-code-review">AI Code Review</Link>
            </li>
            <li className="p-3 flex items-center gap-2 hover:bg-blue-600 hover:text-white rounded-md mx-4 text-gray-700">
              <IoIosCloudOutline className="text-xl" />
              <Link to="/cloud-security">Cloud Security</Link>
            </li>
            <li className="p-3 flex items-center gap-2 hover:bg-blue-600 hover:text-white rounded-md mx-4 text-gray-700">
              <FaBook />
              <Link to="/how-to-use">How to Use</Link>
            </li>
            <li className="p-3 flex items-center gap-2 hover:bg-blue-600 hover:text-white rounded-md mx-4 text-gray-700">
              <CiSettings />
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Support and Logout */}
      <div className=" bottom-0 md:absolute w-full">
        <ul>
          <li className="p-3 flex items-center gap-2 hover:bg-blue-600 hover:text-white rounded-md mx-4 text-gray-700">
            <MdCall className="text-xl" />
            <Link to="/support">Support</Link>
          </li>
          <li className="p-3 flex items-center gap-2 hover:bg-blue-600 hover:text-white rounded-md mx-4 text-gray-700">
            <IoIosLogOut />
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
