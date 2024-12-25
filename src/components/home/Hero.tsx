import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <img 
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1920&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex items-center gap-3 text-blue-500 mb-8">
          <Zap className="w-6 h-6" />
          <span className="text-lg font-semibold">Introducing Snipe Framework</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          The Future of Web<br />
          <span className="text-blue-500">Development is Here</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Build lightning-fast, SEO-optimized web applications with our next-generation framework that combines the best of static and dynamic rendering.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}