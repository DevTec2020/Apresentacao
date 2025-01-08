import Git from "../../assets/Git.svg"
import Instagram from "../../assets/Instagram.svg"
import Linkedin from "../../assets/Linkedin.svg"
import Whatsapp from "../../assets/Whatsapp.svg"

import { Arrow } from "../Arrow"



export function Apresentacao(){
    return (
        <div className="flex flex-col min-h-screen text-white">
            <div className="flex-grow flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-5xl">Olá, sou Leonardo Batista</h1>
                </div>

                <div className="mt-5 text-xl">
                    <h2>
                        <span> Desenvolvedor Front end</span>
                        <span> voluntário</span>
                    </h2>
                </div>

                <div className="mt-3 w-2/4 text-center text-lg">
                    Cearense apaixonado por tecnologia e descobrir como esse mundo funciona, desde
                    criança. Tenho experiência em suporte de TI, e acredito que minha dedicação e foco no
                    cliente podem fazer a diferença em qualquer projeto. Participo de eventos e
                    comunidades de tecnologia pois sei a importância de me manter atualizado sobre o
                    mercado e as ferramentas mais recentes. Trabalho diariamente com metodologias
                    ágeis, como Kanban e Scrum, o que me ajuda a colaborar de forma eficiente em equipe
                    e garantir entregas de valor.
                </div>

                <div className="mt-10 flex gap-4">
                    <button type="button"><img src={Git} alt="Git Ico" /></button>
                    <button type="button"><img src={Instagram} alt="Ico Instagram" /></button>
                    <button type="button"><img src={Linkedin} alt="Ico Linkedin" /></button>
                    <button type="button"><img src={Whatsapp} alt="Ico Whatsapp" /></button>
                </div>
            </div>

            <div >
                <Arrow />
            </div>
        </div>
    )
}