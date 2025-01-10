import siteNote from "../../assets/Projetos/SiteNote.jpg"
import PetValley from "../../assets/Projetos/PetValley.jpg"
import DevBurguer from "../../assets/Projetos/DevBurguer.jpg"
import CadMetas from "../../assets/Projetos/CadMetas.jpg"
import FormNasa from "../../assets/Projetos/FormNasa.jpg"
import JogoForca from "../../assets/Projetos/JogoForca.jpg"



export function Projetos() {
    return (
        <div className="min-h-screen w-full p-10">
            <div>
                <h1 className="font-semibold text-4xl text-center text-orange-500">Projetos</h1>
            </div>



            <div className="flex flex-wrap justify-center mt-10 gap-10">
                

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

                {/* DevBurguer Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src={DevBurguer} alt="Projeto SiteNote" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DevBurguer</h5>
                        <div className="mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">HTML</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Tailwind</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">JavaScript</span>
                        </div>
  
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Cardápio Online de hamburgueria, com uma interface moderna e funcional. Permitindo que os pedidos sejam encaminhados diretamente para o WhatsApp. 
                        </p>
                        <div className="flex  gap-2">
                            <a href="https://dev-burguer-jade.vercel.app" target="_blank"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                APP
                            </a>

                            <a href="https://github.com/DevTec2020/DevBurguer" target="_blank"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                CODE
                            </a>
                        </div>

                    </div>
                </div>


                {/* CadMetas Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src={CadMetas} alt="Projeto SiteNote" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CadMetas</h5>
                        <div className="mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">JavaScript</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">NodeJs</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Json</span>
                        </div>
  
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Site para clínica veterinária, com foco em usabilidade e design responsivo. 
                        </p>
                        <div className="flex  gap-2">
                           <a href="https://github.com/DevTec2020/CadMetas" target="_blank"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                CODE
                            </a>
                        </div>

                    </div>
                </div>

                {/* FormNasa Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src={FormNasa} alt="Projeto SiteNote" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FormNasa</h5>
                        <div className="mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">HTML</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">SASS</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Bootstrap</span>
                        </div>
  
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Formulário minimalista, estilizado com o Bootstrap, focado na simplicidade e eficiência.. 
                        </p>
                        <div className="flex  gap-2">
                            <a href="https://devtec2020.github.io/FormNasa/" target="_blank"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                APP
                            </a>

                            <a href="https://github.com/DevTec2020/FormNasa" target="_blank"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                CODE
                            </a>
                        </div>

                    </div>
                </div>


                {/* JogoForca Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src={JogoForca} alt="Projeto SiteNote" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">JogoForca</h5>
                        <div className="mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">HTML</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">CSS</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Bulma</span>
                        </div>
  
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Jogo da Forca com palavras de programação. 
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

            </div>


        </div>
    )
}