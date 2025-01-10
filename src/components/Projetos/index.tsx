import GitIco from "../../assets/Projetos/GitIco.svg"
import EyeIco from "../../assets/Projetos/EyeIco.svg"

import siteNote from "../../assets/Projetos/SiteNote.jpg"
import PetValley from "../../assets/Projetos/PetValley.jpg"


export function Projetos() {
    return (
        <div className="min-h-screen w-full text-white p-10">
            <div>
                <h1 className="font-semibold text-4xl text-center text-orange-500">Projetos</h1>
            </div>



            <div className="flex flex-wrap justify-center mt-20 gap-10 text-slate-400">

                {/* SiteNote Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <img className="rounded-t-lg" src={siteNote} alt="Projeto SiteNote" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SiteNote</h5>
                        <div className="mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">HTML</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">CSS</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Javascript</span>
                        </div>
  
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Aplicação web projetada para ajudar a criar, editar, deletar notas e listas de tarefas de forma eficiente e intuitiva. 
                        </p>
                        <div className="flex  gap-2">
                            <a href="https://devtec2020.github.io/SiteNotes/" target="_blank" 
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                              APP
                            </a>

                            <a href="https://github.com/DevTec2020/SiteNotes" target="_blank"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                CODE
                            </a>
                        </div>

                    </div>
                </div>

                {/* PetValley Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src={PetValley} alt="Projeto SiteNote" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PetValley</h5>
                        <div className="mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">HTML</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">CSS</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Bulma</span>
                        </div>
  
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Site para clínica veterinária, com foco em usabilidade e design responsivo. 
                        </p>
                        <div className="flex  gap-2">
                            <a href="https://pet-valley.vercel.app" target="_blank"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                APP
                            </a>

                            <a href="https://github.com/DevTec2020/Pet-Valley" target="_blank"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                CODE
                            </a>
                        </div>

                    </div>
                </div>



                <div>
                    
                </div>

            </div>


        </div>
    )
}