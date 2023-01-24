<template>
    <div class="col-6 col-sm-3 col-xs-6 mb-2 px-2" id="kit2">
        <div class="boxProduto Border1 position-relative">
            <div class="free-shipping position-absolute">FRETE GRÁTIS</div>
            <div class="off-price position-absolute">{{ (Math.floor(100 - (precoPor*100)/precoDe)) }}% OFF</div>
            <div class="boximgProduto d-flex justify-content-center align-items-center">
                <a href="/colageno">
                    <!-- <img id="31" class="kit2CraLim img-fluid" width="200" src="@/assets/renova/serum/Kit-Renova-Be-V5.png" alt="Cranberry + Limao"> -->
                </a>
            </div>
            <div class="name-produto">
                <h2 class="mb-2">2 potes Colágeno + Kit Sérum</h2>
                <div class="opcoes-sabores my-3 w-100">
                    <p>Sabores disponíveis do colágeno: Cranberry, Limão e Tangerina</p>
                </div>
            </div>
            <div class="boxPreco text-left">
                <div class="preco-antigo text-left w-100 my-3 position-relative">
                    <p>De: <s>R$ {{precoDe.toString().replace(".", ",")}}</s> por</p>
                    <!-- <div class="desconto position-absolute desk"><strong>R$ {{((precoPor/quantidadeItens).toFixed(2)).toString().replace(".", ",")}} </strong>cada pote</div> -->
                </div>
                <h2>12x sem juros de </h2>
                <h3>R$ {{((precoPor/12).toFixed(2)).toString().replace(".", ",")}}</h3>
                <h4 class="my-2">ou R$ {{precoPor.toString().replace(".", ",")}} à vista </h4>
            </div>
            <div class="btn-prod-cart w-100 d-flex justify-content-center align-items-end flex-column" style="min-height: 120px" v-if="$route.path != '/'">
                <div class="form-group select_sabores">
                    <select name="saboresKit2Pt" class="select_option browser-default custom-select" id="saboresKit2Pt" @change="onChange($event)" v-model="sabores">
                        <option class="option ProdutoActive" data-value="kit2CraLim" value="0">Escolha o Sabor</option>
                        <option class="option" data-value="kit2CraLim" value="31">2 Potes - Cranberry - Limão</option>
                        <option class="option" data-value="kit2CraTan" value="35">2 Potes - Cranberry - Tangerina</option>
                        <option class="option" data-value="kit2TanLim" value="34">2 Potes - Tangerina - Limão</option>
                        <option class="option" data-value="kit2Cranberry" value="30">2 Potes - Cranberry - Cranberry</option>
                        <option class="option" data-value="kit2Limao" value="32">2 Potes - Limão - Limão</option>
                        <option class="option" data-value="kit2Tangerina" value="33">2 Potes - Tangerina - Tangerina</option>
                    </select>
                </div>
                <button class="BtnProduto mt-3" @click="addCartBoxCompra()">COMPRE AGORA</button>
            </div>
            <a href="/renova-be-colageno-2-potes-kit-serum.html" class="BtnProduto mt-3" v-else>COMPRE AGORA</a>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Comunicacao from '@/comunicacao.js';
    import { mapMutations } from 'vuex';

    export default {
        name: 'ColagenoKit2PotesComSerum',
        
        data() {
            return {
                avaliacaoProduto: false, 
                sabores: 0,
                precoDe: '435.30',
                precoPor: '287.70',
                quantidadeItens: 5,
                boxCompraCarrinho: {
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: "5",
                            idAtributoSimples: "0",
                            idUnidadeVenda: "0",
                            idArmazem: "0",
                            quantidade: "1",
                            adicional: "",
                            parametros: ""
                        },
                    ]
                },
            }
        },

        methods: {
            ...mapMutations(['changeDadosPageAtual']),

            // obtem o valor do select
            onChange(event) {
                this.sabores = event.target.value;
            },

            addCartBoxCompra() {
                //Recupera o id selecionado do produto
                var Produto = this.sabores
                this.boxCompraCarrinho.itens[0].idProduto = Produto

                Comunicacao.$emit('toggleLoader', true)
                let {tipo, itens} = this.boxCompraCarrinho
                let itemAdc       = false
            
                if (tipo && itens) {
                    //ADICIONA O PRODUTO AO CARRINHO
                    this.$carrinho.add(tipo,itens,(success, response) => {
                        response.data.itens.forEach(prod => {
                            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;                     
                        })

                        //PRODUTO ADICIONADO COM SUCESSO
                        if(success){
                            if (Produto == 0) { 
                                this.$toast.error("Selecione um sabor para adicionar ao carrinho!")
                            }
                            else{
                                return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data })
                            }
                            return true
                        }
                        this.changeDadosPageAtual(response.data)
                        //PROBLEMAS AO ADICIONAR PRODUTO
                        this.$toast.error("Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.")
                    })
                    return
                }
            },
        },

        mounted(){
            // troca a imagem do produto de acordo com o select
            $(document).ready(function() {
                $("#kit2 #saboresKit2Pt").change(function(){
                    $(this).find("option:selected").each(function(){
                        var optionValue = $(this).attr("data-value");
                        if(optionValue){
                            $(".groupKit2").not("." + optionValue).hide();
                            $("." + optionValue).show();
                        } else{
                            $(".groupKit2").hide();
                        }
                    });
                }).change();
            });
        },

        created() {
            this.$requestSend('get', `/v2/front/url/list/detail?url=/lista/renova-be-2-potes-cranberry-cranberry-kit-serum.html`, {}, (success, response) => {
                if (success) {
                    this.precoPor = response.data.conteudo.precos.por.toFixed(2)
                } else {
                    console.log('erro')
                }
            });
        },

    }
