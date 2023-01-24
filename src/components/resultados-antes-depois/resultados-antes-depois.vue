<template>
  <div class="bg-alt py-5">
    <div class="container">
      <div class="titulos">
        <h2>RESULTADOS REAIS</h2>
      </div>
      <div class="imgs-resultados">
        <img src="@/assets/img/resultados-antes-depois/Alobela-Antes-e-Depois-1-Desktop.png" alt="">
        <img src="@/assets/img/resultados-antes-depois/Alobela-Antes-e-Depois-2-Desktop.png" alt="">
        <img src="@/assets/img/resultados-antes-depois/Alobela-Antes-e-Depois-3-Desktop.png" alt="">
      </div>
    </div>
    <BotaoCompreAgora class="my-5"/>
  </div>
</template>

<script>
import BotaoCompreAgora from '../gerais/botoes/botao-compre-agora.vue'
export default {
  components: { BotaoCompreAgora },
  name: 'ResultadosAntesDepois',
}
</script>

<style scoped>
.bg-alt {
  background-color: #1A1A28;
}

.titulos h2{
  text-align: center;
  font: normal normal 800 36px/40px Lato;
  letter-spacing: -1.44px;
  color: #FFFFFF;
}

.imgs-resultados{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

@media (max-width: 768px) {
  .imgs-resultados{
    flex-wrap: wrap;
  }

  .imgs-resultados img{
    max-width: 100%;
    margin-bottom: 20px;
  }
}
</style>