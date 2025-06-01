'use client';

import React, { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/locale';

interface TravelDateModalProps {
  onClose: () => void;
  onConfirm: (fromDate: Date | undefined, toDate: Date | undefined) => void;
}

const TravelDateModal: React.FC<TravelDateModalProps> = ({ onClose, onConfirm }) => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  const handleComplete = () => {
    console.log('선택한 날짜:', range);
    onConfirm(range.from, range.to);
  };

  const isActive = range.from !== undefined && range.to !== undefined;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 shadow-lg z-50">
      <h3 className="text-xl mb-4 text-center">여행일자 선택</h3>

      <DayPicker
        mode="range"
        selected={range}
        onSelect={(range) => {
          if (range) setRange(range);
        }}
        locale={ko}
        fromDate={new Date()} // 오늘부터 가능
        toDate={new Date(2025, 11, 31)} // 2025년 12월까지 가능
        modifiersClassNames={{
            today: 'text-[#13D068]',
            selected: 'bg-[#13D068] ',
            range_start: 'bg-[#13D068] text-white ',
            range_end: 'bg-[#13D068] text-white',
            range_middle: 'bg-green-100 text-black',
          }}
          
        className="mx-auto"
      />

      <div className="flex justify-between mt-6 gap-[12px]">
        {/* 닫기 */}
        <button
          onClick={onClose}
          className="w-1/2 px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-[8px]"
        >
          닫기
        </button>

        {/* 선택완료 */}
        <button
          onClick={handleComplete}
          disabled={!isActive}
          className={`w-1/2 px-6 py-3 font-medium rounded-[8px] ${
            isActive
              ? 'bg-[#13D068] text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          선택 완료
        </button>
      </div>
    </div>
  );
};

export default TravelDateModal;
