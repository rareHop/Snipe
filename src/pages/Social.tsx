import React from 'react';
import { MessageSquare, Github, Twitter } from 'lucide-react';

export function Social() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-900 p-8 md:p-12">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Connect with the Snipe community. Share ideas, get help, and collaborate on projects.
            </p>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')] opacity-10 mix-blend-overlay"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Social Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Discord Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-500/10 to-indigo-900/10 rounded-xl p-8 hover:from-indigo-500/20 hover:to-indigo-900/20 transition-all duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=1920&q=80')] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <MessageSquare className="w-12 h-12 mb-6 text-indigo-400" />
              <h2 className="text-2xl font-semibold mb-3">Discord Community</h2>
              <p className="text-gray-300 mb-6">Join our Discord server to connect with other developers, get help, and stay updated.</p>
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors duration-300"
              >
                Join Server
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-gray-500/10 to-gray-900/10 rounded-xl p-8 hover:from-gray-500/20 hover:to-gray-900/20 transition-all duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1920&q=80')] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <Github className="w-12 h-12 mb-6 text-gray-400" />
              <h2 className="text-2xl font-semibold mb-3">GitHub</h2>
              <p className="text-gray-300 mb-6">Explore our open-source projects, contribute, and help us improve Snipe.</p>
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 rounded-lg transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Twitter Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-900/10 rounded-xl p-8 hover:from-blue-500/20 hover:to-blue-900/20 transition-all duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1920&q=80')] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <Twitter className="w-12 h-12 mb-6 text-blue-400" />
              <h2 className="text-2xl font-semibold mb-3">Twitter</h2>
              <p className="text-gray-300 mb-6">Follow us for the latest updates, tips, and announcements about Snipe.</p>
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors duration-300"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">2.5K+</div>
            <div className="text-gray-400">Discord Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">1.2K+</div>
            <div className="text-gray-400">GitHub Stars</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">5K+</div>
            <div className="text-gray-400">Twitter Followers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
            <div className="text-gray-400">Contributors</div>
          </div>
        </div>
      </div>
    </div>
  );
}