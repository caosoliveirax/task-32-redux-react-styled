import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vars from '../../styles/vars'

export const AsideBar = styled.aside`
  background-color: #fff4c3ff;
  height: 100vh;
  padding: 16px;
`
export const AddButton = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #fff;
  background-color: ${vars.primary};
  width: 100%;
  height: 76px;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:active {
    transform: translateX(10px);
  }
`

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  background-color: ${vars.primary};
  width: 100%;
  height: 76px;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:active {
    transform: translateX(-10px);
  }
`

export const Filter = styled.aside`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  margin-top: 16px;
`
