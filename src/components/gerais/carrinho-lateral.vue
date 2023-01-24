<template lang="html">
  <section @click.stop="" id="carrinhoLateral">
    <div class="carrinhoLateral-mainContainer">

      <!-- PRELOADER -->
      <transition name="fadeNoDelay">
        <div class="carrinhoLateral-preloader" v-if="loader">
          <img src="@/assets/img/geral/preloader.svg" alt="">
        </div>
      </transition>

      <!-- TOPO CARRINHO-->
      <div class="carrinhoLateral-topo">
        <span class="carrinhoLateral-t1">Carrinho ({{ qtdItens }})</span>
        <button class="carrinhoLateral-fechar" @click="closeCarrinho()">
          <span class="svg-icon svg-icon-primary svg-icon-2x">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <polygon points="0 0 24 0 24 24 0 24"/> <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999) "/> </g> </svg></span>
        </button>
      </div>

      <!-- PRODUTOS CARRINHO -->
      <div class="carrinhoLateral-prods">
        <template v-if="errorMsgs">
          <span v-html="errorMsg.mensagem" v-for="(errorMsg, i) in errorMsgs" :key="i" :class="errorMsg.tipo" class="carrinhoLateral-errorMsg"></span>
        </template>

        <div v-if="produtos && qtdItens > 0">
          <div class="carrinhoLateral-prods-item" v-for="(produto, i) in produtos" :key="i">
            <div class="carrinhoLateral-prods-item-img">
              <img :src="produto.imagem ? produto.imagem : require(`@/${$imgDefaultM}`)" alt="">
            </div>

            <div class="carrinhoLateral-prods-item-dados">
              <p class="carrinhoLateral-prods-item-dados-nome">{{ produto.nome.substring(0, 30) + '...' }} </p>
              <div class="carrinhoLateral-prods-item-dados-qtd">
                <button type="button" name="button" @click="produto.quantidade > 1 ? produto.quantidade-- : produto.quantidade; alteraQtd(produto.quantidade, i, true)" class="botao-menos"> - </button>
                <input type="text" v-model="produto.quantidade" value="" @keyup="alteraQtd(produto.quantidade, i)" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
                <button type="button" name="button" @click="produto.quantidade++; alteraQtd(produto.quantidade, i, true)" class="botao-mais"> + </button>
              </div>

              <div class="carrinhoLateral-prods-item-dados-attrPreco">
                <span class="carrinhoLateral-prods-item-dados-attrPreco-preco">{{ $formatPrice(produto.precos.precoPor) }}</span>
              </div>
            </div>

            <div class="carrinhoLateral-prods-remove"><img src="@/assets/img/delete.png" @click="rmvItem(i)" style="height:auto; cursor:pointer;" />
            </div>
          </div>
        </div>

        <div id="carrinhoVazio" v-else>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="%233d9ccc"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"/></svg>
          </span>
          <p>O carrinho de compras está vazio.</p>
        </div>
      </div>

      <!-- RODAPÉ CARRINHO -->
      <template>
        <div class="carrinhoLateral-rodape">
          <div class="title-rodape-carrinho">Resumo do pedido</div>
          <div class="rodape-body">
            <div class="carrinhoLateral-rodape-subtotal">
              <span class="carrinhoLateral-rodape-subtotal-t1"> Subtotal </span>
              <span class="carrinhoLateral-rodape-subtotal-valor"> {{ $formatPrice(subtotal.valor) }} </span>
            </div>

            <div class="carrinhoLateral-rodape-total py-2">
              <span class="carrinhoLateral-rodape-total-t1"> Total </span>
              <span class="carrinhoLateral-rodape-total-valor"> {{ subtotal.descontoVista ? $formatPrice(subtotal.descontoVista.valor) : $formatPrice(subtotal.valor) }}</span>
            </div>

            <div class="carrinhoLateral-rodape-parcelamento" v-if="parcelamento">
              Ou até {{ parcelamento.parcelas }}x de {{ this.$formatPrice(parcelamento.valorParcela) }} sem juros
            </div>

            <span class="carrinhoLateral-rodape-totalDesconto pt-3" v-if="subtotal.descontoVista && subtotal.descontoVista.porcentagem > 0">Valor com <b>{{ subtotal.descontoVista.porcentagem }}% de desconto</b> no PIX.</span>
          </div>

          <div class="carrinhoLateral-rodape-bts">
            <div :class="['w-100',{disabled: subtotal.valor > 10000}]">
              <a :href="`${$siteUrl}checkout/carrinho/`" class="carrinhoLateral-rodape-comprar">Finalizar compra</a>
            </div>
            <router-link to="/produtos" class="carrinhoLateral-rodape-fechar w-100">
              <span @click="closeCarrinho()"> Continue Comprando </span>
            </router-link>
          </div>
          <p class="alertMax" v-if="subtotal.valor > 10000"> Valor máximo do pedido é de R$10.000,00</p>
        </div>
      </template>
      
    </div>
  </section>
