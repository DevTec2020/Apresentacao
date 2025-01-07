
import "./App.module.css"

import { Apresentacao } from "./components/Apresentacao" 
import { Habilidades } from "./components/Habilidades"




export function App() {
   return (
    <div >
      <div className="flex items-center justify-center h-screen">
        <Apresentacao />
      </div>
      
      <div className="flex items-center justify-center h-screen">
        <Habilidades />
      </div>


    </div>
  )
}

