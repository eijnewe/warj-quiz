import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from '@/components/header'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Header/>
      <div>Hello "__root"!</div>
      <Outlet />
      <TanStackRouterDevtools></TanStackRouterDevtools>
    </React.Fragment>
  )
}
