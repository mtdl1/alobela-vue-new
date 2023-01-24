<template>
    <section>
        <ProdutoSingleDetox id="KitProduto" />
        <TextoInfo />
        <BeneficiosDetox360 />
        <FormulaExclusiva />
        <Frete />
        <InfluencersViva />
        <PeleRejuvenescida />
        <ModoPreparo />
    </section>
</template>

<script>
    import BeneficiosDetox360 from '../../gerais/detox-360/beneficios-detox-360.vue'
    import FormulaExclusiva from '../../gerais/detox-360/formula-exclusiva.vue'
    import ModoPreparo from '../../gerais/detox-360/modo-preparo.vue'
    import TextoInfo from '../../gerais/detox-360/texto-info.vue'
    import Frete from '../../gerais/frete/frete.vue'
    import InfluencersViva from '../../gerais/influencers/influencers-viva.vue'
    import PeleRejuvenescida from '../../gerais/pele-rejuvenescida/pele-rejuvenescida.vue'
    import ProdutoSingleDetox from './components/produtoSingleDetox.vue'

    export default {
        name: 'SingleDetox',

        components: {
            ProdutoSingleDetox,
            TextoInfo,
            BeneficiosDetox360,
            FormulaExclusiva,
            Frete,
            InfluencersViva,
            PeleRejuvenescida,
            ModoPreparo,
        },
    }
</script>           