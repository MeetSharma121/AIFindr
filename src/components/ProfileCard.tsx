import React from 'react';
import { Profile } from '../types';
import { User, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  score: number;
  reasons: string[];
  onClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  profile, 
  score, 
  reasons, 
  onClick 
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={profile.imageUrl} 
          alt={profile.name} 
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 right-2 rounded-full px-3 py-1 text-sm font-semibold ${
          score >= 80 ? 'bg-green-600 text-white' : 
          score >= 60 ? 'bg-indigo-600 text-white' : 
          score >= 40 ? 'bg-purple-600 text-white' : 
          'bg-gray-600 text-white'
        }`}>
          {score}% Match
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{profile.name}</h3>
        <p className="text-gray-600 mt-2 line-clamp-3">{profile.bio}</p>
        
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {profile.interests.slice(0, 5).map((interest, index) => (
              <span 
                key={index} 
                className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-indigo-600 mb-2">Why this is a match:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {reasons.slice(0, 2).map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
            {reasons.length > 2 && (
              <li className="text-indigo-600 cursor-pointer">
                + {reasons.length - 2} more reasons
              </li>
            )}
          </ul>
        </div>
        
        <div className="mt-4 flex gap-2">
          {profile.socialLinks?.twitter && (
            <a 
              href={`https://twitter.com/${profile.socialLinks.twitter}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-blue-400 hover:text-blue-600 transition-colors"
              aria-label={`${profile.name}'s Twitter`}
            >
              <Globe size={18} />
            </a>
          )}
          {profile.socialLinks?.github && (
            <a 
              href={`https://github.com/${profile.socialLinks.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-700 hover:text-black transition-colors"
              aria-label={`${profile.name}'s GitHub`}
            >
              <Github size={18} />
            </a>
          )}
          {profile.socialLinks?.linkedin && (
            <a 
              href={`https://linkedin.com/in/${profile.socialLinks.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-blue-700 hover:text-blue-900 transition-colors"
              aria-label={`${profile.name}'s LinkedIn`}
            >
              <Linkedin size={18} />
            </a>
          )}
          {profile.socialLinks?.website && (
            <a 
              href={`https://${profile.socialLinks.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-purple-600 hover:text-purple-800 transition-colors"
              aria-label={`${profile.name}'s Website`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;