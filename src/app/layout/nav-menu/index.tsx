import {
  Box,
  Link as ChakraLink,
  Menu,
  Portal,
  Tabs,
  Text,
  useToken,
} from '@chakra-ui/react'
import { Link, useRouterState } from '@tanstack/react-router'
import { InstagramIcon, Menu as MenuIcon } from 'lucide-react'

import Instagram from '@/common/components/svg/instagram'

import { desktopItems, mobileItems } from './nav-menu.data'
import { createPathnameToValue } from './nav-menu.helper'

const DesktopNavMenu = ({ pathname }: { pathname: string }) => {
  const pathnameToValue = createPathnameToValue(desktopItems)
  const current = pathnameToValue(pathname)

  return (
    <Box
      as="aside"
      h="100vh"
      w={{
        base: '80px',
        lg: '260px',
      }}
      px={3}
      py={4}
      display={{ base: 'none', md: 'flex' }}
      flexDir="column"
      borderRight="1px solid"
      borderColor="border.emphasized"
      position="sticky"
      top={0}
    >
      <Box
        h="64px"
        mb={6}
        px={{ md: 0, lg: 3 }}
        display="flex"
        justifyContent={{ md: 'center', lg: 'flex-start' }}
        alignItems="center"
      >
        <Box display={{ md: 'none', lg: 'block' }}>
          <Instagram />
        </Box>
        <Box display={{ md: 'block', lg: 'none' }}>
          <InstagramIcon size={23} />
        </Box>
      </Box>
      <Tabs.Root value={current} flex={1} orientation="vertical">
        <Tabs.List w="full" gap={2} border="none" outline="none">
          {desktopItems.map(({ icon: Icon, value, label, path }) => (
            <Tabs.Trigger
              key={value}
              value={value}
              h="48px"
              px={3}
              color="gray.900"
              fontWeight="normal"
              fontSize="16px"
              rounded="lg"
              _hover={{
                bg: 'gray.100',
              }}
              _selected={{
                fontWeight: 'bold',
                '--indicator-color-fallback': 'none',
              }}
            >
              <ChakraLink
                asChild
                h="full"
                w="full"
                display="flex"
                alignItems="center"
                _focus={{
                  outline: 'none',
                }}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <Link to={path}>
                  <Icon size={23} />
                  <Text
                    as="span"
                    ml={2}
                    display={{ base: 'none', lg: 'block' }}
                  >
                    {label}
                  </Text>
                </Link>
              </ChakraLink>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

      <Menu.Root>
        <Menu.Trigger asChild>
          <Box
            as="button"
            h="48px"
            px={3}
            color="gray.900"
            fontWeight="normal"
            fontSize="16px"
            rounded="lg"
            cursor="pointer"
            _open={{
              fontWeight: 'bold',
            }}
            _hover={{
              bg: 'gray.100',
            }}
          >
            <Box display="flex" alignItems="center">
              <MenuIcon size={23} />
              <Text ml={2} display={{ base: 'none', lg: 'block' }}>
                More
              </Text>
            </Box>
          </Box>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content border="none">
              <Menu.Item value="new-txt-a">Settings</Menu.Item>
              <Menu.Item value="new-file-a">Switch appearance</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  )
}

const MobileNavMenu = ({ pathname }: { pathname: string }) => {
  const pathnameToValue = createPathnameToValue(mobileItems)
  const current = pathnameToValue(pathname)

  const [iconColor, selectedIconColor] = useToken('colors', [
    'gray.500',
    'gray.950',
  ])

  return (
    <Box
      as="nav"
      px={3}
      display={{ base: 'block', md: 'none' }}
      borderTop="1px solid"
      borderColor="border.emphasized"
      position="sticky"
      bottom={0}
    >
      <Tabs.Root value={current} orientation="horizontal">
        <Tabs.List
          w="full"
          justifyContent="space-evenly"
          gap={2}
          border="none"
          outline="none"
        >
          {mobileItems.map(({ icon: Icon, value, label, path }) => (
            <Tabs.Trigger
              key={value}
              value={value}
              h="48px"
              px={3}
              fontWeight="normal"
              fontSize="16px"
              rounded="lg"
              _selected={{
                fontWeight: 'bold',
                '--indicator-color-fallback': 'none',
                '--indicator-color': 'none',
                '--indicator-offset-y': '0px',
              }}
            >
              <ChakraLink
                asChild
                h="full"
                w="full"
                display="flex"
                alignItems="center"
                _focus={{
                  outline: 'none',
                }}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <Link to={path}>
                  <Icon
                    size={23}
                    strokeWidth={2}
                    color={value === current ? selectedIconColor : iconColor}
                    aria-label={label}
                  />
                </Link>
              </ChakraLink>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </Box>
  )
}

const NavMenu = () => {
  const { location } = useRouterState()
  const pathname = location.pathname

  return (
    <>
      <DesktopNavMenu pathname={pathname} />
      <MobileNavMenu pathname={pathname} />
    </>
  )
}

export default NavMenu
