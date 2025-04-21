import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
  initialQuery?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  isLoading = false,
  initialQuery = ''
}) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const placeholderExamples = [
    "Find me artists who love hiking and talk like Tarantino",
    "I need creative developers with a passion for music",
    "Connect me with sustainability experts who are also into design",
    "Looking for storytellers with a background in psychology",
    "Show me innovative thinkers who are building startups"
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderExamples.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholderExamples[placeholderIndex]}
          className="w-full p-4 pl-5 pr-16 text-lg rounded-full border-2 border-indigo-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-md transition-all"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-3 top-3 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
          aria-label="Search"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Search size={24} />
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;