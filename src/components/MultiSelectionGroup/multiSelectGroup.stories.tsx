import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import MultiSelectGroup from './MultiSelectGroup'

const meta: Meta<typeof MultiSelectGroup> = {
  title: 'Components/MultiSelectGroup',
  component: MultiSelectGroup,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof MultiSelectGroup>

const interestOptions = [
  { label: '맛집', value: 'food' },
  { label: '쇼핑', value: 'shopping' },
  { label: '관광', value: 'tour' },
  { label: '레저', value: 'leisure' },
]

export const InterestSelect: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([])
    return (
      <div className='flex flex-col gap-4'>
        <p>선택된 값: {values.join(', ') || '없음'}</p>
        <MultiSelectGroup options={interestOptions} values={values} onChange={setValues} />
      </div>
    )
  },
}
