import React from 'react';

interface SortModalProps {
  onClose: () => void;
}

const SortModal: React.FC<SortModalProps> = ({ onClose }) => {
  const handleSelect = (option: string) => {
    console.log('정렬 선택:', option);
    onClose();
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 shadow-lg z-50">
      <h3 className="text-lg font-bold mb-4">최신순 정렬</h3>
      <div className="flex flex-col gap-3">
        {['최신순', '인기순'].map(option => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className="px-4 py-3 rounded-lg border border-gray-300 text-center"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={onClose}
          className="px-6 py-3 rounded-lg bg-gray-100 text-gray-800 font-medium"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default SortModal;
