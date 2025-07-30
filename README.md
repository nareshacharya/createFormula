# Fragrance Formula Builder

A modern, responsive React TypeScript application for fragrance formulation, designed specifically for perfumers to build, manage, and compare fragrance formulas with a professional, industry-standard interface.

## 🎯 **Core Features**

### **Three-Panel Workspace**
- **Left Panel**: Ingredients Library with search, filtering, and categorization
- **Middle Panel**: Active Formula Canvas with real-time calculations and inline editing
- **Right Panel**: Reference Area with formula comparison and attribute analysis

### **Accordion-Style Layout**
- Collapsible side panels for maximum workspace utilization
- Smooth transitions and visual indicators
- Responsive design that adapts to all screen sizes

### **Professional Formula Management**
- Inline editing for concentration and quantity
- Real-time cost and compliance calculations
- Batch size controls with unit selection
- Formula summary with key metrics
- Action buttons for Save, Share, Download, and Calculate

### **Advanced Ingredient System**
- Comprehensive ingredient database with CAS numbers
- Category-based organization (Natural, Synthetic, Solvent, Functional)
- Detailed attributes (intensity, family, note, volatility, solubility)
- Safety notes and regulatory status
- Tag-based search and filtering

### **Reference & Comparison Tools**
- Formula comparison with visual difference indicators
- Attribute analysis for ingredient properties
- Common ingredient highlighting
- Search and filter capabilities

## 🏗️ **Architecture & Design Principles**

### **Separation of Concerns (SoC)**
```
src/
├── models/           # Data models and business logic
├── components/       # UI components (View layer)
├── design-system/    # Centralized styling system
├── data/            # Data layer (mock data, API calls)
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

### **Design System**
- **Centralized Theme**: All colors, typography, spacing in `design-system/theme.ts`
- **Styled Components Only**: No global CSS, fully typed components
- **Responsive Design**: Mobile-first with touch support
- **Accessibility**: ARIA roles, keyboard navigation, screen reader support

### **Data Models**
- **IngredientModel**: CRUD operations, filtering, sorting
- **FormulaModel**: Formula management with summary calculations
- **Type Safety**: Full TypeScript coverage with strict typing

### **Component Architecture**
- **Small, Reusable Components**: Each component has a single responsibility
- **Props Interface**: Well-defined component contracts
- **Localization Ready**: All text externalized for i18n
- **DB Connectivity**: Models designed for easy database integration

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd fragrance-formula-builder

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 **Design System Features**

### **Color Palette**
- **Primary**: Blue (#3B82F6) for interactive elements
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Success (green), Warning (orange), Error (red)
- **Accessibility**: High contrast ratios for readability

### **Typography**
- **Font Family**: Inter (modern, readable sans-serif)
- **Responsive**: Font sizes adapt to screen size
- **Hierarchy**: Clear visual hierarchy with proper weights

### **Spacing & Layout**
- **Consistent Spacing**: 4px base unit system
- **Responsive Grid**: Flexible layouts for all devices
- **Touch-Friendly**: Minimum 44px touch targets

### **Interactive Elements**
- **Hover States**: Smooth transitions and visual feedback
- **Focus States**: Clear accessibility indicators
- **Loading States**: Skeleton screens and progress indicators

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile**: < 640px (touch-optimized)
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### **Touch Support**
- **Swipe Gestures**: Horizontal scrolling for reference cards
- **Touch Targets**: Minimum 44px for all interactive elements
- **Tap Highlights**: Disabled for clean touch experience

## 🔧 **Technical Features**

### **Performance Optimizations**
- **Memoized Calculations**: Expensive operations cached
- **Lazy Loading**: Components load on demand
- **Efficient Re-rendering**: React hooks for optimal updates
- **Bundle Optimization**: Tree shaking and code splitting

### **Type Safety**
- **Full TypeScript**: 100% type coverage
- **Strict Mode**: Enabled for development
- **Interface Contracts**: Well-defined component APIs

### **Accessibility**
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Logical tab order
- **Color Contrast**: WCAG AA compliance

## 🗄️ **Data Architecture**

### **Models**
```typescript
// Ingredient Model
interface Ingredient {
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

// Formula Model
interface Formula {
  id: string
  name: string
  description?: string
  author: string
  version: string
  batchSize: number
  batchUnit: 'ml' | 'g'
  ingredients: FormulaIngredient[]
  tags: string[]
  category?: string
  isPublic: boolean
  isTemplate: boolean
  createdAt: Date
  updatedAt: Date
}
```

### **Database Integration Ready**
- **Model Classes**: Easy to extend for database operations
- **CRUD Operations**: Standard create, read, update, delete methods
- **Filtering & Sorting**: Built-in search and sort capabilities
- **Validation**: Type-safe data validation

## 🌐 **Localization Support**

### **i18n Ready**
- **Externalized Text**: All user-facing text in separate files
- **Component Structure**: Designed for easy translation
- **RTL Support**: Layout adapts to right-to-left languages
- **Number Formatting**: Locale-aware number and currency formatting

## 🔮 **Future Enhancements**

### **Planned Features**
- **Database Integration**: PostgreSQL/MongoDB connectivity
- **User Authentication**: Multi-user support with roles
- **Formula Versioning**: Git-like version control for formulas
- **Collaboration Tools**: Real-time collaboration features
- **Analytics Dashboard**: Usage statistics and insights
- **API Integration**: External fragrance databases
- **Export Formats**: PDF, Excel, and industry-standard formats

### **Scalability**
- **Microservices Ready**: Component-based architecture
- **State Management**: Redux/Zustand integration ready
- **Testing Framework**: Jest and React Testing Library setup
- **CI/CD Pipeline**: Automated testing and deployment

## 🤝 **Contributing**

### **Development Guidelines**
1. **Follow SoC**: Separate data, logic, and presentation
2. **Type Safety**: All new code must be fully typed
3. **Component Design**: Small, reusable components
4. **Styling**: Use design system tokens only
5. **Testing**: Write tests for new features
6. **Documentation**: Update README for new features

### **Code Style**
- **ESLint**: Enforced code style and best practices
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict mode enabled
- **Git Hooks**: Pre-commit linting and formatting

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **React Team**: For the amazing framework
- **Styled Components**: For the excellent styling solution
- **Lucide React**: For the beautiful icons
- **Inter Font**: For the modern typography
- **Fragrance Industry**: For inspiration and domain knowledge 