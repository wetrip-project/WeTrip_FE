import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'complete'],
    },
    placeholder: {
      control: 'text',
    },
  },
  args: {
    variant: 'default',
    placeholder: '텍스트를 입력하세요',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className='flex flex-col gap-4'>
      <Input {...args} variant='default' placeholder='기본 입력 필드' />
      <Input {...args} variant='complete' placeholder='완료된 입력 필드' />
    </div>
  ),
}
