'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '../Icon/icon';
import type { IconName } from '../Icon/icon';

const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const tabs: { name: string; key: string; icon_default: IconName; icon_active: IconName; path: string }[] = [
    { name: '홈', key: 'home', icon_default: 'home', icon_active: 'home_active', path: '/' },
    { name: '동행글', key: 'companion', icon_default: 'companion', icon_active: 'companion_active', path: '/companionPosts' },
    { name: '채팅', key: 'chat', icon_default: 'chat', icon_active: 'chat_active', path: '/chat' },
    { name: '커뮤니티', key: 'community', icon_default: 'community', icon_active: 'community_active', path: '/community' },
    { name: '마이페이지', key: 'mypage', icon_default: 'mypage', icon_active: 'mypage_active', path: '/mypage' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 z-10">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;

        return (
          <Link key={tab.key} href={tab.path} className="flex flex-col items-center justify-center font-12r text-center gap-1">
            <Icon iconName={isActive ? tab.icon_active : tab.icon_default} className="mx-auto w-[26px] h-6" />

            <span
              className={`font-14r ${isActive ? 'text-t2' : 'text-t3'}`}
            >
              {tab.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
