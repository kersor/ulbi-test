import React from 'react'
import styles from './styles.module.scss'
import i18n from "@app/providers/i18n/i18n"
import Button from '@/shared/ui/button/Button'
import { useTranslation } from 'react-i18next'

const LangSwitcher = () => {
    const {t} = useTranslation()

    const changeLanguage = () => {
        const lang = i18n.language
        i18n.changeLanguage(lang === "ru" ? "en" : "ru");
    }

    return (
        <Button onClick={changeLanguage}>{t("Язык")}</Button>
    )
}

export default LangSwitcher