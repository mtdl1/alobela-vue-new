<template lang="html">
  <div class="not-found">
    <h1>
      404
    </h1>
    <span>Página não encontrada</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['changeDadosPageAtual']),
  },

  created(){
    //RESPONSE FIXO DE 404
    var response = {
      estrutura: {
        nivel: "404",
        seo: {
          title: "Página não encontrada",
          description: "",
          keywords: "",
          canonical: "",
          indexar: false
        }
      }
    }

    //CARREGA O SEO
    this.$aplicaSEO(response.estrutura);

    //CARREGA AS VARIÁVEIS PÚBLICAS
     this.changeDadosPageAtual(response.data);
  }
}

</script>

<style lang="css" scoped>
div{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 78px 0;
  flex-direction: column;
}
h1{
  font-weight: bold;
  color: #e4c9bf;
  font-size: 72px;
}
span{
  font-size: 30px;
}

.not-found{
  min-height: calc(100vh - 60vh);

} 
</style>
