<template>
  <div class="bg-alt">
    <div class="container pt-5">
      <div class="titulos text-center">
        <h2>A COMBINAÇÃO PERFEITA <br class="desk"> PARA TRATAR A SUA PELE</h2>
        <p>Gummy com ácido hialurônico sabor tutti frutti</p>
      </div>
      <div class="texto-informacional text-center pt-4">
        <p>A única super goma de ácido hialurônico puro do país! Trate a sua pele de dentro para fora com a maior concentração de ácido hialurônico puro para reduzir as linhas de expressão, rugas e devolver a firmeza, elasticidade e manter a derme sempre hidratada e com uma aparência muito mais jovem e bela com apenas uma única goma ao dia!</p>
      </div>
      <div class="beneficios-informacional row justify-content-between desk">
        <div class="col-md-5 esquerda">
          <ul>
            <li><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""><p>Hidrata profundamente</p></li>
            <li class="listaSegundo"><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""><p>Pele mais firme e macia</p></li>
            <li class="listaTerceiro"><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""><p>Ajuda no tratamento <br> de acnes</p></li>
          </ul>
        </div>
        <div class="col-md-5 direita">
          <ul>
            <li><p>Diminui rugas e marcas <br> de expressão</p><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""></li>
            <li class="listaSegundo"><p>Ameniza manchas</p><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""></li>
            <li class="listaTerceiro"><p>Rejuvenesce sem <br class="desk"> usar agulhas</p><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""></li>
          </ul>
        </div>
      </div>
    </div>
    <InformacionalTabelaNutricional :selecao="dataTable"/>
    <BotaoCompreAgora  class="mt-5"/>
  </div>
</template>

<script>
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue'
import InformacionalTabelaNutricional from './informacional-tabela-nutricional-tutti.vue'

export default {
  components: {
      InformacionalTabelaNutricional,
      BotaoCompreAgora
    },
    name: 'InformacionalGummy',
    data() {
      return {
        dataTable: [{
            col1: 'Valor energético (kcal)',
            col2: '23,7 kcal',
            col3: '',
          },
          {
            col1: 'Carboidratos (g)',
            col2: '10,25 g',
            col3: '20,5%',
          },
          {
            col1: 'Açúcares totais (g)',
            col2: '5,25 g',
            col3: '10,5%',
          },
          {
            col1: 'Açúcares adicionados (g)',
            col2: '5,25 g',
            col3: '10,5%',
          },
          {
            col1: 'Proteínas (g)',
            col2: '1,42 g',
            col3: '2,8% ',
          },
          {
            col1: 'Sódio (mg)',
            col2: '3,1 mg',
            col3: '',
          },
          {
            col1: 'Ácido hialurônico (mg)',
            col2: '150 mg',
            col3: '',
          },
        ],
      }
    }
  }
</script>

<style scoped>

.bg-alt{
  background-image: url('../../../assets/img/informacional-gummy-rvo/Alobela-Rvo-Gummy-Beneficios-Tutti-Frutti-Desktop.png');
  height: 1484px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.titulos h2{
  font: normal normal 800 36px/40px 'Lato';
  letter-spacing: 0px;
  color: #802427;
}

.titulos p{
  font: normal normal normal 18px/18px Open Sans;
  letter-spacing: -0.72px;
  color: #1A1A28;
}

.texto-informacional p{
  font: normal normal normal 16px/22px Open Sans;
  letter-spacing: -0.64px;
  color: #1A1A28;
  width: 70%;
  margin: 0 auto;
}

.esquerda {
    margin-top: 9.5%;
}

.beneficios-informacional ul li{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 9%;
}

.beneficios-informacional ul li img{
  margin-right: 10px;
}

li.listaSegundo {
    margin-left: -50px;
    margin-bottom: 6.7%!important
}

li.listaTerceiro {
    margin-left: -80px;
}

.direita {
    margin-top: 8%;
}

.direita ul li {
    margin-left: 0;
    margin-bottom: 7.5%;
    text-align: right;
}

.direita ul li img {
    margin-left: 10px;
    margin-right: 0;
}

.direita .listaSegundo{
    margin-left: 70px;
    margin-bottom: 9%!important;
}

.direita .listaTerceiro{
    margin-left: 100px;
}

.beneficios-informacional p{
  font: normal normal normal 18px/26px Lato;
  letter-spacing: 0px;
  color: #802427;
}

@media (max-width: 992px) {
  .bg-alt{
    background-image: unset;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .texto-informacional p {
    width: 100%;
  }

  .beneficios-informacional ul li {
      margin: 10px 0 !important;
  }

  .infoTabela {
    margin-top: 50px;
  }
}

</style>