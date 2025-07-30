import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface CollapsedPanelContentProps {
  icon: string
  title: string
}

const CollapsedPanelContent: React.FC<CollapsedPanelContentProps> = ({ icon, title }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: '#6B7280',
      fontSize: '12px',
      textAlign: 'center',
      padding: '20px 10px'
    }}>
      <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
      <div style={{ writingMode: 'sideways-lr', textOrientation: 'upright', fontWeight: 'bold', fontSize: '16px' }}>{title}</div>
    </div>
  )
}

export default CollapsedPanelContent 