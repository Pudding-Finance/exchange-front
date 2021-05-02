import React from 'react'
import useCutDown from '../hooks/useCutDown'
import { TranslateString } from '../utils/translateTextHelpers'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  height: 76px;
  color: ${props => props.theme.colors.white};
`

const Title = styled.div`
  font-size: 18px;
  margin-right: 50px;
`

const TimeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32px;
  span {
    &:nth-child(1) {
      font-size: 24px;
    }
    &:nth-child(2) {
      font-size: 18px;
    }
  }
  & + & {
    margin-left: 24px;
  }
`

export default function CountDown() {
  const { days, minutes, hours, seconds, remainTime } = useCutDown(new Date('2021-05-03T20:00:00+08:00'))

  if (remainTime <= 0) {
    return null
  }

  return (
    <Container>
      <Title>{TranslateString(103, 'Farm Reward Reduction CountDown')}</Title>
      <TimeItem>
        <span>{days}</span>
        <span>{TranslateString(104, 'D')}</span>
      </TimeItem>
      <TimeItem>
        <span>{hours}</span>
        <span>{TranslateString(106, 'H')}</span>
      </TimeItem>
      <TimeItem>
        <span>{minutes}</span>
        <span>{TranslateString(110, 'M')}</span>
      </TimeItem>
      <TimeItem>
        <span>{seconds}</span>
        <span>{TranslateString(108, 'S')}</span>
      </TimeItem>
    </Container>
  )
}
