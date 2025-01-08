import { useState, useEffect } from "react"

import Git from "../../assets/Git.svg"
import Instagram from "../../assets/Instagram.svg"
import Linkedin from "../../assets/Linkedin.svg"
import Whatsapp from "../../assets/Whatsapp.svg"

import { Arrow } from "../Arrow"
import { ButtonRedes } from "../Button"


export function Apresentacao(){
    const [text, setText] = useState("Cargo")

    useEffect(() => {
        const texts = ["Front end", "Web"]
        let index = 0

        const interval = setInterval(() => {
            index = (index + 1) % texts.length;
            setText(texts[index]);
        }, 2000)

        return () => clearInterval(interval);
    },[]);




    return (
        <div className="flex flex-col min-h-screen text-white bg-red-950">
            <div className="flex-grow flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-5xl">Olá, sou Leonardo Batista</h1>
                </div>

                <div className="mt-5 text-xl">
                    <h2>
                        Desenvolvedor <span className="text-orange-500">{text}</span> Voluntário
                    </h2>
                </div>

                <div className="mt-3 w-2/4 text-center text-lg">
                    Cearense apaixonado por tecnologia e descobrir como esse mundo funciona.
                    Tenho experiência em suporte de TI, e acredito que minha dedicação e foco no
                    cliente podem fazer a diferença em qualquer projeto. Participo de eventos e
                    comunidades de tecnologia pois sei a importância de me manter atualizado sobre o
                    mercado e as ferramentas mais recentes. Trabalho diariamente com metodologias
                    como Kanban e Scrum, o que me ajuda a colaborar de forma eficiente em equipe
                    e garantir entregas de valor.
                </div>

                <div className="mt-10 flex gap-4">
                    <ButtonRedes src={Git} alt="Git Ico" href="https://github.com/DevTec2020"/>
                    <ButtonRedes src={Instagram} alt="Instagram Ico" href="https://www.instagram.com/ls_batista/"/>
                    <ButtonRedes src={Linkedin} alt="Linkedin Ico" href="https://www.linkedin.com/in/devtec-leobatista/"/>
                    <ButtonRedes src={Whatsapp} alt="Whatsapp Ico" href="https://wa.me/85985646542"/>
                </div>
            </div>


            <Arrow />

        </div>
    )
}