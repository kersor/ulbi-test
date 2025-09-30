import React from 'react'
import styles from './styles.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import clsx from 'clsx'

export enum AppLinkTheme {
    PRIMARY = "primary",
    INVERTED = "inverted"
}

interface AppLinkProps extends LinkProps {
    classNames?: string
    theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
    const {
        to,
        classNames,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
  return (
    <Link className={clsx(styles.wrapper, classNames, styles[theme])} to={to} {...otherProps}>
        {children}
    </Link>
  )
}
