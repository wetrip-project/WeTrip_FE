'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from '../Icon/icon'
import type { IconName } from '../Icon/icon'

const BottomNav: React.FC = () => {
  const pathname = usePathname()

  const tabs: {
    name: string
    key: string
    icon_default: IconName
    icon_active: IconName
    path: string
  }[] = [
    { name: '홈', key: 'home', icon_default: 'Home', icon_active: 'Home_active', path: '/' },
    {
      name: '동행글',
      key: 'companion',
      icon_default: 'Companion',
      icon_active: 'Companion_active',
      path: '/companionPosts',
    },
    { name: '채팅', key: 'chat', icon_default: 'Chat', icon_active: 'Chat_active', path: '/chat' },
    {
      name: '커뮤니티',
      key: 'community',
      icon_default: 'Community',
      icon_active: 'Community_active',
      path: '/community',
    },
    {
      name: '마이페이지',
      key: 'mypage',
      icon_default: 'Mypage',
      icon_active: 'Mypage_active',
      path: '/mypage',
    },
  ]

  return (
    <nav className='fixed inset-x-0 bottom-0 z-10 flex items-center justify-around border-t border-gray-200 bg-white py-2'>
      {tabs.map((tab) => {
        const isActive = pathname === tab.path

        return (
          <Link
            key={tab.key}
            href={tab.path}
            className='font-12r flex flex-col items-center justify-center gap-1 text-center'
          >
            <Icon
              iconName={isActive ? tab.icon_active : tab.icon_default}
              className='mx-auto h-6 w-[26px]'
            />

            <span className={`font-14r ${isActive ? 'text-t2' : 'text-t3'}`}>{tab.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default BottomNav
