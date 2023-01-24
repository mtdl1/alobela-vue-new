<template>
  <div class="bg-alt py-5">
    <div class="container">
      <div class="titulos text-center">
        <h2>O PODER DO 7 EM 1 NA SUA PELE</h2>
        <p>Kit Revolution PRO: Esfoliante Enzimático + Up Lift System</p>
      </div>
      <div class="texto-formula">
        <p>A dupla perfeita para revolucionar a sua pele em apenas dois passos! Use o poder da nanotecnologia em favor do seu rejuvenescimento com o esfoliante enzimático e o Up Lift System, que juntos, agem nas camadas mais profundas da derme, a deixando mais firme, bela, viçosa e jovem devido ao preenchimento das rugas e linhas de expressão.</p>
      </div>
      <div class="row py-4 align-items-center">
        <div class="col-md-6 text-center img-formula">
          <img src="@/assets/img/formula-alobela/Alobela-Kit-Revolution-Beneficios-Desktop.png" alt="">
        </div>
        <div class="col-md-6 pl-3">
          <div class="itens-formula">
            <h3>Extrato orgânico de Hibiscus</h3>
            <p>Protege o colágeno do corpo diminuindo as rugas e o ressecamento. Hidrata profundamente e diminui a flacidez.</p>
            <h3>Ácido Hialurônico</h3>
            <p>Promove elasticidade, melhora a hidratação, viço e firmeza da pele.</p>
            <h3>DMAE</h3>
            <p>Age com efeito progressivo e acumulativo, preenchendo as rugas profundas e finas.</p>
            <h3>Nanotecnologia</h3>
            <p>Utiliza pequenas partículas de princípios ativos capazes de penetrar nas camadas mais profundas da pele.</p>
          </div>
        </div>
      </div>
    </div>
    <BotaoCompreAgora class="mt-5"/>
  </div>
</template>

<script>
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue'
export default {
  components: { BotaoCompreAgora },
  name: "FormulaAlobela",
}
</script>

<style scoped>

.container {
  max-width: 789px!important;
}
.bg-alt {
  background-color: #F2F2F2;
}

.titulos h2{
  font: normal normal 800 36px/40px 'Lato';
  letter-spacing: 0px;
  color: #1A1A28;
}

.titulos p{
  font: normal normal normal 18px/18px Open Sans;
  letter-spacing: -0.72px;
  color: #1A1A28;
}

.texto-formula p{
  font: normal normal normal 16px/20px Open Sans;
  letter-spacing: -0.64px;
  margin-top: 30px;
  text-align: center;
}

.img-formula img{
  width: 100%;
}

.itens-formula h3{
  font: normal normal 800 20px/22px 'Lato';
  letter-spacing: 0px;
  color: #1A1A28;
  margin-top: 30px;
}

.itens-formula p{
  font: normal normal normal 18px/22px Open Sans;
  letter-spacing: -0.72px;
  color: #1A1A28;
}
</style>