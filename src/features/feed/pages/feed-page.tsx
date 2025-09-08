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
            <FeedCard />
            <FeedCard />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FeedPage
