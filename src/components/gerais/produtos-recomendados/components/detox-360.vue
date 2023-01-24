<template>
    <div class="col-6 col-md-3">
        <div class="card">
            <a href="/products/detox-360-natural-8-em-1-viva-slim-com-fruto-do-cacto-hibisco-cha-verde">
                <div class="card-image position-relative">
                    <img src="@/assets/img/detox-360/produto-recomendado.webp" alt="" class="img-fluid">
                </div>
                <div class="card-body pt-4">
                    <h2>Detox 360 Emagrecedor Natural 8 em 1 Viva Slim</h2>
                    <div class="precos d-flex flex-wrap py-2">
                        <div class="precoDe pr-3"><s>R$ 399,00</s></div>
                        <div class="precoPor">R$ 299,90</div>
                    </div>
                    <div class="parcelado">ou 12x R$ 24,99 sem juros</div>
                </div>
            </a>
            <div class="addCart position-absolute" @click="addCartBoxCompra()">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import Comunicacao from '@/comunicacao.js'

    export default {
        name: 'RecomendadoDetox',

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
        }
    }
</script>

<style scoped>
    .card {
        width: 100%;
        margin: 0 auto;
        border: none !important;
    }

    .card-image {
        width: 330px;
        height: 330px;
    }

    .card-image img {
        height: 100%;
    }

    h2 {
        font-size: 18px;
        font-family: Poppins, sans-serif;
        font-weight: normal;
    }

    .precoDe, .precoPor {
        font-size: 14px;
    }

    .precoDe s {
        color: #303030;
    }

    .parcelado {
        font-size: 18px;
    }

    .addCart {
        cursor: pointer;
        right: 10%;
        bottom: 28%;
        z-index: 999;
        border: 1px solid #aaa;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s ease-in-out;
    }

    .addCart:hover {
        transform: scale(1.2) rotate(180deg);
    }

    @media(max-width: 768px) {
        h2 {
            font-size: 15px;
        }

        .addCart {
            bottom: 43%;
        }

        .parcelado {
            font-size: 16px;
        }

        .card-image {
            width: 100% !important;
            height: auto !important;
        }
    }
</style>