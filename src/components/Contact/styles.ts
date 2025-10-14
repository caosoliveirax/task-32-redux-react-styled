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

export const InputCell = styled.input`
  height: 100%;
  width: 80%;
  padding: 2px 8px;
  text-align: start;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 0px 1px 2px rgba(81, 57, 6, 0.44);

  &:focus {
    outline: none;
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

export const EditButton = styled(ActionButton)<Props>`
  &:hover {
    color: ${vars.blue};
  }
`

export const SaveEditButton = styled(ActionButton)<Props>`
  color: ${vars.green};
`

export const CancelEditButton = styled(ActionButton)<Props>`
  color: ${vars.red};
`
