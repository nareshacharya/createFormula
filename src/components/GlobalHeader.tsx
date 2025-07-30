import React from 'react'
import { Share2, Download, Calculator } from 'lucide-react'
import { useFormula } from '../context/FormulaContext'
import {
  GlobalHeaderContainer,
  GlobalHeaderContent,
  GlobalBatchSizeSelector,
  GlobalBatchSizeInput,
  GlobalUnitSelect,
  GlobalActionButtonGroup,
  GlobalActionButton
} from '../styles/styledComponents'

const GlobalHeader: React.FC = () => {
  const { batchSize, batchUnit, setBatchSize, setBatchUnit } = useFormula()

  return (
    <GlobalHeaderContainer>
      <GlobalHeaderContent>
        <GlobalBatchSizeSelector>
          <span>Batch Size: {batchSize.toFixed(2)} {batchUnit}</span>
          <GlobalBatchSizeInput
            type="number"
            value={batchSize}
            onChange={(e) => setBatchSize(Number(e.target.value))}
            min="1"
            step="0.01"
          />
          <GlobalUnitSelect
            value={batchUnit}
            onChange={(e) => setBatchUnit(e.target.value as 'ml' | 'g')}
          >
            <option value="ml">ml</option>
            <option value="g">g</option>
          </GlobalUnitSelect>
        </GlobalBatchSizeSelector>

        <GlobalActionButtonGroup>
          <GlobalActionButton className="layout" title="Layout">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </GlobalActionButton>
          <GlobalActionButton className="share" title="Share">
            <Share2 size={16} />
          </GlobalActionButton>
          <GlobalActionButton className="download" title="Download">
            <Download size={16} />
          </GlobalActionButton>
          <GlobalActionButton className="calculator" title="Calculator">
            <Calculator size={16} />
          </GlobalActionButton>
        </GlobalActionButtonGroup>
      </GlobalHeaderContent>
    </GlobalHeaderContainer>
  )
}

export default GlobalHeader 