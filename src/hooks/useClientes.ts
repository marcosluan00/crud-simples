import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabela from "./useTabela"

export default function useClientes() {
  
  const { tabelaVisivel, formularioVisivel, exibirFormulario,exibirTabela } = useTabela()  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
  const [clientes, setClientes] = useState<Cliente[]>([])

  const repo: ClienteRepositorio = new ColecaoCliente()

  useEffect(obterTodos, [])

   function obterTodos() {
     repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }
  function selecionarCliente(cliente:Cliente){
    setCliente(cliente)
    exibirFormulario()
  }
  async function excluirCliente(cliente:Cliente){
    await repo.excluir(cliente)
    obterTodos
    
  }
  async function salvarCliente(cliente:Cliente){
    await repo.salvar(cliente)
    obterTodos
    
  }
  function novoCliente(){
    setCliente(Cliente.vazio())
    exibirFormulario()
  }
  return {
      salvarCliente,
      novoCliente,
      excluirCliente,
      selecionarCliente,
      obterTodos,
      cliente,
      clientes,
      tabelaVisivel,
      exibirTabela,
  }
}