</script>

<style scoped>
    .off-price {
        background: #f1d259;
        width: 26.5% !important;
        top: 8.8%;
        font-size: 14px;
        color: #67220b;
        font-weight: bold;
        padding: 8px 5px;
        border-radius: 0 15px 15px 0;
    }

    .free-shipping {
        background: #ff4289;
        width: 41% !important;
        top: 2.5%;
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        padding: 8px 5px;
        border-radius: 0 15px 15px 0;
    }

    .groupKit2 {
        display: none;
    }

    .boximgProduto {
        margin: -5px auto -15px auto !important;
        min-height: 250px;
    }

    .avaliacoes {
        margin-top: -35px;
    }

    .name-produto h2 {
        font-size: 20px;
        font-weight: bold;
        min-height: 60px;
    }

    .name-produto {
        min-height: 110px;
    }

    .opcoes-sabores p {
        font-size: 13px;
        color: #666666;
        min-height: 50px;
    }

    .boxProduto{
        background: #fff;
        border-radius: 20px;     
        padding-bottom: 20px;
    }

    .boxProduto div {
        width: 90%;
        margin: 0 auto;
    }

    .preco-antigo {
        font-size: 14px;
        color: #898989;
        font-weight: normal;
    }

    .preco-antigo s {
        color: #000;
    }

    .desconto {
        right: -13px;
        background: #e9e9e9;
        width: auto !important;
        padding: 10px 8px;
        border-radius: 25px 0 0 25px;
        top: 2px;
        font-size: 12px;
    }

    .boxPreco h2{
        font-family: 'Helvetica', sans-serif;
        font-weight: normal;
        color: #000;
        font-size: 14px;
    }

    .boxPreco h3{
        font-family: 'Helvetica', sans-serif;
        font-weight: bold;
        font-size: 45px;
    } 

    .boxPreco h4{
        font-family: 'Helvetica', sans-serif;
        font-weight: normal;
        font-size: 15px;
        color: #898989;
    } 

    .Border1{
        border: 1px solid #ddd;
    }

    /*BOX PRODUTO 01*/
    .select_sabores{ 
        position: relative;
        user-select: none;
        border: 1px solid #dedede;
        border-radius: 8px;
        margin:15px auto;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        font-family: 'Helvetica', sans-serif;
        font-size: 15px;
        width: 73%;
        height: 50px;
        text-align: center;
        line-height: 2.5;
    }

    .select_sabores select {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 8px;
        padding: 10px;
        /* background: #fff; */
    }

    .BtnProduto{
        background-color:#12ac53;
        color:#fff;
        font-weight: bold;
        width: 90%;
        height: 60px;
        border-radius:6px;
        font-family: 'Helvetica',sans-serif;
        border: none;
        cursor: pointer;
        transition: 0.4s ease;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .BtnProduto:focus {
        outline: 0;
    }

    .BtnProduto:hover{
        opacity: 0.8;
        color: #fff;
    }

    @media (max-width: 768px) {
        .boximgProduto {
            min-height: 200px !important;
        }

        .off-price {
            font-size: 11px;
            width: 35% !important;
            top: 9%;
        }

        .free-shipping {
            font-size: 11px;
            width: 55.5% !important;
            top: 2.5%;
        }

        .name-produto h2 {
            font-size: 16px;
        }

        .boxPreco h3{
            font-family: 'Helvetica', sans-serif;
            font-weight: bold;
            font-size: 35px;
        } 

        .px-2 {
            padding: 5px !important;
        }
    }
</style>