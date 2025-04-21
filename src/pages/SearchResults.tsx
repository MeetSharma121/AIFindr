import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProfileCard from '../components/ProfileCard';
import MatchExplanation from '../components/MatchExplanation';
import { parseQuery } from '../services/aiService';
import { searchProfiles } from '../services/searchService';
import { Match } from '../types';
import { ArrowLeft, Filter, Info } from 'lucide-react';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  
  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [filteredMatches, setFilteredMatches] = useState<Match[]>([]);
  const [minScore, setMinScore] = useState(0);
  
  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      // Simulate API delay for AI processing
      setTimeout(() => {
        const parsedQuery = parseQuery(searchQuery);
        const results = searchProfiles(parsedQuery);
        setMatches(results);
        setFilteredMatches(results);
        setIsLoading(false);
      }, 1500);
    }
  }, [searchQuery]);
  
  const handleSearch = (query: string) => {
    if (query !== searchQuery) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };
  
  const handleScoreFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMinScore(value);
    setFilteredMatches(matches.filter(match => match.score >= value));
  };
  
  return (
    <div className="min-h-[calc(100vh-140px)] p-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </button>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Search Results for: <span className="text-indigo-600">"{searchQuery}"</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:flex-grow">
              <SearchBar onSearch={handleSearch} isLoading={false} initialQuery={searchQuery} />
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
              <Filter size={20} className="text-gray-600" />
              <div className="flex-grow">
                <label htmlFor="score-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Min Match Score: <span className="font-semibold">{minScore}%</span>
                </label>
                <input
                  type="range"
                  id="score-filter"
                  min="0"
                  max="100"
                  value={minScore}
                  onChange={handleScoreFilterChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
            <p className="text-gray-600">AI is analyzing your query...</p>
          </div>
        ) : filteredMatches.length > 0 ? (
          <>
            <div className="mb-4 px-2 py-3 bg-indigo-50 rounded-lg border border-indigo-100 flex items-start gap-3">
              <div className="text-indigo-600 pt-0.5">
                <Info size={18} />
              </div>
              <div className="text-sm text-indigo-800">
                <p>AI has analyzed your query and found {filteredMatches.length} matches. Click on any profile to see a detailed explanation of why they match your criteria.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {filteredMatches.map((match) => (
                <ProfileCard
                  key={match.profile.id}
                  profile={match.profile}
                  score={match.score}
                  reasons={match.reasons}
                  onClick={() => setSelectedMatch(match)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Matches Found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Try adjusting your search criteria to be more general, or lowering the minimum match score using the filter above.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors transform hover:scale-105"
            >
              Start a New Search
            </button>
          </div>
        )}
      </div>
      
      {selectedMatch && (
        <MatchExplanation
          match={selectedMatch}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
};

export default SearchResults;