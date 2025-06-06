import { create } from 'zustand'

type SignupStore = {
  step: number
  setStep: (step: number) => void
}

export const useSignupStore = create<SignupStore>((set) => ({
  step: 1,
  setStep: (step) => {
    set({ step: step })
  },
}))
