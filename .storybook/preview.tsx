import type { Preview } from '@storybook/react'
import React from 'react'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className='flex h-screen w-full justify-center bg-blue-400'>
        <div style={{ width: '360px', margin: '0 auto', padding: '16px', background: 'white' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export default preview
