interface EntradaProps{
    texto: String
    tipo?:'text'|'number'
    valor: any
    somenteLeitura?: boolean
    valorMudou?:(valor:any) => void
    className?:string
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
        <label className="mb-2">
            {props.texto}
        </label>
        <input onChange={ e=> props.valorMudou?.(e.target.value)}
        type={props.tipo ?? 'text'} 
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`
        border border-purple-500 rounded-lg
        focus:outline-none bg-gray-100
        py-2 px-4 
        ${props.somenteLeitura ? '' : 'focus:bg-white'}
        `}
        />
    </div>
  )
}
