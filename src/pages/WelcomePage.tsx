import React, { useState } from "react";
import AuthButton from "../components/AuthButton";
import Logo from "../assets/image.png";
import Vector from '../assets/vector.png'
import GitIcon from "../assets/git.png";
import BitbucketIcon from "../assets/basket.png";
import AzureDevOpsIcon from "../assets/asure.png";
import GitLabIcon from "../assets/fox.png";
import Side from "../assets/side.png";
const CodeAntAIPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"SAAS" | "Self Hosted">("SAAS");

  const saasAuthProviders = [
    { provider: "GitHub", icon: GitIcon },
    { provider: "Bitbucket", icon: BitbucketIcon },
    { provider: "Azure DevOps", icon: AzureDevOpsIcon },
    { provider: "GitLab", icon: GitLabIcon },
  ];

  const selfHostedProviders = [
    { provider: "GitHub Self-Hosted", icon: GitIcon },
    { provider: "Bitbucket Self-Hosted", icon: BitbucketIcon },
  ];

  const handleSignIn = (provider: string) => {
    alert(`Signing in with ${provider}`);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      {/* Left Section */}
      <div className="hidden md:flex flex-1  items-center justify-center p-6 md:p-8 relative">
        <div className="max-w-md space-y-8">
          <div className="bg-white w-full border-gray-50 border shadow-lg p-6 rounded-[30px]">
            <div className="flex items-center justify-center gap-2 w-full border-b-2">
              <img src={Logo} alt="logo" className="w-7 pb-3" />
              <h1 className="text-lg w-[315px] font-semibold">
                AI to Detect & Autofix Bad Code
              </h1>
            </div>
            <ul className="mt-4 flex justify-between items-center space-y-1 text-black">
              <li className="flex flex-col items-center justify-center">
                <span className="font-bold">30+ </span>
                <span>Language Support</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <span className="font-bold">10K+</span> <span>Developers</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <span className="font-bold">100K+</span>{" "}
                <span>Hours Saved</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 relative w-52 bottom-10 left-52 max-h-36 bg-white border-gray-100 border-t-2 shadow-xl rounded-xl p-5">
            <div className="flex justify-between items-center ">
              <div className="rounded-full bg-purple-100 w-[50px] h-[50px] flex items-center justify-center">
                {" "}
                <img src={Vector} alt="vector" className="w-5" />
              </div>
              <div className="flex flex-col items-center justify-center text-blue-600 text-sm font-medium">
                {" "}
                <span>
                  <span className="text-sm font-bold mr-1">▲</span>14%
                </span>{" "}
                <span className="text-gray-400  font-thin">This week</span>
              </div>
            </div>
            <p className="text-sm  mt-3 text-gray-500">Issues Fixed</p>
            <p className=" text-3xl font-bold text-gray-800">500K+</p>
          </div>
        </div>
        <img
          src={Side}
          alt="Background Logo"
          className="absolute bottom-4 opacity-40 left-4  w-56"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center w-full bg-gray-50 h-screen md:p-10">
        <div className="w-full max-w-[750px] h-auto md:h-[550px] shadow border border-gray-300 bg-white rounded p-4 md:p-6">
          {/* Header */}
          <div className="flex items-center justify-center flex-col border-b  border-gray-300 pb-6">
            <div className="text-center mb-8">
              {/* Logo and Name Section */}
              <div className="flex justify-center items-center gap-2 mt-4">
                <img src={Logo} alt="CodeAnt Logo" className="w-7" />
                <span className="text-3xl font-normal text-gray-800">
                  CodeAnt AI
                </span>
              </div>

              {/* Welcome Text with Margin */}
              <h1 className="text-3xl font-semibold mt-6">
                Welcome to CodeAnt AI
              </h1>
            </div>

            <div className="relative w-full h-12 shadow border border-gray-300 rounded bg-gray-100 flex items-center overflow-hidden">
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
          </div>

          {/* Authentication Buttons */}
          <div className="px-5 py-5 ">
            <div className="space-y-4 md:mt-3 ">
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
