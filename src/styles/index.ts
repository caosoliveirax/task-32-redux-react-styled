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
  background-color: ${vars.background};
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
`

export const Input = styled.input`
  color: #666666;
  font-size: 16px;
  font-weight: 600;
  background-color: #ffffff86;
  border: 1px solid ${vars.primary};
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
  width: 384px;
  height: 40px;
`

export const ActionButton = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  background: ${vars.background};
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
export const SaveButton = styled(ActionButton)`
  position: absolute;
  top: 16px;
  right: 0;
  width: 152px;
  height: 152px;
  margin: 0;
  color: #fff;
  background: ${vars.primary};
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(1.04);
  }
`
