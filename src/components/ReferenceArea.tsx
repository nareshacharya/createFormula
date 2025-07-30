import React, { useState } from 'react'
import { ChevronUp } from 'lucide-react'
import {
  ReferenceToggle,
  ToggleButton,
  ComparisonTable,
  ComparisonRow,
  FormulaDetails,
  FormulaDetailsHeader,
  FormulaDetailsContent,
  FormulaAttribute
} from '../styles/styledComponents'

const ReferenceArea: React.FC = () => {
  const [, setSelectedFormula] = useState<string>('ref-001')
  const [detailsExpanded, setDetailsExpanded] = useState(true)

  // Mock reference formulas to match the image
  const referenceFormulas = [
    { id: 'ref-001', name: 'Classic Rose Formula', active: true },
    { id: 'ref-002', name: 'Citrus Fresh Formula', active: false }
  ]

  const formulaDetails = {
    active: '4.3%',
    base: 'Ethanol',
    ph: '6.8',
    cost: '$45.6',
    density: '0.89g/ml',
    stability: 'Excellent'
  }

  const comparisonData = [
    { ingredient: 'Lavender Essential Oil', classicRose: '—', citrusFresh: '—' },
    { ingredient: 'Lavender Absolute', classicRose: '—', citrusFresh: '—' },
    { ingredient: 'Jasmine Absolute', classicRose: '—', citrusFresh: '—' },
    { ingredient: 'Neroli Oil', classicRose: '—', citrusFresh: '—' },
    { ingredient: 'Bergamot Oil', classicRose: '1.8%', citrusFresh: '—' },
    { ingredient: 'Sandalwood Oil', classicRose: '—', citrusFresh: '—' }
  ]

  return (
    <div style={{ padding: '12px' }}>
      <ReferenceToggle style={{ marginTop: '12px' }}>
        {referenceFormulas.map(formula => (
          <ToggleButton
            key={formula.id}
            active={formula.active}
            onClick={() => setSelectedFormula(formula.id)}
          >
            {formula.name}
          </ToggleButton>
        ))}
      </ReferenceToggle>

      <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '16px' }}>
        {referenceFormulas.map(formula => (
          <div key={formula.id} style={{ marginBottom: '4px' }}>
            ID: {formula.id}
          </div>
        ))}
      </div>

      <FormulaDetails>
        <FormulaDetailsHeader onClick={() => setDetailsExpanded(!detailsExpanded)}>
          <span>Formula Details</span>
          <ChevronUp 
            size={16} 
            style={{ 
              transform: detailsExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
              transition: 'transform 0.2s'
            }} 
          />
        </FormulaDetailsHeader>
        
        {detailsExpanded && (
          <FormulaDetailsContent>
            <FormulaAttribute>
              <span>Active</span>
              <span>{formulaDetails.active}</span>
            </FormulaAttribute>
            <FormulaAttribute>
              <span>Base</span>
              <span>{formulaDetails.base}</span>
            </FormulaAttribute>
            <FormulaAttribute>
              <span>pH</span>
              <span>{formulaDetails.ph}</span>
            </FormulaAttribute>
            <FormulaAttribute>
              <span>Cost</span>
              <span>{formulaDetails.cost}</span>
            </FormulaAttribute>
            <FormulaAttribute>
              <span>Density</span>
              <span>{formulaDetails.density}</span>
            </FormulaAttribute>
            <FormulaAttribute>
              <span>Stability</span>
              <span>{formulaDetails.stability}</span>
            </FormulaAttribute>
          </FormulaDetailsContent>
        )}
      </FormulaDetails>

      <ComparisonTable>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr 1fr', 
          gap: '8px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#374151',
          padding: '8px 0',
          borderBottom: '1px solid #E5E7EB'
        }}>
          <div>Ingredient</div>
          <div>Classic Rose Formula</div>
          <div>Citrus Fresh Formula</div>
        </div>
        
        {comparisonData.map((item, index) => (
          <ComparisonRow key={index}>
            <div style={{ fontSize: '12px', color: '#374151' }}>
              {item.ingredient}
            </div>
            <div style={{ fontSize: '12px' }}>
              {item.classicRose === '—' ? (
                <span style={{ color: '#DC2626' }}>Missing</span>
              ) : (
                <span style={{ color: '#059669' }}>
                  {item.classicRose}
                  <br />
                  <span style={{ color: '#059669' }}>+13.2%</span>
                </span>
              )}
            </div>
            <div style={{ fontSize: '12px' }}>
              {item.citrusFresh === '—' ? (
                <span style={{ color: '#DC2626' }}>Missing</span>
              ) : (
                <span style={{ color: '#059669' }}>{item.citrusFresh}</span>
              )}
            </div>
          </ComparisonRow>
        ))}
      </ComparisonTable>
    </div>
  )
}

export default ReferenceArea 