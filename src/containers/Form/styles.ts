import styled from 'styled-components'
import vars from '../../styles/vars'
import { IMaskInput } from 'react-imask'

export const FormContainer = styled.form`
  position: relative;
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666;
`

export const TitleForm = styled.h2`
  color: ${vars.primary};
  font-size: 64px;
  font-weight: 400;
`

export const Options = styled.div`
  margin-top: 16px;
  padding: 16px;
  border: 1px solid ${vars.primary};
  border-radius: 8px;

  p {
    margin-bottom: 14px;
    font-size: 16px;
  }

  label {
    margin: 0 8px;
  }
`

export const Option = styled.div`
  margin-right: 16px;
  display: inline;
  text-transform: capitalize;

  input[type='radio' i] {
    cursor: pointer;
  }
`

export const MaskedInput = styled(IMaskInput)`
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
