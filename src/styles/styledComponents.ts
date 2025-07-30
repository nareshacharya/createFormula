import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #F9FBFD;
  font-family: 'Inter', sans-serif;
  gap: 0;
`

export const Panel = styled.div<{ width?: string }>`
  background: white;
  border-radius: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: ${props => props.width || 'auto'};
  min-width: 0;
`

export const LeftPanel = styled(Panel)<{ collapsed?: boolean }>`
  width: ${props => props.collapsed ? '60px' : '240px'};
  flex-shrink: 0;
  transition: width 0.3s ease;
  overflow: hidden;
`

export const MiddlePanel = styled(Panel)`
  flex: 1;
  min-width: 0;
  border-left: 1px solid #E5E7EB;
  border-right: 1px solid #E5E7EB;
`

export const RightPanel = styled(Panel)<{ collapsed?: boolean }>`
  width: ${props => props.collapsed ? '60px' : '600px'};
  flex-shrink: 0;
  transition: width 0.3s ease;
  overflow: hidden;
  height:100%;
`

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 12px;
  border-bottom: 1px solid #E5E7EB;
`

export const LeftPanelHeader = styled(PanelHeader)`
  background: rgb(245, 235, 247); /* Light purple */
`

export const MiddlePanelHeader = styled(PanelHeader)`
  background: rgb(239, 246, 255); /* Light blue */
`

export const RightPanelHeader = styled(PanelHeader)`
  background: rgb(254, 242, 242); /* Light red/pink */
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`

export const HeaderActionButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;

  &.save {
    background: #10B981;
    color: white;
  }

  &.share {
    background: #3B82F6;
    color: white;
  }

  &.download {
    background: #F59E0B;
    color: white;
  }

  &.calculator {
    background: #6B7280;
    color: white;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

export const PanelTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1F2937;
  margin: 0;
`

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

export const CategoryFilter = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
  flex-wrap: wrap;
  padding: 0 12px;
`

export const FilterChip = styled.button<{ active?: boolean }>`
  padding: 6px 12px;
  border: 1px solid ${props => props.active ? '#3B82F6' : '#D1D5DB'};
  border-radius: 16px;
  background: ${props => props.active ? '#3B82F6' : 'white'};
  color: ${props => props.active ? 'white' : '#6B7280'};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3B82F6;
    color: ${props => props.active ? 'white' : '#3B82F6'};
  }
`

export const IngredientCard = styled.div`
  padding: 10px 12px 2px 12px;
  border-bottom: 1px solid #E5E7EB;
  border-radius: 0px;
  margin-bottom: 0px;
  background: white;
  cursor: grab;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
    border-top: 1px solid #10B981;
    border-bottom: 1px solid #10B981;
  }

  &:active {
    cursor: grabbing;
  }
`

export const IngredientName = styled.div`
  font-weight: 400;
  color: #1F2937;
  margin-bottom: 4px;
`

export const IngredientMeta = styled.div`
  font-size: 12px;
  color: #6B7280;
  margin-bottom: 6px;
`

export const IngredientTags = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background: #F3F4F6;
  color: #6B7280;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 500;
`

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

export const ActionButton = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: #6B7280;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;

  &:hover {
    background: #F3F4F6;
    color: #1F2937;
  }

  &.delete:hover {
    background: #FEF2F2;
    color: #DC2626;
  }
`

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

export const PanelToggle = styled.button`
  position: absolute;
  top: 24px;
  right: 8px;
  transform: translateY(-50%);
  width: 36px;
  height:36px;
  background: transparent;
  border: 0;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #6B7280;
  transition: all 0.2s;
  z-index: 10;
  font-weight: 500;

  &:hover {
    background:rgba(250, 249, 251, 0.4);
    color: #1F2937;
  }

  &.right {
    border-radius: 24px;
    right: 12px;
  }
`

export const MobileToggle = styled.button`
  display: none;
  padding: 8px;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    display: block;
  }
`

// Responsive styles
export const ResponsiveContainer = styled(Container)`
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

export const ResponsiveLeftPanel = styled(LeftPanel)`
  position: relative;
  
  @media (max-width: 768px) {
    width: 100% !important;
    margin: 8px;
  }
`

export const ResponsiveRightPanel = styled(RightPanel)`
  position: relative;
  
  @media (max-width: 768px) {
    width: 100% !important;
    margin: 8px;
  }
`

// Global Header Styles
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

export const GlobalActionButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`

export const GlobalActionButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  background: #F3F4F6;
  color: #6B7280;

  &:hover {
    background: #E5E7EB;
    color: #374151;
    transform: translateY(-1px);
  }

  &.layout:hover {
    background: #DBEAFE;
    color: #1D4ED8;
  }

  &.share:hover {
    background: #DBEAFE;
    color: #1D4ED8;
  }

  &.download:hover {
    background: #FEF3C7;
    color: #D97706;
  }

  &.calculator:hover {
    background: #E0E7FF;
    color: #5B21B6;
  }
`

// Search and Filter Components
export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 12px;
  padding: 0 12px;
`

export const SearchIcon = styled.div`
  position: absolute;
  left: 24px;
  top: 55%;
  transform: translateY(-50%);
  color: #9CA3AF;
  z-index: 1;
`

export const FilterIcon = styled.button`
  position: absolute;
  right: 16px;
  top: 52%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9CA3AF;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: #F3F4F6;
    color: #6B7280;
  }
`

// Formula Details Components
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