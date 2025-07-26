import { create } from 'zustand'

interface CompanionPostsState {
  isEdit: boolean
  postId?: string
  defaultValues?: {
    images: File[]
    title: string
    participantCount: number
    deadLine: number
    description: string
  }
  setEditMode: (id: string, defaults: CompanionPostsState['defaultValues']) => void
  resetMode: () => void
}

export const useCompanionPostsStore = create<CompanionPostsState>((set) => ({
  isEdit: false,
  postId: undefined,
  defaultValues: undefined,
  setEditMode: (id, defaults) => set({ isEdit: true, postId: id, defaultValues: defaults }),
  resetMode: () => set({ isEdit: false, postId: undefined, defaultValues: undefined }),
}))
