import styled from 'styled-components'

export const MatrixContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`

export const MatrixHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px 8px 12px;
  border-bottom: 1px solid #E5E7EB;
  flex-shrink: 0;
`

export const ViewToggle = styled.div`
  display: flex;
  background: #F3F4F6;
  border-radius: 6px;
  padding: 2px;
`

export const ViewToggleButton = styled.button<{ active: boolean }>`
  padding: 6px 12px;
  border: none;
  background: \${props => props.active ? '#FFFFFF' : 'transparent'};
  color: \${props => props.active ? '#374151' : '#6B7280'};
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: \${props => props.active ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none'};

  &:hover {
    color: #374151;
  }
`

export const MatrixScrollContainer = styled.div`
  flex: 1;
  overflow: auto;
  min-height: 0;
`

export const MatrixGrid = styled.div<{ columnCount: number }>`
  display: grid;
  grid-template-columns: 200px repeat(\${props => props.columnCount}, 180px);
  min-height: 100%;
`

export const IngredientColumn = styled.div`
  border-right: 1px solid #E5E7EB;
  background: #F9FAFB;
  overflow: hidden;
`

export const IngredientColumnHeader = styled.div`
  padding: 12px;
  background: #F3F4F6;
  border-bottom: 1px solid #E5E7EB;
  font-size: 11px;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const FormulaColumn = styled.div`
  border-right: 1px solid #E5E7EB;
  background: white;
  overflow: hidden;
`

export const FormulaCard = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  border-bottom: 1px solid #E5E7EB;
  padding: 12px;
`

export const FormulaCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const FormulaTitle = styled.h4`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  margin: 0;
  line-height: 1.3;
`

export const FormulaId = styled.div`
  font-size: 10px;
  color: #6B7280;
  margin-bottom: 8px;
`

export const RemoveFormulaButton = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: #F3F4F6;
  color: #6B7280;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: all 0.2s;

  &:hover {
    background: #EF4444;
    color: white;
  }
`

export const FormulaMetadata = styled.div<{ expanded: boolean }>`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: \${props => props.expanded ? '200px' : '0px'};
`

export const MetadataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 8px;
  font-size: 10px;
`

export const MetadataItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`

export const MetadataLabel = styled.span`
  color: #6B7280;
  font-weight: 500;
`

export const MetadataValue = styled.span`
  color: #374151;
  font-weight: 600;
`

export const ExpandToggle = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  background: transparent;
  color: #6B7280;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 4px;
  border-top: 1px solid #E5E7EB;

  &:hover {
    color: #374151;
  }
`

export const MatrixRow = styled.div<{ columnCount: number }>`
  display: grid;
  grid-template-columns: 200px repeat(\${props => props.columnCount}, 180px);
  border-bottom: 1px solid #E5E7EB;
  min-height: 44px;

  &:hover {
    background: #F9FAFB;
  }
`

export const IngredientNameCell = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #E5E7EB;
  background: #F9FAFB;
`

export const IngredientName = styled.div`
  font-size: 12px;
  color: #374151;
  font-weight: 500;
  line-height: 1.3;
`

export const ActiveConcentration = styled.div`
  font-size: 11px;
  color: #6B7280;
  margin-top: 2px;
`

export const ComparisonCell = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #E5E7EB;
  text-align: center;
`

export const ConcentrationValue = styled.div<{ missing?: boolean }>`
  font-size: 12px;
  font-weight: 600;
  color: \${props => props.missing ? '#DC2626' : '#374151'};
  line-height: 1.3;
`

export const DeltaValue = styled.div<{ positive?: boolean; negative?: boolean }>`
  font-size: 10px;
  font-weight: 500;
  margin-top: 2px;
  color: \${props => 
    props.positive ? '#059669' : 
    props.negative ? '#DC2626' : 
    '#6B7280'
  };
`

export const MissingIndicator = styled.div`
  font-size: 12px;
  color: #DC2626;
  font-weight: 500;
`

export const MatrixFooter = styled.div`
  padding: 8px 12px;
  background: #F9FAFB;
  border-top: 1px solid #E5E7EB;
  font-size: 11px;
  color: #6B7280;
  text-align: center;
  flex-shrink: 0;
`
