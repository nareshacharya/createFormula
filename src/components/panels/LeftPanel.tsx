import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { ResponsiveLeftPanel, PanelToggle, PanelTitle, LeftPanelHeader } from '../../styles/styledComponents'
import { useFormula } from '../../context/FormulaContext'
import IngredientsLibrary from '../IngredientsLibrary'
import CollapsedPanelContent from '../ui/CollapsedPanelContent'

const LeftPanel: React.FC = () => {
  const { leftPanelCollapsed, toggleLeftPanel } = useFormula()

  return (
    <ResponsiveLeftPanel collapsed={leftPanelCollapsed}>
      {!leftPanelCollapsed ? (
        <>
          <LeftPanelHeader>
            <PanelTitle>Ingredients</PanelTitle>
          </LeftPanelHeader>
          <IngredientsLibrary />
        </>
      ) : (
        <CollapsedPanelContent
          icon=""
          title="Ingredients"
        />
      )}
      <PanelToggle onClick={toggleLeftPanel}>
        {leftPanelCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </PanelToggle>
    </ResponsiveLeftPanel>
  )
}

export default LeftPanel 