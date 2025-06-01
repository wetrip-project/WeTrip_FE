'use client'

import { useState } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { SearchProps } from './search.type'
import Icon from '@/components/Icon/icon'

const searchClass = cva(
  'w-[320px] h-[43px] py-[12px] pl-[12px] pr-[20px] bg-white rounded-md font-16r border border-stroke2 text-t3 placeholder:text-t3 flex gap-[8px]',
)

export const Search = ({ onSearch, placeholder, className, ...props }: SearchProps) => {
  const [value, setValue] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value)
    }
  }

  return (
    <div className={cn(searchClass(), className)}>
      <Icon iconName='Search' />
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className='w-full outline-none'
        {...props}
      />
    </div>
  )
}
