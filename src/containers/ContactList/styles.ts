import styled from 'styled-components'

export const Input = styled.input`
  color: #666666;
  font-size: 16px;
  font-weight: 600;
  background-color: #ffffff86;
  border: 1px solid #4e3706ff;
  border-radius: 8px;
  padding: 12px;
  width: 60%;
`

export const ContactsTable = styled.table`
  margin-top: 20px;
  text-align: start;
  width: 100%;
  border-collapse: collapse;
`

export const TableHeaderCell = styled.th`
  font-size: 22px;
  text-align: start;
  padding: 14px;
  border-bottom: 2px solid #4e3706ff;
`

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
