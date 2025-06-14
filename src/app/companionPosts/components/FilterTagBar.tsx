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
  selectedAgeTags: string[];
  setSelectedAgeTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedGenderTags: string[];
  setSelectedGenderTags: React.Dispatch<React.SetStateAction<string[]>>;
  startDate: Date | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

// 모달 타입 정의
const MODAL_TYPES = {
  SORT: 'sort',
  TRAVEL_DATE: 'travelDate',
  PREFERENCE_TAG: 'preferenceTag',
} as const;

type ModalType = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES] | null;

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
}) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [sortType, setSortType] = useState<string>('최신순');
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSortConfirm = (selectedSort: string) => {
    setSortType(selectedSort);
    closeModal();
  };

  const toggleRecruitingFilter = () => {
    setShowRecruitingOnly(prev => !prev);
  };

  const openModal = (modalName: ModalType) => {
    if (activeModal === null) {
      setActiveModal(modalName);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handlePreferenceConfirm = (ages: string[], genders: string[]) => {
    setSelectedAgeTags(ages);
    setSelectedGenderTags(genders);
    closeModal();
  };

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

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [travelDateLabel, preferenceTagLabel]);

  // 모달 함수
  const renderModal = () => {
    switch (activeModal) {
      case MODAL_TYPES.SORT:
        return (
          <SortModal
            onClose={closeModal}
            onConfirm={handleSortConfirm}
            sortType={sortType}
          />
        );
      case MODAL_TYPES.TRAVEL_DATE:
        return (
          <TravelDateModal
            onClose={closeModal}
            onConfirm={handleTravelDateConfirm}
            selectedStartDate={startDate}
            selectedEndDate={endDate}
          />
        );
      case MODAL_TYPES.PREFERENCE_TAG:
        return (
          <PreferenceTagModal
            onClose={closeModal}
            onConfirm={handlePreferenceConfirm}
            selectedAgeTags={selectedAgeTags}
            selectedGenderTags={selectedGenderTags}
          />
        );
      default:
        return null;
    }
  };

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
            onClick={() => openModal(MODAL_TYPES.SORT)}
            className="flex items-center gap-1 px-4 py-2 border border-stroke2 rounded-full bg-white font-14r"
          >
            {sortType}
            <Icon iconName={'Bottom'} className="w-4 h-4" />
          </button>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <button
            onClick={toggleRecruitingFilter}
            className={`px-4 py-2 border rounded-full font-14r ${
              showRecruitingOnly
                ? 'bg-main1 text-white border-main1'
                : 'bg-white text-t1 border-stroke2'
            }`}
          >
            모집중
          </button>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <button
            onClick={() => openModal(MODAL_TYPES.TRAVEL_DATE)}
            className={`flex items-center gap-1 px-4 py-2 border rounded-full font-14r ${
              startDate && endDate
                ? 'bg-main1 text-white border-main1'
                : 'bg-white text-t1 border-stroke2'
            }`}
          >
            {travelDateLabel}
            <Icon
              iconName={
                startDate && endDate ? 'Bottom_active' : 'Bottom'
              }
              className="w-4 h-4"
            />
          </button>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <button
            onClick={() => openModal(MODAL_TYPES.PREFERENCE_TAG)}
            className={`flex items-center gap-1 px-4 py-2 border rounded-full text-sm ${
              totalTagsCount !== 0
                ? 'bg-main1 text-white border-main1'
                : 'bg-white text-t1 border-stroke2'
            }`}
          >
            {preferenceTagLabel}
            <Icon
              iconName={
                totalTagsCount !== 0 ? 'Bottom_active' : 'Bottom'
              }
              className="w-4 h-4"
            />
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
      {renderModal()}
    </div>
  );
};

export default FilterTagBar;
