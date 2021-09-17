import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Img } from './Right.svg'

const Container = styled.div`
  position: absolute;
  bottom: -6px;
  left: 100%;
  z-index: 1;

  svg {
    width: 96px;
  }

  @media (max-width: 640px) {
    svg {
      display: none;
    }
  }
`

export default function RightDecoration() {
  return (
    <Container>
      <Img />
    </Container>
  )
}
