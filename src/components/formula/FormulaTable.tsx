import React from 'react'
import { Trash2, Info } from 'lucide-react'
import { FormulaIngredient } from '../../models/Formula'
import {
  FormulaTable as StyledFormulaTable,
  TableHeader,
  TableRow,
  TableCell,
  EditableCell,
  ActionButton
} from '../../styles/styledComponents'

interface FormulaTableProps {
  ingredients: FormulaIngredient[]
  batchSize: number
  batchUnit: 'ml' | 'g'
  onUpdateIngredient: (id: string, updates: Partial<FormulaIngredient>) => void
  onRemoveIngredient: (id: string) => void
}

const FormulaTable: React.FC<FormulaTableProps> = ({
  ingredients,
  batchSize,
  batchUnit,
  onUpdateIngredient,
  onRemoveIngredient
}) => {
  const handleConcentrationChange = (id: string, concentration: number) => {
    const ingredient = ingredients.find(i => i.id === id)
    if (ingredient) {
      const quantity = (concentration * batchSize) / 100
      onUpdateIngredient(id, { concentration, quantity })
    }
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    const ingredient = ingredients.find(i => i.id === id)
    if (ingredient) {
      const concentration = (quantity / batchSize) * 100
      onUpdateIngredient(id, { quantity, concentration })
    }
  }

  const calculateCost = (ingredient: FormulaIngredient) => {
    return ingredient.quantity * ingredient.ingredient.costPerMl
  }

  if (ingredients.length === 0) {
    return (
      <StyledFormulaTable>
        <div style={{
          padding: '40px 20px',
          textAlign: 'center',
          color: '#6B7280',
          fontSize: '14px'
        }}>
          No ingredients added yet. Select ingredients from the library to build your formula.
        </div>
      </StyledFormulaTable>
    )
  }

  return (
    <StyledFormulaTable>
      <TableHeader>
        <div>Ingredient Name</div>
        <div>Concentration (%)</div>
        <div>Quantity ({batchUnit})</div>
        <div>Cost ($)</div>
        <div>Actions</div>
      </TableHeader>

      {ingredients.map(ingredient => (
        <TableRow key={ingredient.id}>
          <TableCell>
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>{ingredient.ingredient.name}</div>
              <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>
                CAS: {ingredient.ingredient.casNumber}
              </div>
            </div>
          </TableCell>
          
          <TableCell>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <EditableCell
                type="number"
                value={ingredient.concentration.toFixed(2)}
                onChange={(e) => handleConcentrationChange(ingredient.id, Number(e.target.value))}
                step="0.01"
                min="0"
                max="100"
              />
              <span style={{ fontSize: '14px', color: '#6B7280' }}>%</span>
            </div>
          </TableCell>
          
          <TableCell>
            <EditableCell
              type="number"
              value={ingredient.quantity.toFixed(2)}
              onChange={(e) => handleQuantityChange(ingredient.id, Number(e.target.value))}
              step="0.01"
              min="0"
            />
          </TableCell>
          
          <TableCell>
            ${calculateCost(ingredient).toFixed(2)}
          </TableCell>
          
          <TableCell>
            <div style={{ display: 'flex', gap: '4px' }}>
              <ActionButton
                title="Ingredient Info"
                style={{ width: '28px', height: '28px', borderRadius: '50%' }}
              >
                <Info size={14} />
              </ActionButton>
              <ActionButton
                onClick={() => onRemoveIngredient(ingredient.id)}
                className="delete"
                title="Remove ingredient"
                style={{ width: '28px', height: '28px', borderRadius: '50%' }}
              >
                <Trash2 size={14} />
              </ActionButton>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </StyledFormulaTable>
  )
}

export default FormulaTable 