//import { useState } from 'react'

import './App.css'
import Content from './components/Content'
import Header from './components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Header/>
      <Content/>
    </div>
  )
}

export default App
