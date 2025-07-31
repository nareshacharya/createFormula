import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react'
import { Ingredient } from '../models/Ingredient'
import { FormulaIngredient, FormulaSummary } from '../models/Formula'
import { ReferenceFormula, ViewMode } from '../types/ReferenceFormula'

interface FormulaContextType {
  // State
  activeIngredients: FormulaIngredient[]
  batchSize: number
  batchUnit: 'ml' | 'g'
  leftPanelCollapsed: boolean
  rightPanelCollapsed: boolean
  referenceFormulas: ReferenceFormula[]
  viewMode: ViewMode
  
  // Actions
  addIngredient: (ingredient: Ingredient) => void
  updateIngredient: (id: string, updates: Partial<FormulaIngredient>) => void
  removeIngredient: (id: string) => void
  setBatchSize: (size: number) => void
  setBatchUnit: (unit: 'ml' | 'g') => void
  toggleLeftPanel: () => void
  toggleRightPanel: () => void
  addReferenceFormula: (formula: ReferenceFormula) => void
  removeReferenceFormula: (formulaId: string) => void
  setViewMode: (mode: ViewMode) => void
  
  // Computed values
  formulaSummary: FormulaSummary
}

const FormulaContext = createContext<FormulaContextType | undefined>(undefined)

interface FormulaProviderProps {
  children: ReactNode
}

export const FormulaProvider: React.FC<FormulaProviderProps> = ({ children }) => {
  const [activeIngredients, setActiveIngredients] = useState<FormulaIngredient[]>([])
  const [batchSize, setBatchSizeState] = useState(100)
  const [batchUnit, setBatchUnitState] = useState<'ml' | 'g'>('ml')
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false)
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false)
  const [referenceFormulas, setReferenceFormulas] = useState<ReferenceFormula[]>([])
  const [viewMode, setViewModeState] = useState<ViewMode>('matrix')

  const addIngredient = useCallback((ingredient: Ingredient) => {
    const newFormulaIngredient: FormulaIngredient = {
      id: `${ingredient.id}-${Date.now()}`,
      ingredient,
      concentration: ingredient.defaultConcentration,
      quantity: (ingredient.defaultConcentration * batchSize) / 100,
      unit: batchUnit
    }
    setActiveIngredients(prev => [...prev, newFormulaIngredient])
  }, [batchSize, batchUnit])

  const updateIngredient = useCallback((id: string, updates: Partial<FormulaIngredient>) => {
    setActiveIngredients(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    )
  }, [])

  const removeIngredient = useCallback((id: string) => {
    setActiveIngredients(prev => prev.filter(item => item.id !== id))
  }, [])

  const setBatchSize = useCallback((size: number) => {
    setBatchSizeState(size)
    // Recalculate all quantities based on new batch size
    setActiveIngredients(prev => 
      prev.map(ingredient => ({
        ...ingredient,
        quantity: (ingredient.concentration * size) / 100
      }))
    )
  }, [])

  const setBatchUnit = useCallback((unit: 'ml' | 'g') => {
    setBatchUnitState(unit)
  }, [])

  const toggleLeftPanel = useCallback(() => {
    setLeftPanelCollapsed(prev => !prev)
  }, [])

  const toggleRightPanel = useCallback(() => {
    setRightPanelCollapsed(prev => !prev)
  }, [])

  const addReferenceFormula = useCallback((formula: ReferenceFormula) => {
    setReferenceFormulas(prev => [...prev, formula])
  }, [])

  const removeReferenceFormula = useCallback((formulaId: string) => {
    setReferenceFormulas(prev => prev.filter(f => f.metadata.id !== formulaId))
  }, [])

  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode)
  }, [])

  const formulaSummary: FormulaSummary = useMemo(() => {
    const totalWeight = activeIngredients.reduce((sum, item) => sum + item.quantity, 0)
    const totalCost = activeIngredients.reduce((sum, item) => sum + (item.quantity * item.ingredient.costPerMl), 0)
    const totalConcentration = activeIngredients.reduce((sum, item) => sum + item.concentration, 0)
    const averageCostPerMl = totalWeight > 0 ? totalCost / totalWeight : 0
    
    return {
      totalWeight,
      totalCost,
      ingredientCount: activeIngredients.length,
      totalConcentration,
      averageCostPerMl
    }
  }, [activeIngredients])

  const value: FormulaContextType = {
    activeIngredients,
    batchSize,
    batchUnit,
    leftPanelCollapsed,
    rightPanelCollapsed,
    referenceFormulas,
    viewMode,
    addIngredient,
    updateIngredient,
    removeIngredient,
    setBatchSize,
    setBatchUnit,
    toggleLeftPanel,
    toggleRightPanel,
    addReferenceFormula,
    removeReferenceFormula,
    setViewMode,
    formulaSummary
  }

  return (
    <FormulaContext.Provider value={value}>
      {children}
    </FormulaContext.Provider>
  )
}

export const useFormula = (): FormulaContextType => {
  const context = useContext(FormulaContext)
  if (context === undefined) {
    throw new Error('useFormula must be used within a FormulaProvider')
  }
  return context
} 