import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouterApp } from '../model/createRouter'

const AppRouter = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              {
                  RouterApp.map((rout) => (
                    <Route
                        key={rout.path}
                        path={rout.path}
                        element={(
                            <div className='page-content'>
                                {rout.element}
                            </div>
                        )}
                    />
                  ))
              }
          </Routes>
      </Suspense>
  )
}

export default AppRouter