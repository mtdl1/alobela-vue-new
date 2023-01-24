<template>
    <section>
        <div class="container-fluid text-center pt-4 px-0">
            <div class="container">
                <h2 class="pb-4">Viva Beauty x Concorrência</h2>
                <img src="@/assets/img/skin-complex/concorrencia.webp" alt="" class="img-fluid">
                <div class="row">
                    <a href="#KitProduto" class="btn btn-chamada">Eu quero</a>
                </div>
            </div>
        </div>
        <div class="container-fluid text-center bg-dark py-4">
            <div class="container">
                <h2 class="pb-4"><strong>O melhor e mais completo</strong></h2>
                <p class="w-75 mx-auto">Com ingredientes de alta tecnologia, o Viva Beauty possui <strong>fórmula completa e exclusiva, acelerando muito os resultados!</strong> Além disso, é totalmente natural, sem corantes artificiais, sem açúcares, e sem gorduras!</p>
            </div>
        </div>
        <div class="container-fluid text-center py-4">
            <div class="container">
                <h2 class="pb-4"><strong>Principais Diferenciais</strong></h2>
                <h3 class="pb-2"><strong>Peptídeos Bioativos de Colágeno Verisol®</strong></h3>
                <p class="w-75 mx-auto">Único colágeno oral específico para a pele com comprovação científica de resultados. Proporciona redução significativa da profundidade das rugas após 4 semanas de uso, e principalmente retarda os sinais do envelhecimento da pele agindo de dentro para fora.</p>
                <h2 class="pt-4 pb-2"><strong>Ácido Hialurônico</strong></h2>
                <p class="w-75 mx-auto">É responsável por preencher os espaços entre as células. Consegue reter alta quantidade de água, mantendo a sua pele hidratada, firme e lisinha.</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ConcorrenciaSkinComplex',
    }
</script>

<style scoped>
    h2 {
        font-size: 21px;
        font-family: 'Poppins', sans-serif;
        color: #000;
        font-weight: normal;
    }

    h3 {
        font-size: 19px;
        font-family: 'Poppins', sans-serif;
        color: #000;
    }

    .btn-chamada {
        width: 180px;
        cursor: pointer;
        padding: 10px 20px;
        margin: 30px auto;
        text-align: center;
        color: #ffffff;
        background: #12AC53;
    }

    .bg-dark {
        background-color: #FBF3F1 !important;
    }

    .bg-dark p, .bg-dark h2 {
        color: rgb(0, 0, 0) !important;
    }

    p {
        font-size: 15px;
        font-family: Poppins, sans-serif;
        color: #000;
    }

    @media(max-width: 768px) {
        img {
            width: 80% !important;
        }

        h2 {
            font-size: 17px !important;
        }

        h3 {
            font-size: 16px !important;
        }
    }
</style>