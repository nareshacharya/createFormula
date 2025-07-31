import React from 'react'
// import { X, ChevronUp, ChevronDown } from 'lucide-react'
import styled from 'styled-components'
import { useFormula } from '../context/FormulaContext'

// Basic styled components
const MatrixContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 12px;
`

const Header = styled.div`
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #E5E7EB;
`

const Content = styled.div`
  flex: 1;
  overflow: auto;
`

const ReferenceMatrix: React.FC = () => {
  const { activeIngredients } = useFormula()

  return (
    <MatrixContainer>
      <Header>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Reference Formula Matrix</h3>
      </Header>
      <Content>
        {activeIngredients.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#6B7280', padding: '20px' }}>
            Add ingredients to see comparison matrix
          </div>
        ) : (
          <div>
            <p>Active ingredients: {activeIngredients.length}</p>
            <ul>
              {activeIngredients.map((ingredient, index) => (
                <li key={index} style={{ fontSize: '12px', marginBottom: '4px' }}>
                  {ingredient.ingredient.name} - {ingredient.concentration}%
                </li>
              ))}
            </ul>
          </div>
        )}
      </Content>
    </MatrixContainer>
  )
}

export default ReferenceMatrix
