import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  background: ${({ theme }) => theme.colors.bg1};
  box-shadow: 0px 2px 10px rgba(171, 133, 115, 0.16);
  border-radius: 0;
  padding: 1rem;
`

export const Container = styled.div`
  position: relative;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
