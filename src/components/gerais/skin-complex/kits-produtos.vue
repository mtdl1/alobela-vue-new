<template>
    <div class="container-fluid bg-light" id="KitProduto">
        <div class="container bg-pink py-4">
            <div class="row align-items-center">
                <div class="col-md-7 text-center">
                    <img src="@/assets/img/skin-complex/Viva-Beauty-Skin-Complex-1-Pote.png" alt="" class="img-fluid" width="525" v-show="kit == 98">
                    <img src="@/assets/img/skin-complex/Viva-Beauty-Skin-Complex-2-Potes.png" alt="" class="img-fluid" width="525" v-show="kit == 99">
                    <img src="@/assets/img/skin-complex/Viva-Beauty-Skin-Complex-5-Potes.png" alt="" class="img-fluid" width="525" v-show="kit == 100">
                </div>
                <div class="col-md-5 py-4">
                    <p class="w-75">Tratamento Anti-Idade 6 em 1 Skin Complex com Colágeno Verisol + Ácido Hialurônico</p>
                    <label for="kit1" class="d-flex align-items-center mt-3 bg-white">
                        <div class="circ-select">
                            <input type="radio" id="kit1" name="kit" v-model="kit" value="98" @change="onChangeKit($event)">
                        </div>
                        <div class="info-kit ml-2">
                            <h2 class="name-kit pb-2">1 UNIDADE (1 MÊS)</h2>
                            <div class="off pb-2"><strong>{{ (Math.floor(100 - (kits.kit1.precoPor*100)/kits.kit1.precoDe)) }}% OFF</strong></div>
                            <div class="precos d-flex pb-2">
                                <div class="precoDe pr-2">DE <s>{{ kits.kit1.precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</s></div>
                                <div class="precoPor">POR <strong><mark> {{ kits.kit1.precoPor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </mark></strong></div>
                            </div>
                            <div class="desconto">DESCONTO DE <strong> {{ (kits.kit1.precoDe - kits.kit1.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </strong></div>
                        </div>
                    </label>
                    <label for="kit3" class="d-flex align-items-center mt-3 active altcolor">
                        <div class="circ-select">
                            <input type="radio" id="kit3" name="kit" v-model="kit" value="100" @change="onChangeKit($event)">
                        </div>
                        <div class="info-kit ml-2">
                            <h2 class="name-kit pb-2">4 UNIDADES <strong>+ BRINDE</strong> (5 MESES)</h2>
                            <div class="off pb-2"><strong>{{ (Math.floor(100 - (kits.kit3.precoPor*100)/kits.kit3.precoDe)) }}% OFF</strong> <span class="destacado ml-2 px-2">KIT MAIS VENDIDO</span></div>
                            <div class="precos d-flex pb-2">
                                <div class="precoDe pr-2">DE <s>{{ kits.kit3.precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</s></div>
                                <div class="precoPor">POR <strong><mark>{{ kits.kit3.precoPor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</mark></strong></div>
                            </div>
                            <div class="desconto">DESCONTO DE <strong>{{ (kits.kit3.precoDe - kits.kit3.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong></div>
                        </div>
                    </label>
                    <label for="kit2" class="d-flex align-items-center mt-3 bg-white">
                        <div class="circ-select">
                            <input type="radio" id="kit2" name="kit" v-model="kit" value="99" @change="onChangeKit($event)">
                        </div>
                        <div class="info-kit ml-2">
                            <h2 class="name-kit pb-2">2 UNIDADES (2 MESES)</h2>
                            <div class="off pb-2 mb-1"><strong>{{ (Math.floor(100 - (kits.kit2.precoPor*100)/kits.kit2.precoDe)) }}% OFF</strong></div>
                            <div class="precos d-flex pb-2">
                                <div class="precoDe pr-2">DE <s>{{ kits.kit2.precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</s></div>
                                <div class="precoPor">POR <strong><mark>{{ kits.kit2.precoPor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</mark></strong></div>
                            </div>
                            <div class="desconto">DESCONTO DE <strong>{{ (kits.kit2.precoDe - kits.kit2.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong></div>
                        </div>
                    </label>
                    <button class="btn btn-primary mt-3" @click="addCartBoxCompra()" v-if="emEstoque">COMPRE AGORA</button>
                    <button class="btn btn-primary mt-3 disabled " v-else >ESGOTADO</button>
                </div>
            </div>
        </div>
        <component :is="'script'" type="application/ld+json">
         {
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Home",
              "item": "https://www.vivabeauty.com.br/"  
            },{
              "@type": "ListItem", 
              "position": 2, 
              "name": "SkinComplex",
              "item": "https://www.vivabeauty.com.br/products/tratamento-anti-idade-6-em-1-skin-complex-com-colageno-verisol-acido-hialuronico"  
            }]
          }
        </component>
    </div>
</template>

<script>
    import Comunicacao from '@/comunicacao.js'

    export default {
        name: 'ProdutosSkinComplex',
        data() {
            return {
                emEstoque: false,
                kit: '100',
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
                kits: {
                    kit1: {
                        precoDe: 299.90,
                        precoPor: 177.70,
                        quantidade: 1,
                    },
                    kit2: {
                        precoDe: 599.80,
                        precoPor: 297.70,
                        quantidade: 2,
                    },
                    kit3: {
                        precoDe: 1199.60,
                        precoPor: 527.70,
                        quantidade: 4,
                    },
                }
            }
        },

        methods: {
            // obtem valor do radio button
            onChangeKit(event) {
                this.kit = event.target.value
            },

            addCartBoxCompra() {
                //Recupera o id selecionado do produto
                var Produto = this.kit
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

        // remove class active do radio button e adiciona ao elemento selecionado
        mounted() {
            let radios = document.querySelectorAll('input[name="kit"]')
            radios.forEach(radio => {
            radio.addEventListener('click', (e) => {
                let radio = e.target
                let label = radio.parentElement
                let parentLabel = label.parentElement
                let labels = document.querySelectorAll('label')
                labels.forEach(parentLabel => {
                parentLabel.classList.remove('active')
                })
                parentLabel.classList.add('active')
            })
            })
        }
    }
</script>

<style scoped>
    .bg-light {
        background-color: #FBF3F1!important;
        background-size: 100%;
    }

    p {
        font-size: 22px;
        font-family: Poppins, sans-serif;
        color: rgb(0, 0, 0);
        font-weight: 400;
    }

    label {
        cursor: pointer;
        outline: 1px solid #c1c1c1;
        padding: 8px 20px;
        width: 350px;
        /* height: 124px; */
        font-size: 14px;
        font-family: Poppins, sans-serif;
        border-radius: 8px;
    }

    label h2 {
        font-size: 15px;
        font-family: Poppins, sans-serif;
        font-weight: normal;
    }

    label s {
        color: #786878;
    }

    label mark {
        background: #fc9700;
        font-size: 15px !important;
    }

    .active {
        outline: 1px solid #951837;
    }

    .btn {
        width: 350px;
        background: #10B265 !important;
        border: 1px solid #10B265;
        padding: 10px !important;
        border-radius: 4px !important;
        color: white !important;
        transition: 0.5s;
    }

    .btn:hover {
        opacity: .8;
        transition: 0.2s;
    }

    input[type="radio"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #ff428a00;
        margin: 0;
        color: white;
        width: 30px !important;
        height: 30px !important;
        border-radius: 50%;
        padding-right: 20px;
        transition: 0.5s;
    }

    input[type="radio"]:checked {
        background-color: #951837;
        border: 5px solid #e8d4cb !important;
        transition: 0.5s;
    }

    .circ-select {
        border-radius: 50%;
        border: 1px solid #951837;
        display: flex;
        margin: 0 10px;
    }

    .altcolor{
        background-color: #FAEBD7;
    }

    .altcolor input[type="radio"]:checked {
        border: 5px solid #FAEBD7!important;
    }

    .destacado{
        background-color: #951837;
        color: white;
        font-weight: 600;
    }

    .disabled {
        background: #ccc !important;
        cursor: not-allowed;
        border: none !important;
    }

    @media(max-width: 768px) {
        .bg-light {
            background: #FBF3F1 !important;
        }
        span{
            display: block;
            margin-left: 0!important;
            width: fit-content;
        }
        label {
            width: auto;
        }
        .btn {
            width: 100%;
        }

        h1.w-75 {
            width: 100% !important;
        }
    }

    @media(max-width: 376px) {
        .destacado{
            margin-top: 10px;
        }
        .precos{
            flex-wrap: wrap;
        }
        .precoPor {
            width: 100%;
            padding: 10px 0 0 0;
        }
    }
</style>