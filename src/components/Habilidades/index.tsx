import ICOhtml from "../../assets/Skills-ico/html.png"
import ICOcss from "../../assets/Skills-ico/css.png"
import ICObootstrap from "../../assets/Skills-ico/bootstrap.png"
import ICOBulma from "../../assets/Skills-ico/Bulma.png"
import ICOtailwind from "../../assets/Skills-ico/tw.png"
import ICOjs from "../../assets/Skills-ico/js.png"
import ICOreact from "../../assets/Skills-ico/react.png"
import ICOtypescript from "../../assets/Skills-ico/ty.png"
import ICOnode from "../../assets/Skills-ico/node.png"




import { Skill } from "../Skills"

export function Habilidades() {
    return (
        <div className="min-h-screen w-full text-white bg-red-900 p-10">
                <div>
                    <h1 className="font-semibold text-4xl text-center">Habilidades</h1>
                </div>
                

                <div className="flex flex-wrap justify-center mt-20 gap-20">
                
                    <div className=" w-1/4 border rounded-lg p-5 flex flex-col items-center">
                        <h2 className="text-2xl font-semibold text-center mb-4">Frontend</h2>
                        <div className="flex flex-wrap justify-center gap-3 mt-5">
                            <Skill src={ICOreact} alt="React ico" txt="React" />
                            <Skill src={ICOhtml} alt="HTML ico" txt="HTML" />
                            <Skill src={ICOcss} alt="CSS ico" txt="CSS" />
                            <Skill src={ICObootstrap} alt="Bootstrap ico" txt="Bootstrap" />
                            <Skill src={ICOBulma} alt="Bulma ico" txt="Bulma"/>
                            <Skill src={ICOtailwind} alt="Tailwind ico" txt="Tailwind" />
                            <Skill src={ICOjs} alt="Javascript ico" txt="Javascript" />
                            <Skill src={ICOtypescript} alt="Typescript ico" txt="Typescript" />
                        </div>
                    </div>

                    <div className=" w-1/4 border rounded-lg p-5 flex flex-col items-center">
                        <h2 className="text-2xl font-semibold text-center mb-4">Backend</h2>
                        <div className="flex flex-wrap justify-center gap-3 mt-5">
                            <Skill src={ICOnode} alt="Node ico" txt="Node" />
                            <Skill src={ICOhtml} alt="HTML ico" txt="Express" />
                        </div>
                    </div>

                    
                    <div className=" w-2/4 border rounded-lg p-5 flex flex-col items-center">
                        <h2 className="text-2xl font-semibold text-center mb-4">Outros</h2>
                        <div className="flex flex-wrap justify-center gap-3 mt-5">
                            <Skill src={ICOreact} alt="React ico" txt="Babel" />
                            <Skill src={ICOhtml} alt="HTML ico" txt="NPM" />
                            <Skill src={ICOcss} alt="CSS ico" txt="Webpack" />
                            <Skill src={ICObootstrap} alt="Bootstrap ico" txt="SQL" />
                            <Skill src={ICOBulma} alt="Bulma ico" txt="PostgreSQL"/>
                            <Skill src={ICOtailwind} alt="Tailwind ico" txt="Firebird" />
                        </div>
                    </div>

                 
                </div>
            
            
        </div>
    )
}