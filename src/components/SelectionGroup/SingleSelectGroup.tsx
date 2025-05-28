import { Button } from '../Button'

type Option = { label: string; value: string }

interface Props {
  options: Option[]
  value: string | null
  onChange: (value: string) => void
}

export default function SingleSelectGroup({ options, value, onChange }: Props) {
  return (
    <div className='flex flex-wrap gap-2'>
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => onChange(option.value)}
          variant={value === option.value ? 'strokeGreen' : 'strokeGray1'}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
