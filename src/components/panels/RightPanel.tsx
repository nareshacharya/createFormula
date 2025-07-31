import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { ResponsiveRightPanel, PanelToggle, PanelTitle, RightPanelHeader } from '../../styles'
import { useFormula } from '../../context/FormulaContext'
import ReferenceArea from '../ReferenceArea'
import CollapsedPanelContent from '../ui/CollapsedPanelContent'

const RightPanel: React.FC = () => {
  const { rightPanelCollapsed, toggleRightPanel } = useFormula()

  return (
    <ResponsiveRightPanel collapsed={rightPanelCollapsed}>
      {!rightPanelCollapsed ? (
        <>
          <RightPanelHeader>
            <PanelTitle>References</PanelTitle>
          </RightPanelHeader>
          <ReferenceArea />
        </>
      ) : (
        <CollapsedPanelContent
          icon=""
          title="References"
        />
      )}
      <PanelToggle 
        className="right"
        onClick={toggleRightPanel}
      >
        {rightPanelCollapsed ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </PanelToggle>
    </ResponsiveRightPanel>
  )
}

export default RightPanel 