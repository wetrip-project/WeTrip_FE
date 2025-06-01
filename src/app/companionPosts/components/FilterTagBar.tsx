'use client';

import React, { useState } from 'react';
import SortModal from './modals/SortModal';
import TravelDateModal from './modals/TravelDateModal';
import PreferenceTagModal from './modals/PreferenceTagModal';
import Icon from '@/components/Icon/icon';

const FilterTagBar: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showRecruitingOnly, setShowRecruitingOnly] = useState<boolean>(false);

  const [selectedAgeTags, setSelectedAgeTags] = useState<string[]>([]);
  const [selectedGenderTags, setSelectedGenderTags] = useState<string[]>([]);

  // 여행일자 state
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const toggleRecruitingFilter = () => {
    setShowRecruitingOnly(prev => !prev);
    console.log('현재 모집중 필터:', !showRecruitingOnly ? '모집중만 보기' : '전체 보기');
  };

  const openModal = (modalName: string) => {
    if (activeModal === null) {
      setActiveModal(modalName);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // 선호태그 onConfirm
  const handlePreferenceConfirm = (ages: string[], genders: string[]) => {
    setSelectedAgeTags(ages);
    setSelectedGenderTags(genders);
    closeModal();
  };

  // 여행일자 onConfirm
  const handleTravelDateConfirm = (fromDate: Date | undefined, toDate: Date | undefined) => {
    setStartDate(fromDate);
    setEndDate(toDate);
    closeModal();
  };

  const totalTagsCount = selectedAgeTags.length + selectedGenderTags.length;

  const preferenceTagLabel =
    totalTagsCount === 0
      ? '선호 태그'
      : totalTagsCount === 1
        ? [...selectedAgeTags, ...selectedGenderTags].join(' ')
        : `태그 ${totalTagsCount}`;

  const travelDateLabel =
    !startDate || !endDate
      ? '여행시기'
      : `${startDate.getFullYear()}.${(startDate.getMonth() + 1).toString().padStart(2, '0')}.${startDate.getDate().toString().padStart(2, '0')}
        ~
        ${endDate.getFullYear()}.${(endDate.getMonth() + 1).toString().padStart(2, '0')}.${endDate.getDate().toString().padStart(2, '0')}`;

  return (
    <div>
      <div className="flex gap-2 p-3">
        {/* 최신순 */}
        <button
          onClick={() => openModal('sort')}
          className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full bg-white text-sm"
        >
          최신순
          <Icon iconName={'Bottom'} className="w-4 h-4" />
        </button>

        {/* 모집중 */}
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
          className={`flex items-center gap-1 px-4 py-2 border rounded-full text-sm ${
            startDate && endDate
              ? 'bg-[#13D068] text-white border-[#13D068]'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          {travelDateLabel}
          <Icon iconName={'Bottom'} className="w-4 h-4" />
        </button>

        {/* 선호태그 */}
        <button
          onClick={() => openModal('preferenceTag')}
          className={`flex items-center gap-1 px-4 py-2 border rounded-full text-sm ${
            totalTagsCount !== 0
              ? 'bg-[#13D068] text-white border-[#13D068]'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          {preferenceTagLabel}
          <Icon iconName={'Bottom'} className="w-4 h-4" />
        </button>
      </div>

      {/* 딤처리 */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={closeModal}
        ></div>
      )}

      {/* 모달 렌더링 */}
      {activeModal === 'sort' && <SortModal onClose={closeModal} />}
      {activeModal === 'travelDate' && (
        <TravelDateModal
          onClose={closeModal}
          onConfirm={handleTravelDateConfirm}
        />
      )}
      {activeModal === 'preferenceTag' && (
        <PreferenceTagModal
          onClose={closeModal}
          onConfirm={handlePreferenceConfirm}
          selectedAgeTags={selectedAgeTags}
          selectedGenderTags={selectedGenderTags}
        />
      )}
    </div>
  );
};

export default FilterTagBar;
