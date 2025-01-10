type Props = React.ComponentProps<"span"> & {
    stack : string
}

export function ProjetosStack({ stack }:Props){
    return (
        <span className="bg-gray-700 text-gray-400 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-gray-500">{stack}</span>
    )
}