import { useState } from 'react'

import { Box, Button, Text } from '@chakra-ui/react'

type ExpandableTextProps = {
  children: React.ReactNode
  noOfLines?: number
  moreLabel?: string
  lessLabel?: string
  maxW?: string | number
}

const ExpandableText = ({
  children,
  noOfLines = 2,
  moreLabel = 'more',
  lessLabel = 'less',
  maxW = '480px',
}: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false)

  if (expanded) {
    return (
      <Text maxW={maxW} display="inline" whiteSpace="pre-wrap">
        {children}{' '}
        <Button
          onClick={() => setExpanded(false)}
          unstyled
          color="gray.500"
          cursor="pointer"
          _hover={{ color: 'gray.700' }}
        >
          {lessLabel}
        </Button>
      </Text>
    )
  }

  return (
    <Box position="relative" display="inline-block" maxW={maxW}>
      <Text as="span" overflow="hidden" lineClamp={noOfLines}>
        {children}
      </Text>

      <Button
        onClick={() => setExpanded(true)}
        unstyled
        color="gray.500"
        cursor="pointer"
        _hover={{ color: 'gray.700' }}
      >
        {moreLabel}
      </Button>
    </Box>
  )
}

export default ExpandableText
