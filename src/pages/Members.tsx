import React from 'react';
import { MemberGrid } from '../components/members/MemberGrid';
import { useMembers } from '../hooks/useMembers';

export function Members() {
  const { members } = useMembers();

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Team Members</h1>
      <MemberGrid members={members} />
    </div>
  );
}