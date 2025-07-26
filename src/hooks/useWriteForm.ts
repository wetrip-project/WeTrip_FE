import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { companionWriteFormSchema, CompanionWriteFormInputs } from 'src/schema/companionPostSchema'
import { useCompanionPostsStore } from '@/stores/zustand/companionPostsStore'

export const useWriteForm = () => {
  const { defaultValues } = useCompanionPostsStore()

  return useForm<CompanionWriteFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(companionWriteFormSchema),
    defaultValues: defaultValues || {
      images: [],
      title: '',
      participantCount: 1,
      deadLine: 1,
      description: '',
    },
  })
}
