import "./App.module.css"

import { Apresentacao } from "./components/Apresentacao" 
import { Person } from "./components/Person"



export function App() {
   return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Apresentacao />
      </div>
    </>
  )
}

