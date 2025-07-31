import styled from 'styled-components'

export const BatchSizeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding: 16px;
  background: #F9FAFB;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
`

export const ReferenceToggle = styled.div`
  display: flex;
  background: #F3F4F6;
  border-radius: 6px;
  padding: 4px;
  margin-bottom: 16px;
`

export const ToggleButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#1F2937' : '#6B7280'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: ${props => props.active ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    color: #1F2937;
  }
`

export const ReferenceCards = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
`

export const ReferenceCard = styled.div`
  min-width: 280px;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #F3F4F6;
`

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #1F2937;
  margin: 0;
`

export const CardMeta = styled.div`
  font-size: 11px;
  color: #6B7280;
  text-align: right;
`

export const ComparisonTable = styled.div`
  font-size: 12px;
`

export const ComparisonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  border-bottom: 1px solid #F9FAFB;

  &:last-child {
    border-bottom: none;
  }
`

export const ComparisonValue = styled.span<{ isPositive?: boolean; isNegative?: boolean }>`
  color: ${props => {
    if (props.isPositive) return '#059669'
    if (props.isNegative) return '#DC2626'
    return '#6B7280'
  }};
  font-weight: ${props => props.isPositive || props.isNegative ? '600' : '400'};
`

export const AttributeCard = styled.div`
  min-width: 200px;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const AttributeName = styled.div`
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 8px;
  font-size: 14px;
`

export const AttributeValue = styled.div`
  font-size: 12px;
  color: #6B7280;
  margin-bottom: 4px;
`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  color: #6B7280;
  text-align: center;
`

export const EmptyStateIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
`

export const EmptyStateText = styled.p`
  font-size: 14px;
  margin: 0;
`

export const FormulaDetails = styled.div`
  margin-bottom: 16px;
`

export const FormulaDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #F3F4F6;
  }
`

export const FormulaDetailsContent = styled.div`
  padding: 16px;
  background: white;
  border: 1px solid #E5E7EB;
  border-top: none;
  border-radius: 0 0 6px 6px;
`

export const FormulaAttribute = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 12px;
  color: #6B7280;
` 