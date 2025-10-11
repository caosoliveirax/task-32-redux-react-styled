import { styled } from 'styled-components'
import vars from '../../styles/vars'
import { ActionButton } from '../../styles'

type Props = {
  $isFavorite?: boolean
}

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

export const FavoriteButton = styled(ActionButton)<Props>`
  color: ${(props) => (props.$isFavorite ? vars.yellow : 'inherit')};

  &:hover {
    color: ${vars.yellow};
  }
`
export const DeleteButton = styled(ActionButton)<Props>`
  &:hover {
    color: ${vars.red};
  }
`
