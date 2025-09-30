import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { AppLink } from '@/shared/ui/appLink/AppLink'

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">About</AppLink>
    </div>
  )
}

export default Navbar