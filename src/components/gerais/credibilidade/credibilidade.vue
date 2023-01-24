<template>
    <div class="bg-alt">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 col-md-3">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-3 col-md-3 text-center px-0">
                            <div :class="['img-selo parcelamento', {home: cor == 'home'}]"></div>
                        </div>
                        <div class="col-9 col-md-9 pl-1">
                            <p>PARCELAMENTO EM <br> <strong>ATÉ 12X SEM JUROS</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-3 col-md-3 text-center px-0">
                            <div :class="['img-selo pagamento', {home: cor == 'home'}]"></div>
                        </div>
                        <div class="col-9 col-md-9 pl-1">
                            <p>PAGAMENTO NO PIX <br> <strong>+ 5% DE DESCONTO</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-3 col-md-3 text-center px-0">
                            <div :class="['img-selo envio', {home: cor == 'home'}]"></div>
                        </div>
                        <div class="col-9 col-md-9 pl-1">
                            <p><strong>ENVIO EM ATÉ 24H</strong> <br> PARA SÃO PAULO</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-3 col-md-3 text-center px-0">
                            <div :class="['img-selo frete', {home: cor == 'home'}]"></div>
                        </div>
                        <div class="col-9 col-md-9 pl-1">
                            <p>FRETE GRÁTIS <br> <strong>PARA TODO BRASIL</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Credibilidade',
        props: ['cor']
    }
</script>

<style scoped>

    .bg-alt {
        background-color: #1A1A28;
    }
    .container {
        padding: 30px;
    }

    p {
        font: normal normal normal 14px/18px Open Sans;
        letter-spacing: -0.56px;
        color: #FFF;
    }

    p strong {
        font: normal normal bold 14px/18px Open Sans;
        letter-spacing: -0.56px;
        color: #FFF;
    }

    .img-selo {
        width: 58px;
        height: 58px;
    }

    .home {
        background-color: #FFF;
    }

    .parcelamento {
        mask: url("../../../assets/img/credibilidade/ICONE-12x.svg") no-repeat center / contain;
        -webkit-mask: url("../../../assets/img/credibilidade/ICONE-12x.svg") no-repeat center / contain;
    }

    .pagamento {
        mask: url("../../../assets/img/credibilidade/ICONE-PIX.svg") no-repeat center / contain;
        -webkit-mask: url("../../../assets/img/credibilidade/ICONE-PIX.svg") no-repeat center / contain;
    }

    .envio {
        mask: url("../../../assets/img/credibilidade/ICONE-ENVIO.svg") no-repeat center / contain;
        -webkit-mask: url("../../../assets/img/credibilidade/ICONE-ENVIO.svg") no-repeat center / contain;
    }

    .frete {
        mask: url("../../../assets/img/credibilidade/ICONE-FRETE.svg") no-repeat center / contain;
        -webkit-mask: url("../../../assets/img/credibilidade/ICONE-FRETE.svg") no-repeat center / contain;
    }

    @media(max-width: 768px) {
        p {
            font: normal normal normal 12px/14px Open Sans;
            letter-spacing: -0.48px;
        }

        p strong {
            font: normal normal bold 12px/14px Open Sans;
            letter-spacing: -0.48px;
        }

        .col-6.col-md-3, .col-9.col-md-9 {
            padding-right: 0 !important;
        }

        .col-6.col-md-3 {
            margin-bottom: 10px;
        }

        .img-selo {
            width: 40px;
            height: 40px;
        }
    }
</style>