import React, { useState } from 'react';

interface SortModalProps {
  onClose: () => void;
  onConfirm: (selectedSort: string) => void; 
  sortType: string;
}

// 정렬 태그
const SORT_OPTIONS = ['최신순', '인기순'];

const SortModal: React.FC<SortModalProps> = ({ onClose, onConfirm, sortType }) => {
  const [selectedOption, setSelectedOption] = useState<string>(sortType || '');

  const handleComplete = () => {
    onConfirm(selectedOption);
    onClose();
  };

  const isActive = !!selectedOption;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 shadow-lg z-50">
      <h3 className="font-20b mb-4 text-center">리스트 정렬</h3>

      <div className="flex gap-2">
        {SORT_OPTIONS.map(option => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`px-4 py-3 rounded-3xl border text-center font-16r ${
              selectedOption === option
                ? 'bg-main1 text-white border-main1'
                : 'bg-white text-t2 border-stroke2'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* 닫기, 선택완료 버튼 */}
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
};

export default SortModal;
