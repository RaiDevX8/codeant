import { IoIosCloudOutline } from "react-icons/io";
import { TbHome } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
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
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } md:block fixed top-0 left-0 h-screen w-64 flex flex-col pb-8 border-r border-gray-200 transition-all z-10`}
    >
      {/* Application title */}
      <div className="h-fll w-full">
        <div className="flex justify-center items-center gap-2 mt-4">
          <img src={Logo} alt="CodeAnt Logo" className="w-7" />
          <span className="text-3xl font-normal text-gray-800">CodeAnt AI</span>
        </div>
        <div className="mt-3 pl-2 pr-2">
          <Select defaultValue="repo1">
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="Select a repository" />
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
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50 "
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
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50 "
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
  );
};

export default Sidebar;
