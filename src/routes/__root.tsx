import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from '@/components/header'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [scores, setScores] = React.useState([])


  return (
    <React.Fragment>
      <Header/>
      <Outlet context={{ scores, setScores }} /> 
      <TanStackRouterDevtools></TanStackRouterDevtools>
    </React.Fragment>
  )
}
