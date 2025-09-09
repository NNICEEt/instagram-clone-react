import { useState } from 'react'

import { Box, Input } from '@chakra-ui/react'
import { Heart, Search } from 'lucide-react'

import IconButton from '@/common/components/icon-button'
import Instagram from '@/common/components/svg/instagram'

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)

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
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box
        display={{
          base: showSearch ? 'none' : 'block',
          sm: 'block',
        }}
      >
        <Instagram />
      </Box>
      <Box flex={1} mx={2}>
        <Box display={{ base: showSearch ? 'block' : 'none', sm: 'block' }}>
          <Input size="sm" placeholder="Search" />
        </Box>
      </Box>
      <Box display="flex" gap={2} alignItems="center">
        <Box display={{ base: 'block', sm: 'none' }}>
          <IconButton
            aria-label="Search"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={20} />
          </IconButton>
        </Box>
        <IconButton aria-label="Likes">
          <Heart size={20} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Header
