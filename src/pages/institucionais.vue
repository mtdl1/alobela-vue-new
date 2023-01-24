<template lang="html">
  <main>
    <router-view :config="config" />
  </main>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Comunicacao from "@/comunicacao"

  export default {
    components: {
      //
    },

    props: {
      config: Object,
    },

    data() {
      return {
        breadcrumbItens: [],
        form: {
          cupom: 'MAIARA10'
        }
      };
    },

    created() {
      Comunicacao.$on("getBreadcrumb", (response) => {
        this.breadcrumbItens = response;
      });

      this.$requestSend('get', `/v2/front/url/page?url=${this.genPath(this.$route.fullPath)}`, {}, (success, response) => {
        if (success) {
          this.breadcrumbItens = response.data.estrutura.breadcrumb;
          document.querySelector('title').innerText = response.data.estrutura.seo.title;

          //VARIÁVEIS PÚBLICAS
          this.changeDadosPageAtual(response.data);
          
          return
        }
        this.pageInfo =  404;
      });
    },

    methods: {
      ...mapMutations(['changeDadosPageAtual']),
      genPath(path, onlyQuery){
        if (onlyQuery) {
          path = path.replace(/\/.*(\?.*)/g, '$1');
          return path;
        }
        path = path.replace('?', '&');
        return path;
      },
    }
  }
</script>

<style lang="css" scoped>
</style>
