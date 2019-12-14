import { Component, OnInit } from "@angular/core";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";
import { Produto } from "../../nav-menu/model/produto";
import { Pedido } from "../../nav-menu/model/pedido";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { ItemPedido } from "../../nav-menu/model/itemPedido";
import { PedidoServico } from "../../servicos/pedido/pedido.servico";

@Component({

  selector: "loja-efetivar",
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]

})

export class LojaEfetivarComponent implements OnInit {

  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];
  public total: number;

  ngOnInit(): void {

    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }

  constructor(private usuarioServico: UsuarioServico, private pedidoServico: PedidoServico) {

  }

  public atualizarPreco (produto: Produto, quantidade: number) {
    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }
    produto.preco = produto.precoOriginal * quantidade;
    this.carrinhoCompras.atualizar(this.produtos);
    this.atualizarTotal();
  }

  public remover(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }

  public atualizarTotal() {
    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }

  public efetivarCompra() {

    this.pedidoServico.efetivarCompra(this.criarPedido())
      .subscribe(
        pedidoId => {

        },
        e => {

        });

  }

  public criarPedido(): Pedido {
    let pedido = new Pedido();
    pedido.usuarioId = this.usuarioServico.usuario.id;
    pedido.cep = "49680.000";
    pedido.cidade = "Nossa Senhora da Glória";
    pedido.estado = "Sergipe";
    pedido.dataPrevisaoEntrega = new Date();
    pedido.formaPagamentoId = 1;
    pedido.numeroEndereco = "10";

    this.produtos = this.carrinhoCompras.obterProdutos();

    for (let produto of this.produtos) {
      let itemPedido = new ItemPedido();
      itemPedido.produtoId = produto.id;
      

      if (!produto.quantidade)
        produto.quantidade = 1;

      itemPedido.quantidade = produto.quantidade;

      pedido.itensPedido.push(itemPedido);
    }

    return pedido;
  }
}