</template>

<script>
  import Comunicacao from '@/comunicacao.js'

  export default {
    props: {
      dataCarrinho: new Object,
    },

    components: {
      //
    },

    data() {
      return {
        produtos: null,
        subtotal: null,
        delayUpdate: null,
        loader: false,
        errorMsgs: null,
        qtdItens: 0,
        prodAdd: false,
      }
    },

    computed: {
      parcelamento() {
        let result = null;
        if (this.subtotal.parcelamento) {
          this.subtotal.parcelamento.forEach((item, i) => {
            if (!this.subtotal.parcelamento[i+1] || this.subtotal.parcelamento[i+1].taxa > 0) {
              result = item;
            }
          });
        }
        return result;
      },

      produtosLista() {
        let prod = false
        if(this.produtos) {
          return this.produtos.filter(function (number) {
            if((number.hash.idProduto) && prod == false) {
              prod = true
              return number;
            }
          })
        } else {
            return null;
          }
      },
    },

    methods: {
      closeCarrinho() {
        Comunicacao.$emit('toggleCarrinho', {show: false});
        Comunicacao.$emit('toggleFundoEscuro', {acao: false});
      },

      rmvItem(id) {
        this.loader = true;
        let item    = this.produtos[id].hash
        item.tipo   = this.produtos[id].tipo

        //EVENTO DE REMOVE FROM CART
        // let dadosProduto = this.produtos[id];
        // this.$gtmEventRemoveFromCart(dadosProduto);

        this.$carrinho.remove(item, (success, response) => {
          this.produtos = success ? response.data.itens : this.produtos
          this.subtotal = success ? response.data.subtotal : this.subtotal
          this.loader   = false;
          this.qtdItens = response.data.quantidadeTotal;
          Comunicacao.$emit('updateNumCarrinho', response.data.quantidadeTotal)
          Comunicacao.$emit('updateSubTotal', response.data.subtotal)
        });
      },

      alteraQtd(qtd, id, clickBt = false) {
        if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || clickBt) {
          clearTimeout(this.delayUpdate)
          this.errorMsgs = null;
          this.delayUpdate = setTimeout(() => {
            this.loader = true;
            qtd = parseInt(qtd);
            let item = this.produtos[id].hash
            item.tipo = this.produtos[id].tipo
            item.quantidade = qtd;
            this.$carrinho.update(item, (success, response) => {
              this.errorMsgs = response.data.mensagens;
              setTimeout(() => {
                this.errorMsgs = null;
              }, 5000);
              this.produtos = success ? response.data.itens : this.produtos
              this.subtotal = success ? response.data.subtotal : this.subtotal
              this.loader   = false;
              this.qtdItens = response.data.quantidadeTotal;
              Comunicacao.$emit('updateNumCarrinho', response.data.quantidadeTotal)
              Comunicacao.$emit('updateSubTotal', response.data.subtotal)
              this.renderizou = true;
            });
          }, 300);
        }
      },

      // obtem o valor do select
      onChange(event) {
          this.sabores = event.target.value;
      },

      // LISO-EXTREMO
      addCartBoxCompra(e) {
        const boxCompraCarrinho = {
          sabores: 0,
          tipo: "lista",
          itens: [
            {
              idProduto: e,
              idAtributoSimples: "0",
              idUnidadeVenda: "0",
              idArmazem: "0",
              quantidade: "1",
              adicional: "",
              parametros: ""
            }
          ]
        }

        Comunicacao.$emit('toggleLoader', true)
        this.loader = true
        let itens   = boxCompraCarrinho.itens
        let tipo    = boxCompraCarrinho.tipo
        let itemAdc = false

        if (tipo && itens) {
            //ADICIONA O PRODUTO AO CARRINHO
            this.$carrinho.add(tipo,itens,(success, response) => {
              response.data.itens.forEach(prod => {
                itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == boxCompraCarrinho.sabores
              });
            //PRODUTO ADICIONADO COM SUCESSO
            if(success) {
              if(e == 0){
                this.$toast.error("Selecione um sabor para adicionar ao carrinho!", {
                  position: 'top-right',
                })
                this.loader = false
              } else {
                this.loader = false
                this.prodAdd = true
                this.$carrinho.get((success, resposta) => {
                  this.produtos = resposta.data.itens;
                  this.subtotal = resposta.data.subtotal;
                  this.qtdItens = resposta.data.quantidadeTotal;
                  Comunicacao.$emit('updateNumCarrinho', resposta.data.quantidadeTotal)
                  Comunicacao.$emit('updateSubTotal', resposta.data.subtotal)
                })
                return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data })
              }
            }
            //PROBLEMAS AO ADICIONAR PRODUTO
            // this.$toast.error("Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.")
          })
          return
        }
      },
    },
    
    created() {
      Comunicacao.$emit('toggleLoader', false);
      if (!this.dataCarrinho) {
        this.$carrinho.get((success, response) => {
          this.produtos = response.data.itens;
          this.subtotal = response.data.subtotal;
          this.qtdItens = response.data.quantidadeTotal;
          Comunicacao.$emit('updateNumCarrinho', response.data.quantidadeTotal)
          Comunicacao.$emit('updateSubTotal', response.data.subtotal)
        });
        return;
      }
      this.produtos  = this.dataCarrinho.itens;
      this.subtotal  = this.dataCarrinho.subtotal;
      this.qtdItens  = this.dataCarrinho.quantidadeTotal;
      this.errorMsgs = this.dataCarrinho.mensagens;
      Comunicacao.$emit('updateNumCarrinho', this.dataCarrinho.quantidadeTotal);
      Comunicacao.$emit('updateSubTotal', this.dataCarrinho.subtotal);

      // Recupera o ID do produto
      // let idProduto = this.produtos[0].hash.idProduto;
      // console.log('produtos no carrinho: ', idProduto)

      Comunicacao.$on(
        "updateNumCarrinho",
        (qtd) => (this.quantidadeItens = qtd)
      );
    },

    mounted() {
      document.querySelector('body, html').style.overflow = 'hidden';
      setTimeout(() => {
        Comunicacao.$emit('toggleFundoEscuro', {acao: true});
        document.querySelector('body').addEventListener('click', this.closeCarrinho);
      }, 300);
    },

    beforeDestroy() {
      document.querySelector('body').removeEventListener('click', this.closeCarrinho);
      document.querySelector('body, html').style.overflow = '';
    }
  }
