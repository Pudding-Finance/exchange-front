/* eslint-disable */

import { useContext } from 'react'
import { isEmpty } from 'lodash'
import { TranslationsContext } from '../hooks/TranslationsContext'

interface ContextData {
  [key: string]: number | string
}

const Regex = /%[a-zA-Z-_]+%/

function interploateText(text: string, data: any) {
  const includesVariable = text.match(Regex)

  if (!includesVariable || isEmpty(data)) {
    return text
  }

  let interpolatedText = text

  Object.keys(data).forEach(dataKey => {
    const templateKey = new RegExp(`%${dataKey}%`, 'g')
    interpolatedText = interpolatedText.replace(templateKey, data[dataKey])
  })

  return interpolatedText
}

export const TranslateString = (translationId: number, fallback: string, data: ContextData = {}) => {
  const { translations } = useContext(TranslationsContext)
  if (translations.length === 0) {
    return interploateText(fallback, data)
  }

  const foundTranslation = translations.find(translation => {
    return translation.data.stringId === translationId
  }) || { data: { text: fallback } }

  if (foundTranslation) {
    const { text } = foundTranslation.data
    return interploateText(text, data)
  }

  return interploateText(fallback, data)
}
