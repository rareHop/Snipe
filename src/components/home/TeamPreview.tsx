import React from 'react';
import { ArrowRight } from 'lucide-react';
import { members } from '../../data/members';
import { MemberCard } from '../members/MemberCard';

export function TeamPreview() {
  const previewMembers = members.slice(0, 3);

  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <a 
            href="/members" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            View All Members
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}