import { Produto } from "../../nav-menu/model/produto";

export class LojaCarrinhoCompras {

  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (!produtoLocaStorage) {
      //senão existir nada dentro do localStorage
      this.produtos.push(produto);
      
    } else {
      //se existir ao menos um unico item armazenado na sessão(localStorage)
      this.produtos = JSON.parse(produtoLocaStorage);
      this.produtos.push(produto);
      
    }
    localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {

    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (produtoLocaStorage)

      return JSON.parse(produtoLocaStorage);

    
  }

  public removerProduto(produto: Produto) {

    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (produtoLocaStorage) {
      this.produtos = JSON.parse(produtoLocaStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id);
      localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    }
  }

  public atualizar(produtos: Produto[]) {
    localStorage.setItem("produtoLocaStorage", JSON.stringify(produtos));
  }
}
