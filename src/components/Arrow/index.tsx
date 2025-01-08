import Angles from "../../assets/angles.svg"

export function Arrow() {
    return (
        <div className="flex justify-center mb-4">
            <img src={Angles} alt="Setas Down" className="animate-bounce"/>
        </div>
    )
}