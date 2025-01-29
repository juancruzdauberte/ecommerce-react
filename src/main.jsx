import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Componente from './Componente.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <>
    <App />
    <Componente/>
  </>,
)
