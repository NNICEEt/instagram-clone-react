import { useState } from 'react'

import {
  Avatar,
  Box,
  Card,
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
import { AnimatePresence, motion } from 'motion/react'

import FeedImageFallback from '@/assets/webp/feed-image-fallback.webp'
import ExpandableText from '@/common/components/expandable-text'
import IconButton from '@/common/components/icon-button'

const LEFT_ICONS = [Heart, MessageCircle, Send]

type FeedCardProps = {
  avatarSrc?: string
  authorName: string
  imageSrc: string
  content?: string
  likeCount: number
  commentCount: number
}

const FeedCard = ({
  avatarSrc,
  authorName,
  imageSrc,
  content,
  likeCount,
  commentCount,
}: FeedCardProps) => {
  const [showHeart, setShowHeart] = useState(false)

  const handleDoubleClick = () => {
    setShowHeart(true)
    setTimeout(() => setShowHeart(false), 800)
  }

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
              <Avatar.Fallback name={authorName} />
              <Avatar.Image src={avatarSrc} />
            </Avatar.Root>
            <Text as="span" ml={3}>
              {authorName}
            </Text>
          </Box>
          <IconButton color="gray.500">
            <Ellipsis />
          </IconButton>
        </Box>
      </Card.Title>
      <Box position="relative">
        <Image
          src={imageSrc || FeedImageFallback}
          onDoubleClick={handleDoubleClick}
        />
        <Box
          position="absolute"
          inset={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          pointerEvents="none"
        >
          <AnimatePresence>
            {showHeart && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <IconButton color="red.500">
                  <Heart size={84} />
                </IconButton>
              </motion.span>
            )}
          </AnimatePresence>
        </Box>
      </Box>
      <Card.Body px={{ base: 4, sm: 0 }} py={1} gap="2">
        <Box
          as="section"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            {LEFT_ICONS.map((Icon, index) => (
              <IconButton key={index} _first={{ pl: 0 }}>
                <Icon size={24} />
              </IconButton>
            ))}
          </Box>
          <Box>
            <IconButton pr={0}>
              <Bookmark size={24} />
            </IconButton>
          </Box>
        </Box>
        {!!likeCount && (
          <Box as="section">
            <Text as="span" fontWeight="semibold">
              {likeCount} likes
            </Text>
          </Box>
        )}
        {!!content && (
          <Box as="section">
            <ExpandableText noOfLines={2} moreLabel="more">
              <Text as="strong">{authorName}</Text> {content}
            </ExpandableText>
          </Box>
        )}
        {!!commentCount && (
          <Box as="section">
            <Box
              as="button"
              color="gray.500"
              cursor="pointer"
              _hover={{ color: 'gray.700' }}
            >
              View {commentCount} comment
            </Box>
          </Box>
        )}
        <Box as="section">
          <InputGroup
            endElementProps={{
              pr: 0,
            }}
            endElement={
              <IconButton>
                <Smile size={16} />
              </IconButton>
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
