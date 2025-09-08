import { Box } from '@chakra-ui/react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => {
  return (
    <>
      <Box h="100vh">
        <Outlet />
      </Box>
      <TanStackRouterDevtools position="top-left" />
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => <div>Not Found</div>,
})
