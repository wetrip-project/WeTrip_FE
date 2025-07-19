import { useState } from 'react';

interface FilterTagBarProps {
  setShowRecruitingOnly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAgeTags: string[];
  setSelectedAgeTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedGenderTags: string[];
  setSelectedGenderTags: React.Dispatch<React.SetStateAction<string[]>>;
  startDate: Date | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

type ModalType = 'sort' | 'travelDate' | 'preferenceTag' | null;

export function useFilterTagBar({
  setShowRecruitingOnly,
  selectedAgeTags,
  setSelectedAgeTags,
  selectedGenderTags,
  setSelectedGenderTags,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: FilterTagBarProps) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [sortType, setSortType] = useState('최신순');

  const toggleRecruitingFilter = () => setShowRecruitingOnly(prev => !prev);
  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const handleSortConfirm = (selected: string) => {
    setSortType(selected);
    closeModal();
  };

  const handlePreferenceConfirm = (ages: string[], genders: string[]) => {
    setSelectedAgeTags(ages);
    setSelectedGenderTags(genders);
    closeModal();
  };

  const handleTravelDateConfirm = (from: Date | undefined, to: Date | undefined) => {
    setStartDate(from);
    setEndDate(to);
    closeModal();
  };

  const totalTagsCount = selectedAgeTags.length + selectedGenderTags.length;

  const preferenceTagLabel =
    totalTagsCount === 0
      ? '선호 태그'
      : totalTagsCount === 1
      ? [...selectedAgeTags, ...selectedGenderTags].join(' ')
      : `태그 ${totalTagsCount}`;

  const travelDateLabel =
    !startDate || !endDate
      ? '동행일자'
      : `${startDate.getFullYear()}.${String(startDate.getMonth() + 1).padStart(2, '0')}.${String(
          startDate.getDate(),
        ).padStart(2, '0')} ~ ${endDate.getFullYear()}.${String(endDate.getMonth() + 1).padStart(
          2,
          '0',
        )}.${String(endDate.getDate()).padStart(2, '0')}`;

  return {
    activeModal,
    sortType,
    travelDateLabel,
    preferenceTagLabel,
    totalTagsCount,
    openModal,
    closeModal,
    handleSortConfirm,
    handlePreferenceConfirm,
    handleTravelDateConfirm,
    toggleRecruitingFilter,
  };
}
