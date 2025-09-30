import React from 'react'
import styles from './styles.module.scss'
import Button from '@/shared/ui/button/Button'
import { useTheme } from '@/app/providers/theme'
import ThemeDark from '@shared/assets/icons/theme-dark.svg'
import ThemeLight from '@shared/assets/icons/theme-light.svg'
import { BackType } from '@/app/providers/theme/model/useTheme'

const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme(state => state)

    return (
        <Button onClick={() => setTheme()}>
            {theme === BackType.DARK ? <ThemeDark /> : <ThemeLight />}
        </Button>
    )
}

export default ThemeSwitcher