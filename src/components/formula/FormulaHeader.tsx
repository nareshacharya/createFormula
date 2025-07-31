import React from 'react'
import { Save, Share2, Download, Calculator } from 'lucide-react'
import { 
  MiddlePanelHeader, 
  PanelTitle, 
  HeaderActions, 
  ActionButtonGroup, 
  HeaderActionButton
} from '../../styles'

interface FormulaHeaderProps {
  ingredientCount: number
  batchSize: number
  batchUnit: 'ml' | 'g'
}

const FormulaHeader: React.FC<FormulaHeaderProps> = ({
  batchSize,
  batchUnit
}) => {
  return (
    <MiddlePanelHeader>
      <div>
        <PanelTitle>Active Formula</PanelTitle>
        {/* <div style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>
          {ingredientCount} ingredients
        </div> */}
      </div>
      
      <HeaderActions>
        <div style={{ fontSize: '14px', color: '#6B7280' }}>
          Batch Size: {batchSize.toFixed(2)} {batchUnit}
        </div>
        
        <ActionButtonGroup>
          <HeaderActionButton className="save" title="Save Formula">
            <Save size={16} />
          </HeaderActionButton>
          <HeaderActionButton className="share" title="Share Formula">
            <Share2 size={16} />
          </HeaderActionButton>
          <HeaderActionButton className="download" title="Download Formula">
            <Download size={16} />
          </HeaderActionButton>
          <HeaderActionButton className="calculator" title="Calculate">
            <Calculator size={16} />
          </HeaderActionButton>
        </ActionButtonGroup>
      </HeaderActions>
    </MiddlePanelHeader>
  )
}

export default FormulaHeader 