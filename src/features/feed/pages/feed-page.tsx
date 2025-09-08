import { Box } from '@chakra-ui/react'

import Feeds from '../components/feeds'

const FeedPage = () => {
  return (
    <Box as="main" display="flex" justifyContent="center">
      <Box maxW="630px" w="full">
        <Feeds />
      </Box>
    </Box>
  )
}

export default FeedPage
