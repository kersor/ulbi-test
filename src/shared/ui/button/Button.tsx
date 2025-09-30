import React, { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string
}

const Button = (props: ButtonProps) => {
    const {
        classNames,
        children,
        ...otherProps
    } = props

    return (
        <button className={clsx(styles.wrapper, classNames)} {...otherProps}>
            {children}
        </button>
    )
}

export default Button