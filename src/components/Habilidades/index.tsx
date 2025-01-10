import ICOhtml from "../../assets/Skills-ico/html.png"
import ICOcss from "../../assets/Skills-ico/css.png"
import ICObootstrap from "../../assets/Skills-ico/bootstrap.png"
import ICOBulma from "../../assets/Skills-ico/Bulma.png"
import ICOtailwind from "../../assets/Skills-ico/tw.png"
import ICOjs from "../../assets/Skills-ico/js.png"
import ICOreact from "../../assets/Skills-ico/react.png"
import ICOtypescript from "../../assets/Skills-ico/ty.png"
import ICOnode from "../../assets/Skills-ico/node.png"
import ICOexpress from "../../assets/Skills-ico/express.png"
import ICOBabel from "../../assets/Skills-ico/babel.png"
import ICOWebpack from "../../assets/Skills-ico/webpack.png"
import ICOSql from "../../assets/Skills-ico/sql.png"
import ICOPostgresql from "../../assets/Skills-ico/postgresql.png"
import ICOFirebird from "../../assets/Skills-ico/firebird.png"
import ICOSass from "../../assets/Skills-ico/sass.png"
import ICOFigma from "../../assets/Skills-ico/figma.png"



import { Skill } from "../Skills"

export function Habilidades() {
    return (
        <div className="min-h-screen w-full text-white bg-gray-900 p-10">
                <div>
                    <h1 className="font-semibold pt-10 text-4xl text-center text-orange-500">Habilidades</h1>
                </div>
                

                <div className="flex flex-wrap justify-center mt-20 gap-20 text-slate-400 px-6 sm:px-20">
                
                    <div className="p-5 flex flex-col flex-grow items-center  border border-gray-700 rounded-lg shadow-lg md:w-2/5 lg:p-10">
                        <h2 className="text-2xl font-semibold text-center mb-4">Frontend</h2>
                        <div className="flex flex-wrap justify-center gap-3 mt-5 md:max-w-2xl">
                            <Skill src={ICOreact} alt="React ico" txt="React" />
                            <Skill src={ICOhtml} alt="HTML ico" txt="HTML" />
                            <Skill src={ICOcss} alt="CSS ico" txt="CSS" />
                            <Skill src={ICObootstrap} alt="Bootstrap ico" txt="Bootstrap" />
                            <Skill src={ICOBulma} alt="Bulma ico" txt="Bulma"/>
                            <Skill src={ICOtailwind} alt="Tailwind ico" txt="Tailwind" />
                            <Skill src={ICOjs} alt="Javascript ico" txt="Javascript" />
                            <Skill src={ICOtypescript} alt="Typescript ico" txt="Typescript" />
                            <Skill src={ICOSass} alt="Sass ico" txt="Sass" />
                        </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow items-center  border border-gray-700 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-center mb-4">Backend</h2>
                        <div className="flex flex-wrap justify-center gap-3 mt-5">
                            <Skill src={ICOnode} alt="Node ico" txt="Node" />
                            <Skill src={ICOexpress} alt="HTML ico" txt="Express" />
                        </div>
                    </div>

                    
                    <div className="border border-gray-700 rounded-lg p-5 flex flex-col items-center shadow-lg">
                        <h2 className="text-2xl font-semibold text-center mb-4">Outros</h2>
                        <div className="flex flex-wrap justify-center gap-3 mt-5">
                            <Skill src={ICOBabel} alt="React ico" txt="Babel" />
                            <Skill src={ICOWebpack} alt="CSS ico" txt="Webpack" />
                            <Skill src={ICOSql} alt="Bootstrap ico" txt="SQL" />
                            <Skill src={ICOPostgresql} alt="Bulma ico" txt="PostgreSQL"/>
                            <Skill src={ICOFirebird} alt="Tailwind ico" txt="Firebird" />
                            <Skill src={ICOFigma} alt="Figma ico" txt="Figma" />
                        </div>
                    </div>

                 
                </div>
            
            
        </div>
    )
}