'use client';

import React, { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/locale';

interface TravelDateModalProps {
  onClose: () => void;
  onConfirm: (fromDate: Date | undefined, toDate: Date | undefined) => void;
  selectedStartDate: Date | undefined;
  selectedEndDate: Date | undefined;
}

const TravelDateModal: React.FC<TravelDateModalProps> = ({
  onClose,
  onConfirm,
  selectedStartDate,
  selectedEndDate,
}) => {
  const [range, setRange] = useState<DateRange>({
    from: selectedStartDate,
    to: selectedEndDate,
  });

  const handleDateSelect = (range: DateRange | undefined) => {
    if (range) {
      setRange(range);
    }
  };

  const handleComplete = () => {
    onConfirm(range.from, range.to);
  };

  const isActive = range.from !== undefined && range.to !== undefined;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 shadow-lg z-50">
      <h3 className="mb-4 text-center font-20b">여행일자 선택</h3>

      <DayPicker
        mode="range"
        selected={range}
        onSelect={handleDateSelect}
        locale={ko}
        fromDate={new Date()}
        toDate={new Date(2025, 11, 31)}
        modifiersClassNames={{
          today: 'text-main1',
          selected: 'bg-[#13D068]',
          range_start: 'bg-main1 text-white',
          range_end: 'bg-main1 text-white',
          range_middle: 'bg-green-100 text-black',
        }}
        className="mx-auto"
      />

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
          선택 완료
        </button>
      </div>
    </div>
  );
};

export default TravelDateModal;
