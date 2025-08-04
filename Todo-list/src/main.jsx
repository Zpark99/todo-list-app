import { StrictMode } from 'react' // 경고성 연결, react 진단 도구
import { createRoot } from 'react-dom/client' // react 최신기능 사용가능
import './index.css'
import App from './App.jsx' // App 컴포넌트 불러오기

createRoot(document.getElementById('root')).render( // 렌더링
  <StrictMode>
    <App />
  </StrictMode>,
)
