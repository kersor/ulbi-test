import React, { useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import Button from '@/shared/ui/button/Button'
import { ThemeSwitcher } from '@/widgets/themeSwitcher'


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const funcToggleCollapsed = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={clsx(styles.wrapper, collapsed && styles.collapsed)}>
      <Button onClick={funcToggleCollapsed}>Toggle</Button>
      <div className={styles.switcher}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Sidebar