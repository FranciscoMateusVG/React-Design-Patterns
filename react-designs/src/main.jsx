import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import { Context } from './pages/Context'
import { HOF } from './pages/HOF'
import { Home } from './pages/Home'
import { RenderProps } from './pages/RenderProps'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Home />
  },
  {
    path: '/hof',
    element: <HOF />
  },
  {
    path: '/render_props',
    element: <RenderProps />
  },
  {
    path: '/context',
    element: <Context />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
