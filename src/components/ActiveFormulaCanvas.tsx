import React from 'react'
import { FormulaIngredient, FormulaSummary } from '../models/Formula'
import FormulaHeader from './formula/FormulaHeader'
import FormulaTable from './formula/FormulaTable'
import FormulaSummaryComponent from './formula/FormulaSummary'

interface ActiveFormulaCanvasProps {
  ingredients: FormulaIngredient[]
  batchSize: number
  batchUnit: 'ml' | 'g'
  onUpdateIngredient: (id: string, updates: Partial<FormulaIngredient>) => void
  onRemoveIngredient: (id: string) => void
  summary: FormulaSummary
}

const ActiveFormulaCanvas: React.FC<ActiveFormulaCanvasProps> = ({
  ingredients,
  batchSize,
  batchUnit,
  onUpdateIngredient,
  onRemoveIngredient,
  summary
}) => {
  return (
    <>
      <FormulaHeader
        ingredientCount={ingredients.length}
        batchSize={batchSize}
        batchUnit={batchUnit}
      />

      <FormulaTable
        ingredients={ingredients}
        batchSize={batchSize}
        batchUnit={batchUnit}
        onUpdateIngredient={onUpdateIngredient}
        onRemoveIngredient={onRemoveIngredient}
      />

      {ingredients.length > 0 && (
        <FormulaSummaryComponent
          summary={summary}
        />
      )}
    </>
  )
}

export default ActiveFormulaCanvas 