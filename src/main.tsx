import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'
import { Toaster } from 'sonner'

const router = createRouter({
  routeTree,
})

createRoot(document.getElementById('root')!).render(
<ThemeProvider storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </ThemeProvider>
)
