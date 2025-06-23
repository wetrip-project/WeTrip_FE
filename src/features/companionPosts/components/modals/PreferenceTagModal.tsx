'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface PreferenceTagModalProps {
  onClose: () => void;
  onConfirm: (ages: string[], genders: string[]) => void;
  selectedAgeTags: string[];
  selectedGenderTags: string[];
}

const AGE_TAGS = ['20대', '30대', '40대', '50대', '60대'];
const GENDER_TAGS = ['여성', '남성', '혼성'];

function PreferenceTagModal({
  onClose,
  onConfirm,
  selectedAgeTags,
  selectedGenderTags,
}: PreferenceTagModalProps) {
  const [localAgeTags, setLocalAgeTags] = useState<string[]>([]);
  const [localGenderTags, setLocalGenderTags] = useState<string[]>([]);

  useEffect(() => {
    setLocalAgeTags(selectedAgeTags);
    setLocalGenderTags(selectedGenderTags);
  }, [selectedAgeTags, selectedGenderTags]);

  const toggleAgeTag = (tag: string) => {
    setLocalAgeTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleGenderTag = (tag: string) => {
    setLocalGenderTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleComplete = () => {
    onConfirm(localAgeTags, localGenderTags);
  };

  const isActive = localAgeTags.length + localGenderTags.length > 0;

  return (
    <div
      className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 shadow-lg z-50"
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
    >
      <h3 className="font-20b mb-4 text-center">선호 태그 선택</h3>

      {/* 연령대 */}
      <div className="mb-6">
        <p className="font-16b mb-2">연령대</p>
        <Swiper
    slidesPerView="auto"
    spaceBetween={8}
    freeMode={true}
    className="py-3"
  >
    {AGE_TAGS.map((age) => (
      <SwiperSlide key={age} style={{ width: 'auto' }}>
        <button
          onClick={() => toggleAgeTag(age)}
          className={`px-4 py-2 rounded-full border font-16r ${
            localAgeTags.includes(age)
              ? 'bg-main1 text-white border-main1'
              : 'bg-white text-t2 border-stroke2'
          }`}
        >
          {age}
        </button>
      </SwiperSlide>
    ))}
  </Swiper>
      </div>

      {/* 성별 */}
      <div className="mb-6">
        <p className="font-16b mb-2">성별</p>
        <div className="flex flex-wrap gap-2">
          {GENDER_TAGS.map((gender) => (
            <button
              key={gender}
              onClick={() => toggleGenderTag(gender)}
              className={`px-4 py-2 rounded-full border font-16r ${
                localGenderTags.includes(gender)
                  ? 'bg-main1 text-white border-main1'
                  : 'bg-white text-t2 border-stroke2'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="flex justify-between mt-6 gap-[12px]">
        <button
          onClick={onClose}
          className="w-1/2 px-6 py-3 border border-t4 font-16r rounded-[8px]"
        >
          닫기
        </button>
        <button
          onClick={handleComplete}
          disabled={!isActive}
          className={`w-1/2 px-6 py-3 font-16r rounded-[8px] ${
            isActive
              ? 'bg-main1 text-white'
              : 'bg-disabled text-t3 cursor-not-allowed'
          }`}
        >
          선택완료
        </button>
      </div>
    </div>
  );
}

export default PreferenceTagModal;
