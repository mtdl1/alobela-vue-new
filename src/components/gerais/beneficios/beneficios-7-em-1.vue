<template>
  <div class="bg-alt">
    <div class="container pt-5">
      <div class="titulos text-center">
        <h2>O PODER DO 7 EM 1 NA SUA PELE</h2>
        <p>Kit Revolution PRO: Esfoliante Enzimático + Up Lift System</p>
      </div>
      <div class="row justify-content-center desk">
        <div class="col-md-5 esquerda">
          <p>Previne o <br> aparecimento de <br> <strong>manchas de melasma</strong></p>
          <p class="mt-5">Trata marcas como <br> <strong>bigode chinês</strong></p>
          <p class="mt-5">Auxilia no aspecto <br> <strong>mais firme</strong></p>
        </div>
        <div class="col-md-5 direita">
          <p>Diminui <br> <strong>as rugas</strong></p>
          <p class="mt-5">Reduz manchas <br> <strong>abaixo dos olhos</strong></p>
          <p class="mt-5">Ajuda a melhorar a <br> <strong>elasticidade da pele</strong></p>
          <p class="mt-5">Elimina a <br> <strong>pele morta</strong></p>
        </div>
      </div>
      <div class="row justify-content-center mob">
        <div class="col-md-5 col-6 esquerdaMob">
          <p class="mr-5 mt-2">Previne o aparecimento de <strong>manchas de melasma</strong></p>
          <p class="mt-4 mr-5">Trata marcas como <strong>bigode chinês</strong></p>
          <p class="mt-4 mr-5">Auxilia no aspecto <strong>mais firme</strong></p>
        </div>
        <div class="col-md-5 col-6 direitaMob">
          <p class="mt-3 ml-5">Diminui <strong>as rugas</strong></p>
          <p class="mt-4 ml-5 pl-4">Reduz manchas <br> <strong>abaixo dos olhos</strong></p>
          <p class="mt-4 ml-5 pl-2">Ajuda a melhorar a <br> <strong>elasticidade da pele</strong></p>
          <p class="mt-4 ml-5 pl-4">Elimina a <br> <strong>pele morta</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beneficios7Em1'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
.bg-alt {
  background-image: url('../../../assets/img/beneficios/desk/Alobela-Pattern-Background-Beneficios-Desktop.png');
  height: 797px;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  background-image: url('../../../assets/img/beneficios/desk/Alobela-Graciela-Lacerda-Passanto-Kit-Revolution-Desktop.png');
  height: 797px;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: bottom;
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

.col-md-5 {
  text-align: center;
}

.col-md-5.esquerda {
    margin-top: 14%;
}

.col-md-5.direita {
    margin-top: 14%;
    padding-left: 10%;
}

.col-md-5 p{
  font: normal normal normal 24px/26px Lato;
  letter-spacing: -0.96px;
}

.col-md-5 p strong{
  font-weight: 800;
}

.col-md-5.esquerda p{
  text-align: right;
  padding-right: 40%;
}

.col-md-5.direita p{
  text-align: left;
  padding-left: 40%;
}

/* Adpatar ao mobile */
@media (max-width: 768px) {
  .container{
    height: 500px;
    background-size: contain; 
  }
  .col-md-5 p{
    font: normal normal normal 10px/10px Lato;
  }

  .col-md-5.esquerdaMob {
    margin-top: 27%;
  }
  
  .col-md-5.direitaMob {
    margin-top: 27%;
    padding: 0;
  }

  .mob{
    display: flex;
  }
  .bg-alt{
    height: unset;
  }
}

</style>