import styled from 'styled-components'

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 12px 10px 40px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #D1D5DB;
  }

  &::placeholder {
    color: #9CA3AF;
  }
`

export const EditableCell = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  background: transparent;
  color: #1F2937;

  &:focus {
    outline: none;
    border-color: #D1D5DB;
    background: white;
  }
`

export const BatchSizeInput = styled.input`
  width: 80px;
  padding: 8px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #D1D5DB;
  }
`

export const UnitSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #D1D5DB;
  }
`

export const GlobalBatchSizeInput = styled.input`
  width: 60px;
  padding: 4px 8px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #D1D5DB;
  }
`

export const GlobalUnitSelect = styled.select`
  padding: 4px 8px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #D1D5DB;
  }
` 