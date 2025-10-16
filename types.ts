import type React from 'react';

export interface Skill {
  name: string;
  icon: string; // The icon is now always a path to an image file.
}

export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}
