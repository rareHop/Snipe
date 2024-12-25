import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { TeamPreview } from '../components/home/TeamPreview';

export function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <TeamPreview />
    </div>
  );
}