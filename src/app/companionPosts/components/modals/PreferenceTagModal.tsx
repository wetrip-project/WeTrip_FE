import React, { useState } from 'react';

interface PreferenceTagModalProps {
  onClose: () => void;
}

const PreferenceTagModal: React.FC<PreferenceTagModalProps> = ({ onClose }) => {
  const [selectedAge, setSelectedAge] = useState<string>('20대');
  const [selectedGender, setSelectedGender] = useState<string>('남성');

  const handleComplete = () => {
    console.log('선호태그:', selectedAge, selectedGender);
    onClose();
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 shadow-lg z-50">
      <h3 className="text-lg font-bold mb-4">선호 태그 선택</h3>

      <div className="mb-6">
        <p className="font-medium mb-2">연령대</p>
        <div className="flex flex-wrap gap-2">
          {['20대', '30대', '40대', '50대', '60대'].map(age => (
            <button
              key={age}
              onClick={() => setSelectedAge(age)}
              className={`px-4 py-2 rounded-full border ${
                selectedAge === age
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium mb-2">성별</p>
        <div className="flex flex-wrap gap-2">
          {['여성', '남성', '혼성'].map(gender => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`px-4 py-2 rounded-full border ${
                selectedGender === gender
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onClose}
          className="px-6 py-3 rounded-lg bg-gray-100 text-gray-800 font-medium"
        >
          닫기
        </button>
        <button
          onClick={handleComplete}
          className="px-6 py-3 rounded-lg bg-green-500 text-white font-medium"
        >
          선택완료
        </button>
      </div>
    </div>
  );
};

export default PreferenceTagModal;
