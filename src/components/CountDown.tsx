import React from 'react'
import useCutDown from '../hooks/useCutDown'
import { useI18n } from 'i18n/i18n-react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  max-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  height: 76px;
  color: ${props => props.theme.colors.white};
  @media (max-width: 500px) {
    margin-top: 0px;
  }
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 50px;
  @media (max-width: 764px) {
    margin-right: 20px;
  }
`

const TimeItem = styled.div`
  display: flex;
  align-items: baseline;
  font-weight: bold;
  span {
    &:nth-child(1) {
      font-size: 36px;
    }
    &:nth-child(2) {
      font-size: 14px;
      margin-left: 4px;
    }
  }
  & + & {
    margin-left: 16px;
  }
`

export default function CountDown() {
  const { days, minutes, hours, seconds, remainTime } = useCutDown(new Date('2021-05-04T21:00:00+08:00'))
  const i18n = useI18n()

  if (remainTime <= 0) {
    return null
  }

  return (
    <Container>
      <Title>{i18n(756, 'Farm CountDown')}</Title>
      <TimeItem>
        <span>{days}</span>
        <span>{'D'}</span>
      </TimeItem>
      <TimeItem>
        <span>{hours}</span>
        <span>{'H'}</span>
      </TimeItem>
      <TimeItem>
        <span>{minutes}</span>
        <span>{'M'}</span>
      </TimeItem>
      <TimeItem>
        <span>{seconds}</span>
        <span>{'S'}</span>
      </TimeItem>
    </Container>
  )
}
