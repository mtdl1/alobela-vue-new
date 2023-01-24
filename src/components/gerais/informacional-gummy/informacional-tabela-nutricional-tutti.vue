<template>
  <div class="container infoTabela">
    <div class="row">
      <div class="col-md-6">
        <div class="titulos">
          <h2>A GOMA QUE VAI REVOLUCIONAR OS SEUS CUIDADOS COM A PELE</h2>
          <p>150mg de ácido hialurônico puro</p>
        </div>
        <div class="row align-items-center py-3">
            <div class="col-md-9">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" colspan="3" class="border-bottom-0 text-center py-2 topoCabecalho"><strong>INFORMAÇÃO NUTRICIONAL </strong> </th>
                        </tr>
                        <tr class="metricas">
                            <th scope="col" colspan="3" class="border-bottom-0 text-left py-2"> <strong>Porções por embalagem: 1 porção <br> Porção: 13,5g (3 gomas)</strong></th>
                        </tr>
                        <tr class="metricas">
                            <th scope="col" colspan="2" class="text-center border-bottom-0"><strong>Quantidade por porção (13,5g)</strong></th>
                            <th scope="col" class="text-center border-bottom-0"><strong>%VD(*)</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(dado, index) in selecao" :key="index">
                            <th v-html="dado.col1" scope="row"></th>
                            <td class="text-center" width="30%">{{ dado.col2 }}</td>
                            <td class="text-center" width="20%">{{ dado.col3 }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="col" colspan="3" class="text-left py-2 baixoRodape">“Não contém quantidades significativas de gorduras totais, gorduras saturadas, gorduras trans e fibra alimentar.”</th>
                        </tr>
                    </tfoot>
                </table>
                <p class="pt-0">*Percentual de valores diários fornecidos pela porção.</p>
            </div>
            <div class="col-md-3 d-flex flex-wrap icons-infos">
              <div>
                <img src="@/assets/img/icones/Icone-Sem-Lactose.png" alt="">
                <p>SEM <br> LACTOSE</p>
              </div>
              <div>
                <img src="@/assets/img/icones/Icone-Sem-Gluten.png" alt="">
                <p>SEM <br> GLÚTEN</p>
              </div>
              <div>
                <img src="@/assets/img/icones/Icone-Nao-Precisa-De-Agua.png" alt="">
                <p>NÃO PRECISA <br> DE ÁGUA</p>
              </div>
            </div>
        </div>
      </div>
      <div class="col-md-6">
        <img src="@/assets/img/informacional-gummy-rvo/Alobela-Gummy-Juju-Comendo-Gummy-Desktop.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformacionalTabelaNutricional',
  props: ["selecao"], 
}
</script>

<style scoped>
.infoTabela {
  margin-top: 200px;
}

.titulos h2 {
  font: normal normal 800 36px/40px Lato;
  letter-spacing: -0.36px;
  color: #802427;
}

.titulos p {
    width: fit-content;
    padding: 6px 12px;
    margin-top: 20px;
    background: transparent linear-gradient(96deg, #802427 0%, #C71223 20%, #802427 51%, #C71223 78%, #802427 100%) 0% 0% no-repeat padding-box;
    border-radius: 8px;
    font: normal normal normal 24px/24px Lato;
    letter-spacing: -0.24px;
    color: #FFFFFF;
}

.infoTabela .col-md-9 {
    padding: 0;
}

.icons-infos div{
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

.icons-infos p{
  font: normal normal bold 14px/16px Lato;
  letter-spacing: -0.56px;
  color: #802427;
  margin-top: 10px;
}

table {
    border-collapse: separate;
    border-spacing: 0;
}

.table-bordered {
    border: none !important;
}

tbody {
    border-top: 0;
}

.topoCabecalho {
    border-radius: 10px 10px 0 0 !important;
}

.baixoRodape {
    border-radius: 0 0 10px 10px !important;
}

th,
td {
  font: normal normal normal 16px/16px Helvetica;
  letter-spacing: -0.64px;
  color: #802427;
}

th strong {
  font: normal normal 800 20px/22px Lato;
  letter-spacing: -0.2px;
  color: #802427;
}

.table td, .table th{
  padding: .35rem!important;
}

.metricas strong {
  font: normal normal normal 18px/24px Helvetica;
  letter-spacing: -0.72px;
  color: #802427;
}

p {
    font: normal normal normal 12px/13px Open Sans;
    letter-spacing: -0.56px;
    color: #333;
}

thead tr:nth-child(even){
    background-color: #F5F5F5;
}

thead tr:nth-child(odd){
    background-color: #FFF;
}

tbody tr:nth-child(even){
    background-color: #F5F5F5;
}

tbody tr:nth-child(odd){
    background-color: #FFF;
}

tfoot tr{
    background-color: #FFF;
}

tfoot th{
    font: normal normal normal 12px/13px Open Sans;
    letter-spacing: -0.48px;
}

th.border-bottom-0.text-center.py-2.topoCabecalho {
    padding: 5px 0!important;
}

tbody th, tbody td{
    border-top: 0!important;
}

@media(max-width: 768px) {
    .row.align-items-center.py-3 {
        padding-top: 5px !important;
    }

    p {
        font: normal normal normal 12px/15px Open Sans;
        padding-top: 10px;
    }

    th,
    td {
        padding: 5px;
        font: normal normal normal 13px/15px Open Sans;
    }

    th strong {
        font: normal normal 800 15px/18px Open Sans;
    }

    .metricas strong {
        font-size: 13px;
    }

    h2{
      text-align: center;
    }

    .icons-infos div {
        width: 30%;
    }

    .icons-infos {
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 30px;
    }
    .col-md-6 img{
      max-width: 100%;
    }

}

</style>