<template>
    <div class="container-fluid px-0">
        <div class="container-fluid bg-pink px-0 py-3">
            <div class="row justify-content-center">
                <div class="col-md-9 d-flex align-items-center justify-content-center">
                    <div class="txt-destaque">
                        <h3 class="text-center">Mais de <br> <strong>93%</strong></h3>
                    </div>
                    <div class="ml-2">
                        <h3>sentiram os resultados já no primeiro mês de Viva Beauty!</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="text-page px-5 text-center mt-5" v-if="$route.path != '/products/detox-360-natural-8-em-1-viva-slim-com-fruto-do-cacto-hibisco-cha-verde'">
                <h3 class="pb-4"><strong>Pele rejuvenescida ou seu Dinheiro de volta</strong></h3>
                <p class="pb-4">Confiamos tanto na qualidade e eficácia da nossa fórmula exclusiva, que lançamos o “DESAFIO 120 DIAS” Viva Beauty! Caso você não fique satisfeita com o resultado na sua pele após 120 dias de consumo do Viva Beauty, devolvemos seu dinheiro!</p>
                <span>*Consulte regulamento <a href="#"><strong>clicando aqui</strong></a></span>
                <div class="row">
                    <a href="#KitProduto" class="btn btn-primary mx-auto text-center">Eu quero</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PeleRejuvenescida',
    }
</script>

<style scoped>
    .bg-pink {
        background-color: #FBF3F1 !important;
    }

    .bg-pink h3 {
        color: rgb(0, 0, 0) !important;
    }

    h3 {
        font-size: 18px;
        font-family: Poppins, sans-serif;
    }

    p {
        font-size: 15px;
        font-family: Poppins, sans-serif;
    }

    span {
        font-size: 12px;
        font-family: Poppins, sans-serif;
    }

    .btn {
        width: 180px;
        cursor: pointer;
        padding: 10px 20px;
        margin: 30px auto;
        text-align: center;
        color: #ffffff;
        background: #12AC53;
        border: none;
        font-size: 18px;
    }

    .btn:hover {
        opacity: .8;
    }

    .txt-destaque h3{
        font-size: 18px;
        font-family: Poppins, sans-serif;
    }

    .txt-destaque h3 strong{
        font-size: 40px;
        font-family: Poppins, sans-serif;
    }
</style>              