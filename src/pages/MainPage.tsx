import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";

const RepositoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVisibility, setFilterVisibility] = useState("All");
  const [filterLanguage, setFilterLanguage] = useState("All");

  // Filter repositories based on search term, visibility, and language
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
    <div className="flex font-sans bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 w-full h-fit p-6 border border-gray-100 bg-white overflow-y-auto">
        <div className="border border-gray-100 p-6">
          <div className="flex justify-between items-center ">
            <div>
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <span>{filteredRepositories.length} total repositories</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="border-black border text-black flex items-center justify-between gap-2 py-2 px-4 rounded-md">
                <FiRefreshCcw /> Refresh All
              </button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                + Add Repository
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative ml-5 gap-10">
            <IoIosSearch className="absolute left-2 w-6 h-6 top-2" />
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-1/4 border rounded-md py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="flex justify-between items-center border w-full border-gray-100 p-4 bg-white rounded-md shadow-md"
            >
              {/* Repository details */}
              <div>
                <h2 className="text-lg font-medium">
                  {repo.name}{" "}
                  <span className="text-sm text-gray-500">
                    {repo.visibility}
                  </span>
                </h2>
                <p className="text-sm text-gray-500">
                  {repo.language} • {repo.size} KB
                </p>
              </div>
              {/* Last updated info */}
              <p className="text-sm text-gray-500">Updated {repo.updated}</p>
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
