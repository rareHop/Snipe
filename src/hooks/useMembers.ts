import { useState } from 'react';
import { members as initialMembers } from '../data/members';
import { Member } from '../types';

export function useMembers() {
  const [members] = useState<Member[]>(initialMembers);
  return { members };
}