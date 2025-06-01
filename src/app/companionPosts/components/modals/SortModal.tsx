import React, { useState } from 'react';

interface SortModalProps {
  onClose: () => void;
}

const SortModal: React.FC<SortModalProps> = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleComplete = () => {
    console.log('정렬 선택:', selectedOption);
    onClose();
  };

  const isActive = !!selectedOption;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 shadow-lg z-50">
      <h3 className="text-xl font-bold mb-4 text-center">최신순 정렬</h3>

      <div className="flex gap-2">
        {['최신순', '인기순'].map(option => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`px-4 py-3 rounded-3xl border text-center text-[16px] ${
              selectedOption === option
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-white text-[#616161] border-gray-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* 닫기 / 선택완료 버튼 */}
      <div className="flex justify-between mt-6 gap-[12px]">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="w-1/2 px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-[8px]"
        >
          닫기
        </button>

        {/* 선택완료 버튼 */}
        <button
          onClick={handleComplete}
          disabled={!isActive}
          className={`w-1/2 px-6 py-3 font-medium rounded-[8px] ${
            isActive
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          선택완료
        </button>
      </div>
    </div>
  );
};

export default SortModal;
