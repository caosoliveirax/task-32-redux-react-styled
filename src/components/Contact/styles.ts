import { styled } from 'styled-components'

export const TableCell = styled.td`
  vertical-align: middle;
  font-size: 18px;
  font-weight: 400;
  text-align: start;
  padding: 12px;
  border-bottom: 1px solid rgba(81, 57, 6, 0.2);

  svg {
    vertical-align: middle;
    margin-right: 12px;
  }
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
    color: #4e3706ff;
    transform: scale(1.15);
  }
`
