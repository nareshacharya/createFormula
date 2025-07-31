import React from 'react'
import { ResponsiveContainer } from '../styles'
import { FormulaProvider, useFormula } from '../context/FormulaContext'
import LeftPanel from './panels/LeftPanel'
import MiddlePanelComponent from './panels/MiddlePanel'
import RightPanel from './panels/RightPanel'
import MobileToggle from './ui/MobileToggle'

const FormulaBuilderContent: React.FC = () => {
  const { leftPanelCollapsed, rightPanelCollapsed, toggleLeftPanel, toggleRightPanel } = useFormula()

  return (
    <>
      <ResponsiveContainer>
        <MobileToggle 
          isCollapsed={leftPanelCollapsed}
          onToggle={toggleLeftPanel}
          icon="📚"
          label="Ingredients"
        />
        
        <LeftPanel />

        <MiddlePanelComponent />

        <MobileToggle 
          isCollapsed={rightPanelCollapsed}
          onToggle={toggleRightPanel}
          icon="📊"
          label="Reference"
        />

        <RightPanel />
      </ResponsiveContainer>
    </>
  )
}

const FormulaBuilder: React.FC = () => {
  return (
    <FormulaProvider>
      <FormulaBuilderContent />
    </FormulaProvider>
  )
}

export default FormulaBuilder 