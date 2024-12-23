import React from "react";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-md transition ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton