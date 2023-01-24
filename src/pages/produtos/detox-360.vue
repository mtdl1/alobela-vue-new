<template>
    <div>
        <TextoInfo />
        <BeneficiosDetox360 />
        <FormulaExclusiva />
        <KitsProdutos />
        <Frete />
        <InfluencersViva />
        <PeleRejuvenescida />
        <ModoPreparo />
        <Recomendados />
        <Parcerias />
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import Frete from '../../components/gerais/frete/frete.vue'
    import InfluencersViva from '../../components/gerais/influencers/influencers-viva.vue'
    import Parcerias from '../../components/gerais/parcerias/parcerias.vue'
    import PeleRejuvenescida from '../../components/gerais/pele-rejuvenescida/pele-rejuvenescida.vue'
    import Recomendados from '../../components/gerais/produtos-recomendados/recomendados.vue'
    import BeneficiosDetox360 from '../../components/gerais/detox-360/beneficios-detox-360.vue'
    import KitsProdutos from '../../components/gerais/detox-360/kits-produtos.vue'
    import ModoPreparo from '../../components/gerais/detox-360/modo-preparo.vue'
    import TextoInfo from '../../components/gerais/detox-360/texto-info.vue'
    import FormulaExclusiva from '../../components/gerais/detox-360/formula-exclusiva.vue'

    export default {
        name: 'Detox360',

        components: {
            TextoInfo,
            BeneficiosDetox360,
            KitsProdutos,
            Frete,
            InfluencersViva,
            PeleRejuvenescida,
            ModoPreparo,
            Parcerias,
            Recomendados,
            FormulaExclusiva
        },

        data() {
            return {
                loading: {
                    geral: true,
                    banner: true
                },
            }
        },
        methods: {
            ...mapMutations(['changeDadosPageAtual']),
        },
        created() {
            this.$requestSend('get', '/v2/front/url/home', {}, (success, response) => {
                if (success) {
                     //definindo manualmente os atributos de SEO
                    response.data.estrutura.seo.canonical = "https://www.vivabeauty.com.br/products/detox-360-natural-8-em-1-viva-slim-com-fruto-do-cacto-hibisco-cha-verde"
        
                    response.data.estrutura.seo.title = "Viva Slim Detox 360º • Emagrecedor Natural | Viva Beauty"
                    response.data.estrutura.seo.description = "Viva Slim é um Detox 100% Natural que ajuda no emagrecimento, reduz medidas, é diurético, antioxidante e termogênico ✓Até 12x s/ juros ✓Frete Grátis"
                    
                    this.loading.geral = false;
                    this.$aplicaSEO(response.data.estrutura);
                    this.changeDadosPageAtual(response.data);
                    //comunicacao.$emit('paginaCarregada', response.data);
                }
            });
        }
    }

</script>