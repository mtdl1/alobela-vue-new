<template>
    <section class="container-fluid px-0">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-flex justify-content-center">
                        <a href="products/tratamento-anti-idade-7-em-1-skin-complex-plus-com-colageno-verisol-acido-hialuronico-silicio-organico">
                            <img src="@/assets/img/banners/home/desk/banner-alobela.webp" alt="Banner Alobela" class="desk img-fluid" >
                            <img src="@/assets/img/banners/home/mob/Viva-Beauty-Home-Mobile-Banner-Skin-Complex-Plus.jpg" alt="Banner Viva Beauty" class="img-fluid mob">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Comunicacao from '@/comunicacao.js'

    export default {
        name: 'BannerHome',

        data() {
            return {
                boxCart: {
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: "102",
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
    @keyframes slide-in {
        from { transform: translateY(40px);}
        to { transform: translateX(0); }
    }
    
    .fade-enter-active {  
        transition: opacity 2s;
    }

    a {
        cursor: pointer;
    }
</style>