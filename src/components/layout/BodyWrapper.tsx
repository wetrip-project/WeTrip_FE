'use client';

import { usePathname } from 'next/navigation';
import BottomNav from '@/components/BottomNav/BottomNav';

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  //제외할 경로 설정
  const hiddenPaths = ['/login', '/signup', '/welcome',];
  const showBottomNav = !hiddenPaths.includes(pathname);

  return (
    <>
      {children}
      {showBottomNav && <BottomNav />}
    </>
  );
}