</script>

<style scoped>

  #carrinhoLateral {
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fff;
    z-index: 9999999999;
    width: 100%;
    max-width: 500px;
    height: 100%;
  }

  #carrinhoLateral * {
    font-family: "Open Sans", sans-serif;
  }

  .carrinhoLateral-mainContainer{
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    #carrinhoLateral{
      max-width: 90%;
    }
    img, svg{
      max-width: 150px ;
    }
  }

  /* PRELOADER */
  .carrinhoLateral-preloader{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .carrinhoLateral-preloader img{
    width: 150px;
    margin-bottom: 300px;
  }

  /* TOPO */
  .carrinhoLateral-topo{
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding: 0 15px;
    flex: 0 1 auto;
    border-bottom: 2px solid #dbdbdb;
  }

  .carrinhoLateral-t1{
    font-size: 19px;
    font-weight: 800;
    color: #343434;
    padding: 15px 0 15px 15px;
  }

  .carrinhoLateral-fechar{
    display: flex;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    transition: 200ms;
    background: #343434 !important;
    position: absolute;
    right: 98%;
    top: 5px;
  }

  .carrinhoLateral-fechar:hover{
    background-color: #fff;
  }

  .carrinhoLateral-fechar svg{
    width: 25px;
    height: 25px;
  }

  .carrinhoLateral-fechar path{
    fill: rgb(255, 255, 255) !important;
  }

  .carrinhoLateral-fechar:hover svg{
    fill: #818181;
  }

  /* PRODUTOS */
  /* msg de erro */
  .carrinhoLateral-errorMsg{
    display: block;
    margin-bottom: 20px;
    font-size: 14px;
    color: #ff0000;
    margin-top: 10px;
  }

  /* ------------- */
  .carrinhoLateral-prods{
    padding: 0 10px;
    overflow: auto;
    border-radius: 6px;
    width: 95%;
    height: auto;
    max-height: 60vh;
    margin: 0 auto 10px;
    flex: 1 1 auto;
  }

  .carrinhoLateral-prods-item{
    display: flex;
    padding: 20px 0 0;
    position: relative;
    border-bottom: 2px solid #d5d5d5;
  }

  .carrinhoLateral-prods-item-img{
    max-width: 115px;
    flex: 0 0 auto;
    padding: 0 5px;
    flex: 0 0 auto;
  }
  
  .carrinhoLateral-prods-item-img img{
    max-width: 100%;
  }

  .carrinhoLateral-prods-item-dados{
    flex: 1 1 auto;
  }

  .carrinhoLateral-prods-item-dados-nome{
    display: block;
    padding-right: 15px;
    font-size: 16px;
    font-weight: 600;
    color: #343434;
    /* text-transform: uppercase; */
  }

  .carrinhoLateral-prods-item-dados-frete{
    font-size: 8px;
    font-weight: 700;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80px;
    color: #fff;
    text-transform: uppercase;
    background-color: #000;
    border-radius: 12px;
    margin-top: 4px;
  }

  .carrinhoLateral-prods-item-dados-attrPreco{
    font-size: 16px;
    color: #343434;
    font-weight: 700;
    margin-top: 10px;
  }

  .carrinhoLateral-prods-item-dados-attrPreco-preco{
    font-size: 16px;
  }

  .carrinhoLateral-prods-item-dados-qtd{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    width: 90px !important;
    transition: 400ms ease;
  }

  .botao-menos {
    margin-top: -3.5px;
  }

  .carrinhoLateral-prods-item-dados-qtd button{
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 50%;
    outline: none;
    border: none;
    font-size: 19px;
    color: #d5d5d5;
  }

  .carrinhoLateral-prods-item-dados-qtd button svg{
    width: 10px;
    fill: #d5d5d5;
  }

  .carrinhoLateral-prods-item-dados-qtd input{
    color: #d5d5d5;
    width: 33.333%;
    height: 30px;
    text-align: center;
    font-size: 14px;
    border: none;
    position: relative;
    z-index: 2;
    padding: 0;
    font-weight: 700;
  }

  .carrinhoLateral-prods-remove{
    position: absolute;
    right: 0;
    opacity: .2;
  }

  .carrinhoLateral-prods-remove img{
    width: 20px;
  }

  .carrinhoLateral-prods-remove button{
    width: 20px;
    height: 20px;
    max-width: 15px;
  }

  /* RODAPÉ */
  .title-rodape-carrinho {
    text-align: center;
    font-size: 19px !important;
    padding: 10px 0 20px;
    font-weight: 700;
    color: #343434;
  }

  .carrinhoLateral-rodape {
    flex: 0 1 auto;
    padding: 10px;
    width: 100%;
    margin: 0 auto;
    /* border-radius: 8px; */
    background: #eee;
  }

  .rodape-body{
    padding: 5px 10px;
  }

  .carrinhoLateral-rodape-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    line-height: normal;
  }

  .carrinhoLateral-rodape-total-t1 {
    color: #343434;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .carrinhoLateral-rodape-total-valor {
    color: #343434;
    font-size: 17px;
    font-weight: 700;
  }

  .carrinhoLateral-rodape-totalDesconto{
    font-size: 17px;
    display: block;
    color: #18A851;
    text-align: center;
    margin: 0 -13px;
  }

  .carrinhoLateral-rodape-subtotal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    font-weight: normal;
    line-height: normal;
    margin-bottom: 5px;
  }

  .carrinhoLateral-rodape-subtotal-t1 {
    color: #a8a8a8;
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .carrinhoLateral-rodape-subtotal-valor {
    color: #a8a8a8;
    font-size: 17px;
    font-weight: 700;
  }

  .carrinhoLateral-rodape-parcelamento{
    color: #343434;
    font-size: 13px;
    font-weight: 600;
    text-align: right;
  }

  .carrinhoLateral-rodape-bts {
    width: 95%;
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-top: 2px solid #fff; */
    padding-top: 7px;
  }

  .carrinhoLateral-rodape-bts .w-100{
    width: 50% !important; 
  }

  .carrinhoLateral-rodape-comprar{
    display: flex;
    padding: 12px;
    background-color: #18A851;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-right: 10px;
    text-transform: uppercase;
    transition: 400ms ease;
    text-decoration: none;
    font-family: 'Helvetica', sans-serif !important;
  }

  .carrinhoLateral-rodape-comprar:hover{
    opacity: .8;
  }

  .disabled{
    cursor: not-allowed;
    pointer-events: none;
    background-color: #DDD;
    opacity: .8;
  }

  .carrinhoLateral-rodape-fechar{
    text-align: center;
    font-size: 15px;
    line-height: normal;
    transition: 400ms;
    background: #fff;
    padding: 12px;
    border-radius: 6px;
    font-weight: 600;
    color: #a8a8a8;
  }

  .carrinhoLateral-rodape-fechar span {
    font-family: 'Helvetica', sans-serif !important;
  }

  .carrinhoLateral-rodape-fechar:hover{
    opacity: .5;
  }

  .alertMax{
    color: red;
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
  }

  #carrinhoVazio {
    height: 38px;
    border: 1px solid #18A851;
    color: #18A851;
    text-align: center;
    margin-top: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #carrinhoVazio span{
    display: flex;
  }

  #carrinhoVazio svg{
    fill: #18A851;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  @media (max-width: 767px) {
    #carrinhoLateral {
      max-width: 75%;
    }

    .carrinhoLateral-prods-item-img img{
      max-width: 100% !important;
    }

    .carrinhoLateral-rodape-bts {
      flex-direction: column;
    }

    .carrinhoLateral-prods-item-dados-nome{
      font-size: 14px;
    }

    .carrinhoLateral-prods-remove img{
      width: 20px;
    }

    .carrinhoLateral-rodape-comprar{
      margin-right: 0px;
      margin-bottom: 10px;
    }

    .carrinhoLateral-rodape-bts .w-100 {
      width: 100% !important;
    }
  }
</style>
