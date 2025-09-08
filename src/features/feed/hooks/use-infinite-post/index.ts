import { useInfiniteQuery } from '@tanstack/react-query'

import { getPosts } from '../../api/post'
import { postKeys } from '../../keys'

const useInfinitePost = () => {
  return useInfiniteQuery({
    queryKey: postKeys.infinite(),
    queryFn: ({ pageParam }) => getPosts({ page: pageParam, limit: 8 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.meta.page + 1,
    refetchOnWindowFocus: false,
  })
}

export default useInfinitePost
