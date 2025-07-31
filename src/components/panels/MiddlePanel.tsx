import React from 'react'
import { MiddlePanel } from '../../styles'
import { useFormula } from '../../context/FormulaContext'
import ActiveFormulaCanvas from '../ActiveFormulaCanvas'

const MiddlePanelComponent: React.FC = () => {
  const { 
    activeIngredients, 
    batchSize, 
    batchUnit, 
    updateIngredient, 
    removeIngredient, 
    formulaSummary 
  } = useFormula()

  return (
    <MiddlePanel>
      <ActiveFormulaCanvas
        ingredients={activeIngredients}
        batchSize={batchSize}
        batchUnit={batchUnit}
        onUpdateIngredient={updateIngredient}
        onRemoveIngredient={removeIngredient}
        summary={formulaSummary}
      />
    </MiddlePanel>
  )
}

export default MiddlePanelComponent 