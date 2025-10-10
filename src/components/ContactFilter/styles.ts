import styled from 'styled-components'

type Props = {
  $active: boolean
}

export const Card = styled.div<Pick<Props, '$active'>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ $active }) => ($active ? '#4e3706ff' : '#5e5e5e')};
  background-color: ${({ $active }) => ($active ? '#fff' : '#fcfcfc')};
  border: 1px solid ${({ $active }) => ($active ? '#4e3706ff' : '#a1a1a1')};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
`
export const Counter = styled.span`
  font-size: 24px;
  font-weight: bold;
`

export const Label = styled.span`
  font-size: 14px;
`
