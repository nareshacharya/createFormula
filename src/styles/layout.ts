import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #F9FBFD;
  font-family: 'Inter', sans-serif;
  gap: 0;
`

export const Panel = styled.div<{ width?: string }>`
  background: white;
  border-radius: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: ${props => props.width || 'auto'};
  min-width: 0;
`

export const LeftPanel = styled(Panel)<{ collapsed?: boolean }>`
  width: ${props => props.collapsed ? '60px' : '240px'};
  flex-shrink: 0;
  transition: width 0.3s ease;
  overflow: hidden;
`

export const MiddlePanel = styled(Panel)`
  flex: 1;
  min-width: 0;
  border-left: 1px solid #E5E7EB;
  border-right: 1px solid #E5E7EB;
`

export const RightPanel = styled(Panel)<{ collapsed?: boolean }>`
  width: ${props => props.collapsed ? '60px' : '600px'};
  flex-shrink: 0;
  transition: width 0.3s ease;
  overflow: hidden;
  height:100%;
`

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 12px;
  border-bottom: 1px solid #E5E7EB;
`

export const LeftPanelHeader = styled(PanelHeader)`
  background: rgb(245, 235, 247); /* Light purple */
`

export const MiddlePanelHeader = styled(PanelHeader)`
  background: rgb(239, 246, 255); /* Light blue */
`

export const RightPanelHeader = styled(PanelHeader)`
  background: rgb(254, 242, 242); /* Light red/pink */
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`

export const PanelTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1F2937;
  margin: 0;
`

export const PanelToggle = styled.button`
  position: absolute;
  top: 24px;
  right: 8px;
  transform: translateY(-50%);
  width: 36px;
  height:36px;
  background: transparent;
  border: 0;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #6B7280;
  transition: all 0.2s;
  z-index: 10;
  font-weight: 500;

  &:hover {
    background:rgba(250, 249, 251, 0.4);
    color: #1F2937;
  }

  &.right {
    border-radius: 24px;
    right: 12px;
  }
`

export const MobileToggle = styled.button`
  display: none;
  padding: 8px;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    display: block;
  }
`

// Responsive styles
export const ResponsiveContainer = styled(Container)`
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

export const ResponsiveLeftPanel = styled(LeftPanel)`
  position: relative;
  
  @media (max-width: 768px) {
    width: 100% !important;
    margin: 8px;
  }
`

export const ResponsiveRightPanel = styled(RightPanel)`
  position: relative;
  
  @media (max-width: 768px) {
    width: 100% !important;
    margin: 8px;
  }
` 