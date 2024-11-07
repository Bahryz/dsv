import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import "./ListarProdutos.css"; // Certifique-se de ter o arquivo CSS na pasta correta

function ListarProdutos() {
  // Estado para armazenar os produtos
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // UseEffect para realizar a consulta na API
  useEffect(() => {
    consultarProdutos();
  }, []); // A dependência do useEffect deve ser um array vazio

  // Função para consultar os produtos na API
  function consultarProdutos() {
    fetch("http://localhost:5117/api/produto/listar")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }

  return (
    <div className="table-container">
      <h1>Lista de Produtos</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>CriadoEm</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.criadoEm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProdutos;
