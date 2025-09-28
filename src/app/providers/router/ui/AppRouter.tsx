import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouterApp } from '../model/createRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    RouterApp.map((rout) => <Route key={rout.path} path={rout.path} element={rout.element} />)
                }
            </Routes>
        </Suspense>
    </BrowserRouter>

  )
}

export default AppRouter