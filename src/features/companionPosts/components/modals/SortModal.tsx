'use client';

import Icon from '@/components/Icon/icon';
import React, { useState } from 'react';


interface SortModalProps {
  onClose: () => void;
  onConfirm: (selectedSort: string) => void;
  sortType: string;
}

const SORT_OPTIONS = ['최신순', '인기순', '여행일자 빠른 순'];

function SortModal({ onClose, onConfirm, sortType }: SortModalProps) {
  const [selectedOption, setSelectedOption] = useState<string>(sortType || '');

  const handleComplete = () => {
    onConfirm(selectedOption);
    onClose();
  };

  const isActive = !!selectedOption;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl px-5 pt-[34px] pb-5 shadow-lg z-50">
      <h3 className="font-20b mb-8 text-center">보기 정렬</h3>
      <div className="flex gap-5 flex-col">
        {SORT_OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`flex gap-[19px] items-center rounded-3xl text-left font-16r ${
              selectedOption === option
                ? 'text-main1 font-16b'
                : 'text-t1'
            }`}
          >
            {option} {
              selectedOption === option
                && <Icon iconName={'SellectCheck'} className='mb-[2px]'/>}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-6 gap-[12px]">
        <button
          onClick={onClose}
          className="w-1/2 px-6 py-3 border border-t4 font-16r rounded-[8px] text-t1"
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

export default SortModal;
