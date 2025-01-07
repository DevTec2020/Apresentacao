import "./App.module.css"

import { Apresentacao } from "./components/Apresentacao" 
import { Person } from "./components/Person"



export function App() {
   return (
    <>
      <div className="flex justify-center h-screen w-screen gap-20">
        <Apresentacao />
        <Person />
      </div>
    </>
  )
}

