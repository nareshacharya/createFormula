import styled from 'styled-components'

export const FormulaTable = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
`

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 100px;
  gap: 16px;
  padding: 16px;
  background: #F9FAFB;
  border-bottom: 1px solid #E5E7EB;
  font-weight: 600;
  font-size: 14px;
  color: #374151;
`

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 100px;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #F3F4F6;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #F9FAFB;
  }
`

export const TableCell = styled.div`
  font-size: 14px;
  color: #1F2937;
`

export const SummaryRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 100px;
  gap: 16px;
  padding: 16px;
  background: #F3F4F6;
  border-top: 2px solid #E5E7EB;
  font-weight: 600;
  color: #1F2937;
`

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SummaryLabel = styled.span`
  font-size: 12px;
  color: #6B7280;
  font-weight: 500;
`

export const SummaryValue = styled.span`
  font-size: 16px;
  color: #1F2937;
` 