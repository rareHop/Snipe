import React from 'react';
import { MemberCard } from './MemberCard';
import { Member } from '../../types';

interface MemberGridProps {
  members: Member[];
}

export function MemberGrid({ members }: MemberGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}