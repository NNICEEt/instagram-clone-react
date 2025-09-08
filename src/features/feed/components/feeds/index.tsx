import { useEffect, useRef } from 'react'

import { Box, Spinner } from '@chakra-ui/react'

import useInfinitePost from '../../hooks/use-infinite-post'
import FeedCard from '../feed-card'
import Loading from '../feed-card/loading'

const Feeds = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfinitePost()

  const sentinelRef = useRef<HTMLDivElement | null>(null)

  // Observe sentinel: trigger fetchNextPage
  useEffect(() => {
    if (!hasNextPage) return
    const el = sentinelRef.current
    if (!el) return

    const io = new IntersectionObserver((entries) => {
      console.log('Sentinel observed::', entries)
      const [entry] = entries
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage().catch(() => {
          console.error('Failed to fetch next page')
        })
      }
    })
    io.observe(el)
    return () => io.disconnect()
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  const items = data?.pages.flatMap((page) => page.data) ?? []

  if (status === 'error') return <Box>Error fetching data: {error.message}</Box>

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {status === 'pending' ? (
        <Box maxW="470px" w="full">
          <Loading />
          <Loading />
          <Loading />
        </Box>
      ) : (
        <>
          <Box
            maxW="470px"
            w="full"
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            gap={3}
          >
            {items.map((item, index) => (
              <FeedCard
                key={index}
                authorName={item.author.name}
                imageSrc={item.image}
                content={item.content}
                likeCount={item.likeCount}
                commentCount={item.commentCount}
              />
            ))}
          </Box>
          <Box ref={sentinelRef} h={1} />
          {isFetchingNextPage && <Spinner size="lg" mt={4} />}
        </>
      )}
    </Box>
  )
}

export default Feeds
