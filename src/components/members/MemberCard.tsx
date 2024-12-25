import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Member } from '../../types';

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-blue-400 mb-2">{member.role}</p>
        <p className="text-gray-400 mb-4">{member.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {member.social.github && (
            <a
              href={member.social.github}
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}