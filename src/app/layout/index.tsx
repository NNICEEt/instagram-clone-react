import { Box } from '@chakra-ui/react'

import Header from './header'
import NavMenu from './nav-menu'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection={{ base: 'column-reverse', md: 'row' }}
    >
      <NavMenu />
      <Box as="main" px={{ base: 0, sm: 4 }} py={4} flex={1} overflowY="auto">
        {children}
      </Box>
      <Header />
    </Box>
  )
}

export default Layout
