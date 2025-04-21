export interface Profile {
  id: string;
  name: string;
  bio: string;
  interests: string[];
  goals: string[];
  personality: string[];
  imageUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface SearchQuery {
  raw: string;
  parsedKeywords: string[];
  interests?: string[];
  goals?: string[];
  personality?: string[];
}

export interface Match {
  profile: Profile;
  score: number;
  reasons: string[];
}