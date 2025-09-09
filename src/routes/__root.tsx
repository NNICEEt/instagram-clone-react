import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Layout from '@/app/layout'

const RootLayout = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools position="top-right" />
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => <div>Not Found</div>,
})
