import './globals.css'

import { BrowserRouter, useRoutes } from 'react-router-dom'

import { publicRoutes } from '@app/routes'

const PublicRoute = () => useRoutes(Object.values(publicRoutes))

const Layout = () => (
  <BrowserRouter>
    <PublicRoute />
  </BrowserRouter>
)

export default Layout
