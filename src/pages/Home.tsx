import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { Users, Zap, UserCheck, PenTool } from 'lucide-react';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setIsLoading(true);
    // Simulate API call delay for AI processing
    setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col justify-center items-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="text-center max-w-3xl mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight animate-fadeIn">
          Find People Who <span className="text-indigo-600">Match Your Vibe</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeIn animation-delay-200">
          Describe what you're looking for in a person — interests, goals, personality — 
          and our AI will find the perfect matches.
        </p>
        
        <div className="animate-fadeIn animation-delay-400">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4 animate-fadeIn animation-delay-600">
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="bg-indigo-100 p-3 rounded-full inline-block mb-4">
            <PenTool className="text-indigo-600" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Natural Language</h3>
          <p className="text-gray-600">
            Describe what you're looking for in plain English, just like talking to a friend.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
            <Zap className="text-purple-600" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">AI-Powered</h3>
          <p className="text-gray-600">
            Our AI understands nuance and context to find people who truly match your criteria.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
            <UserCheck className="text-green-600" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Perfect Matches</h3>
          <p className="text-gray-600">
            Find people who share your interests, goals, and communication style.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
            <Users className="text-blue-600" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Explained Matches</h3>
          <p className="text-gray-600">
            See exactly why each person matches your criteria with detailed AI explanations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;