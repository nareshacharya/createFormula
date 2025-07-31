import styled from 'styled-components'

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