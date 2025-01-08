import ICOhtml from "../../assets/Skills-ico/html.png"
import ICOcss from "../../assets/Skills-ico/css.png"
import ICObootstrap from "../../assets/Skills-ico/bootstrap.png"
import ICOBulma from "../../assets/Skills-ico/Bulma.png"
import ICOtailwind from "../../assets/Skills-ico/tailwind.png"
import ICOjs from "../../assets/Skills-ico/js.png"


import { Skill } from "../Skills"

export function Habilidades() {
    return (
        <div className="flex flex-col min-h-screen w-full text-white bg-red-900">
            <div className="flex flex-col items-center justify-center">
                <div className="mt-20">
                    <h1>Habilidades</h1>
                </div>

                <div className="flex mt-20 gap-32">
                    <div className=" w-40 border p-5">
                        <h2>Frontend</h2>
                        <div className="flex flex-wrap gap-3 mt-5">
                            <Skill src={ICOhtml} alt="HTML ico" />
                            <Skill src={ICOcss} alt="HTML ico" />
                            <Skill src={ICObootstrap} alt="HTML ico" />
                            <Skill src={ICOBulma} alt="HTML ico" />
                            <Skill src={ICOtailwind} alt="HTML ico" />
                            <Skill src={ICOjs} alt="HTML ico" />
                        </div>
                    </div>

                    <div>
                        <h2>Backend</h2>
                    </div>

                    <div>
                        <h2>Outros</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}