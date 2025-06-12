import { ReactNode } from 'react'
import { Button } from '../Button'

type Option = { label: ReactNode; value: string }

interface Props {
  options: Option[]
  values: string[]
  onChange: (values: string[]) => void
  containerClassName?: string
  buttonClassName?: string
}

export default function MultiSelectGroup({
  options,
  values,
  onChange,
  containerClassName = '',
  buttonClassName = '',
}: Props) {
  const toggleOption = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value))
    } else {
      onChange([...values, value])
    }
  }

  return (
    <div className={`flex flex-wrap gap-2 ${containerClassName}`}>
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => toggleOption(option.value)}
          variant={values.includes(option.value) ? 'strokeGreen' : 'strokeGray1'}
          className={buttonClassName}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
