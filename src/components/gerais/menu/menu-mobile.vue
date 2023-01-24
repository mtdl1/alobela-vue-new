<template>
        <header class="mob">
            <!-- <div class="row bg-light justify-content-center align-items-center py-3">Frete Especial Brasil e até 12x sem juros</div> -->
            <div class="w-100 d-flex justify-content-center align-items-center py-3 px-3 position-relative">
                <a href="/">
                    <img class="logoMob" src="@/assets/img/logo/logo.png" alt="">
                </a>
                <div class="d-flex align-items-center position-absolute icons-menu">
                    <a href="/checkout/carrinho/" class="position-relative mx-2" @click.prevent="openCarrinho()">
                        <!-- <i class="fa fa-shopping-bag" aria-hidden="true"></i> -->
                        <div class="headerContainerTop-carrinho-num position-absolute"> {{ dadosCarrinho.quantidadeItens }} </div>
                    </a>
                    <i class="fa-solid fa-bars pl-2" style="font-size: 25px"></i>
                    <!-- <i class="fa-solid fa-bars"></i> -->
                </div>
            </div>

            <div class="overlayMenu"></div>
            <ul class="itensMenu pt-2">
                <div class="position-absolute text-right close-menu">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="col-12 pb-4 text-right">
                    <a href="/checkout/acesso" class="pr-3">
                        <i class="fa fa-user-o" style="font-size: 25px" aria-hidden="true"></i>
                    </a>
                </div>
                <li><a href="/">INÍCIO</a></li>
                <li><a href="/products/tratamento-anti-idade-6-em-1-skin-complex-com-colageno-verisol-acido-hialuronico">SKIN COMPLEX</a></li>
                <li><a href="/products/tratamento-anti-idade-7-em-1-skin-complex-plus-com-colageno-verisol-acido-hialuronico-silicio-organico">SKIN COMPLEX PLUS</a></li>
                <li><a href="/products/detox-360-natural-8-em-1-viva-slim-com-fruto-do-cacto-hibisco-cha-verde">DETOX 360° VIVA SLIM</a></li>
                <li><a href="/products/serum-anti-idade-multibeneficios-viva-beauty">SÉRUM VIVA BEAUTY</a></li>
                <li><a href="https://blog.vivabeauty.com.br/">BLOG VIVA BEAUTY</a></li>
                <li><a href="/pages/contact">CONTATO</a></li>
            </ul>
        </header>
</template>

<script>
    import comunicacao from "@/comunicacao.js";
    import { mapState, mapMutations } from 'vuex';

    export default {
        data() {
            return {
                showSearch: false,
                wrapperMob: false,
                config: false,
                dadosCarrinho: false,
            };
        },

        components: {
        },

        computed: {
            ...mapState(['screenWidth', 'menuLoaded', 'dadosUser'])
        },

        methods: {
            ...mapMutations(['changeStatusMenu']),
            openMenu() {
                comunicacao.$emit("openMenu");
            },

            openCarrinho() {
                comunicacao.$emit("toggleCarrinho", {
                    show: true
                });
            },
        },

        mounted() {
            var icon = document.querySelectorAll('.fa-solid');
            var overlay = document.querySelector('.overlayMenu');
            var menu = document.querySelector('.itensMenu');
            icon.forEach(element => {
                element.addEventListener('click', () => {
                    overlay.classList.toggle('activeOverlay');
                    menu.classList.toggle('activeMenu');
                });
            });

            overlay.addEventListener('click', () => {
                overlay.classList.toggle('activeOverlay');
                menu.classList.toggle('activeMenu');
            });

            comunicacao.$on("updateSubTotal", (response) => {
                this.subTotalCarrinho = response.valor;
            });

            this.$requestSend("get", "/v2/front/checkout/cart", {}, (success, response) => {
                this.dadosCarrinho = response.data;
                if (response.data && response.data.subtotal && response.data.subtotal.valor) {
                    this.dadosSubTotal = response.data.subtotal.valor;
                }
                comunicacao.$emit("carrinhoCarregado", response.data);
            });

            comunicacao.$on("configCarregada", (response) => {
                this.config = response.configuracoes;
            });

            this.$requestSend("get", "/v2/front/checkout/cart", {}, (success, response) => {
                this.dadosCarrinho = response.data;
                comunicacao.$emit("carrinhoCarregado", response.data);
            });
        },

        created() {
            comunicacao.$on("updateNumCarrinho", (qtd) => (this.dadosCarrinho.quantidadeItens = qtd));
        },
};
</script>

<style lang="scss" scoped>
    header{
        background-color: #34BDAD;
    }

    .icons-menu {
        right: 15px;
        top: 25px;
    }

    .icons-menu i{
        color: #fff;
    }

    .close-menu {
        right: -40px;
        top: 10px;
    }

    .close-menu i {
        color: #fff;
        font-size: 30px;
    }

    .itensMenu {
        transition: 0.5s ease;
        position: fixed;
        width: 0;
        height: 0;
        left: -200%;
        background-color: #fff;

        li {
            list-style-type: none;
            border-top: 1px solid #eee;
        }

        a {
            text-decoration: none;
            font-size: 14px;
            display: block;
            height: 100%;
            padding: 15px 0px 15px 20px;
        }
    }

    .itensMenu {
        left: -200%;
        top: 0;
    }

    .itensMenu.activeMenu {
        width: 70vw;
        height: 100vh;
        left: 0;
        top: 0;
        z-index: 99999;

    }

    .overlayMenu {
        transition: 0.5s ease;
        width: 100vw;
        height: 100%;
        position: fixed;
        top: 0;
        left: -200%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99999;
    }

    .overlayMenu.activeOverlay {
        left: 0;
        top: 0;
        z-index: 999;
    }

    .logoMob {
        position: relative;
        width: 140px;
    }

    .headerContainerTop-carrinho-num {
        top: -12px;
        right: 0;
        font-size: 10px;
        color: rgb(0, 0, 0);
        background-color: #ffffff;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        min-height: 25px;
        min-width: 25px;
    }

    @media screen and (max-width: 800px) {
        .mobf {
            display: flex;
            height: 75px !important;
        }

        .sectionMob {
            display: block;
        }

        .sectionMob h2 {
            font-size: 7px;
        }

        .close-search {
            font-size: 30px;
            z-index: 99;
            top: 18px;
            right: 10px;
            color: #333;
        }

        .search-button {
            filter: invert(1);
            width: 20px;
            height: 20px;
        }

        .search-mobile {
            top: -200px;
            transition: 0.5s ease;
        }

        .wrapperMob {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 9;
        }
    }
.faixa-destaque-black-friday {
    padding: 5px 0;
    background-color: #edbf2c;
}

.faixa-destaque-black-friday p {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
}

.faixa-destaque-black-friday img {
    width: 15px;
    margin: 0 5px;
}
</style>