export interface IngredientAttributes {
  intensity?: number
  family?: string
  note?: string
  volatility?: 'high' | 'medium' | 'low'
  solubility?: 'water' | 'oil' | 'both'
}

export interface Ingredient {
  id: string
  name: string
  casNumber: string
  category: 'Natural' | 'Synthetic' | 'Solvent' | 'Functional'
  defaultConcentration: number
  costPerMl: number
  tags: string[]
  attributes?: IngredientAttributes
  description?: string
  safetyNotes?: string
  regulatoryStatus?: string
  createdAt: Date
  updatedAt: Date
}

export interface IngredientFilters {
  search?: string
  categories?: string[]
  tags?: string[]
  priceRange?: {
    min: number
    max: number
  }
  attributes?: Partial<IngredientAttributes>
}

export interface IngredientSortOptions {
  field: 'name' | 'costPerMl' | 'defaultConcentration' | 'createdAt'
  direction: 'asc' | 'desc'
}

export class IngredientModel {
  private ingredients: Ingredient[] = []

  constructor(initialData?: Ingredient[]) {
    if (initialData) {
      this.ingredients = initialData
    }
  }

  getAll(): Ingredient[] {
    return [...this.ingredients]
  }

  getById(id: string): Ingredient | undefined {
    return this.ingredients.find(ingredient => ingredient.id === id)
  }

  getByCategory(category: string): Ingredient[] {
    return this.ingredients.filter(ingredient => ingredient.category === category)
  }

  search(query: string): Ingredient[] {
    const searchTerm = query.toLowerCase()
    return this.ingredients.filter(ingredient => 
      ingredient.name.toLowerCase().includes(searchTerm) ||
      ingredient.casNumber.includes(searchTerm) ||
      ingredient.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      ingredient.description?.toLowerCase().includes(searchTerm)
    )
  }

  filter(filters: IngredientFilters): Ingredient[] {
    let filtered = this.ingredients

    if (filters.search) {
      filtered = this.search(filters.search)
    }

    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(ingredient => 
        filters.categories!.includes(ingredient.category)
      )
    }

    if (filters.tags && filters.tags.length > 0) {
      filtered = filtered.filter(ingredient =>
        ingredient.tags.some(tag => filters.tags!.includes(tag))
      )
    }

    if (filters.priceRange) {
      filtered = filtered.filter(ingredient =>
        ingredient.costPerMl >= filters.priceRange!.min &&
        ingredient.costPerMl <= filters.priceRange!.max
      )
    }

    if (filters.attributes) {
      filtered = filtered.filter(ingredient => {
        if (!ingredient.attributes) return false
        
        return Object.entries(filters.attributes!).every(([key, value]) => {
          return ingredient.attributes![key as keyof IngredientAttributes] === value
        })
      })
    }

    return filtered
  }

  sort(ingredients: Ingredient[], options: IngredientSortOptions): Ingredient[] {
    return [...ingredients].sort((a, b) => {
      const aValue = a[options.field]
      const bValue = b[options.field]
      
      if (options.direction === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })
  }

  add(ingredient: Omit<Ingredient, 'id' | 'createdAt' | 'updatedAt'>): Ingredient {
    const newIngredient: Ingredient = {
      ...ingredient,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    this.ingredients.push(newIngredient)
    return newIngredient
  }

  update(id: string, updates: Partial<Ingredient>): Ingredient | null {
    const index = this.ingredients.findIndex(ingredient => ingredient.id === id)
    if (index === -1) return null

    this.ingredients[index] = {
      ...this.ingredients[index],
      ...updates,
      updatedAt: new Date()
    }

    return this.ingredients[index]
  }

  delete(id: string): boolean {
    const index = this.ingredients.findIndex(ingredient => ingredient.id === id)
    if (index === -1) return false

    this.ingredients.splice(index, 1)
    return true
  }

  private generateId(): string {
    return `ing_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
} 