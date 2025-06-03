'use client';

import React, { useEffect, useRef, useState } from 'react';
import SortModal from './modals/SortModal';
import TravelDateModal from './modals/TravelDateModal';
import PreferenceTagModal from './modals/PreferenceTagModal';
import Icon from '@/components/Icon/icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

interface FilterTagBarProps {
  showRecruitingOnly: boolean;
  setShowRecruitingOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterTagBarProps {
  showRecruitingOnly: boolean;
  setShowRecruitingOnly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAgeTags: string[];
  setSelectedAgeTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedGenderTags: string[];
  setSelectedGenderTags: React.Dispatch<React.SetStateAction<string[]>>;
  startDate: Date | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}


const FilterTagBar: React.FC<FilterTagBarProps> = ({
  showRecruitingOnly,
  setShowRecruitingOnly,
  selectedAgeTags,
  setSelectedAgeTags,
  selectedGenderTags,
  setSelectedGenderTags,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {  const [activeModal, setActiveModal] = useState<string | null>(null);

  // 정렬 타입 state
  const [sortType, setSortType] = useState<string>('최신순');
  const swiperRef = useRef<SwiperType | null>(null);
  
  const handleSortConfirm = (selectedSort: string) => {
    setSortType(selectedSort);
    closeModal();
  };
  
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

        // swiper 업데이트
        useEffect(() => {
          if (swiperRef.current) {
            swiperRef.current.update();
          }
        }, [travelDateLabel, preferenceTagLabel]);
        
  return (
    <div className='py-5'>
      {/* 필터바 */}
      <Swiper
  slidesPerView={'auto'}
  spaceBetween={8}
  freeMode={true}
  allowTouchMove={!activeModal}
  slidesOffsetBefore={16}
  slidesOffsetAfter={16}
  className="py-3"
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
>
        <SwiperSlide style={{ width: 'auto' }}>
        <button
    onClick={() => openModal('sort')}
    className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full bg-white text-sm"
  >
    {sortType}
    <Icon iconName={'Bottom'} className="w-4 h-4" />
  </button>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
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
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <button
            onClick={() => openModal('travelDate')}
            className={`flex items-center gap-1 px-4 py-2 border rounded-full text-sm ${
              startDate && endDate
                ? 'bg-[#13D068] text-white border-[#13D068]'
                : 'bg-white text-black border-gray-300'
            }`}
          >
            {travelDateLabel}
            <Icon iconName={`${
              startDate && endDate
                ? 'Bottom_active' : 'Bottom' }`
            } className="w-4 h-4" />          </button>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <button
            onClick={() => openModal('preferenceTag')}
            className={`flex items-center gap-1 px-4 py-2 border rounded-full text-sm ${
              totalTagsCount !== 0
                ? 'bg-[#13D068] text-white border-[#13D068]'
                : 'bg-white text-black border-gray-300'
            }`}
          >
            {preferenceTagLabel}
            <Icon iconName={`${
              totalTagsCount !== 0
              ? 'Bottom_active' : 'Bottom' }`
            } className="w-4 h-4" />
          </button>
        </SwiperSlide>
      </Swiper>

      {/* 딤처리 */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={closeModal}
        ></div>
      )}

      {/* 모달 렌더링 */}
      {activeModal === 'sort' && <SortModal onClose={closeModal} onConfirm={handleSortConfirm} sortType={sortType} />}
      {activeModal === 'travelDate' && (
        <TravelDateModal
          onClose={closeModal}
          onConfirm={handleTravelDateConfirm}
          selectedStartDate={startDate} 
          selectedEndDate={endDate}    
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
