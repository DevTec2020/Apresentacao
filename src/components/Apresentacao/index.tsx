import Git from "../../assets/Git.svg"
import Instagram from "../../assets/Instagram.svg"
import Linkedin from "../../assets/Linkedin.svg"
import Whatsapp from "../../assets/Whatsapp.svg"


export function Apresentacao(){
    return (

        <div className="flex flex-col justify-center text-white w-1/3">
            <div>
                <h1 className="text-5xl">Oi, meu nome é <br />Leonardo Batista</h1>
            </div>

            <div className="mt-5">
                <h2>Sou 
                    <span> Dev Front end</span>
                </h2>
            </div>

            <div className="mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, itaque? 
                Nemo architecto eum quasi dignissimos consectetur quia possimus tempore expedita aliquam ipsam obcaecati accusamus et, quam reiciendis minima placeat eius.
            </div>


            
        </div>
    )
}