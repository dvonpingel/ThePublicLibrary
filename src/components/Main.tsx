import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Route, Routes, useLocation } from 'react-router-dom'

import ComponentsTab from './Docs/ComponentsTab'
import Sidebar from './Navigation/Navigation'

const Main = () => {
  const location = useLocation(),
    { pathname } = location,
    navigate = useNavigate()

  // Navigate if not a valid route. Add all routes to this if statement as they are built.
  useEffect(() => {
    if (!pathname.includes('components')) {
      navigate('/components')
    }
  }, [pathname, navigate])

  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path='/components' element={<ComponentsTab />} />
      </Routes>
    </div>
  )
}

export default Main
