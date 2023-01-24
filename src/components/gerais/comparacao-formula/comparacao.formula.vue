<template>
  <div class="container">
    <div class="img-comparacao text-center">
      <img src="@/assets/img/comparacao-formula/Alobela-Kit-Revolution-Comparacao-Outras-Marcas-Desktop.png" alt="">
    </div>
    <div class="row comparativo">
      <div class="col-6">
        <h3>KIT REVOLUTION</h3>
        <ul>
          <li><p>Prático, rápido e eficiente</p> <img src="@/assets/img/icones/CHECK MARK.png" alt=""></li>
          <li><p>Rotina de skincare em apenas 2 passos</p> <img src="@/assets/img/icones/CHECK MARK.png" alt=""></li>
          <li><p>Trata a pelo com apenas 2 produtos</p> <img src="@/assets/img/icones/CHECK MARK.png" alt=""></li>
          <li><p>Contém ácido hialurônico, <br> que hidrata a pele profundamente</p> <img src="@/assets/img/icones/CHECK MARK.png" alt=""></li>
          <li><p>Ajuda a tratar manchas, <br> inclusive as de melasma</p> <img src="@/assets/img/icones/CHECK MARK.png" alt=""></li>
          <li><p>Sem parabenos</p> <img src="@/assets/img/icones/CHECK MARK.png" alt=""></li>
          <li><p>Eficácia comprovada</p> <img src="@/assets/img/icones/CHECK MARK.png" alt=""></li>
          <li><p>Não testado em animais</p> <img src="@/assets/img/icones/CHECK MARK.png" alt=""></li>
        </ul>
      </div>
      <div class="col-6">
        <h3>OUTRAS MARCAS</h3>
        <ul>
          <li><img src="@/assets/img/icones/CROSS MARK.png" alt=""><p>Muitos passos para cuidar da pele</p></li>
          <li><img src="@/assets/img/icones/CROSS MARK.png" alt=""><p>São necessários muitos produtos <br> para ter resultado</p></li>
          <li><img src="@/assets/img/icones/CROSS MARK.png" alt=""><p>Não contém ácido hialurônico</p></li>
          <li><img src="@/assets/img/icones/CROSS MARK.png" alt=""><p>Não tratam manchas <br> de melasma</p></li>
          <li><img src="@/assets/img/icones/CROSS MARK.png" alt=""><p>Algumas marcas <br> contém parabenos</p></li>
          <li><img src="@/assets/img/icones/CROSS MARK.png" alt=""><p>Nem todas têm <br> comprovação de eficácia</p></li>
          <li><img src="@/assets/img/icones/CROSS MARK.png" alt=""><p>Fazem testes <br> em animais</p></li>
        </ul>
      </div>
    </div>
    <BotaoCompreAgora class="my-5"/>
  </div>
</template>

<script>
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue';
export default {
  components: { BotaoCompreAgora },
  name: "ComparacaoFormula",
};
</script>

<style scoped>
.comparativo  h3{
  font: normal normal 800 36px/40px 'Lato';
  letter-spacing: 0px;
  color: #1A1A28;
  text-align: center;
}

.comparativo ul{
  padding-top: 50px;
}

.comparativo ul li{
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.col-6:first-child ul li{
  justify-content: flex-end;
  margin-right: 40px;
}

.col-6:first-child p{
  text-align: right;
}

.col-6:last-child ul li{
  margin-left: 40px;
}

.col-6:first-child{
  border-right-width: 2px;
  border-right-style: solid;
  border-image: linear-gradient( to bottom, #1A1A2800, #1A1A28, #1A1A2800) 1 100%;

}

.col-6:first-child img{
  margin-left: 20px;
}

.col-6:last-child img{
  margin-right: 20px;
}

.comparativo p{
  font: normal normal normal 24px/29px Lato;
  letter-spacing: 0px;
  color: #1A1A28;
}

@media (max-width: 768px) {

  .col-6{
    padding: 0;
  }

  .img-comparacao img {
    max-width: 100%;
  }

  .comparativo h3 {font: normal normal 800 18px/20px 'Lato';}
  }

  .comparativo p{
    font: normal normal normal 14px/16px Lato;
  }

  .col-6:first-child ul li{
    margin-right: 20px;
  }

  .col-6:last-child ul li{
    margin-left: 20px;
  }

  .col-6:first-child img{
    margin-left: 10px;
  }

  .col-6:last-child img{
    margin-right: 10px;
  }

</style>