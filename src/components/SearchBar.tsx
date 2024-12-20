// SearchBar.tsx
import React from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative ml-5 gap-10">
      <IoIosSearch className="absolute left-2 w-6 h-6 top-2" />
      <input
        type="text"
        placeholder="Search Repositories"
        value={value}
        onChange={onChange}
        className="w-1/4 border rounded-md py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
