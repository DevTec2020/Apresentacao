type Props = React.ComponentProps<"button"> & {
    src?: string
    alt: string
    txt: string
}


export function Skill({src, alt, txt}: Props) {
    return (
        <div className="flex flex-grow items-center justify-center border border-slate-400 rounded-lg p-3">
            <img className="h-6 w-6 mr-2" src={src} alt={alt} />
            <span>{txt}</span>
        </div>
     )
}