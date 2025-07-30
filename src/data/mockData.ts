import { Ingredient } from '../models/Ingredient'
import { Formula } from '../models/Formula'

export const mockIngredients: Ingredient[] = [
  {
    id: '1',
    name: 'Lavender Essential Oil',
    casNumber: '470-82-6',
    category: 'Natural',
    defaultConcentration: 10.0,
    costPerMl: 1.0,
    tags: ['floral', 'herbal', 'calming'],
    attributes: {
      intensity: 8,
      family: 'Floral',
      note: 'Top',
      volatility: 'high',
      solubility: 'oil'
    },
    description: 'Pure lavender essential oil with calming properties',
    safetyNotes: 'Generally recognized as safe. Avoid during pregnancy.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Bergamot Essential Oil',
    casNumber: '8007-75-8',
    category: 'Natural',
    defaultConcentration: 1.5,
    costPerMl: 0.12,
    tags: ['citrus', 'fresh', 'energizing'],
    attributes: {
      intensity: 7,
      family: 'Citrus',
      note: 'Top',
      volatility: 'high',
      solubility: 'oil'
    },
    description: 'Fresh citrus essential oil with uplifting properties',
    safetyNotes: 'Phototoxic. Avoid sun exposure after application.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '3',
    name: 'Vanilla Absolute',
    casNumber: '8024-06-4',
    category: 'Natural',
    defaultConcentration: 0.5,
    costPerMl: 2.50,
    tags: ['sweet', 'warm', 'comforting'],
    attributes: {
      intensity: 6,
      family: 'Oriental',
      note: 'Base',
      volatility: 'low',
      solubility: 'oil'
    },
    description: 'Rich vanilla absolute with warm, sweet aroma',
    safetyNotes: 'Generally safe. May cause skin sensitivity in some individuals.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '4',
    name: 'Sandalwood Essential Oil',
    casNumber: '8006-87-9',
    category: 'Natural',
    defaultConcentration: 1.0,
    costPerMl: 3.20,
    tags: ['woody', 'earthy', 'grounding'],
    attributes: {
      intensity: 5,
      family: 'Woody',
      note: 'Base',
      volatility: 'low',
      solubility: 'oil'
    },
    description: 'Precious sandalwood essential oil with deep woody notes',
    safetyNotes: 'Generally safe. Endangered species - use sustainably sourced.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '5',
    name: 'Iso E Super',
    casNumber: '54464-57-2',
    category: 'Synthetic',
    defaultConcentration: 3.0,
    costPerMl: 0.08,
    tags: ['woody', 'amber', 'fixative'],
    attributes: {
      intensity: 4,
      family: 'Amber',
      note: 'Base',
      volatility: 'low',
      solubility: 'oil'
    },
    description: 'Synthetic amber molecule with excellent fixative properties',
    safetyNotes: 'Generally safe. May cause skin sensitivity.',
    regulatoryStatus: 'IFRA Compliant',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '6',
    name: 'Hedione',
    casNumber: '24851-98-7',
    category: 'Synthetic',
    defaultConcentration: 2.5,
    costPerMl: 0.22,
    tags: ['floral', 'jasmine', 'fresh'],
    attributes: {
      intensity: 6,
      family: 'Floral',
      note: 'Middle',
      volatility: 'medium',
      solubility: 'oil'
    },
    description: 'Synthetic jasmine molecule with fresh floral character',
    safetyNotes: 'Generally safe. May cause skin sensitivity.',
    regulatoryStatus: 'IFRA Compliant',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '7',
    name: 'Ethanol',
    casNumber: '64-17-5',
    category: 'Solvent',
    defaultConcentration: 0,
    costPerMl: 0.02,
    tags: ['solvent', 'carrier'],
    attributes: {
      intensity: 1,
      family: 'Solvent',
      note: 'Carrier',
      volatility: 'high',
      solubility: 'both'
    },
    description: 'Food-grade ethanol for fragrance dilution',
    safetyNotes: 'Flammable. Keep away from open flames.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '8',
    name: 'Rose Absolute',
    casNumber: '8007-01-0',
    category: 'Natural',
    defaultConcentration: 0.3,
    costPerMl: 8.50,
    tags: ['floral', 'romantic', 'luxurious'],
    attributes: {
      intensity: 9,
      family: 'Floral',
      note: 'Middle',
      volatility: 'medium',
      solubility: 'oil'
    },
    description: 'Precious rose absolute with rich floral character',
    safetyNotes: 'Generally safe. May cause skin sensitivity.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '9',
    name: 'Patchouli Essential Oil',
    casNumber: '8014-09-3',
    category: 'Natural',
    defaultConcentration: 0.8,
    costPerMl: 1.80,
    tags: ['earthy', 'woody', 'mysterious'],
    attributes: {
      intensity: 7,
      family: 'Woody',
      note: 'Base',
      volatility: 'low',
      solubility: 'oil'
    },
    description: 'Deep earthy patchouli essential oil',
    safetyNotes: 'Generally safe. Strong aroma - use sparingly.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '10',
    name: 'Limonene',
    casNumber: '138-86-3',
    category: 'Synthetic',
    defaultConcentration: 1.0,
    costPerMl: 0.05,
    tags: ['citrus', 'fresh', 'clean'],
    attributes: {
      intensity: 6,
      family: 'Citrus',
      note: 'Top',
      volatility: 'high',
      solubility: 'oil'
    },
    description: 'Synthetic citrus molecule with fresh, clean character',
    safetyNotes: 'Generally safe. May cause skin sensitivity.',
    regulatoryStatus: 'IFRA Compliant',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '11',
    name: 'Lavender Absolute',
    casNumber: '8022-15-9',
    category: 'Natural',
    defaultConcentration: 15.0,
    costPerMl: 2.5,
    tags: ['floral', 'herbal', 'intense'],
    attributes: {
      intensity: 9,
      family: 'Floral',
      note: 'Middle',
      volatility: 'medium',
      solubility: 'oil'
    },
    description: 'Concentrated lavender absolute with intense floral character',
    safetyNotes: 'Generally safe. Use sparingly due to high concentration.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '12',
    name: 'Rose Otto',
    casNumber: '8007-01-0',
    category: 'Natural',
    defaultConcentration: 5.0,
    costPerMl: 8.0,
    tags: ['floral', 'romantic', 'luxurious'],
    attributes: {
      intensity: 9,
      family: 'Floral',
      note: 'Middle',
      volatility: 'medium',
      solubility: 'oil'
    },
    description: 'Precious rose otto essential oil',
    safetyNotes: 'Generally safe. May cause skin sensitivity.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '13',
    name: 'Jasmine Absolute',
    casNumber: '8022-96-6',
    category: 'Natural',
    defaultConcentration: 3.0,
    costPerMl: 12.0,
    tags: ['floral', 'exotic', 'intense'],
    attributes: {
      intensity: 10,
      family: 'Floral',
      note: 'Middle',
      volatility: 'medium',
      solubility: 'oil'
    },
    description: 'Exotic jasmine absolute with intense floral character',
    safetyNotes: 'Generally safe. Use sparingly due to high intensity.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '14',
    name: 'Ylang Ylang',
    casNumber: '8006-81-3',
    category: 'Natural',
    defaultConcentration: 8.0,
    costPerMl: 3.5,
    tags: ['floral', 'exotic', 'sweet'],
    attributes: {
      intensity: 7,
      family: 'Floral',
      note: 'Middle',
      volatility: 'medium',
      solubility: 'oil'
    },
    description: 'Exotic ylang ylang essential oil',
    safetyNotes: 'Generally safe. May cause skin sensitivity.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '15',
    name: 'Neroli Oil',
    casNumber: '8016-38-4',
    category: 'Natural',
    defaultConcentration: 5.0,
    costPerMl: 15.0,
    tags: ['floral', 'citrus', 'fresh'],
    attributes: {
      intensity: 8,
      family: 'Floral',
      note: 'Top',
      volatility: 'high',
      solubility: 'oil'
    },
    description: 'Precious neroli essential oil from bitter orange blossoms',
    safetyNotes: 'Generally safe. May cause skin sensitivity.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '16',
    name: 'Sandalwood Oil',
    casNumber: '8006-87-9',
    category: 'Natural',
    defaultConcentration: 2.0,
    costPerMl: 25.0,
    tags: ['woody', 'earthy', 'grounding'],
    attributes: {
      intensity: 6,
      family: 'Woody',
      note: 'Base',
      volatility: 'low',
      solubility: 'oil'
    },
    description: 'Precious sandalwood essential oil',
    safetyNotes: 'Generally safe. Endangered species - use sustainably sourced.',
    regulatoryStatus: 'GRAS',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

export const mockFormulas: Formula[] = [
  {
    id: 'ref1',
    name: 'Summer Breeze',
    description: 'A fresh, light fragrance perfect for warm days',
    author: 'Marie Dubois',
    version: '1.0',
    batchSize: 100,
    batchUnit: 'ml',
    ingredients: [
      {
        id: 'ref1-1',
        ingredient: mockIngredients[1], // Bergamot
        concentration: 2.0,
        quantity: 2.0,
        unit: 'ml'
      },
      {
        id: 'ref1-2',
        ingredient: mockIngredients[0], // Lavender
        concentration: 1.5,
        quantity: 1.5,
        unit: 'ml'
      },
      {
        id: 'ref1-3',
        ingredient: mockIngredients[5], // Hedione
        concentration: 2.0,
        quantity: 2.0,
        unit: 'ml'
      }
    ],
    tags: ['fresh', 'summer', 'light'],
    category: 'Floral',
    isPublic: true,
    isTemplate: false,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'ref2',
    name: 'Mystic Woods',
    description: 'A deep, mysterious woody fragrance',
    author: 'Jean-Pierre Laurent',
    version: '1.0',
    batchSize: 100,
    batchUnit: 'ml',
    ingredients: [
      {
        id: 'ref2-1',
        ingredient: mockIngredients[3], // Sandalwood
        concentration: 1.5,
        quantity: 1.5,
        unit: 'ml'
      },
      {
        id: 'ref2-2',
        ingredient: mockIngredients[8], // Patchouli
        concentration: 1.0,
        quantity: 1.0,
        unit: 'ml'
      },
      {
        id: 'ref2-3',
        ingredient: mockIngredients[4], // Iso E Super
        concentration: 2.5,
        quantity: 2.5,
        unit: 'ml'
      }
    ],
    tags: ['woody', 'mysterious', 'deep'],
    category: 'Woody',
    isPublic: true,
    isTemplate: false,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: 'ref3',
    name: 'Floral Elegance',
    description: 'A sophisticated floral composition',
    author: 'Sophie Chen',
    version: '1.0',
    batchSize: 100,
    batchUnit: 'ml',
    ingredients: [
      {
        id: 'ref3-1',
        ingredient: mockIngredients[7], // Rose Absolute
        concentration: 0.5,
        quantity: 0.5,
        unit: 'ml'
      },
      {
        id: 'ref3-2',
        ingredient: mockIngredients[5], // Hedione
        concentration: 3.0,
        quantity: 3.0,
        unit: 'ml'
      },
      {
        id: 'ref3-3',
        ingredient: mockIngredients[2], // Vanilla
        concentration: 0.3,
        quantity: 0.3,
        unit: 'ml'
      }
    ],
    tags: ['floral', 'elegant', 'sophisticated'],
    category: 'Floral',
    isPublic: true,
    isTemplate: false,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  }
] 