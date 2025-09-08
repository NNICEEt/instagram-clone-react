import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from '@chakra-ui/react'

const Loading = () => {
  return (
    <Stack
      gap={3}
      pt={2}
      pb={4}
      _notLast={{
        borderBottom: { base: 'none', md: '1px solid' },
        borderColor: { base: 'none', md: 'gray.300' },
      }}
    >
      <HStack width="full">
        <SkeletonCircle size="10" />
        <SkeletonText noOfLines={1} />
      </HStack>
      <Skeleton height="300px" />
      <Stack gap={4}>
        <SkeletonText noOfLines={1} width="15%" />
        <SkeletonText noOfLines={2} width="100%" />
        <SkeletonText noOfLines={1} width="20%" />
      </Stack>
    </Stack>
  )
}

export default Loading
