import styled, { createGlobalStyle } from 'styled-components'

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
  color: #4e3706ff;
  font-size: 64px;
  font-weight: 400;
  margin-bottom: 8px;
`
