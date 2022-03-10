import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './components/Header/Header'
import { useEffect, useRef } from 'react'
import { renderer } from './utils/renderer'

function App() {
  const app = useRef()

  useEffect(() => {
    renderer.render()
  }, [])

  return (
    <div className="App" ref={app}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
