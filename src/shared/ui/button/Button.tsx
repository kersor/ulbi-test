import React, { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

export enum ButtonTheme {
    PRIMARY = "primary",
    INVERTED = "inverted"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string
    theme?: ButtonTheme
}

const Button = (props: ButtonProps) => {
    const {
        classNames,
        children,
        theme = ButtonTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <button className={clsx(styles.wrapper, styles[theme], classNames,)} {...otherProps}>
            {children}
        </button>
    )
}

export default Button