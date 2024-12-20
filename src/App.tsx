import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Outlet,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RepositoriesPage from "./pages/MainPage";
import CodeReviewPage from "./pages/CodeReviewPage";
import CloudSecurityPage from "./pages/CloudSecurityPage";
import HowToUsePage from "./pages/HowToUsePage";
import SettingsPage from "./pages/SettingsPage";
import LogoutPage from "./pages/LogoutPage";
import SupportPage from "./pages/SupportPage";
import WelcomePage from "./pages/WelcomePage";
import NotFoundPage from "./pages/HomePage";
import { useState } from "react";

const SidebarLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen flex-col">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`flex-1 ${isSidebarOpen ? "md:ml-64" : "ml-0"} transition-all`}
      >
        <Outlet />
      </div>
    </div>
  );
};
const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      element: <SidebarLayout />,
      children: [
        { path: "/repositories", element: <RepositoriesPage /> },
        { path: "/ai-code-review", element: <CodeReviewPage /> },
        { path: "/cloud-security", element: <CloudSecurityPage /> },
        { path: "/how-to-use", element: <HowToUsePage /> },
        { path: "/settings", element: <SettingsPage /> },
        { path: "/support", element: <SupportPage /> },
        { path: "/logout", element: <LogoutPage /> },
      ],
    },
  ]);
  return routes;
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
