'use client';

import React, { useState } from 'react';
import { DayPicker, DateRange, Formatters } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

interface TravelDateModalProps {
  onClose: () => void;
  onConfirm: (fromDate: Date | undefined, toDate: Date | undefined) => void;
  selectedStartDate?: Date;
  selectedEndDate?: Date;
}

const customFormatters: Partial<Formatters> = {
  formatCaption: (month: Date) => {
    const y = month.getFullYear();
    const m = String(month.getMonth() + 1).padStart(2, '0');
    return `${y}.${m}`;
  },
};

export default function TravelDateModal({
  onClose,
  onConfirm,
  selectedStartDate,
  selectedEndDate,
}: TravelDateModalProps) {
  const [range, setRange] = useState<DateRange>({
    from: selectedStartDate,
    to: selectedEndDate,
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0); // 자정 기준 고정

  const handleDateSelect = (range: DateRange | undefined) => {
    if (range) setRange(range);
  };

  const handleComplete = () => {
    onConfirm(range.from, range.to);
  };

  const isActive = !!range.from && !!range.to;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 shadow-lg z-50">
      <h3 className="mb-4 text-center font-20b">여행일자 선택</h3>

      <DayPicker
        mode="range"
        selected={range}
        onSelect={handleDateSelect}
        locale={ko}
        numberOfMonths={1}
        showOutsideDays
        fromDate={today}
        toDate={new Date(2025, 11, 31)}
        disabled={{ before: today }} 
        classNames={{
          day: 'font-14r font-normal text-center relative',
          day_selected: 'text-white border-none font-normal',
          day_range_start: 'text-white border-none font-normal',
          day_range_end: 'text-white border-none font-normal',
          caption: 'flex justify-center items-center relative mb-2 text-[16px] font-semibold',
          caption_label: 'text-center w-full flex items-center justify-center font-20r',
          nav: 'absolute w-full flex justify-between px-4 top-1',
          weekday: 'text-t2 font-14r mt-4 mb-4',
        }}
        formatters={customFormatters}
        modifiersClassNames={{
          today: 'today-marker',
          disabled: 'disabled-day',
        }}
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
            isActive ? 'bg-main1 text-white' : 'bg-disabled cursor-not-allowed'
          }`}
        >
          선택 완료
        </button>
      </div>
    </div>
  );
}
