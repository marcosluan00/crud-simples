interface BotaoProps {
    children:any
    className?: string
    cor?: 'blue'| 'grey'|'green'
    onClick?: () => void
}   


export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'red'
    return(
        <button onClick={props.onClick}
        className={`
        px-4 py-2 rounded-md
        bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700
        text-white 
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}