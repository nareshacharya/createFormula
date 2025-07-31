import styled from 'styled-components'

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