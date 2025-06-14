import { InputHTMLAttributes } from 'react'

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
  placeholder?: string
}
