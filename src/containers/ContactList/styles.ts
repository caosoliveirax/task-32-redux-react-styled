import styled from 'styled-components'
import vars from '../../styles/vars'

export const ContactsTable = styled.table`
  margin-top: 20px;
  text-align: start;
  table-layout: fixed;
  width: 1080px;
  border-collapse: collapse;
`

export const TableHeaderCell = styled.th`
  font-size: 22px;
  text-align: start;
  padding: 14px;
  border-bottom: 2px solid ${vars.primary};
`
