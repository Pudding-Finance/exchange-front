import React from 'react'
import styled from 'styled-components'
import Img from './Bottom.svg'

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 0;
  height: 200px;
  background: url(${Img}) center / 100% no-repeat;
`

export default function BottomDecoration() {
  return <Container></Container>
}
