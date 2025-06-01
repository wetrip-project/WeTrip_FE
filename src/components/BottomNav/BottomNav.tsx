'use client';

import React, { useState } from 'react';

const BottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('동행글');

  const tabs = [
    { name: '홈', key: '홈' },
    { name: '동행글', key: '동행글' },
    { name: '채팅', key: '채팅' },
    { name: '커뮤니티', key: '커뮤니티' },
    { name: '마이페이지', key: '마이페이지' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 z-50">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className="flex flex-col items-center justify-center text-xs text-center gap-1"
        >
          {/* 아이콘 자리 (img 태그) */}
          <img
            src={`text-sm ${
                activeTab === tab.key ? 'text-[#333333] font-bold' : 'text-gray-400'
              }`}
            alt={tab.name}
            className="w-6 h-6 object-contain"
          />

          {/* 텍스트 */}
          <span
            className={`text-sm`}
          >
            {tab.name}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
