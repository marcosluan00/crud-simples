import Titulo from "./Titulo"

interface LayoutProps {
    titulo:string
    children: any
}


export default function Layout(props : LayoutProps) {

    
    return(
        <div className={`
        flex flex-col w-2/3
        bg-white text-gray-800
        rounded-md
        `}> 
            <div className="p-6">
                <Titulo>{props.titulo}</Titulo>
                {props.children}
            </div>

        </div>
    )
}