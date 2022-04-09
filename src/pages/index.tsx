import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Formulario from "../components/Formulario";

import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    selecionarCliente, 
    excluirCliente, 
    novoCliente, 
    salvarCliente, 
    cliente,
    tabelaVisivel, 
    exibirTabela,
    clientes} = useClientes()
 
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
     
    <Layout titulo="Cadastro Simples">
      {tabelaVisivel  ? (
        <>
      <div className="flex justify-end">
        <Botao className='mb-4' onClick={novoCliente}>Novo Cliente</Botao>
        </div>
          <Tabela clientes={clientes}
          clienteSelecionado={selecionarCliente}
          clienteExcluido={excluirCliente}/> 
            
            </>
      ) :(<Formulario cliente={cliente}
        cancelado={exibirTabela}
        clienteMudou={salvarCliente}
        /> 
      )}
   
    </Layout>
    </div>
  )
}
