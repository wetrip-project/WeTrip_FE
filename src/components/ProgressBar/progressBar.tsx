'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className='relative h-full w-full overflow-hidden rounded-full bg-gray-200'>
      <motion.div
        className='bg-main1 h-full rounded-lg'
        initial={{ width: 0 }}
        animate={{ width: `${progress}px` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </div>
  )
}
