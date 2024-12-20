import { IoIosCloudOutline } from "react-icons/io";
import { TbHome } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Logo from "../assets/image.png";
import { NavLink } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(!isOpen);
  return (
    <>
      {/* Desktop Sidebar */}
      {!mobileMenuOpen && (
        <aside
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:block fixed top-0 left-0 h-screen w-64 flex flex-col pb-8 border-r border-gray-200 transition-all z-10`}
        >
          {/* Application title */}
          <div className="h-full w-full">
            <div className="flex justify-center items-center gap-2 mt-4">
              <img src={Logo} alt="CodeAnt Logo" className="w-7" />
              <span className="text-3xl font-normal text-gray-800">
                CodeAnt AI
              </span>
            </div>
            <div className="mt-3 pl-2 pr-2 border-gray-50 border">
              <Select defaultValue="repo1">
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Select a repository"
                    className="border-gray-50 border"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="bg-gray-50">
                    <SelectLabel>Accounts</SelectLabel>
                    <SelectItem value="repo1">Accounts 1</SelectItem>
                    <SelectItem value="repo2">Accounts 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Navigation links */}
            <nav className="mt-4 flex-grow">
              <ul>
                <li>
                  <NavLink
                    to="/repositories"
                    className={({ isActive }) =>
                      `p-3 flex items-center gap-2 ${
                        isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50"
                      } rounded-md mx-4 text-gray-700`
                    }
                  >
                    <TbHome className="text-xl" />
                    Repositories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ai-code-review"
                    className={({ isActive }) =>
                      `p-3 flex items-center gap-2 ${
                        isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50"
                      } rounded-md mx-4 text-gray-700`
                    }
                  >
                    <IoCodeSlash />
                    AI Code Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cloud-security"
                    className={({ isActive }) =>
                      `p-3 flex items-center gap-2 ${
                        isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50"
                      } rounded-md mx-4 text-gray-700`
                    }
                  >
                    <IoIosCloudOutline className="text-xl" />
                    Cloud Security
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/how-to-use"
                    className={({ isActive }) =>
                      `p-3 flex items-center gap-2 ${
                        isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50"
                      } rounded-md mx-4 text-gray-700`
                    }
                  >
                    <FaBook />
                    How to Use
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      `p-3 flex items-center gap-2 ${
                        isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50"
                      } rounded-md mx-4 text-gray-700`
                    }
                  >
                    <CiSettings />
                    Settings
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          {/* Support and Logout */}
          <div className="bottom-0 md:absolute w-full">
            <ul>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    `p-3 flex items-center gap-2 ${
                      isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50"
                    } rounded-md mx-4 text-gray-700`
                  }
                >
                  <MdCall className="text-xl" />
                  Support
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    `p-3 flex items-center gap-2 ${
                      isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50"
                    } rounded-md mx-4 text-gray-700`
                  }
                >
                  <IoIosLogOut />
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
      )}

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-0 left-0 w-full z-20 m-3 bg-white shadow-md flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="CodeAnt Logo" className="w-7" />
          <span className="text-2xl font-semibold">CodeAnt AI</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-3xl focus:outline-none"
        >
          {mobileMenuOpen ? <MdClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full m-3  bg-white z-30 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 ">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="CodeAnt Logo" className="w-7" />
              <span className="text-2xl font-semibold">CodeAnt AI</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl focus:outline-none"
            >
              <MdClose />
            </button>
          </div>{" "}
          <div className=" pr-5 pt-5 flex items-center justify-center  z-1 border-gray-100 ">
            <Select defaultValue="repo1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a repository" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="bg-gray-50 z-10">
                  <SelectLabel>Accounts</SelectLabel>
                  <SelectItem value="repo1">Accounts 1</SelectItem>
                  <SelectItem value="repo2">Accounts 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <nav className=" flex-grow ">
            <ul className="text-lg font-semibold">
              <li>
                <NavLink
                  to="/repositories"
                  className="block p-4 font-semibold text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <TbHome className="inline mr-2" />
                  Repositories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ai-code-review"
                  className="block p-4 font-semibold  text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IoCodeSlash className="inline mr-2" />
                  AI Code Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cloud-security"
                  className="block p-4 font-semibold text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IoIosCloudOutline className="inline mr-2" />
                  Cloud Security
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/how-to-use"
                  className="block text-gray-700 font-semibold p-4 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaBook className="  inline mr-2" />
                  How to Use
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className="block p-4 font-semibold text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CiSettings className="inline mr-2" />
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className="block p-4 font-semibold text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MdCall className="inline mr-2" />
                  Support
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  className="block p-4 font-semibold text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IoIosLogOut className="inline mr-2" />
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
