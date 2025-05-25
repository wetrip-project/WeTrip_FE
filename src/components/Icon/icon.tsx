import * as Icons from '@/assets/icons'
import { twMerge } from 'tailwind-merge'

type IconName = keyof typeof Icons
interface IconProps {
  className?: string
  iconName: IconName
}

export default function Icon({ className, iconName }: IconProps) {
  const Icon = Icons[iconName]
  return <Icon className={twMerge(className)}></Icon>
}
