export const postKeys = {
  all: ['posts'] as const,
  infinite: () => [...postKeys.all, 'infinite'] as const,
}
