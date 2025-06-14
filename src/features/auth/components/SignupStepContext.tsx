'use client'

import { createContext, useContext } from 'react'

type SignupStepContextType = {
  step: number
  goToStep: (n: number) => void
  goPrevStep: () => void
}

export const SignupStepContext = createContext<SignupStepContextType | null>(null)

export const useSignupStep = () => {
  const context = useContext(SignupStepContext)
  if (!context) {
    throw new Error('useSignupStep must be used within SignupStepContext.Provider')
  }
  return context
}
