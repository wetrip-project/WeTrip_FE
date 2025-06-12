import { Button } from '../Button'

type Option = { label: string; value: string }

interface Props {
  options: Option[]
  value: string | null
  onChange: (value: string) => void
  containerClassName?: string
  buttonClassName?: string
}

const SingleSelectGroup = ({
  options,
  value,
  onChange,
  containerClassName = '',
  buttonClassName = '',
}: Props) => {
  return (
    <div className={`flex flex-wrap gap-2 ${containerClassName}`}>
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => onChange(option.value)}
          variant={value === option.value ? 'strokeGreen' : 'strokeGray1'}
          className={buttonClassName}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}

export default SingleSelectGroup
