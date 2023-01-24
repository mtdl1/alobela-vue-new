<template>
    <section class="container-fluid px-0  position-relative bg-alt">
      <!-- <div class="row bg-light justify-content-center align-items-center py-3">Frete Grátis para todo o Brasil e até 12x sem juros!</div> -->

      <div class="container position-relative">
        <div class="row py-3">

          <div class="col-md-4 pl-0 d-flex align-items-center">
            <nav class="navbar navbar-expand-lg pl-0">

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado"
                aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>

              <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul class="nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle pl-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      TODOS OS PRODUTOS
                    </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a href="#" class="dropdown-item nav-link">PRODUTO</a>
                        <a href="#" class="dropdown-item nav-link">PRODUTO</a>
                      </div>
                  </li>
                </ul>
              </div>

            </nav>
          </div>

          <div class="col-md-4 text-center">
            <a href="/" class="navbar-brand mx-auto">
              <img src="@/assets/img/logo/logo.png" alt="">
            </a>
          </div>

            <div class="col-md-4 d-flex justify-content-end align-items-center">
              
            <nav class="navbar navbar-expand-lg pl-0">

              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="#"> ATENDIMENTO </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> MINHA CONTA </a>
                </li>
              </ul>

            </nav>
              
              <a :href="`${$siteUrl}/checkout/carrinho/`" @click.prevent="openCarrinho()" class="mr-0 pr-0">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <div class="headerContainerTop-carrinho-num" v-if="dadosCarrinho.quantidadeItens">
                  {{ dadosCarrinho.quantidadeItens }}
                </div>
              </a>
            </div>

        </div>
      </div>
    </section>
</template>

<script>
    import comunicacao from "@/comunicacao.js";
    import { mapState, mapMutations } from 'vuex';

    export default {
        components: {
        }, 

    data() {
      return {
        config: false,
        dadosCarrinho: false,
      };
    },

    computed: {
      ...mapState(['screenWidth', 'menuLoaded', 'dadosUser'])
    },

    methods: {
      ...mapMutations(['changeStatusMenu']),
      openMenu() {
        comunicacao.$emit("openMenu");
      },
      openCarrinho() {
        comunicacao.$emit("toggleCarrinho", { show: true });
      },
    },

    mounted() {
      comunicacao.$on("updateSubTotal", (response) => {
        this.subTotalCarrinho = response.valor;
      });

      this.$requestSend("get", "/v2/front/checkout/cart", {}, (success, response) => {
        this.dadosCarrinho = response.data;
        if ( response.data && response.data.subtotal && response.data.subtotal.valor) {
          this.dadosSubTotal = response.data.subtotal.valor;
        }
        comunicacao.$emit("carrinhoCarregado", response.data);
      });

      comunicacao.$on("configCarregada", (response) => {
        this.config = response.configuracoes;
      });

      this.$requestSend("get", "/v2/front/checkout/cart", {}, (success, response) => {
          this.dadosCarrinho = response.data;
          comunicacao.$emit("carrinhoCarregado", response.data);
        }
      );
    },

    created() {
      comunicacao.$on(
        "updateNumCarrinho",
        (qtd) => (this.dadosCarrinho.quantidadeItens = qtd)
      );
    },
  };
</script>

<style scoped>

  .bg-alt{
    background-color: #34BDAD;
  }
  .bg-light {
    background-color: #e4c9bf !important;
    font-family: 'Poppins', sans-serif;
  }

  .cart-count {
    right: 20px;
    top: 60px;  
  }

  .navbar .nav-item .dropdown-menu{ 
    display: none; 
  }

	.navbar .nav-item:hover .dropdown-menu { 
    display: block;
    width: max-content !important;
    margin-left: -10px !important;
    border: 1px solid #dbdbdb;
  }

	.navbar .nav-item .dropdown-menu{ 
    margin-top:0; 
  }

  .dropdown-menu a {
    font-weight: 500 !important;
    padding-left: 16px !important;
  }

  .dropdown-toggle::after {
    float: right;
    margin-left: unset !important;
    border: unset !important;
    /* font-family: "Font Awesome 5 Free"; */
    font: normal normal normal 18px/1 FontAwesome;
    font-weight: bold !important;
    content: "\f107";
    color: rgb(255, 255, 255);
    /* font-size: 16px; */
    padding-left: 10px;
    position: relative;
    top: -2px;
  }

  .nav-item.dropdown:hover .dropdown-toggle::after {
    content: "\f106";
  }

  a.nav-link {
    font: normal normal 900 15px/14px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
  }

  .dropdown-menu .nav-link {
    color: black;
  }

  .headerContainerTop-carrinho-num {
    position: absolute;
    top: -3px;
    right: -9px;
    font-size: 10px;
    color: #fff;
    background-color: #ff4289;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 6px;
  }

  svg.icon-inline.icon-2x {
    filter: invert(1);
  }

  .fa-shopping-bag{
    color: #fff;
  }

  @media(max-width: 768px) {
      button.navbar-toggler {
        position: absolute;
        left: 43vw;
        top: -9vh;
    }

    .navbar-collapse {
        background: rgb(153, 153, 153);
    }
  }

</style>