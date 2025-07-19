'use client';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import Icon from '@/components/Icon/icon';
import SortModal from './modals/SortModal';
import TravelDateModal from './modals/TravelDateModal';
import PreferenceTagModal from './modals/PreferenceTagModal';
import { useFilterTagBar } from './filter/useFilterTagBar';

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

export default function FilterTagBar(props: FilterTagBarProps) {
  const {
    activeModal,
    sortType,
    travelDateLabel,
    preferenceTagLabel,
    totalTagsCount,
    openModal,
    closeModal,
    handleSortConfirm,
    handlePreferenceConfirm,
    handleTravelDateConfirm,
    toggleRecruitingFilter,
  } = useFilterTagBar(props);

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    swiperRef.current?.update();
  }, [travelDateLabel, preferenceTagLabel]);

  return (
    <div className="py-5">
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        freeMode
        allowTouchMove={!activeModal}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        className="py-3"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide style={{ width: 'auto' }}>
          <button
            onClick={() => openModal('sort')}
            className="flex items-center gap-1 px-4 py-2 border border-stroke2 rounded-full bg-white font-14r"
          >
            {sortType}
            <Icon iconName="Bottom" className="w-4 h-4" />
          </button>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <button
            onClick={toggleRecruitingFilter}
            className={`px-4 py-2 border rounded-full font-14r ${
              props.showRecruitingOnly
                ? 'bg-main1 text-white border-main1'
                : 'bg-white text-t1 border-stroke2'
            }`}
          >
            모집중
          </button>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <button
            onClick={() => openModal('travelDate')}
            className={`flex items-center gap-1 px-4 py-2 border rounded-full font-14r ${
              props.startDate && props.endDate
                ? 'bg-main1 text-white border-main1'
                : 'bg-white text-t1 border-stroke2'
            }`}
          >
            {travelDateLabel}
            <Icon
              iconName={props.startDate && props.endDate ? 'Bottom_active' : 'Bottom'}
              className="w-4 h-4"
            />
          </button>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <button
            onClick={() => openModal('preferenceTag')}
            className={`flex items-center gap-1 px-4 py-2 border rounded-full text-sm ${
              totalTagsCount !== 0
                ? 'bg-main1 text-white border-main1'
                : 'bg-white text-t1 border-stroke2'
            }`}
          >
            {preferenceTagLabel}
            <Icon
              iconName={totalTagsCount !== 0 ? 'Bottom_active' : 'Bottom'}
              className="w-4 h-4"
            />
          </button>
        </SwiperSlide>
      </Swiper>

      {activeModal && (
        <div className="fixed inset-0 bg-black/80 z-40" onClick={closeModal}></div>
      )}

      {activeModal === 'sort' && (
        <SortModal onClose={closeModal} onConfirm={handleSortConfirm} sortType={sortType} />
      )}
      {activeModal === 'travelDate' && (
        <TravelDateModal
          onClose={closeModal}
          onConfirm={handleTravelDateConfirm}
          selectedStartDate={props.startDate}
          selectedEndDate={props.endDate}
        />
      )}
      {activeModal === 'preferenceTag' && (
        <PreferenceTagModal
          onClose={closeModal}
          onConfirm={handlePreferenceConfirm}
          selectedAgeTags={props.selectedAgeTags}
          selectedGenderTags={props.selectedGenderTags}
        />
      )}
    </div>
  );
}
