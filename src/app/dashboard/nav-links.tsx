'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'DashBoard', href: '/', icon: DocumentDuplicateIcon },
  { name: 'New Skill', href: '/profile', icon: UserGroupIcon },
  { name: 'Expert', href: '/dashboard/Event', icon: TicketIcon },
  { name: 'Progress', href: '/dashboard/Event', icon: TicketIcon },
  { name: 'Chat', href: '/chat', icon: TicketIcon },
  { name: 'Announcements', href: '/dashboard/Event', icon: TicketIcon },
];

const linksettings = [
  { name: 'Account Settings', href: '/dashboard', icon: HomeIcon },
  { name: 'Notification Settings', href: '/', icon: DocumentDuplicateIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [selected, setSelected] = useState<string | null>(null);

  // Function to determine if the link should be active
  const isActive = (href: string) => {
    return selected === href;
  };

  // Handle link click
  const handleClick = (href: string) => {
    setSelected(href);
  };

  return (
    <div className="flex flex-col flex-grow">
      {/* Navigation Links */}
      <div className="flex flex-col space-y-2">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] items-center gap-2 rounded-md p-3 text-sm font-medium transition-colors duration-300',
                {
                  'bg-sky-100 text-blue-600': isActive(link.href),
                  'bg-gray-50 text-black': !isActive(link.href),
                }
              )}
              onClick={() => handleClick(link.href)}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-4 p-4 bg-gray-50 mt-auto">
        {/* Topic and Line */}
        <div className="flex flex-col items-center">
          <hr className="w-full border-gray-300" />
          <h2 className="text-lg font-semibold mt-2">Settings</h2>
        </div>

        {/* Settings Links */}
        {linksettings.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] items-center gap-2 rounded-md p-3 text-sm font-medium transition-colors duration-300',
                {
                  'bg-sky-100 text-blue-600': isActive(link.href),
                  'bg-gray-50 text-black': !isActive(link.href),
                }
              )}
              onClick={() => handleClick(link.href)}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
