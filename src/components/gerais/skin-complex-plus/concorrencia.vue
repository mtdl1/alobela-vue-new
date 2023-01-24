<template>
    <section>
        <div class="container-fluid text-center pt-4 px-0">
            <h2 class="pb-4">Viva Beauty x Concorrência</h2>
            <img src="@/assets/img/skin-complex-plus/concorrencia.webp" alt="Pote de Skin Complex Plus com rótulo rosa e ao lado um pote de colágeno de uma marca concorrente" title="Tratamento anti-idade Skin Complex Plus, muito mais que um simples colágeno! Resultados visíveis já no primeiro mês de uso!" class="img-fluid">
            <div class="row">
                <a href="#KitProduto" class="btn btn-chamada">Eu quero</a>
            </div>
        </div>
        <div class="container-fluid text-center bg-light py-4">
            <div class="container">
                <h2 class="pb-4">O melhor e mais completo</h2>
                <p class="w-75 mx-auto">Com ingredientes de alta tecnologia, o Viva Beauty possui <strong>fórmula completa e exclusiva, acelerando muito os resultados!</strong> Além disso, é totalmente natural, sem corantes artificiais, sem açúcares, e sem gorduras!</p>
                <div class="d-flex justify-content-center align-items-center composicao">
                    <div class="items-formula">
                        <p>Silício <br> Orgânico <strong>1</strong></p>
                        <p class="mt-5">Ácido <br> Hialurônico <strong>2</strong></p>
                        <p class="mt-5 txt-maior">Peptídeos <br> Bioativos de <br> Colágeno <br> Verisol <strong>3</strong></p>
                    </div>
                    <div class="img-composicao">
                        <img src="@/assets/img/skin-complex-plus/skin complex plus-desk.png" class="img-fluid mx-auto desk" alt=" potes de Skin Complex Plus com rótulo na cor rosa" title="Tratamento anti-idade Skin Complex Plus, muito mais que um simples colágeno! Resultados visíveis já no primeiro mês de uso">
                        <img src="@/assets/img/skin-complex-plus/skin complex plus-mob.png" class="img-fluid mx-auto mob" alt=" potes de Skin Complex Plus com rótulo na cor rosa" title="Tratamento anti-idade Skin Complex Plus, muito mais que um simples colágeno! Resultados visíveis já no primeiro mês de uso">
                    </div>
                    <div class="items-formula direita">
                        <p><strong>7</strong> Rico em Biotina</p>
                        <p class="mt-5"><strong>6</strong> Ácido Pantotênico</p>
                        <p class="mt-5"><strong>5</strong>Fontes de <br> Fibras</p>
                    </div>
                </div>
                <div class="items-formula meio">
                        <p><strong>4</strong></p>
                        <p class="mt-2">Vitaminas e <br class="desk"> minerais </p>
                    </div>
            </div>
        </div>
        <div class="container-fluid text-center py-4">
            <div class="container">
                <h2 class="pb-4">Principais Diferenciais</h2>
                <h3 class="pb-2"><strong>Peptídeos Bioativos de Colágeno Verisol®</strong></h3>
                <p class="w-75 mx-auto">Único colágeno oral específico para a pele com comprovação científica de resultados. Proporciona redução significativa da profundidade das rugas após 4 semanas de uso, e principalmente retarda os sinais do envelhecimento da pele agindo de dentro para fora.</p>
                <h2 class="pt-4 pb-2">Ácido Hialurônico</h2>
                <p class="w-75 mx-auto">É responsável por preencher os espaços entre as células. Consegue reter alta quantidade de água, mantendo a sua pele hidratada, firme e lisinha.</p>
                <h2 class="pt-4 pb-2">Silício Orgânico</h2>
                <p class="w-75 mx-auto">Recomendado por dermatologistas, ele é o  “segredinho” da nossa fórmula. É o responsável por fazer com que seu organismo absorva o colágeno mais rápido e em maior quantidade. Aumenta a hidratação, brilho e a tonicidade da pele, unhas e cabelos.</p>
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
        font-family: Poppins, sans-serif;
        color: #000;
    }

    h3 {
        font-size: 19px;
        font-family: Poppins, sans-serif;
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

    .bg-light {
        background-color: #FBF3F1!important;
        background-size: 100% 100%;
    }

    .bg-light h2, .bg-light p {
        color: rgb(0, 0, 0);
    }

    p {
        font-size: 15px;
        font-family: Poppins, sans-serif;
        color: #000;
    }

    .items-formula p{
        color: #951837;
        display: flex;
        align-items: center;
        justify-content: end;
        text-align: right;
        font-weight: bold;
        min-height: 55px;
    }

    .items-formula.direita p{
        justify-content: start;
        text-align: left;
    }

    .items-formula p strong{
        color: #fff;
        background-color: #951837;
        width: 25px;
        height: 25px;
        padding: 5px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 15px;
        text-align: center;
        font-weight: normal;
    }

    .items-formula.meio p {
        justify-content: center!important;
        text-align: center;
    }

    .composicao{
            margin-top: 30px;
        }

        .items-formula.meio p {
            min-height: unset;
        }

    @media(max-width: 768px) {
        .bg-light {
            background: #FBF3F1 !important;
            background-size: 100%;
        }
        img {
            width: 100% !important;
        }

        .items-formula p{
            font-size: 10px !important;
        }

        .items-formula p strong{
            width: 20px;
            height: 20px;
            font-size: 10px;
            padding: 5px;
            margin: 0 5px;
        }

        h2 {
            font-size: 17px !important;
        }

        h3 {
            font-size: 16px !important;
        }

        .items-formula p {min-height: 50px;}

        img.img-fluid.mx-auto {
            margin-top: 20px;
        }

        .items-formula {
            width: 30%;
        }

        .img-composicao {
            width: 40%;
        }

        .items-formula.meio {
            margin: 0 auto;
        }
    }
</style>