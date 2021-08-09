import React from 'react'
import { useI18n } from 'i18n/i18n-react'

export interface TranslatedTextProps {
  translationId: number | string
  children: string
}

const TranslatedText = ({ translationId, children }: TranslatedTextProps) => {
  const i18n = useI18n()
  return <>{i18n(translationId, children)}</>
}

export default TranslatedText
