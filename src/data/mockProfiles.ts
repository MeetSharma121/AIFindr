import { Profile } from '../types';

export const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    bio: 'Artist and outdoor enthusiast who loves film. I create vibrant landscapes inspired by my hiking adventures.',
    interests: ['painting', 'hiking', 'photography', 'film', 'travel'],
    goals: ['host gallery exhibition', 'hike in 10 national parks', 'learn Italian'],
    personality: ['creative', 'adventurous', 'detail-oriented', 'quirky'],
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    socialLinks: {
      twitter: 'alexmorgan',
      website: 'alexmorganart.com',
    },
  },
  {
    id: '2',
    name: 'Jordan Chen',
    bio: 'Software engineer by day, jazz musician by night. Building meaningful tech while exploring musical frontiers.',
    interests: ['coding', 'jazz', 'AI', 'cycling', 'coffee'],
    goals: ['build a startup', 'record an album', 'speak at tech conferences'],
    personality: ['analytical', 'creative', 'persistent', 'calm'],
    imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    socialLinks: {
      github: 'jordanchen',
      linkedin: 'jordan-chen',
    },
  },
  {
    id: '3',
    name: 'Taylor Rodriguez',
    bio: 'Filmmaker who talks like Tarantino and thinks like Nolan. Creating stories that blend genres and challenge perspectives.',
    interests: ['filmmaking', 'screenwriting', 'philosophy', 'martial arts', 'vintage cinema'],
    goals: ['direct feature film', 'create film festival', 'write screenplay'],
    personality: ['expressive', 'visionary', 'witty', 'passionate'],
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    socialLinks: {
      twitter: 'taylorfilms',
      website: 'taylorrodriguez.com',
    },
  },
  {
    id: '4',
    name: 'Sam Wilson',
    bio: 'Sustainable fashion designer and environmental activist. Creating eco-friendly clothing that makes a statement.',
    interests: ['fashion', 'sustainability', 'design', 'gardening', 'zero-waste living'],
    goals: ['launch sustainable fashion line', 'open zero-waste store', 'teach sustainable design'],
    personality: ['innovative', 'principled', 'driven', 'practical'],
    imageUrl: 'https://images.pexels.com/photos/2599509/pexels-photo-2599509.jpeg',
    socialLinks: {
      instagram: 'samwilsondesign',
      website: 'sustainablebysam.com',
    },
  },
  {
    id: '5',
    name: 'Jamie Lee',
    bio: 'Neuroscientist and meditation teacher combining science and mindfulness for better mental health.',
    interests: ['neuroscience', 'meditation', 'teaching', 'running', 'psychology'],
    goals: ['publish research', 'launch meditation app', 'run marathon'],
    personality: ['thoughtful', 'focused', 'compassionate', 'curious'],
    imageUrl: 'https://images.pexels.com/photos/3777950/pexels-photo-3777950.jpeg',
    socialLinks: {
      twitter: 'jamieleemind',
      linkedin: 'jamie-lee-neuro',
    },
  },
  {
    id: '6',
    name: 'Riley Johnson',
    bio: 'Game developer and narrative designer creating immersive worlds that explore human emotions and ethical dilemmas.',
    interests: ['game design', 'storytelling', 'sci-fi', 'psychology', 'VR'],
    goals: ['create indie game studio', 'speak at GDC', 'write a game design book'],
    personality: ['creative', 'analytical', 'empathetic', 'detail-oriented'],
    imageUrl: 'https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg',
    socialLinks: {
      twitter: 'rileyjgames',
      github: 'rileyjohnson',
    },
  }
];