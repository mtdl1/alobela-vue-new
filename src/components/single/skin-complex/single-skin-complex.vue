<template>
    <section>
        <ProdutoSingleSkinComplex id="KitProduto" />
        <TextoInfo />
        <AntesDepois />
        <MaisQueColageno />
        <BeneficiosSkinComplex />
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
    import BeneficiosSkinComplex from '../../gerais/skin-complex/beneficios-skin-complex.vue'
    import Concorrencia from '../../gerais/skin-complex/concorrencia.vue'
    import MaisQueColageno from '../../gerais/skin-complex/mais-que-colageno.vue'
    import ModoPreparo from '../../gerais/skin-complex/modo-preparo.vue'
    import TabelaNutricional from '../../gerais/skin-complex/tabela-nutricional.vue'
    import TextoInfo from '../../gerais/skin-complex/texto-info.vue'
    import ProdutoSingleSkinComplex from './components/produtoSingleSkinComplex.vue'

    export default {
        name: 'SingleSkinComplex1Pote',

        components: {
            ProdutoSingleSkinComplex,
            TextoInfo,
            AntesDepois,
            MaisQueColageno,
            BeneficiosSkinComplex,
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