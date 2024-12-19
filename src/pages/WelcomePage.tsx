import React, { useState } from "react";
import AuthButton from "../components/AuthButton";
import Logo from "../assets/image.png";

const CodeAntAIPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"SAAS" | "Self Hosted">("SAAS");

  const saasAuthProviders = [
    { provider: "GitHub", icon: "/path/to/github-icon.svg" },
    { provider: "Bitbucket", icon: "/path/to/bitbucket-icon.svg" },
    { provider: "Azure DevOps", icon: "/path/to/azuredevops-icon.svg" },
    { provider: "GitLab", icon: "/path/to/gitlab-icon.svg" },
  ];

  const selfHostedProviders = [
    { provider: "GitHub Self-Hosted", icon: "/path/to/github-icon.svg" },
    { provider: "Bitbucket Self-Hosted", icon: "/path/to/bitbucket-icon.svg" },
  ];

  const handleSignIn = (provider: string) => {
    alert(`Signing in with ${provider}`);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Left Section */}
      <div className="hidden md:flex flex-1 bg-gray-50 items-center justify-center p-6 md:p-8 relative">
        <div className="max-w-md space-y-8">
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h1 className="text-lg font-semibold">
              AI to Detect & Autofix Bad Code
            </h1>
            <ul className="mt-4 flex space-y-1 text-gray-600">
              <li>30+ Language Support</li>
              <li>10K+ Developers</li>
              <li>100K+ Hours Saved</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Issues Fixed</p>
              <h2 className="text-3xl font-bold">500K+</h2>
            </div>
            <div className="text-blue-500 text-sm font-semibold">
              +14% This Week
            </div>
          </div>
        </div>
        <img
          src="/path/to/background-logo.svg"
          alt="Background Logo"
          className="absolute bottom-4 left-4 opacity-10 w-40"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:mt-28">
        <div className="max-w-md w-full h-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center">
              <img src={Logo} alt="CodeAnt Logo" className="w-7 mb-4" />
              <span>CodeAnt AI</span>
            </div>
            <h1 className="text-2xl font-bold">Welcome to CodeAnt AI</h1>
          </div>

          <div className="relative w-full h-12 bg-gray-200 flex items-center mb-6 overflow-hidden">
            {/* Background Highlight for Active Tab */}
            <div
              className={`absolute w-1/2 h-full bg-blue-500 rounded transition-transform duration-300 ${
                activeTab === "SAAS" ? "translate-x-0" : "translate-x-full"
              }`}
            />
            {/* SAAS Tab */}
            <button
              onClick={() => setActiveTab("SAAS")}
              className={`z-10 flex-1 h-full text-center font-medium transition-colors duration-300 ${
                activeTab === "SAAS" ? "text-white" : "text-gray-700"
              }`}
            >
              SAAS
            </button>
            {/* Self Hosted Tab */}
            <button
              onClick={() => setActiveTab("Self Hosted")}
              className={`z-10 flex-1 h-full text-center font-medium transition-colors duration-300 ${
                activeTab === "Self Hosted" ? "text-white" : "text-gray-700"
              }`}
            >
              Self Hosted
            </button>
          </div>

          {/* Authentication Buttons */}
          <div className="space-y-4">
            {(activeTab === "SAAS"
              ? saasAuthProviders
              : selfHostedProviders
            ).map(({ provider, icon }) => (
              <AuthButton
                key={provider}
                provider={provider}
                icon={icon}
                onClick={() => handleSignIn(provider)}
              />
            ))}
          </div>

          {/* Footer */}
          <p className="text-sm text-gray-600 mt-8 text-center">
            By signing up, you agree to the{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeAntAIPage;
