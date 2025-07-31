# Styled Components Structure

This directory contains the modular styled components organized by functionality for better maintainability and reusability.

## File Structure

### `layout.ts`
Layout-related components including containers, panels, and headers.
- `Container` - Main application container
- `Panel` - Base panel component
- `LeftPanel`, `MiddlePanel`, `RightPanel` - Specific panel variants
- `PanelHeader` - Panel header component
- `LeftPanelHeader`, `MiddlePanelHeader`, `RightPanelHeader` - Specific header variants
- `HeaderActions`, `ActionButtonGroup` - Header action containers
- `PanelTitle` - Panel title component
- `PanelToggle`, `MobileToggle` - Panel toggle buttons
- `ResponsiveContainer`, `ResponsiveLeftPanel`, `ResponsiveRightPanel` - Responsive variants

### `buttons.ts`
Button-related components including action buttons and interactive elements.
- `HeaderActionButton` - Header action buttons (save, share, download, calculator)
- `ActionButton` - General action buttons
- `GlobalActionButton` - Global header action buttons
- `FilterIcon` - Filter button component
- `RemoveFormulaButton` - Remove formula button
- `ExpandToggle` - Expand/collapse toggle button

### `forms.ts`
Form-related components including inputs, selects, and form elements.
- `SearchInput` - Search input field
- `EditableCell` - Editable table cell input
- `BatchSizeInput` - Batch size input field
- `UnitSelect` - Unit selection dropdown
- `GlobalBatchSizeInput` - Global batch size input
- `GlobalUnitSelect` - Global unit selection dropdown

### `tables.ts`
Table-related components including formula tables, table rows, and cells.
- `FormulaTable` - Main formula table container
- `TableHeader` - Table header row
- `TableRow` - Table data row
- `TableCell` - Table cell component
- `SummaryRow`, `SummaryItem`, `SummaryLabel`, `SummaryValue` - Summary components

### `ingredients.ts`
Ingredient-related components including ingredient cards, tags, and metadata.
- `IngredientCard` - Ingredient card container
- `IngredientName` - Ingredient name display
- `IngredientMeta` - Ingredient metadata display
- `IngredientTags` - Ingredient tags container
- `Tag` - Individual tag component
- `CategoryFilter` - Category filter container
- `FilterChip` - Filter chip button
- `SearchContainer`, `SearchIcon` - Search container and icon

### `matrix.ts`
Matrix-related components including matrix containers, grids, and comparison elements.
- `MatrixContainer` - Matrix view container
- `MatrixHeader` - Matrix header
- `ViewToggle`, `ViewToggleButton` - View toggle components
- `MatrixScrollContainer` - Matrix scroll container
- `MatrixGrid` - Matrix grid layout
- `IngredientColumn`, `IngredientColumnHeader` - Ingredient column components
- `FormulaColumn` - Formula column component
- `FormulaCard`, `FormulaCardHeader` - Formula card components
- `FormulaTitle`, `FormulaId` - Formula title and ID components
- `FormulaMetadata` - Formula metadata container
- `MetadataGrid`, `MetadataItem`, `MetadataLabel`, `MetadataValue` - Metadata components
- `MatrixRow` - Matrix data row
- `IngredientNameCell` - Ingredient name cell
- `MatrixIngredientName` - Matrix ingredient name (renamed to avoid conflicts)
- `ActiveConcentration` - Active concentration display
- `ComparisonCell` - Comparison cell component
- `ConcentrationValue` - Concentration value display
- `DeltaValue` - Delta value display
- `MissingIndicator` - Missing data indicator
- `MatrixFooter` - Matrix footer

### `globalHeader.ts`
Global header components including the global header container and related elements.
- `GlobalHeaderContainer` - Global header container
- `GlobalHeaderContent` - Global header content
- `GlobalBatchSizeSelector` - Global batch size selector
- `GlobalActionButtonGroup` - Global action button group

### `utilities.ts`
Utility components including empty states, toggles, cards, and other miscellaneous components.
- `BatchSizeSelector` - Batch size selector container
- `ReferenceToggle`, `ToggleButton` - Reference toggle components
- `ReferenceCards`, `ReferenceCard` - Reference card components
- `CardHeader`, `CardTitle`, `CardMeta` - Card components
- `ComparisonTable`, `ComparisonRow`, `ComparisonValue` - Comparison components
- `AttributeCard`, `AttributeName`, `AttributeValue` - Attribute components
- `EmptyState`, `EmptyStateIcon`, `EmptyStateText` - Empty state components
- `FormulaDetails`, `FormulaDetailsHeader`, `FormulaDetailsContent`, `FormulaAttribute` - Formula detail components

### `index.ts`
Main export file that re-exports all components from the modular files.

## Benefits of This Structure

1. **Modularity**: Components are organized by functionality, making it easier to find and maintain specific styles.
2. **Reusability**: Components can be imported individually or in groups as needed.
3. **Maintainability**: Smaller files are easier to navigate and modify.
4. **Type Safety**: Better TypeScript support with clearer component organization.
5. **Scalability**: Easy to add new components to appropriate modules.

## Usage

Import components from the main index file:
```typescript
import { Container, Panel, HeaderActionButton } from '../styles'
```

Or import from specific modules:
```typescript
import { Container, Panel } from '../styles/layout'
import { HeaderActionButton } from '../styles/buttons'
```

## Migration Notes

- The old `styledComponents.ts` file has been removed
- All components have been reorganized into logical modules
- Some components were renamed to avoid naming conflicts (e.g., `IngredientName` in matrix became `MatrixIngredientName`)
- All imports have been updated to use the new modular structure 