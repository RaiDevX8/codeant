import React from "react";

// RepositoryCard.tsx
interface RepositoryCardProps {
  repo: {
    id: number;
    name: string;
    visibility: string;
    language: string;
    size: number;
    updated: string;
  };
}

const RepositoryCard = ({ repo }: RepositoryCardProps) => {
  return (
    <div className="flex justify-between items-center border w-full border-gray-100 p-4 bg-white rounded-md shadow-md ">
      {/* Repository details */}
      <div>
        <h2 className="text-lg font-medium">
          {repo.name}{" "}
          <span className="text-sm text-gray-500">{repo.visibility}</span>
        </h2>
        <p className="text-sm text-gray-500">
          {repo.language} • {repo.size} KB
        </p>
      </div>
      {/* Last updated info */}
      <p className="text-sm text-gray-500">Updated {repo.updated}</p>
    </div>
  );
};

export default RepositoryCard;
