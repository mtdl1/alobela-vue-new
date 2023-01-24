<template>
    <div class="container mt-2">
        <h1 class="text-center">Viva Beauty: o melhor colágeno para sua pele</h1>
        <div class="row justify-content-between">
            <div class="col-6 col-md-3 text-center py-3">
                <a href="/products/tratamento-anti-idade-6-em-1-skin-complex-com-colageno-verisol-acido-hialuronico">
                    <div class="img-prod mb-3">
                        <img class="img-fluid" src="@/assets/img/produtos/Produto_SkinComplex-0_295x.webp" alt="">
                    </div>
                    <h2 class="w-75 mx-auto">Skin Complex: Tratamento Anti-Idade 6 em 1 com Verisol + Ácido Hialurônico</h2>
                    <!-- <h2 class="w-75 mx-auto"><strong>ESGOTADO</strong></h2> -->
                </a>
            </div>
            <div class="col-6 col-md-3 text-center py-3">
                <a href="/products/tratamento-anti-idade-7-em-1-skin-complex-plus-com-colageno-verisol-acido-hialuronico-silicio-organico">
                    <div class="img-prod mb-3">
                        <img class="img-fluid" src="@/assets/img/produtos/Produto_SkinComplexPlus-1_295x.webp" alt="">
                    </div>
                        <h2 class="w-75 mx-auto">Skin Complex Plus: Tratamento Anti-Idade 7 em 1: Ácido Hialurônico + Verisol + Silício Orgânico</h2>
                </a>
            </div>
            <div class="col-6 col-md-3 text-center py-3">
                <a href="/products/detox-360-natural-8-em-1-viva-slim-com-fruto-do-cacto-hibisco-cha-verde">
                    <div class="img-prod mb-3">
                        <img class="img-fluid" src="@/assets/img/produtos/Produto_VivaSlim-1_590x_9a57bfc2-330a-4ce3-a3e4-d3a275c8f5a3_295x.webp" alt="">
                    </div>
                    <h2 class="w-75 mx-auto">Detox 360º Natural 8 em 1 Viva Slim: 8 Funções em um só produto</h2>
                </a>
            </div>
            <div class="col-6 col-md-3 text-center py-3">
                <a href="/products/serum-anti-idade-multibeneficios-viva-beauty">
                    <div class="img-prod mb-3">
                        <img class="img-fluid" src="@/assets/img/produtos/Serum_VB_295x.webp" alt="">
                    </div>
                    <h2 class="w-75 mx-auto">Sérum Anti-Idade Multibenefícios Viva Beauty </h2>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListaProdutosHome',
    }
</script>

<style scoped>
    
     h1 {
        font-size: 24px;
        font-family: Poppins, sans-serif;
        color: #000;
        padding: 16px 0 14px;
     }

    h2 {
        font-size: 16px;
        font-family: Poppins, sans-serif;
        font-weight: normal;
        color: #000;
    }

    .img-prod {
        height: 280px;
        width: 284px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    .esgotado {
        opacity: 0.6;
    }

    strong{
        display: block;
        padding-top: 20px;
        color: #b34f5b;
    }

    @media(max-width: 768px) {
        .row.px-5 {
            padding: 0 !important;
        }

        .col-6.col-md-3 {
            padding: 0 !important;
            margin-bottom: 30px !important;
        }

        .img-prod {
            width: 100%;
            height: 190px;
        }
    }
</style>