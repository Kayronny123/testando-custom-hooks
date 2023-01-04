import { useState } from "react";

export default function useTabela() {
  const type = "tabela" | "form";
  const [visivel, setVisivel] = useState(type);
  return {
    tabelaVisivel: visivel === "tabela",
    formVisivel: visivel === "form",
    exibirTabela: () => setVisivel("tabela"),
    exibirForm: () => setVisivel("form")
  };
}
