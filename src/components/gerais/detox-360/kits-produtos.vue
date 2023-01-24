<template>
    <div class="container-fluid bg-light py-5" id="KitProduto">
        <div class="container bg-pink py-4">
            <div class="row align-items-center">
                <div class="col-md-7 text-center">
                    <img src="@/assets/img/detox-360/Viva-Beauty-Slim-Detox-360.png" alt="" class="img-fluid" width="525">
                </div>
                <div class="col-md-5 pt-4">
                    <h1 class="w-75">Viva Slim Detox 360º Emagrecedor Natural 8 em 1</h1>
                    <h2 class="pt-2">Viva Beauty Suplemento</h2>
                    <div class="info-kit mt-4">
                        <div class="precoPor">R$ 299,90</div>
                        <div class="parcelado py-2">ou 12x R$ 24,99 sem juros</div>
                        <div class="precoDe pr-2">DE <s>R$ 399,90</s></div>
                    </div>
                    <button class="btn btn-primary mt-5" @click="addCartBoxCompra()" v-if="ativo">ADICIONAR AO CARRINHO</button>
                    <button class="btn btn-primary mt-5 disable" v-else>ESGOTADO</button>
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
              "name": "detox 360",
              "item": "https://www.vivabeauty.com.br/products/detox-360-natural-8-em-1-viva-slim-com-fruto-do-cacto-hibisco-cha-verde"  
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
                boxCart: {
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: "104",
                            idAtributoSimples: "0",
                            idUnidadeVenda: "0",
                            idArmazem: "0",
                            quantidade: "1",
                            adicional: "",
                            parametros: ""
                        },
                    ]
                },
                ativo: false,
            }
        },

        methods: {
            addCartBoxCompra() {
                Comunicacao.$emit('toggleLoader', true)
                let {tipo, itens} = this.boxCart
                let itemAdc       = false
                if (tipo && itens) {
                    //ADICIONA O PRODUTO AO CARRINHO
                    this.$carrinho.add(tipo,itens,(success, response) => {
                        response.data.itens.forEach(prod => {
                            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCart.itens[0].idProduto
                        })
                        //PRODUTO ADICIONADO COM SUCESSO
                        if(success){
                            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data })
                        }
                        this.changeDadosPageAtual(response.data)
                        //PROBLEMAS AO ADICIONAR PRODUTO
                        this.$toast.error("Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.")
                    });
                    return;
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
                    let labels = document.querySelectorAll('label')
                    labels.forEach(label => {
                        label.classList.remove('active')
                    })
                    label.classList.add('active')
                })
            })
        }
    }
</script>

<style scoped>
    .disable {
        cursor: not-allowed !important;
        background: #979797 !important;
        outline: none !important;
    }

    .bg-light {
        background-color: #f7f7f7 !important;
    }

    .bg-pink {
        background-color: #e8d4cb !important;
    }

    h1 {
        font-size: 22px;
        font-family: Poppins, sans-serif;
        color: #000;
        font-weight: 400;
    }

    h2 {
        font-size: 17px;
        font-family: Poppins, sans-serif;
        color: #000;
        font-weight: 300;
        text-transform: uppercase;
    }

    .precoPor {
        font-size: 22px;
        font-family: Poppins, sans-serif;
        font-weight: normal;
    }

    .parcelado {
        font-size: 18px;
        font-family: Poppins, sans-serif;
        font-weight: normal;
    }

    .precoDe {
        font-size: 14px;
        font-family: Poppins, sans-serif;
        font-weight: normal;
        color: #303030;
    }

    .active {
        outline: 1px solid #000;
    }

    .btn {
        width: 350px;
        background: #951837;
        border: none;
        padding: 10px !important;
        border-radius: 2px !important;
        color: #fff !important;
    }

    .btn:hover {
        opacity: .8;
    }

    @media(max-width: 768px) {
        .btn {
            width: 100%;
        }

        h1.w-75 {
            width: 100% !important;
        }
    }
</style>