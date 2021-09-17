import React from 'react'
import styled from 'styled-components'
import Img from './Top.svg'

const Container = styled.div`
  position: absolute;
  left: -2px;
  top: -20px;
  height: 200px;
  width: 100%;
  z-index: 0;
  background: url(${Img}) center / 100% no-repeat;
`

export default function RightDecoration() {
  return <Container></Container>
}
