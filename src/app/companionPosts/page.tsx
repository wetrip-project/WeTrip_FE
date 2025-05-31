import React from 'react';
import CompanionPostList from './components/CompanionPostList';

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
    tags: ['#20대', '#여성들', '#서울', '#야경'],
  },
  {
    id: 2,
    status: '모집완료',
    period: '25.07.10~25.07.15',
    title: '부산 해운대 여행 동행 구해요',
    description: '부산 해운대, 맛집 투어 같이 하실 분 찾습니다.',
    tags: ['#여성들', '#30대', '#부산', '#맛집'],
  },
  {
    id: 3,
    status: '모집중',
    period: '25.08.05~25.08.10',
    title: '강릉 커피거리 투어 멤버 모집',
    description: '커피 좋아하는 분들과 강릉 여행 가요 ☕️',
    tags: ['#20대', '#혼자여행', '#강릉', '#커피'],
  },
  {
    id: 4,
    status: '모집중',
    period: '25.09.01~25.09.07',
    title: '제주도 올레길 걷기 동행 구해요',
    description: '자연을 좋아하는 분, 걷는 거 좋아하는 분 환영!',
    tags: ['#여성들', '#20대', '#제주도', '#트레킹'],
  },
];

const CompanionPostsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div>검색창</div>
            <div>정렬탭</div>
      <CompanionPostList posts={dummyPosts} />
    </div>
  );
};

export default CompanionPostsPage;
