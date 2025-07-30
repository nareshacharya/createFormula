

import FormulaBuilder from './components/FormulaBuilder'
import { GlobalStyle } from './design-system/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <div style={{ background: '#F9FBFD', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <FormulaBuilder />
      </div>
    </>
  )
}

export default App 