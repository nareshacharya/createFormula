import React, { useState, useMemo } from 'react'
import { Search, Filter, Check } from 'lucide-react'
import { Ingredient } from '../models/Ingredient'
import { useFormula } from '../context/FormulaContext'
import { mockIngredients } from '../data/mockData'
import {
  SearchInput,
  CategoryFilter,
  FilterChip,
  IngredientCard,
  IngredientName,
  IngredientMeta,
  IngredientTags,
  Tag,
  SearchContainer,
  SearchIcon,
  FilterIcon
} from '../styles/styledComponents'

const IngredientsLibrary: React.FC = () => {
  const { addIngredient, activeIngredients } = useFormula()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Get IDs of ingredients already in the active formula
  const activeIngredientIds = useMemo(() => 
    new Set(activeIngredients.map(item => item.ingredient.id)), 
    [activeIngredients]
  )

  const categories = ['Natural', 'Synthetic', 'Solvent', 'Functional']

  const filteredIngredients = useMemo(() => {
    return mockIngredients.filter(ingredient => {
      const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ingredient.casNumber.includes(searchTerm) ||
                          ingredient.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategories.length === 0 || 
                            selectedCategories.includes(ingredient.category)
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategories])

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const handleIngredientClick = (ingredient: Ingredient) => {
    // Don't add if already in active formula
    if (!activeIngredientIds.has(ingredient.id)) {
      addIngredient(ingredient)
    }
  }

  return (
    <>
      <SearchContainer>
        <SearchIcon>
          <Search size={16} />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search ingredients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterIcon title="Filter">
          <Filter size={16} />
        </FilterIcon>
      </SearchContainer>

      <CategoryFilter>
        {categories.map(category => (
          <FilterChip
            key={category}
            active={selectedCategories.includes(category)}
            onClick={() => handleCategoryToggle(category)}
          >
            {category}
          </FilterChip>
        ))}
      </CategoryFilter>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {filteredIngredients.map(ingredient => {
          const isSelected = activeIngredientIds.has(ingredient.id)
          
          return (
            <IngredientCard
              key={ingredient.id}
              onClick={() => handleIngredientClick(ingredient)}
              title={isSelected ? `${ingredient.name} is already in formula` : `Click to add ${ingredient.name} to formula`}
              style={{
                backgroundColor: isSelected ? '#f0ffec' : '#ffffff',
                cursor: isSelected ? 'not-allowed' : 'pointer',
                position: 'relative'
              }}
            >
              <IngredientName>{ingredient.name}</IngredientName>
              <IngredientMeta>
                CAS: {ingredient.casNumber} {/*• {ingredient.category}*/}
              </IngredientMeta>
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  right: '12px',
                  bottom: '0',
                  transform: 'translateY(-50%)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: '',
                  gap: '4px'
                }}>
                  <Check size={16} />
                  <span style={{ fontSize: '12px', fontWeight: '500' }}>Added</span>
                </div>
              )}
              {/*
              <IngredientMeta>
                Default: {ingredient.defaultConcentration}% • ${ingredient.costPerMl.toFixed(2)}/ml
              </IngredientMeta>
              <IngredientTags>
                {ingredient.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </IngredientTags>
              */}
            </IngredientCard>
          )
        })}
        
        {filteredIngredients.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px 20px',
            color: '#6B7280',
            fontSize: '14px'
          }}>
            {searchTerm || selectedCategories.length > 0 
              ? 'No ingredients match your search criteria'
              : 'No ingredients available'
            }
          </div>
        )}
      </div>
    </>
  )
}

export default IngredientsLibrary 