import "./App.module.css"
import { useState } from "react"

import { Apresentacao } from "./components/Apresentacao" 



export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Apresentacao />
      </div>
    </>
  )
}

