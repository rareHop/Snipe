import React from 'react';
import { Zap, Target, Code2, Users } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 p-8 md:p-12">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Building the Future of Web Development</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              At Snipe, we're revolutionizing web development with our next-generation framework that combines performance, SEO, and developer experience.
            </p>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] opacity-10 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur">
            <Zap className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-300">Our framework is built from the ground up with performance in mind, ensuring blazing fast load times and smooth interactions.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur">
            <Target className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
            <p className="text-gray-300">Built-in SEO optimization ensures your applications rank higher and reach more users effectively.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur">
            <Code2 className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developer First</h3>
            <p className="text-gray-300">An intuitive API and comprehensive documentation make development a joy, not a chore.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur">
            <Users className="w-10 h-10 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-300">Open source at heart, we believe in the power of community collaboration and feedback.</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We're on a mission to revolutionize web development by creating tools and frameworks that empower developers to build better applications with less complexity. Our focus on performance, SEO, and developer experience sets us apart and drives everything we do.
          </p>
        </div>
      </div>
    </div>
  );
}