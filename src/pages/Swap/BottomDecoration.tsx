import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BottomImg } from './Bottom.svg'

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: -84px;
  left: 0;
  z-index: 1;
`

export default function BottomDecoration() {
  return (
    <Container>
      <BottomImg />
    </Container>
  )
}
