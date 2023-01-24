<template>
    <section class="produtoSingle">
        <div class="container breadcrumb-single mt-3 mb-3">
            <div class="row">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Início</a></li>
                        <li class="breadcrumb-item active pink" id="breadcrumbTitle" aria-current="page">{{nome}}</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-7" id="sliderProductSingle">
                    <div id="custCarousel" class="carousel slide d-flex" align="center">
                        <!-- Thumbnails -->
                        <div class="overflowThumbs">
                            <div class="desk">
                                <ol class="list-group carousel-indicators thumbs d-flex">
                                    <li v-for="(imagem, index) in galeriaImagens" :key="index" :class="['list-inline-item',{active: index==0}]" style="width: 100px;height: 100px!important"> 
                                        <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index" data-target="#custCarousel">
                                            <img :src="imagem.arquivos.big" class="img-fluid" alt="" @click="changeSaborOption()">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <div class="mob">
                                <ol class="list-groupMob carousel-indicators thumbs d-block">
                                    <li v-for="(imagem, index) in galeriaImagens" :key="index" :class="['list-inline-item',{active: index==0}]" style="width: 100px;height: 100px!important"> 
                                        <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index" data-target="#custCarousel">
                                            <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <!-- Left and right controls -->
                        <div class="desk">
                            <a class="thumb-controls cima" href="#custCarousel" data-slide="prev"><i class="fa fa-angle-up"></i></a>
                            <a class="thumb-controls baixo" href="#custCarousel" data-slide="next"><i class="fa fa-angle-down"></i></a>
                        </div>
                        <div class="mob">
                            <a class="thumb-controls left cimaMob" href="#custCarousel" data-slide="prev"><i class="fa fa-angle-up"></i></a>
                            <a class="thumb-controls right baixoMob" href="#custCarousel" data-slide="next"><i class="fa fa-angle-down"></i></a>
                        </div>

                        <!-- slides -->
                        <div class="carousel-inner" id="carouselInnerSlider">
                            <div class="imagens-plataforma">
                                <div v-for="(imagem, index) in galeriaImagens" :key="index" :class="['carousel-item',{active: index==0}]"> 
                                    <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5" id="InfoProduto">
                    <h1 class="titleProduto" id="titleProduct">{{nome}}</h1>
                    <p class="descricao" id="descricao"></p>

                    <div class="prices d-flex align-items-center justify-content-between">
                        <p class="priceOld"> <s>R$ {{ precoDe }} </s> </p>
                        <p class="discount"> <strong>ECONOMIZE R$ {{ valorDesconto }} </strong></p>
                    </div>
                    
                    <div class="prices">
                        <p class="currentPrice"> <strong>R$ {{precoPor.toFixed(2).toString().replace(".", ",")}}</strong> </p>
                    </div>

                    <div class="prices d-flex align-items-center mt-3 mb-2">
                        <p class="priceNew">Ou 12x de <strong>R$ {{((precoPor/12).toFixed(2)).toString().replace(".", ",")}}</strong> </p>
                    </div>

                    <div class="btn btn-primary btn-lg green mt-2" @click="addToCart()">COMPRE AGORA</div>
                    <div class="selos d-flex align-center align-items-center mt-3">
                        <img class="px-3" src="@/assets/img/single/compra-segura.png" alt="Compra segura">
                        <img class="px-3" src="@/assets/img/single/google-safe.png" alt="Compra segura">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import $ from "jquery"
    import Comunicacao from "@/comunicacao.js"

    // funcao desktop para avançar e voltar imagens do carousel
    $(function () {
        setTimeout(function() {
            var qtdImages = $('.list-group .list-inline-item').length
            var height = (parseInt($('.carousel .list-group .list-inline-item').outerHeight())) * qtdImages //Calcula altura da coluna de Thumbs
            var numImages = 3 // Quantidade de imagens que vai correr em cada carossel
            var count = Math.floor(height/480) // Quantidade de vezes que pode clicar para avançar
            var marginPadding = 0 // Caso haja margin e padding nos elementos
            var contador = 0 // quantidade de vezes que avançou no carossel (controle de ida e volta)
            var slide = (numImages * marginPadding) + ($('.carousel .list-group .list-inline-item').outerHeight() * numImages) // Tamanho do Slide (quanto de margin pode avançar)

            // Passa o valor da altura da coluna obtida no 'var height'
            $('.carousel .list-group').css('height', height)

            // Avança o Slide para baixo
            $('.baixo').click(function () {
                if(contador < count){
                    contador ++
                    $('.list-group').animate({'margin-top': '-=' + slide + 'px'}, '500')
                }
            });

            // Avança o Slide para cima
            $('.cima').click(function () {
                if(contador >= 1){
                    contador --
                    $('.list-group').animate({'margin-top': '+=' + slide + 'px'}, '500')
                }
            });
        }, 1500);

    })

    // funcao mobile para avancar e voltar imagens do carousel
    $(function () {
        var width = 900 //Calcula largura da linha de Thumbs
        var contador = 0 // quantidade de vezes que avançou no carossel (controle de ida e volta)
        var count = 1  // Quantidade de vezes que pode clicar para avançar
        var slide = 300  // Tamanho do Slide (quanto de margin pode avançar)

        $('.carousel .list-groupMob').css('width', width)

        $('.baixoMob').click(function () {
            if(contador < count){
                contador ++
                $('.list-groupMob').animate({'margin-left': '-=' + slide + 'px'}, '500')
            }
        });

        $('.cimaMob').click(function () {
            if(contador >= 1){
                contador --
                $('.list-groupMob').animate({'margin-left': '+=' + slide + 'px'}, '500')
            }
        });
    })

    export default {
        data() {
            return {
                activeClass: 'active',
                classImage: 'carousel-item',
                nome: '',
                galeriaImagens: [],
                precoDe: '0',
                precoPor: 0,
                precoParcelado: '0',
                valorDesconto: 0,
                sabores: 0,
                saboresKit: {},
                urlLista: window.location.pathname,
                idLista: 0,
            }
        },

        methods: {
            addToCart() {
                if(this.urlLista == '/skin-complex-plus-tratamento-anti-idade-7-em-1-quase-3x-mais-acido-hialuronico-verisol-silicio-organico-4-potes.html') {
                    this.idLista = 103
                } else if(this.urlLista == '/skin-complex-plus-tratamento-anti-idade-7-em-1-quase-3x-mais-acido-hialuronico-verisol-silicio-organico-2-potes.html') {
                    this.idLista = 102
                } else if(this.urlLista == '/skin-complex-plus-tratamento-anti-idade-7-em-1-quase-3x-mais-acido-hialuronico-verisol-silicio-organico.html') {
                    this.idLista = 101
                } else if(this.urlLista == '/skin-complex-tratamento-anti-idade-6-em-1-com-versiol-acido-hialuronico-4-potes.html') {
                    this.idLista = 100
                } else if(this.urlLista == '/skin-complex-tratamento-anti-idade-6-em-1-com-versiol-acido-hialuronico-2-potes.html') {
                    this.idLista = 99
                } else if(this.urlLista == '/skin-complex-tratamento-anti-idade-6-em-1-com-versiol-acido-hialuronico.html') {
                    this.idLista = 98
                } else if(this.urlLista == '/detox-360-natural-8-em-1-viva-slim-8-funcoes-em-um-so-produto.html') {
                    this.idLista = 104
                } 
                // else if(this.urlLista == '/serum-anti-idade-multibeneficios-viva-beauty-by-renner-souza.html') {
                //     this.idLista = 105
                // }

                const boxAddToCart = {
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: this.idLista,
                            idAtributoSimples: "0",
                            idUnidadeVenda: "0",
                            idArmazem: "0",
                            quantidade: "1",
                            adicional: "",
                            parametros: ""
                        },
                    ]
                }
                Comunicacao.$emit('toggleLoader', true)
                let {tipo, itens} = boxAddToCart
                let itemAdc       = false
                if (tipo && itens) {
                    //ADICIONA O PRODUTO AO CARRINHO
                    this.$carrinho.add(tipo,itens,(success, response) => {
                        response.data.itens.forEach(prod => {
                            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == boxAddToCart.itens[0].idProduto
                        })
                        //PRODUTO ADICIONADO COM SUCESSO
                        if(success){
                            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data })
                        }        
                        this.changeDadosPageAtual(response.data);
                        //PROBLEMAS AO ADICIONAR PRODUTO
                        this.$toast.error("Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.")
                    })
                    return
                }
            }, 
            
            genPath(path, onlyQuery){
                if (onlyQuery) {
                    path = path.replace(/\/.*(\?.*)/g, '$1')
                    return path
                }
                path = path.replace('?', '&')
                return path
            },

            formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
                try {
                    decimalCount = Math.abs(decimalCount)
                    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

                    const negativeSign = amount < 0 ? "-" : ""

                    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
                    let j = (i.length > 3) ? i.length % 3 : 0

                    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "")
                } catch (e) {
                    //close
                }
            },
        },

        created(){
            this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(this.$route.fullPath)}&offset=0&limit=1`, {}, (success, response) => {
                if (success) {
                    //RECUPERA DADOS DO PRODUTO
                    var objetoProduto = JSON.parse(response.request.response)

                    this.nome = objetoProduto.conteudo.nome

                    // galeria de imagens
                    this.galeriaImagens = objetoProduto.conteudo.midias.imagensFull

                    // preços
                    this.precoDe = this.formatMoney(objetoProduto.conteudo.precos.de)
                    this.precoPor = objetoProduto.conteudo.precos.por
                    this.precoParcelado = this.formatMoney(this.precoPor/12)
                    this.valorDesconto = (objetoProduto.conteudo.precos.de - objetoProduto.conteudo.precos.por)
                    this.valorDesconto = this.formatMoney(this.valorDesconto.toFixed(2))

                    // descrição
                    document.getElementById("descricao").innerHTML = objetoProduto.conteudo.descricoes.curta

                    //ALTERA ID DO PRODUTO PRO CARRINHO
                    this.boxCompraCarrinho.itens[0].idProduto = objetoProduto.conteudo.id

                    //SETA PRODUTO PARA EVENTO DE ADDCART NO GTM
                    let prod = {
                        id: objetoProduto.conteudo.id,
                        nome: objetoProduto.conteudo.nome,
                        marca: {
                            nome: objetoProduto.conteudo.marca.nome,
                        },
                        precos: {
                            por: objetoProduto.conteudo.precos.por,
                        }
                    }
                    this.boxCompraCarrinho.prod = prod

                    this.$aplicaSEO(response.data.estrutura)
                    this.listagemData = response.data.conteudo
                    this.loading.geral = false

                    //VARIÁVEIS PÚBLICAS
                    this.changeDadosPageAtual(response.data)
                }
            });
        },
    }
</script>

<style scoped>
    .breadcrumb-single .breadcrumb {
        background-color: unset;
        font-size: 13px;
    }

    .pink {
        color: #000000;
        font-weight: bold;
    }

    span.carousel-control-prev-icon, span.carousel-control-next-icon {
        transform: rotate(90deg);
    }

    .thumb-controls i {
        color: #555555;
        font-size: 20px;
    }

    .cima {
        position: absolute;
        top: 0;
        width: 105px;
        left: 0;
        z-index: 99;
    }

    .baixo {
        position: absolute;
        bottom: 37px;
        width: 105px;
        left: 0;
        z-index: 99;
    }

    .list-group.carousel-indicators.thumbs {
        height: 1100px;
        overflow: hidden;
        align-self: flex-start;
    }

    #custCarousel .carousel-indicators li img {
        display: block;
    }

    .carousel-inner{width: 560px}

    .carousel-inner img{width:100%;height:auto}

    #custCarousel .carousel-indicators{
        width: 150px;
        position:relative;
        margin:0;
        flex-direction:column;
        right:unset;
        bottom:unset;
        left:unset;
        padding:unset;
        z-index: 8;
    }

    /* Slider Produtos */

    .titleProduto {
        padding: 0 0 25px;
        font: normal normal bold 28px/30px Open Sans;
        letter-spacing: 0px;
        color: #1A1A1A;
    }

    p.descricao {
        font-size: 15px;
        padding: 0 0 18px;
        line-height: 1;
        color: #3c3c3c;
        font-family: "Roboto Regular", sans-serif;
    }

    .priceOld s {
        font-size: 16px;
        color: #8f8f8f;
        font-family: "Roboto Regular", sans-serif;
    }

    .priceOld, .priceNew, .discount {
        margin: -10px 20px 0 0;
        font-family: "Roboto Regular", sans-serif;
    }

    .discount {
        background: #fff154;
        font-size: 15px;
        color: #000;
        font-weight: 900;
        padding: 5px 10px;
        box-sizing: border-box;
        font-family: "Roboto Regular", sans-serif;
    }

    .txtPrice {
        font-size: 18px;
        color: #000;
        font-weight: bold;
        font-family: "Roboto Regular", sans-serif;
    }

    .green {
        background: #18A851;
        border-color: #18A851;
        width: 100%;
        padding: 20px;
        font-weight: bold;
        font-size: 20px;
    }

    .green:active, .green:hover {
        opacity: .8;
        border-color: #18A851 !important;
    }

    .currentPrice {
        font-size: 30px;
        font-weight: 900;
        margin: -5px 0 10px;
    }

    /* Slider Column */

    div#custCarousel {
        height: 560px;
    }

    .carousel-item {
        height: 560px;
    }

    div#carouselInnerSlider {
        align-self: flex-start;
    }

    .overflowThumbs {
        height: 490px;
        overflow: hidden;
        margin-top: 20px;
    }

    .carousel-indicators li {
        opacity: 1 !important;
    }

    @media (max-width: 767px) {
        .breadcrumb-single .breadcrumb {
            background-color: unset;
            font-size: 13px;
        }

        .pink {
            color: #333;
            font-weight: bold;
        }

        .overflowThumbs {
            height: 120px;
            overflow: hidden;
            margin-top: 20px;
            text-align: left;
        }

        .thumb-controls {
            background: #00000044;
        }

        .thumb-controls:hover {
            background: #0000007e;
        }

        .thumb-controls i {
            color: #fff;
            font-size: 25px;
        }

        .left {
            position: absolute;
            bottom: 0 !important;
            top: unset;
            width: 25px;
            height: 118px;
            left: 0px;
            z-index: 8;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .left i {
            transform: rotate(-90deg);
        }

        .right {
            position: absolute;
            bottom: 0 !important;
            width: 25px;
            height: 118px;
            right: 0px;
            left: unset;
            z-index: 8;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .right i {
            transform: rotate(270deg);
        }

        .list-group.carousel-indicators.thumbs {
            /* height: 1100px; */
            overflow: hidden;
            align-self: flex-start;
        }

        .list-groupMob.carousel-indicators.thumbs {
            overflow: hidden;
            align-self: flex-start;
            width: 90px;
            justify-content: flex-start;
            width: 90px;
            justify-content: flex-start;
        }

        .carousel-item {
            height: auto;
        }

        /* Slider Produtos */

        .titleProduto {
            padding: 0 0 25px;
            font: normal normal bold 28px/30px Open Sans;
            letter-spacing: 0px;
            color: #1A1A1A;
        }

        p.descricao {
            font-size: 15px;
            padding: 0 0 18px;
            line-height: 1;
            color: #3c3c3c;
            font-family: "Roboto Regular", sans-serif;
        }

        .priceOld,
        .priceNew,
        .discount {
            margin: 0 10px 0 0;
            font-family: "Roboto Regular", sans-serif;
        }

        .priceNew {
            font-size: 18px;
        }

        .discount {
            background: #fff154;
            font-size: 15px;
            color: #000;
            font-weight: 900;
            padding: 5px 10px;
            box-sizing: border-box;
            font-family: "Roboto Regular", sans-serif;
        }

        .txtPrice {
            font-size: 18px;
            color: #000;
            font-weight: bold;
            font-family: "Roboto Regular", sans-serif;
        }

        .green {
            background: #18A851;
            border-color: #18A851;
            width: 100%;
            padding: 20px;
            font-weight: bold;
            font-size: 20px;
        }

        .green:active,
        .green:hover {
            opacity: .8;
            border-color: #18A851 !important;
        }

        .currentPrice {
            font-weight: 900;
            font-size: 35px !important;
            margin: -10px 0 0 !important;
        }

        /* Slider Column */

        div#custCarousel {
            flex-direction: column-reverse;
            overflow: hidden;
            height: auto;
            margin-bottom: 20px;
        }

        div#carouselInnerSlider {
            align-self: flex-start;
        }

        .list-groupMob #custCarousel .carousel-indicators {
            flex-direction: row;
            height: 120px !important;
            order: 2;
            width: 900px;
            justify-content: flex-start;
        }

        .carousel-inner img {
            width: 100%;
            height: auto
        }

        #custCarousel .carousel-indicators li img {
            width: 100px;
            height: 100px;
        }

        .carousel-inner {
            width: 100% !important;
        }

        .carousel-item img {
            width: 100% !important;
        }

        .titleProduto {
            font-size: 20px;
        }

        .descricao {
            display: none;
        }

        .discount {
            font-size: 11px !important;
            padding: 5px !important;
        }

        .subTitle {
            font-size: 18px;
        }

        li.list-inline-item {
            width: unset !important;
        }

        img.thumbnailsprod {
            width: 120px !important;
        }
    }

</style>
