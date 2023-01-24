<template>
  <div id="app" @keyup.esc="closeFundo()">
    <Menu class="desk" />
    <MenuMobile class="mob" />
    <transition name="fade">
      <div id="fundoEscuro" v-if="fundoEscuro" @click="closeFundo()"></div>
    </transition>
    <VariaveisPublicas />
    <Datalayers />
    <Snippets />
    <transition name="slideLeft">
      <CarrinhoLateral v-if="showCarrinho" :dataCarrinho="dataCarrinho" />
    </transition>
    <transition name="fade">
      <router-view :key="$route.path" />
    </transition>
    <Rodape />
  </div>
</template>

<script>
  import Comunicacao from "@/comunicacao.js"
  import { mapActions } from 'vuex'
  import Menu from '@/components/gerais/menu/menu.vue'
  import CarrinhoLateral from './components/gerais/carrinho-lateral.vue'
  import VariaveisPublicas from './components/gerais/head/variaveis-publicas.vue'
  import Datalayers from './components/gerais/head/datalayers.vue'
  import Snippets from './components/gerais/head/snippets.vue'
  import Rodape from './components/gerais/rodape/rodape.vue'
  import MenuMobile from './components/gerais/menu/menu-mobile.vue'

  export default {
    components: {
      Menu,
      CarrinhoLateral,
      VariaveisPublicas,
      Datalayers,
      Snippets,
      Rodape,
      MenuMobile
    },

    data() {
      return {
        fundoEscuro: false,
        fundoEscuroData: {},
        showRodape: false,
        showCarrinho: false,
        dataCarrinho: false,
      };
    },

    watch: {
      $route(newVal, oldVal) {
        if (newVal.path != oldVal.path) {
          this.showContent();
          window.addEventListener("scroll", this.showContent);
          document.querySelector("html").scrollTop = 0;
          this.closeFundo();
        }
      },
    },

    methods: {
      ...mapActions(['getMainMenu', 'getDadosUser']),
      closeFundo() {
        this.fundoEscuro = false;
        if (this.fundoEscuroData.el) {
          this.fundoEscuroData.el.$el.classList.remove(
            this.fundoEscuroData.class
          );
        }
        document.querySelector("body").style.overflow = "";
        Comunicacao.$emit("closeMenu");
      },
      showContent() {
        if (
          document.querySelector("html").scrollTop > 100 ||
          this.$route.query.wapRender == "true"
        ) {
          window.removeEventListener("scroll", this.showContent);
          Comunicacao.$emit("loadContent");
          this.showRodape = true;
        }
      },
    },

    created() {
      // document.cookie = "PHPSESSID=dh2d2cu891j697o3s2o5md8k7o"
      this.getMainMenu();
      this.getDadosUser();
      Comunicacao.$on("toggleCarrinho", (response) => {
        this.showCarrinho = response.show;
        this.dataCarrinho = response.data;
      });
      Comunicacao.$on("siteLoaded", () => {
        if (document.body.clientHeight < screen.height) {
          window.removeEventListener("scroll", this.showContent);
          Comunicacao.$emit("loadContent");
          this.showRodape = true;
        }
      });
      this.showContent();
      /* this.trocarCabecalho();*/
      window.addEventListener("scroll", this.showContent);
      Comunicacao.$on("toggleFundoEscuro", (data) => {
        this.fundoEscuro = data.acao;
        this.fundoEscuroData = data;
      });
    },

    mounted() {
        this.urlPage = window.location.href.includes("cupom=picpay12") ? this.$toast.success("Você ganhou 12% de desconto ao pagar com o PicPay!", {position: "top-center"}) : 'cupom não se aplica'
    },
  };
</script>

<style scoped>
  html,body{
    font-family: 'Open Sans',sans-serif !important;
  }
  .mob{display:none;}
  #fundoEscuro {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #00000047;
    /* background: #00000047; */
  }

  .slideLeft-leave-to,
  .slideLeft-enter {
    transform: translate(110%);
  }

  .slideLeft-leave-active,
  .slideLeft-enter-active {
    transition: 500ms;
  }

  .slideLeft-leave,
  .slideLeft-enter-to {
    transform: translate(0);
  }

  @media screen and (max-width: 768px){
    .mob{display:block;}
  }
</style>

<style lang="scss">
  .desk{display: block;}
  .mob{display:none;}

  @media screen and (max-width: 800px){
    .desk{display:none;}
    .mob{display:block;}
  }
</style>
