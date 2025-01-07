import Git from "../../assets/Git.svg"
import Instagram from "../../assets/Instagram.svg"
import Linkedin from "../../assets/Linkedin.svg"
import Whatsapp from "../../assets/Whatsapp.svg"
import Angles from "../../assets/angles.svg"


export function Apresentacao(){
    return (

        <div className="flex flex-col text-white w-1/3">
            <div>
                <h1 className="text-5xl">Olá, sou Leonardo Batista</h1>
            </div>

            <div className="mt-5">
                <h2>
                    <span> Desenvolvedor Front end</span>
                    <span> voluntário</span>
                </h2>
            </div>

            <div className="mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, itaque? 
                Nemo architecto eum quasi dignissimos consectetur quia possimus tempore expedita aliquam ipsam obcaecati accusamus et, quam reiciendis minima placeat eius.
            </div>

            <div className="mt-5 flex  gap-4">
                <button type="button"><img src={Git} alt="Git Ico" /></button>
                <button type="button"><img src={Instagram} alt="Ico Instagram" /></button>
                <button type="button"><img src={Linkedin} alt="Ico Linkedin" /></button>
                <button type="button"><img src={Whatsapp} alt="Ico Whatsapp" /></button>
            </div>

            <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 ">
                <img src={Angles} alt="Setas Down" className="animate-bounce"/>
            </div>
            
        </div>
    )
}