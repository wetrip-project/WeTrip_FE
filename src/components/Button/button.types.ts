import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './Button.cva'

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
export type RequiredVariants = {
  variant: NonNullable<ButtonVariantProps['variant']>
  size: NonNullable<ButtonVariantProps['size']>
}
export interface ButtonProps extends ButtonVariantProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
}
