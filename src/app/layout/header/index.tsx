import { Box } from '@chakra-ui/react'
import { Heart } from 'lucide-react'

import Instagram from '@/common/components/svg/instagram'

const Header = () => {
  return (
    <Box
      as="header"
      h="60px"
      px={4}
      position="sticky"
      top={0}
      zIndex="header"
      display={{ base: 'flex', md: 'none' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Instagram />
      <Heart />
    </Box>
  )
}

export default Header
