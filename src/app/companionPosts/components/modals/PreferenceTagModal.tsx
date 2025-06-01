import React, { useState, useEffect } from 'react';

interface PreferenceTagModalProps {
  onClose: () => void;
  onConfirm: (ages: string[], genders: string[]) => void;
  selectedAgeTags: string[];
  selectedGenderTags: string[];
}

const PreferenceTagModal: React.FC<PreferenceTagModalProps> = ({
  onClose,
  onConfirm,
  selectedAgeTags,
  selectedGenderTags,
}) => {
  const [localAgeTags, setLocalAgeTags] = useState<string[]>([]);
  const [localGenderTags, setLocalGenderTags] = useState<string[]>([]);

  useEffect(() => {
    setLocalAgeTags(selectedAgeTags);
    setLocalGenderTags(selectedGenderTags);
  }, [selectedAgeTags, selectedGenderTags]);

  const toggleAgeTag = (tag: string) => {
    setLocalAgeTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleGenderTag = (tag: string) => {
    setLocalGenderTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleComplete = () => {
    console.log('선호태그:', localAgeTags, localGenderTags);
    onConfirm(localAgeTags, localGenderTags);
  };

  const isActive = localAgeTags.length + localGenderTags.length > 0;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 shadow-lg z-50">
      <h3 className="text-lg font-bold mb-4">선호 태그 선택</h3>

      {/* 연령대 */}
      <div className="mb-6">
        <p className="font-medium mb-2">연령대</p>
        <div className="flex flex-wrap gap-2">
          {['20대', '30대', '40대', '50대', '60대'].map(age => (
            <button
              key={age}
              onClick={() => toggleAgeTag(age)}
              className={`px-4 py-2 rounded-full border ${
                localAgeTags.includes(age)
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      {/* 성별 */}
      <div className="mb-6">
        <p className="font-medium mb-2">성별</p>
        <div className="flex flex-wrap gap-2">
          {['여성', '남성', '혼성'].map(gender => (
            <button
              key={gender}
              onClick={() => toggleGenderTag(gender)}
              className={`px-4 py-2 rounded-full border ${
                localGenderTags.includes(gender)
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      {/* 버튼 영역 */}
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

export default PreferenceTagModal;
