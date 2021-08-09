import React from 'react'
import styled from 'styled-components'
import { useLanguage } from 'i18n/i18n-react'
import { ZH_CN, EN, Language } from 'i18n/languageCode'

interface SwithProps {
  className?: string
}
const AccountLink: React.FC<SwithProps> = (props: SwithProps) => {
  const [selectedLanguage, setSelectedLanguage] = useLanguage()

  return (
    <StyledButton className={props.className}>
      <div className="text">{Language[selectedLanguage].language}</div>
      <Modal className="modal">
        <Button
          className={selectedLanguage === EN.code ? 'active' : 'unactive'}
          onClick={() => {
            setSelectedLanguage(EN.code)
          }}
        >
          {EN.language}
        </Button>
        <Button
          className={selectedLanguage === ZH_CN.code ? 'active' : 'unactive'}
          onClick={() => {
            setSelectedLanguage(ZH_CN.code)
          }}
        >
          {ZH_CN.language}
        </Button>
      </Modal>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  color: ${props => props.theme.colors.normal};
  cursor: pointer;
  font-size: 14px;
  align-items: center;
  .text {
    padding-left: 26px;
    color: #2f3644;
    font-weight: bolder;
    position: absolute;
    height: 60px;
    top: 0;
    padding-top: 10px;
    box-sizing: border-box;
  }
  &:hover {
    .modal {
      display: block;
    }
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`
const Button = styled.div`
  margin-bottom: 24px;
  text-align: center;
  border-radius: 8px;
  font-weight: bolder;
  color: ${props => props.theme.colors.primary};
  &.unactive {
    color: #2f3644;
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
const Modal = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 100px;
  display: none;
  border-radius: 12px;
  padding: 24px;
  padding-left: 20px;
  padding-bottom: 0;
  box-sizing: border-box;
  background: #fdfdfd;
  box-shadow: 0px 4px 20px rgba(117, 117, 117, 0.1);
  border-radius: 12px;
`

export default AccountLink
