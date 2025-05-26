export interface ProgressBarProps {
  progress: number
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className='bg-b2 h-[6px] w-[320px] rounded-lg'>
      <div
        className='bg-main1 h-full rounded-lg transition-all duration-300'
        style={{ width: `${progress}px` }}
      />
    </div>
  )
}
