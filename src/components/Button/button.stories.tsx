import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'


const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['activation', 'deactivation', 'strokeGray1', 'strokeGray2', 'strokeGreen'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'lg'],
    },
  },
  args: {
    children: '버튼 텍스트',
    variant: 'activation',
    size: 'sm',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className='flex flex-col gap-4'>
      <Button {...args} variant='activation'>
        activation
      </Button>
      <Button {...args} variant='deactivation'>
        deactivation
      </Button>
      <Button {...args} variant='strokeGray1'>
        strokeGray1
      </Button>
      <Button {...args} variant='strokeGray2'>
        strokeGray2
      </Button>
      <Button {...args} variant='strokeGreen'>
        strokeGreen
      </Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className='flex flex-col gap-4'>
      <Button {...args} size='sm'>
        Small
      </Button>
      <Button {...args} size='lg'>
        Large
      </Button>
    </div>
  ),
}
