import "./styles.css";
import React from "react";
import useTabela from "./Hooks/tabela";

export default function App() {
  const { tabelaVisivel, exibirForm, exibirTabela } = useTabela();

  return (
    <main className="App">
      {tabelaVisivel ? (
        <div className="table">
          <button onClick={exibirForm}>Criar</button>
          <table>
            <tr>
              <th>Id</th>
              <th>Idade</th>
              <th>Nome</th>
            </tr>
            <tr>
              <th>1</th>
              <th>ana</th>
              <th>13</th>
            </tr>
            <tr>
              <th>2</th>
              <th>Kayronny </th>
              <th>25</th>
            </tr>
          </table>
        </div>
      ) : (
        <div className="formulario">
          <span>Nome</span>
          <input type="text" />
          <span>Id</span>
          <input type="text" />
          <span>Idade</span>
          <input type="number" />
          <button onClick={exibirTabela}>Voltar</button>
        </div>
      )}
    </main>
  );
}
