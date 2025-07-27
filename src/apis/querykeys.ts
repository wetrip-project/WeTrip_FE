export const querykeys = {
  userOnboarding: {
    nickname: () => ['nickname'],
    profilePhoto: () => ['profilePhoto'],
    genderAge: ({ age, gender }: { age: number; gender: string }) => ['genderAge', age, gender],
  },
}
