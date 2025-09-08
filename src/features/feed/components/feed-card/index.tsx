import {
  Avatar,
  Box,
  Card,
  IconButton,
  Image,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react'
import {
  Bookmark,
  Ellipsis,
  Heart,
  MessageCircle,
  Send,
  Smile,
} from 'lucide-react'

import ExpandableText from '@/common/components/expandable-text'

const FeedCard = () => {
  return (
    <Card.Root
      border="none"
      overflow="hidden"
      fontSize="14px"
      rounded="none"
      _notLast={{
        borderBottom: { base: 'none', md: '1px solid' },
        borderColor: { base: 'none', md: 'gray.300' },
      }}
    >
      <Card.Title>
        <Box
          pl={1}
          pb={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            <Avatar.Root size="xs">
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
            <Text as="span" ml={3}>
              John Doe
            </Text>
          </Box>
          <IconButton
            variant="ghost"
            color="gray.500"
            _hover={{ bg: 'none', color: 'gray.500' }}
          >
            <Ellipsis />
          </IconButton>
        </Box>
      </Card.Title>
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body px={0} py={1} gap="2">
        <Box
          as="section"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Box
              as="button"
              p={2}
              cursor="pointer"
              _hover={{ color: 'gray.500' }}
            >
              <Heart size={24} />
            </Box>
            <Box
              as="button"
              p={2}
              cursor="pointer"
              _hover={{ color: 'gray.500' }}
            >
              <MessageCircle size={24} />
            </Box>
            <Box
              as="button"
              p={2}
              cursor="pointer"
              _hover={{ color: 'gray.500' }}
            >
              <Send size={24} />
            </Box>
          </Box>
          <Box>
            <Box
              as="button"
              p={2}
              cursor="pointer"
              _hover={{ color: 'gray.500' }}
            >
              <Bookmark size={24} />
            </Box>
          </Box>
        </Box>
        <Box as="section">
          <Text as="span" fontWeight="semibold">
            21 likes
          </Text>
        </Box>
        <Box as="section">
          <ExpandableText noOfLines={2} moreLabel="more">
            <Text as="strong">John Doe</Text> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet,
            nunc nisl aliquet nisl, eget aliquam nisl nisl eget nisl. Sed
            euismod, nisl eget aliquam aliquet, nunc nisl aliquet nisl, eget
            aliquam nisl nisl eget nisl.
          </ExpandableText>
        </Box>
        <Box as="section">
          <Box
            as="button"
            color="gray.500"
            cursor="pointer"
            _hover={{ color: 'gray.700' }}
          >
            View {1} comment
          </Box>
        </Box>
        <Box as="section">
          <InputGroup
            endElementProps={{
              pr: 0,
            }}
            endElement={
              <Box
                as="button"
                p={2}
                cursor="pointer"
                _hover={{ color: 'gray.500' }}
              >
                <Smile size={16} />
              </Box>
            }
          >
            <Input
              size="xs"
              border="none"
              outline="none"
              _focus={{ border: 'none' }}
              placeholder="Add a comment..."
            />
          </InputGroup>
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default FeedCard
