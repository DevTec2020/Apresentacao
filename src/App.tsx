
import "./App.module.css"

import { Apresentacao } from "./components/Apresentacao" 
import { Habilidades } from "./components/Habilidades"
import { Projetos } from "./components/Projetos"




export function App() {
   return (
    <div >
      
        <Apresentacao />

        <Habilidades />

        <Projetos />

    </div>
  )
}

