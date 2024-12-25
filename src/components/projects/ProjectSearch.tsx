import React from 'react';
import { Search } from 'lucide-react';

interface ProjectSearchProps {
  onSearch: (query: string) => void;
}

export function ProjectSearch({ onSearch }: ProjectSearchProps) {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search projects..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}