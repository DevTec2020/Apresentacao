type Props = React.ComponentProps<"p"> & {
    txt :string
}

export function ProjetosDesc({ txt }:Props){
    return (
        <p className="mb-3 font-normal text-gray-400">
            {txt} 
        </p>
    )
}