import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";
import { Badge } from "../components/ui/badge";
import { GrStorage } from "react-icons/gr";

const RepositoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVisibility, setFilterVisibility] = useState("All");
  const [filterLanguage, setFilterLanguage] = useState("All");

  const filteredRepositories = repositories.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVisibility =
      filterVisibility === "All" || repo.visibility === filterVisibility;
    const matchesLanguage =
      filterLanguage === "All" || repo.language === filterLanguage;

    return matchesSearch && matchesVisibility && matchesLanguage;
  });

  return (
    <div className="flex mt-10 md:mt-0 w-full font-sans bg-gray-100">
      {/* Main Content */}
      <main className="flex-1   w-full h-fit md:p-6 pt-5 border border-gray-100 bg-white overflow-y-auto">
        <div className="border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center ">
            <div className="">
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <span className="text-gray-400 ">
                {filteredRepositories.length} total repositories
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="border-black border p-2  h-10 text-black flex items-center md:justify-between justify-center gap-2 md:py-2 md:px-4 rounded-md">
                <FiRefreshCcw /> <span className="">Refresh All</span>
              </button>
              <button className="bg-blue-600  h-10 text-white py-2 px-4 rounded-md">
                <span className="">+ Add Repository</span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-1/3 md:ml-4 top-3">
            <IoIosSearch className="absolute left-2 w-6 h-6 top-2" />
            <input
              type="text"
              placeholder="Search Repositories"
              className="border-2 w-full border-gray-300 rounded-md py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Repository List */}
        <div className="w-full h-[calc(100vh-200px)] overflow-y-auto">
          {/* Render each repository as a card */}
          {filteredRepositories.map((repo) => (
            <div
              key={repo.id}
              className="flex justify-between  flex-col border w-full border-gray-100 p-4 bg-white rounded-md shadow-md"
            >
              {/* Repository details */}

              <h2 className="text-lg font-semibold">
                {repo.name}{" "}
                <span className="text-sm text-gray-500">
                  <Badge className="bg-blue-50 text-blue-300 border-gray rounded-xl">
                    {" "}
                    {repo.visibility}
                  </Badge>
                </span>
              </h2>
              <div className="w-full flex gap-10">
                <p className="text-sm flex items-center gap-2">
                  <span className="text-gray-700 text-[1rem]">{repo.language}</span>
                  <span className="text-blue-500 text-xl">•</span>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <GrStorage />
                  {repo.size} KB
                </p>
                {/* Last updated info */}
                <p className=" text-gray-500">Updated {repo.updated}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const repositories = [
  {
    id: 1,
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320",
    updated: "1 day ago",
  },
  {
    id: 2,
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: "5871",
    updated: "2 days ago",
  },
  {
    id: 3,
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521",
    updated: "5 days ago",
  },
  {
    id: 4,
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096",
    updated: "3 days ago",
  },
  {
    id: 5,
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210",
    updated: "6 days ago",
  },
  {
    id: 6,
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876",
    updated: "4 days ago",
  },
  {
    id: 7,
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: "5432",
    updated: "7 days ago",
  },
];

export default RepositoriesPage;
