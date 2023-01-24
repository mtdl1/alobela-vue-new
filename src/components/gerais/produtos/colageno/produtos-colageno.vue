<template>
    <section id="ProdutosRenovabe">
        <div class="container">
            <div style="text-align: center;" class="mt-3 mb-4">
                <h2 style="font-family: 'Open Sans', sans-serif !important;font-weight:bold">Colágeno anti-idade <br class="mob"> para o corpo </h2>
                <p id="subtituloH1" style=" font-size:15px;color: #777777;padding: 0 20px 0">Ingredientes da mais alta tecnologia e qualidade do mercado</p>
            </div>
            <div class="row BoxProdutoGeral">
                <ColagenoKit1Pote />
                <ColagenoKit2PotesKitSerum />
            </div>
        </div>
    </section>
</template>

<script>
    import ColagenoKit1Pote from './colageno-kit-1-pote.vue'
    import ColagenoKit2PotesKitSerum from './colageno-kit-2-potes-kit-serum.vue'

    export default {
        name: 'ProdutosColageno',
        
        components:{
            ColagenoKit1Pote,
            ColagenoKit2PotesKitSerum,
        },
    }
</script>

<style scoped>
    #ProdutosRenovabe{
        padding-bottom: 50px;
    }

    #ProdutosRenovabe .container{
        width: 100%;
        max-width: 1170px;
        margin: 0 auto; 
    }

    .card-deck {
        padding: 0 20px;
    }

    @media(max-width: 768px) {
        #subtituloH1 {
            padding-left: 19% !important;
            padding-right: 19% !important;
        }
    }
</style>
