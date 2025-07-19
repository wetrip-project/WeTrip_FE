import Icon from '../Icon/icon';

interface EmptyResultProps {
  title?: string;
  description?: string;
}

const EmptyResult = ({
  title = '검색 결과가 없습니다.',
  description = '다른 검색어를 입력해 보세요!',
}: EmptyResultProps) => {
  return (
    <div className="flex min-h-[calc(100dvh-226px)] flex-col items-center justify-center text-center text-t2">
        <Icon iconName={'EmptyResult'} className="w-[127px] h-[99px] mb-[28px]" />
        <p className="font-16b">{title}</p>
        <p className="mt-2 font-14r">{description}</p>
    </div>
  );
};

export default EmptyResult;
