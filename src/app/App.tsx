import React, { Suspense } from 'react'
import ICON from '@public/icons/icon.svg'
import { Route, Router, Routes } from 'react-router-dom'
import { RouterApp } from './providers/router/model/createRouter'
import { AppRouter } from './providers/router'
import './styles/index.scss'
import { useTheme } from './providers/theme'
import { Navbar } from '@/widgets/navbar'
import { Sidebar } from '@/widgets/sidebar'

export const App = () => {
  const { theme } = useTheme(state => state)
  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="">
        <Navbar /> 
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
