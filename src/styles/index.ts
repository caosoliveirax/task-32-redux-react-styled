import styled, { createGlobalStyle } from 'styled-components'
import vars from '../styles/vars'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Courier Prime", monospace;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  background-color: #fff6ceff;
`

export const MainContainer = styled.main`
  height: 100vh;
  padding: 16px 0 0 56px;
  overflow-y: scroll;
`

export const Title = styled.h1`
  color: ${vars.primary};
  font-size: 64px;
  font-weight: 400;
  margin-bottom: 8px;
`

export const ActionButton = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  transition:
    color 0.2s ease,
    transform 0.3s ease;

  svg {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.15);
  }
`
