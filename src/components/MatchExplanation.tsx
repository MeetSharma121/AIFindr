import React from 'react';
import { Match } from '../types';
import { X, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';

interface MatchExplanationProps {
  match: Match;
  onClose: () => void;
}

const MatchExplanation: React.FC<MatchExplanationProps> = ({ match, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold">Why {match.profile.name} is a match</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <img 
              src={match.profile.imageUrl} 
              alt={match.profile.name} 
              className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">{match.profile.name}</h3>
              <p className="text-gray-600 mt-1">{match.profile.bio}</p>
              <div className="mt-3 flex items-center">
                <div className={`mr-2 px-3 py-1 rounded-full text-white font-semibold ${
                  match.score >= 80 ? 'bg-green-600' : 
                  match.score >= 60 ? 'bg-indigo-600' : 
                  match.score >= 40 ? 'bg-purple-600' : 
                  'bg-gray-600'
                }`}>
                  {match.score}% Match
                </div>
                <div className="flex gap-2">
                  {match.profile.socialLinks?.twitter && (
                    <a 
                      href={`https://twitter.com/${match.profile.socialLinks.twitter}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 transition-colors"
                      aria-label="Twitter"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                  {match.profile.socialLinks?.github && (
                    <a 
                      href={`https://github.com/${match.profile.socialLinks.github}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {match.profile.socialLinks?.linkedin && (
                    <a 
                      href={`https://linkedin.com/in/${match.profile.socialLinks.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {match.profile.socialLinks?.website && (
                    <a 
                      href={`https://${match.profile.socialLinks.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 transition-colors"
                      aria-label="Website"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <h4 className="text-lg font-semibold text-indigo-800 mb-2">Match Explanation</h4>
              <p className="text-gray-700">Our AI analyzed your search criteria and found several points of alignment with {match.profile.name}'s profile:</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {match.reasons.map((reason, index) => (
                  <li key={index} className="text-gray-700">{reason}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {match.profile.interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Goals</h4>
              <ul className="list-disc list-inside">
                {match.profile.goals.map((goal, index) => (
                  <li key={index} className="text-gray-700">{goal}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Personality</h4>
              <div className="flex flex-wrap gap-2">
                {match.profile.personality.map((trait, index) => (
                  <span 
                    key={index} 
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t flex justify-end sticky bottom-0 bg-white">
          <button 
            onClick={onClose}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors transform hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchExplanation;