<template>
  <div class="bg-alt">
    <div class="container pt-5">
      <div class="titulos text-center">
        <h2>A COMBINAÇÃO PERFEITA <br> PARA TRATAR A SUA PELE</h2>
        <p>Gummy com ácido hialurônico sabor tutti frutti</p>
      </div>
      <div class="texto-informacional text-center pt-4">
        <p>A única super goma de ácido hialurônico puro do país! Trate a sua pele de dentro para fora com a maior concentração de ácido hialurônico puro para reduzir as linhas de expressão, rugas e devolver a firmeza, elasticidade e manter a derme sempre hidratada e com uma aparência muito mais jovem e bela com apenas uma única goma ao dia!</p>
      </div>
      <div class="beneficios-informacional row justify-content-between desk">
        <div class="col-md-5 esquerda">
          <ul>
            <li><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""><p>Vitamina B6</p></li>
            <li class="listaSegundo"><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""><p>Biotina</p></li>
            <li class="listaTerceiro"><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""><p>Cromo</p></li>
          </ul>
        </div>
        <div class="col-md-5 direita">
          <ul>
            <li><p>Ácido pantotênico</p><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""></li>
            <li class="listaSegundo"><p>Selênio</p><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""></li>
            <li class="listaTerceiro"><p>Silício</p><img src="@/assets/img/icones/Emoji-Coracao-Vermelho-1.png" alt=""></li>
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
import InformacionalTabelaNutricional from './informacional-tabela-nutricional-uva.vue'
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
            col2: '600 mcg',
            col3: '100%',
          },
          {
            col1: 'Carboidratos (g)',
            col2: '1,2 mg',
            col3: '100%',
          },
          {
            col1: 'Açúcares totais (g)',
            col2: '1,2 mg',
            col3: '100%',
          },
          {
            col1: 'Açúcares adicionados (g)',
            col2: '1,2 mg',
            col3: '100%',
          },
          {
            col1: 'Proteínas (g)',
            col2: '1,2 mg',
            col3: '100%',
          },
          {
            col1: 'Sódio (mg)',
            col2: '1,2 mg',
            col3: '100%',
          },
          {
            col1: 'Ácido hialurônico (mg)',
            col2: '1,2 mg',
            col3: '100%',
          },
        ],
      }
    }
  }
</script>

<style scoped>

.bg-alt{
  background-image: url('../../../assets/img/informacional-gummy-uva/Alobela-Rvo-Gummy-Beneficios-Uva-Desktop.png');
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
    margin-top: 5.5%;
}

.beneficios-informacional ul li{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 11%;
}

.esquerda ul li {
    margin-right: 110px;
}

.beneficios-informacional ul li img{
  margin-right: 10px;
}

.direita {
    margin-top: 5%;
}

.direita ul li {
    margin-left: 0;
    margin-bottom: 11.5%;
    text-align: right;
    justify-content: flex-start;
    margin-left: 150px;
}

.direita ul li img {
    margin-left: 10px;
    margin-right: 0;
}

.direita .listaSegundo{
    margin-bottom: 11.5%!important;
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
      justify-content: center;
  }

  .infoTabela {
    margin-top: 50px;
  }
}

</style>