'use client'; 

import React, { useState } from 'react';
import CompanionPostList from './components/CompanionPostList';
import FilterTagBar from './components/FilterTagBar';

type Post = {
  id: number;
  status: "모집중" | "모집완료";
  period: string;
  title: string;
  description: string;
  tags: string[];
};
//임시 더미데이터입니다!
const dummyPosts: Post[] = [
  {
    id: 1,
    status: '모집중',
    period: '25.06.01~25.06.05',
    title: '서울 야경 투어 함께 가실 분!',
    description: '서울의 멋진 야경을 같이 보러 가요. 초보 환영!',
    tags: ['#20대', '#30대', '#여성'],
  },
  {
    id: 2,
    status: '모집완료',
    period: '25.07.10~25.07.15',
    title: '부산 해운대 여행 동행 구해요',
    description: '부산 해운대, 맛집 투어 같이 하실 분 찾습니다.',
    tags: ['#여성', '#30대'],
  },
  {
    id: 3,
    status: '모집중',
    period: '25.08.05~25.08.10',
    title: '강릉 커피거리 투어 멤버 모집',
    description: '커피 좋아하는 분들과 강릉 여행 가요 ☕️',
    tags: ['#40대', '#혼성',],
  },
  {
    id: 4,
    status: '모집중',
    period: '25.09.01~25.09.07',
    title: '제주도 올레길 걷기 동행 구해요',
    description: '자연을 좋아하는 분, 걷는 거 좋아하는 분 환영!',
    tags: ['#남성', '#40대', '#50대'],
  },
];

const CompanionPostsPage = () => {
  // 모집중 필터 상태
  const [showRecruitingOnly, setShowRecruitingOnly] = useState<boolean>(false);
  // 선호 태그 상태
  const [selectedAgeTags, setSelectedAgeTags] = useState<string[]>([]);
  const [selectedGenderTags, setSelectedGenderTags] = useState<string[]>([]);
  // 여행일자 상태
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  
  const filteredPosts = dummyPosts.filter(post => {
    // 모집중 필터
    const statusMatch = showRecruitingOnly ? post.status === '모집중' : true;
  
    // 연령대 태그 필터
    const ageMatch = selectedAgeTags.length === 0
      ? true
      : selectedAgeTags.some(tag => post.tags.includes(`#${tag}`));
  
    // 성별 태그 필터
    const genderMatch = selectedGenderTags.length === 0
      ? true
      : selectedGenderTags.some(tag => post.tags.includes(`#${tag}`));
  
    // 여행일자 필터
  const periodParts = post.period.split('~');
  const postStartDate = new Date(`20${periodParts[0].replace(/\./g, '-')}`);
  const postEndDate = new Date(`20${periodParts[1].replace(/\./g, '-')}`);

  const dateMatch =
    !startDate || !endDate
      ? true
      : postEndDate >= startDate && postStartDate <= endDate;

  // 최종 반환
  return statusMatch && ageMatch && genderMatch && dateMatch;
  });
  

  return (
    <div className='py-5'>
      <div>검색창</div>
      <FilterTagBar
  showRecruitingOnly={showRecruitingOnly}
  setShowRecruitingOnly={setShowRecruitingOnly}
  selectedAgeTags={selectedAgeTags}
  setSelectedAgeTags={setSelectedAgeTags}
  selectedGenderTags={selectedGenderTags}
  setSelectedGenderTags={setSelectedGenderTags}
  startDate={startDate}
  setStartDate={setStartDate}
  endDate={endDate}
  setEndDate={setEndDate}
/>


      <CompanionPostList posts={filteredPosts} />
    </div>
  );
};



export default CompanionPostsPage;
