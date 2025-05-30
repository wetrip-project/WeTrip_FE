import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SingleSelectGroup from './SingleSelectGroup'

const meta: Meta<typeof SingleSelectGroup> = {
  title: 'Components/SingleSelectGroup',
  component: SingleSelectGroup,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof SingleSelectGroup>

const sampleOptions = [
  { label: '남성', value: 'male' },
  { label: '여성', value: 'female' },
]

export const GenderSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null) // ✅ 타입 명시!
    return (
      <div className='flex flex-col gap-4'>
        <p>선택된 값: {value ?? '없음'}</p>
        <SingleSelectGroup options={sampleOptions} value={value} onChange={setValue} />
      </div>
    )
  },
}

export const AgeGroupSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('20')
    const ageOptions = [
      { label: '10대', value: '10' },
      { label: '20대', value: '20' },
      { label: '30대', value: '30' },
      { label: '40대', value: '40' },
      { label: '50대', value: '50' },
      { label: '60대', value: '60' },
      { label: '70대', value: '70' },
      { label: '80대', value: '80' },
    ]
    return (
      <div className='flex flex-col gap-4'>
        <p>선택된 값: {value}</p>
        <SingleSelectGroup options={ageOptions} value={value} onChange={setValue} />
      </div>
    )
  },
}
