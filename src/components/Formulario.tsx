import Entrada from "./Entrada";
import Cliente from '../core/Cliente'
import { useState } from 'react'
import Botao from './Botao'


interface FormularioProps{
    cliente:Cliente
    clienteMudou?:(cliente: Cliente) => void
    cancelado?: () =>void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')
  return (
    <div>
        {id? (
            <Entrada texto='Codigo' valor ={id} somenteLeitura className='mb-4'/>  
        ): false }

        <Entrada texto='Nome' valor={nome} valorMudou={setNome} className='mb-4'/>
        <Entrada texto='Idade' tipo='number' valor={idade} valorMudou={setIdade}/>

        <div className="mt-7 flex justify-end">
            <Botao className="mr-2" cor="blue" 
            onClick={()=> props.clienteMudou?.(new Cliente(nome,+idade,id))}
            >
                {id? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao cor="blue" onClick={props.cancelado}>
                Cancelar
            </Botao>
        </div>
    </div>
  )
}
