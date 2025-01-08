type Props = React.ComponentProps<"button"> & {
    src: string
    alt: string
}


export function Skill({src, alt}: Props) {
    return (
        <img className="h-10" src={src} alt={alt} />
     )
}