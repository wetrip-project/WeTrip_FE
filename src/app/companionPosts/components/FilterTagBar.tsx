'use client';

import React, { useState } from 'react';
import SortModal from './modals/SortModal';
import TravelDateModal from './modals/TravelDateModal';
import PreferenceTagModal from './modals/PreferenceTagModal';
import Icon from '@/app/components/Icon'; // Adjust the import path as necessary

const FilterTagBar: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showRecruitingOnly, setShowRecruitingOnly] = useState<boolean>(false);

  const toggleRecruitingFilter = () => {
    setShowRecruitingOnly(prev => !prev);
    console.log('현재 모집중 필터:', !showRecruitingOnly ? '모집중만 보기' : '전체 보기');
    // 실제 리스트 필터링 로직 여기에 연결
  };

  const openModal = (modalName: string) => {
    if (activeModal === null) {
      setActiveModal(modalName);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div>
      <div className="flex gap-2 p-3">
        {/* 최신순 */}
        <button
          onClick={() => openModal('sort')}
          className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full bg-white text-sm"
        >
          최신순
          <Icon name="16_bottom" className="w-4 h-4" />
        </button>

        {/* 모집중 (토글) */}
        <button
          onClick={toggleRecruitingFilter}
          className={`px-4 py-2 border rounded-full text-sm ${
            showRecruitingOnly
              ? 'bg-green-500 text-white border-green-500'
              : 'bg-white text-gray-700 border-gray-300'
          }`}
        >
          모집중
        </button>

        {/* 여행시기 */}
        <button
          onClick={() => openModal('travelDate')}
          className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full bg-white text-sm"
        >
          여행시기
          <Icon name="16_bottom" className="w-4 h-4" />
        </button>

        {/* 선호태그 */}
        <button
          onClick={() => openModal('preferenceTag')}
          className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full bg-white text-sm"
        >
          선호태그
          <Icon name="16_bottom" className="w-4 h-4" />
        </button>
      </div>

      {/* 딤처리 */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeModal}
        ></div>
      )}

      {/* 모달 렌더링 */}
      {activeModal === 'sort' && (
        <SortModal onClose={closeModal} />
      )}

      {activeModal === 'travelDate' && (
        <TravelDateModal onClose={closeModal} />
      )}

      {activeModal === 'preferenceTag' && (
        <PreferenceTagModal onClose={closeModal} />
      )}
    </div>
  );
};

export default FilterTagBar;
