import { ProgressBar } from '@/components/ProgressBar'
import { usePathname } from 'next/navigation'

export default function SignupTemplate({ children }: { children: React.ReactNode }) {
  const stepMap = {
    step1: 105,
    step2: 210,
    step3: 300,
    step4: 320,
  }
  const pathname = usePathname()
  const currentStep = Object.entries(stepMap).find(([key]) => pathname.includes(key))?.[1] ?? 0

  return (
    <div>
      <div className='h-[6px] w-[320px]'>
        <ProgressBar progress={currentStep} />
      </div>
      {children}
    </div>
  )
}
