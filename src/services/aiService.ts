import { SearchQuery } from '../types';

export function parseQuery(rawQuery: string): SearchQuery {
  // In a real app, this would use an actual AI service
  // For demo purposes, we'll do basic keyword extraction
  
  const lowercaseQuery = rawQuery.toLowerCase();
  const parsedKeywords = lowercaseQuery
    .replace(/[^\w\s]/gi, '') // Remove punctuation
    .split(' ')
    .filter(word => word.length > 3); // Filter out short words
  
  // Extract potential interests, goals, and personality traits
  // This is a simplified version - a real AI would do this much better
  const interests = extractKeywords(lowercaseQuery, [
    'art', 'film', 'hiking', 'coding', 'music', 'travel', 'photography', 
    'jazz', 'design', 'fashion', 'running', 'meditation', 'gaming',
    'philosophy', 'storytelling', 'sustainability', 'neuroscience'
  ]);
  
  const goals = [];
  if (lowercaseQuery.includes('start')) goals.push('start');
  if (lowercaseQuery.includes('learn')) goals.push('learn');
  if (lowercaseQuery.includes('build')) goals.push('build');
  if (lowercaseQuery.includes('create')) goals.push('create');
  if (lowercaseQuery.includes('launch')) goals.push('launch');
  if (lowercaseQuery.includes('write')) goals.push('write');
  if (lowercaseQuery.includes('direct')) goals.push('direct');
  
  const personality = [];
  if (lowercaseQuery.includes('creative')) personality.push('creative');
  if (lowercaseQuery.includes('analytical')) personality.push('analytical');
  if (lowercaseQuery.includes('tarantino')) personality.push('expressive');
  if (lowercaseQuery.includes('passionate')) personality.push('passionate');
  if (lowercaseQuery.includes('quirky')) personality.push('quirky');
  if (lowercaseQuery.includes('innovative')) personality.push('innovative');
  if (lowercaseQuery.includes('driven')) personality.push('driven');
  
  return {
    raw: rawQuery,
    parsedKeywords,
    interests,
    goals,
    personality,
  };
}

function extractKeywords(text: string, keywords: string[]): string[] {
  return keywords.filter(keyword => text.includes(keyword));
}