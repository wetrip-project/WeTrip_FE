'use client'; 

import React, { useState } from 'react';
import CompanionPostList from '../../features/companionPosts/components/CompanionPostList';
import FilterTagBar from '../../features/companionPosts/components/FilterTagBar';
import { Search } from '@/components/Search';
import Icon from '@/components/Icon/icon';
import EmptyResult from '@/components/common/EmptyResult';

type Post = {
  id: number;
  status: "모집중" | "모집완료";
  period: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

//임시 더미데이터입니다.
const dummyPosts: Post[] = [
  {
    id: 1,
    status: '모집중',
    period: '25.06.01~25.06.05',
    title: '서울 야경 투어 함께 가실 분!',
    description: '서울의 멋진 야경을 같이 보러 가요. 초보 환영!서울의 멋진 야경을 같이 보러 가요. 초보 환영!서울의 멋진 야경을 같이 보러 가요. 초보 환영!서울의 멋진 야경을 같이 보러 가요. 초보 환영!',
    tags: ['#20대', '#30대', '#여성'],
    imageUrl: '/assets/icons/logoWithHappy.png',
  },
  {
    id: 2,
    status: '모집완료',
    period: '25.07.10~25.07.15',
    title: '부산 해운대 여행 동행 구해요',
    description: '부산 해운대, 맛집 투어 같이 하실 분 찾습니다.',
    tags: ['#여성', '#30대'],
    imageUrl: '/assets/icons/logoWithHappy.png',
  },
  {
    id: 3,
    status: '모집중',
    period: '25.08.05~25.08.10',
    title: '강릉 커피거리 투어 멤버 모집',
    description: '커피 좋아하는 분들과 강릉 여행 가요 ☕️',
    tags: ['#40대', '#혼성'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 4,
    status: '모집중',
    period: '25.09.01~25.09.07',
    title: '제주도 올레길 걷기 동행 구해요',
    description: '자연을 좋아하는 분, 걷는 거 좋아하는 분 환영!',
    tags: ['#남성', '#40대', '#50대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 5,
    status: '모집완료',
    period: '25.06.10~25.06.15',
    title: '전주 한옥마을 맛집 투어',
    description: '전주 한옥마을에서 한옥과 맛집을 즐겨요!',
    tags: ['#여성', '#50대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 6,
    status: '모집중',
    period: '25.07.20~25.07.25',
    title: '속초 해수욕장 당일치기 모집',
    description: '속초 해수욕장 가볍게 놀러가요~',
    tags: ['#혼성', '#30대'],
    imageUrl: '/assets/icons/logoWithHappy.png' 
  },
  {
    id: 7,
    status: '모집중',
    period: '25.08.15~25.08.20',
    title: '광주 미술관 투어',
    description: '미술 좋아하시는 분들과 함께 관람해요.',
    tags: ['#여성', '#40대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 8,
    status: '모집완료',
    period: '25.09.10~25.09.15',
    title: '경주 역사 유적지 투어',
    description: '역사 좋아하는 분들 환영!',
    tags: ['#남성', '#50대'],
    imageUrl: '/assets/icons/logoWithHappy.png' 
  },
  {
    id: 9,
    status: '모집중',
    period: '25.10.01~25.10.05',
    title: '서울 근교 캠핑 모임',
    description: '가벼운 캠핑 모임 함께해요~',
    tags: ['#혼성', '#20대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 10,
    status: '모집중',
    period: '25.10.10~25.10.15',
    title: '포항 해산물 투어',
    description: '포항으로 해산물 투어 떠나요!',
    tags: ['#여성', '#60대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 11,
    status: '모집완료',
    period: '25.06.15~25.06.20',
    title: '대구 야시장 나들이',
    description: '대구 야시장 구경하며 먹거리 투어!',
    tags: ['#혼성', '#30대'],
    imageUrl: '/assets/icons/logoWithHappy.png' 
  },
  {
    id: 12,
    status: '모집중',
    period: '25.07.05~25.07.10',
    title: '울산 고래문화마을 탐방',
    description: '울산 고래문화마을 구경 같이가요~',
    tags: ['#남성', '#50대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 13,
    status: '모집중',
    period: '25.08.01~25.08.05',
    title: '청주 고인돌 공원 산책',
    description: '조용히 산책 즐기실 분!',
    tags: ['#여성', '#60대'],
    imageUrl: '/assets/icons/logoWithHappy.png' 
  },
  {
    id: 14,
    status: '모집완료',
    period: '25.09.20~25.09.25',
    title: '수원 화성 투어',
    description: '수원 화성 관광 함께 가실 분',
    tags: ['#혼성', '#40대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 15,
    status: '모집중',
    period: '25.10.20~25.10.25',
    title: '춘천 닭갈비 먹방 투어',
    description: '춘천으로 먹방여행 떠나요!',
    tags: ['#여성', '#30대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 16,
    status: '모집중',
    period: '25.11.01~25.11.05',
    title: '부여 백제문화 탐방',
    description: '백제문화 유적지 투어',
    tags: ['#혼성', '#50대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 17,
    status: '모집완료',
    period: '25.11.10~25.11.15',
    title: '강원도 가을 단풍 투어',
    description: '가을 단풍 명소 투어 함께해요',
    tags: ['#남성', '#40대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 18,
    status: '모집중',
    period: '25.12.01~25.12.05',
    title: '부산 불꽃축제 관람',
    description: '부산 불꽃축제 함께 보러가요!',
    tags: ['#혼성', '#20대'],
    imageUrl: '/assets/icons/logoWithHappy.png' 
  },
  {
    id: 19,
    status: '모집중',
    period: '25.12.10~25.12.15',
    title: '인천 차이나타운 투어',
    description: '차이나타운 먹거리 투어!',
    tags: ['#여성', '#40대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
  },
  {
    id: 20,
    status: '모집중',
    period: '26.01.01~26.01.05',
    title: '강릉 해돋이 투어',
    description: '새해 해돋이 보러가요 🌅',
    tags: ['#남성', '#20대'],
    imageUrl: '/assets/icons/logoWithHappy.png'
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
    <>
    <div className='py-5'>
      <Search placeholder={'나라, 도시, 일정 검색'} className='mx-5 bg-[#f8f9f8] border-0'/>
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
      {filteredPosts.length === 0 ? (
        <EmptyResult />
      ) : (
        <CompanionPostList posts={filteredPosts} />
      )}
    </div>
    <div className="fixed bottom-[93px] right-6 z-10">
      <button className="flex justify-center items-center gap-1 bg-main1 text-white font-16b w-[90px] h-[44px] rounded-full shadow-lg">
           <Icon iconName={'PlusWriting'} className="w-4 h-4" />
      글쓰기
      </button>
    </div>    
  </>
  );
};



export default CompanionPostsPage;
