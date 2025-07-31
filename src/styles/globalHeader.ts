import styled from 'styled-components'

export const GlobalHeaderContainer = styled.div`
  background: white;
  border-bottom: 1px solid #E5E7EB;
  padding: 8px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const GlobalHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`

export const GlobalBatchSizeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
  font-weight: 500;
`

export const GlobalActionButtonGroup = styled.div`
  display: flex;
  gap: 4px;
` 