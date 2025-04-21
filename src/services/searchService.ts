import { Profile, SearchQuery, Match } from '../types';
import { mockProfiles } from '../data/mockProfiles';

export function searchProfiles(query: SearchQuery): Match[] {
  // In a real app, this would use vector similarity search
  // For demo purposes, we'll use a simple scoring mechanism
  
  const matches: Match[] = mockProfiles.map(profile => {
    let score = 0;
    const reasons: string[] = [];
    
    // Match interests
    if (query.interests && query.interests.length > 0) {
      const matchedInterests = profile.interests.filter(interest => 
        query.interests!.includes(interest)
      );
      
      if (matchedInterests.length > 0) {
        score += matchedInterests.length * 20; // 20 points per matched interest
        reasons.push(`Shares interests in ${matchedInterests.join(', ')}`);
      }
    }
    
    // Match goals
    if (query.goals && query.goals.length > 0) {
      const matchedGoals = profile.goals.filter(goal => 
        query.goals!.some(queryGoal => goal.includes(queryGoal))
      );
      
      if (matchedGoals.length > 0) {
        score += matchedGoals.length * 15; // 15 points per matched goal
        reasons.push(`Has similar goals: ${matchedGoals.join(', ')}`);
      }
    }
    
    // Match personality
    if (query.personality && query.personality.length > 0) {
      const matchedPersonality = profile.personality.filter(trait => 
        query.personality!.includes(trait)
      );
      
      if (matchedPersonality.length > 0) {
        score += matchedPersonality.length * 25; // 25 points per matched personality trait
        reasons.push(`Matches your vibe: ${matchedPersonality.join(', ')}`);
      }
    }
    
    // Basic keyword matching on bio
    const keywordMatches = query.parsedKeywords.filter(keyword => 
      profile.bio.toLowerCase().includes(keyword)
    );
    
    if (keywordMatches.length > 0) {
      score += keywordMatches.length * 10; // 10 points per keyword in bio
      reasons.push(`Bio contains keywords you mentioned`);
    }
    
    // Cap score at 100
    score = Math.min(score, 100);
    
    return {
      profile,
      score,
      reasons,
    };
  });
  
  // Sort by score (highest first) and filter out low matches
  return matches
    .filter(match => match.score > 20) // Only return reasonable matches
    .sort((a, b) => b.score - a.score);
}