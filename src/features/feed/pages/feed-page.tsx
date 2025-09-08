import { Box } from '@chakra-ui/react'

import FeedCard from '../components/feed-card'

const FeedPage = () => {
  return (
    <Box as="main" display="flex" justifyContent="center">
      <Box maxW="630px" w="full">
        <Box display="flex" justifyContent="center">
          <Box
            maxW="470px"
            w="full"
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            gap={3}
          >
            <FeedCard
              authorName="Takumi Fujiwara"
              imageSrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              likeCount={30}
              commentCount={1}
            />
            <FeedCard
              authorName="Ryusuke Takahashi"
              imageSrc=""
              likeCount={11}
              commentCount={0}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FeedPage
