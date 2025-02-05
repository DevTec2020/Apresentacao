type Props = React.ComponentProps<"button"> & {
    src: string
    alt: string
    href: string
}


export function ButtonRedes({src, alt, href}: Props) {
    return (
        <button type="button" className="border rounded-lg border-orange-500 shadow-sm shadow-orange-400">
            <a href={href} target="_blank">
                <img src={src} alt={alt} />
            </a>
        </button>
     )
}