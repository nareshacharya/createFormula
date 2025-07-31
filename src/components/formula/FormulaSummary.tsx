import React from 'react'
import { TrendingUp } from 'lucide-react'
import { FormulaSummary as FormulaSummaryType } from '../../models/Formula'
import { SummaryRow, SummaryItem, SummaryLabel, SummaryValue } from '../../styles'

interface FormulaSummaryProps {
  summary: FormulaSummaryType
}

const FormulaSummary: React.FC<FormulaSummaryProps> = ({ summary }) => {
  return (
    <SummaryRow>
      <SummaryItem>
        <SummaryLabel>Total Weight</SummaryLabel>
        <SummaryValue style={{ color: '#059669' }}>{summary.totalWeight.toFixed(2)}g</SummaryValue>
      </SummaryItem>
      
      <SummaryItem>
        <SummaryLabel>Total Cost</SummaryLabel>
        <SummaryValue style={{ color: '#D97706' }}>${summary.totalCost.toFixed(2)}</SummaryValue>
      </SummaryItem>
      
      <SummaryItem>
        <SummaryLabel>Ingredients</SummaryLabel>
        <SummaryValue style={{ color: '#2563EB' }}>{summary.ingredientCount}</SummaryValue>
      </SummaryItem>
      
      <SummaryItem>
        <SummaryLabel>Total Concentration</SummaryLabel>
        <SummaryValue style={{ color: '#2563EB', display: 'flex', alignItems: 'center', gap: '4px' }}>
          {summary.totalConcentration.toFixed(1)}%
          <TrendingUp size={14} />
        </SummaryValue>
      </SummaryItem>
      
      <div></div>
    </SummaryRow>
  )
}

export default FormulaSummary 