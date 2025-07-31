import React from 'react'
import { MobileToggle as StyledMobileToggle } from '../../styles'

interface MobileToggleProps {
  isCollapsed: boolean
  onToggle: () => void
  icon: string
  label: string
}

const MobileToggle: React.FC<MobileToggleProps> = ({ isCollapsed, onToggle, icon, label }) => {
  return (
    <StyledMobileToggle onClick={onToggle}>
      {isCollapsed ? `${icon} Show ${label}` : `${icon} Hide ${label}`}
    </StyledMobileToggle>
  )
}

export default MobileToggle 