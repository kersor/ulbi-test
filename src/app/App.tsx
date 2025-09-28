import React, { Suspense } from 'react'
import ICON from '@public/icons/icon.svg'
import { Route, Router, Routes } from 'react-router-dom'
import { RouterApp } from './providers/router/model/createRouter'
import { AppRouter } from './providers/router'
import './styles/index.scss'
import { useTheme } from './providers/theme'

export const App = () => {
  const { setTheme, theme } = useTheme(state => state)
  return (
    <div className={`app ${theme}`}>
      <div onClick={() => setTheme()}>Фон</div>
      <AppRouter />
    </div>
  )
}
