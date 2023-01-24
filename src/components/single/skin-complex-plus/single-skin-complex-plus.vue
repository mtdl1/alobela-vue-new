<template>
    <section>
        <ProdutoSingleSkinComplex id="KitProduto" />
        <TextoInfo />
        <AntesDepois />
        <MaisQueColageno />
        <BeneficiosSkinComplexPlus />
        <Concorrencia />
        <InfoNutricional />
        <TabelaNutricional class="pt-5" />
        <Frete />
        <InfluencersViva />
        <PeleRejuvenescida />
        <ModoPreparo />
        <PerguntasFrequentes />
    </section>
</template>

<script>
    import AntesDepois from '../../gerais/antes-depois/antes-depois.vue'
    import Frete from '../../gerais/frete/frete.vue'
    import InfluencersViva from '../../gerais/influencers/influencers-viva.vue'
    import InfoNutricional from '../../gerais/info-nutricional/info-nutricional.vue'
    import PeleRejuvenescida from '../../gerais/pele-rejuvenescida/pele-rejuvenescida.vue'
    import PerguntasFrequentes from '../../gerais/perguntas-frequentes/perguntas-frequentes.vue'
    import BeneficiosSkinComplexPlus from '../../gerais/skin-complex-plus/beneficios-skin-complex-plus.vue'
    import Concorrencia from '../../gerais/skin-complex-plus/concorrencia.vue'
    import MaisQueColageno from '../../gerais/skin-complex-plus/mais-que-colageno.vue'
    import ModoPreparo from '../../gerais/skin-complex-plus/modo-preparo.vue'
    import TabelaNutricional from '../../gerais/skin-complex-plus/tabela-nutricional.vue'
    import TextoInfo from '../../gerais/skin-complex-plus/texto-info.vue'
    import ProdutoSingleSkinComplex from './components/produtoSingleSkinComplexPlus.vue'

    export default {
        name: 'SingleSkinComplex1Pote',

        components: {
            ProdutoSingleSkinComplex,
            TextoInfo,
            AntesDepois,
            MaisQueColageno,
            BeneficiosSkinComplexPlus,
            Concorrencia,
            InfoNutricional,
            TabelaNutricional,
            Frete,
            InfluencersViva,
            PeleRejuvenescida,
            ModoPreparo,
            PerguntasFrequentes
        },
    }
</script>           