import React from 'react'
import styled from 'styled-components'
import { useLanguage } from 'i18n/i18n-react'
import { ZH_CN, EN } from 'i18n/languageCode'

interface MobileMenuProps {
  className?: string
}
const AccountLink: React.FC<MobileMenuProps> = () => {
  const [language, setLanguage] = useLanguage()

  return (
    <StyledButton>
      <Button
        className={language === EN.code ? 'active' : 'unactive'}
        onClick={() => {
          setLanguage(EN.code)
        }}
      >
        {EN.language}
      </Button>
      <span>/</span>
      <Button
        className={language === ZH_CN.code ? 'active' : 'unactive'}
        onClick={() => {
          setLanguage(ZH_CN.code)
        }}
      >
        {ZH_CN.language}
      </Button>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  display: flex;
  height: 26px;
  font-size: 14px;
  font-weight: bolder;
  line-height: 26px;
  color: ${props => props.theme.colors.normal};
  overflow: hidden;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
  span {
    margin: 0 20px;
  }
`
const Button = styled.div`
  text-align: left;
  border-radius: 8px;
  color: ${props => props.theme.colors.primary};
  &.unactive {
    color: #2f3644;
  }
`

export default AccountLink
