import { useState } from "react";
import Sidebar from "../components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen flex-col">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`flex-1 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        } transition-all`}
      >
        <Outlet />
      </div>
    </div>
  );
};
export default SidebarLayout;
