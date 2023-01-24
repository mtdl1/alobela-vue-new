<template>
    <section>
        <div class="carrinhoLateral-upsell" id="Colageno1PoteUpCartOpc2">
            <div class="carrinhoLateral-upsell-title">
                <h3>Aproveite sua surpresa</h3>
            </div>

            <div class="carrinhoLateral-upsell-content">
                <div class="carrinhoLateral-upsell-content-item">
                    <div class="carrinhoLateral-upsell-content-item-img">
                        <!-- <img class="cranberryUp2 groupUp2" src="@/assets/img/upsell/colageno/UpSell-Hidrolisado-Cramberry.png" alt="">
                        <img class="limaoUp2 groupUp2" src="@/assets/img/upsell/colageno/UpSell-Hidrolisado-Limao.png" alt="">
                        <img class="tangerinaUp2 groupUp2" src="@/assets/img/upsell/colageno/UpSell-Hidrolisado-Tangerina.png" alt=""> -->
                    </div>
                    <div class="carrinhoLateral-upsell-content-item-desc">
                        <h4 class="pb-1">{{ boxCompraCarrinho.prod.nome }}</h4>
                        <p>Por apenas <span class="preco-upsell pl-1">R$ {{ (boxCompraCarrinho.prod.precos.por).toFixed(2) }}</span></p>

                        <div class="d-flex align-items-center form-group mt-1 select_sabores">
                            <select name="saboresUp2" class="select_option mr-3 p-1" id="saboresUp2" @change="onChange($event)" v-model="boxCompraCarrinho.sabores">
                                <option class="option ProdutoActive" data-value="cranberryUp2" value="0">Escolha o Sabor</option>
                                <option class="option" data-value="cranberryUp2" value="91">Cranberry</option>
                                <option class="option" data-value="limaoUp2" value="92">Limão</option>
                                <option class="option" data-value="tangerinaUp2" value="93">Tangerina</option>
                            </select>
                            <input type="submit" value="Quero Aproveitar" class="btn-upsell" v-if="prodAdd == false" @click="addUpsell();">
                            <input type="submit" value="Adicionado" class="btn-upsell disabled" disabled v-else>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'Colageno1PtUpsellOpcao2',

        data() {
            return {
                prodAdd: false,
                produtos: null,
                subtotal: null,
                delayUpdate: null,
                loader: false,
                errorMsgs: null,
                qtdItens: 0,

                // Colageno 1 Pote
                boxCompraCarrinho: {
                    sabores: 0,
                    prod: {
                        id: 91,
                        nome: 'Renovabe Colágeno 1 Pote',
                        marca: {
                            nome: "Renovabe",
                        },
                        precos: {
                            por: 89.70,
                        }
                    },
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: 91,
                            idAtributoSimples: "0",
                            idUnidadeVenda: "0",
                            idArmazem: "0",
                            quantidade: "1",
                            adicional: "",
                            parametros: ""
                        }
                    ]
                },
            }
        },

        methods: {
            // obtem o valor do select
            onChange(event) {
                this.boxCompraCarrinho.sabores = event.target.value;
            },

            addUpsell() {
                this.$emit('add-upsell', this.boxCompraCarrinho.sabores)
                // desabilita o botao
                // this.prodAdd = true
            }
        },

        mounted() {
            // troca a imagem do produto de acordo com o select
            $(document).ready(function() {
                $("#Colageno1PoteUpCartOpc2 #saboresUp2").change(function(){
                    $(this).find("option:selected").each(function(){
                        var optionValue = $(this).attr("data-value");
                        if(optionValue){
                            $(".groupUp2").not("." + optionValue).hide();
                            $("." + optionValue).show();
                        } else{
                            $(".groupUp2").hide();
                        }
                    });
                }).change();
            });
        },
    }
</script>

<style scoped>
    @keyframes slide-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .groupUp2 {
        display: none;
        animation: slide-in 2s ease;
    }
    /* Bloco Upsell */
    .carrinhoLateral-upsell {
        border: 1px solid #ddd;
        width: 95%;
        margin: 0 auto;
        border-radius: 8px;
        margin-bottom: 10px;
        overflow: hidden;
    }

    .carrinhoLateral-upsell-content {
        padding: 10px;
    }

    .carrinhoLateral-upsell-title {
        background: #000;
        color: #fff;
        border-bottom: 1px solid #ddd;
        font-family: 'Roboto', sans-serif;
    }

    .carrinhoLateral-upsell-title h3 {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        padding: 9px;
    }

    .carrinhoLateral-upsell-content-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .carrinhoLateral-upsell-content-item-img {
        width: 20%;
        margin-right: 10px;
    }

    .carrinhoLateral-upsell-content-item-img img {
        width: 100%;
    }

    .carrinhoLateral-upsell-content-item-desc {
        flex-grow: 1;
    }

    .carrinhoLateral-upsell-content-item-desc h4 {
        font-size: 14px;
        font-weight: bold;
    }

    .carrinhoLateral-upsell-content-item-desc p {
        font-size: 12px;
    }

    .preco-upsell {
        font-size: 14px;
        font-weight: bold;
        color: #f00;
    }

    .btn-upsell {
        background: #3d9544;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        padding: 8px;
        border-radius: 6px;
        cursor: pointer;
        border: none;
    }

    .btn-upsell:hover {
        opacity: .8;
    }

    .btn-upsell.disabled {
        background: #ddd;
        color: #000;
        cursor: default;
    }

    .select_option {
        border: 1px solid #ddd;
        border-radius: 8px;
        width: 55%;
    }

    select {
        background: transparent;
        color: #000;
    }
</style>