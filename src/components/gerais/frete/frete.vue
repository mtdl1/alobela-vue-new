<template>
    <div class="container-fluid py-4 mt-4">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="row align-items-center">
                        <div class="col-3 col-md-3 text-center px-0">
                            <img src="@/assets/img/frete/Brasil.svg" alt="" width="46">
                        </div>
                        <div class="col-9 col-md-9 pl-0">ENTREGA EM TODO BRASIL</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row align-items-center">
                        <div class="col-3 col-md-3 text-center px-0">
                            <img src="@/assets/img/frete/Cartao.svg" alt="" width="46">
                        </div>
                        <div class="col-9 col-md-9 pl-0">12X SEM JUROS NO CARTÃO</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row align-items-center">
                        <div class="col-3 col-md-3 text-center px-0">
                            <img src="@/assets/img/frete/Frete.svg" alt="" width="46">
                        </div>
                        <div class="col-9 col-md-9 pl-0">FRETE GRÁTIS</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row align-items-center">
                        <div class="col-3 col-md-3 text-center px-0">
                            <img src="@/assets/img/frete/Cadeado.svg" class="cadeado" alt="" height="36">
                        </div>
                        <div class="col-9 col-md-9 pl-0">SITE SEGURO</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FreteBeauty',
    }
</script>

<style scoped>
    .container-fluid {
        border-top: 1px solid #7a7a7a;
        border-bottom: 1px solid #7a7a7a;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    div {
        color: #7A7A7A;
    }

    @media(max-width: 768px) {
        .row.px-5 {
            padding: 0 !important;
        }

        .col-md-3 {
            margin-bottom: 8px;
        }

        .cadeado {
            height: 40px !important;
        }
    }
</style>