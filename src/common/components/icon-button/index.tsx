import type { ComponentProps } from 'react'

import { Box } from '@chakra-ui/react'

const IconButton = (props: ComponentProps<typeof Box>) => {
  return (
    <Box
      as="button"
      p={2}
      color="gray.700"
      cursor="pointer"
      _hover={{ color: 'gray.500' }}
      {...props}
    />
  )
}

export default IconButton
