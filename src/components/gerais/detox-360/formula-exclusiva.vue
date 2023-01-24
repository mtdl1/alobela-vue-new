<template>
    <div class="container-fluid pt-5">
        <div class="text pb-4 px-5">
            <h2 class="text-center">Fórmula exclusiva com 8 ativos principais:</h2>
            <p class="text-center pt-4">Fruto do Cacto / Pimenta Vermelha / Guaraná / Hibisco / Chá Verde / Laranja Amarga / Cranberry / Gengibre</p>
            <p class="text-center pt-4">O Fruto do Cacto (Cactinea) é um ingrediente super inovador e inédito no Brasil que junto a outros ingredientes como hibisco, gengibre e cranberry possuem ação diurética diminuindo a retenção de líquidos.</p>
            <p class="text-center pt-4">A Laranja Amarga para oxidar as células lipídicas, diminuindo os seus tamanhos e por consequência reduzindo as gordurinhas localizadas.</p>
            <p class="text-center pt-4">Possui um Mix de Fibras naturais que promovem saciedade e auxiliam no controle da fome, inclusive a fome por ansiedade e agem como reguladores intestinais.</p>
            <p class="text-center pt-4">Guaraná, Chá Verde e Pimenta Vermelha agem como termogênicos e aceleradores de metabolismo!</p>
            <p class="text-center pt-4">Tudo isso COM INGREDIENTES NATURAIS, ZERO AÇÚCARES, ZERO GLÚTEN E ZERO GORDURAS</p>
        </div>
        <div class="row">
            <a href="#KitProduto" class="btn btn-primary mx-auto text-center">Eu quero</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormulaExclusivaDetox',
    }
</script>

<style scoped>
    h2 {
        font-size: 19px;
        font-family: Poppins, sans-serif;
        color: #000;
    }

    p {
        font-size: 16px;
        font-family: Poppins, sans-serif;
        color: #000;
    }

    .btn {
        width: 180px;
        cursor: pointer;
        padding: 10px 20px;
        margin: 30px auto;
        text-align: center;
        color: #ffffff;
        background: #951837;
        border: none;
        font-size: 18px;
    }

    .btn:hover {
        opacity: .8;
    }

    @media(max-width: 768px) {
        .px-5 {
            padding: 0 !important;
        }
    }
</style>