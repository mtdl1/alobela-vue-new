<template>
    <div>
        <BannerSkinComplex />
        <TextoInfo />
        <AntesDepois />
        <MaisQueColageno />
        <BeneficiosSkinComplex />
        <Concorrencia />
        <InfoNutricional />
        <KitsProdutos />
        <TabelaNutricional />
        <Frete />
        <InfluencersViva />
        <PeleRejuvenescida />
        <ModoPreparo />
        <PerguntasFrequentes />
        <Recomendados />
        <Parcerias />
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import AntesDepois from '../../components/gerais/antes-depois/antes-depois.vue'
    import BannerSkinComplex from '../../components/gerais/banners/banner-skin-complex.vue'
    import Frete from '../../components/gerais/frete/frete.vue'
    import InfluencersViva from '../../components/gerais/influencers/influencers-viva.vue'
    import InfoNutricional from '../../components/gerais/info-nutricional/info-nutricional.vue'
    import Parcerias from '../../components/gerais/parcerias/parcerias.vue'
    import PeleRejuvenescida from '../../components/gerais/pele-rejuvenescida/pele-rejuvenescida.vue'
    import PerguntasFrequentes from '../../components/gerais/perguntas-frequentes/perguntas-frequentes.vue'
    import Recomendados from '../../components/gerais/produtos-recomendados/recomendados.vue'
    import BeneficiosSkinComplex from '../../components/gerais/skin-complex/beneficios-skin-complex.vue'
    import Concorrencia from '../../components/gerais/skin-complex/concorrencia.vue'
    import KitsProdutos from '../../components/gerais/skin-complex/kits-produtos.vue'
    import MaisQueColageno from '../../components/gerais/skin-complex/mais-que-colageno.vue'
    import ModoPreparo from '../../components/gerais/skin-complex/modo-preparo.vue'
    import TabelaNutricional from '../../components/gerais/skin-complex/tabela-nutricional.vue'
    import TextoInfo from '../../components/gerais/skin-complex/texto-info.vue'

    export default {
        components: {
            TextoInfo,
            AntesDepois,
            MaisQueColageno,
            BeneficiosSkinComplex,
            Concorrencia,
            InfoNutricional,
            KitsProdutos,
            TabelaNutricional,
            Frete,
            InfluencersViva,
            PeleRejuvenescida,
            ModoPreparo,
            PerguntasFrequentes,
            Parcerias,
            Recomendados,
            BannerSkinComplex
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
                    // definindo atributos de SEO manualmente
                    response.data.estrutura.seo.canonical = "https://www.vivabeauty.com.br/products/tratamento-anti-idade-6-em-1-skin-complex-com-colageno-verisol-acido-hialuronico"
                    
                    response.data.estrutura.seo.title = "Skin Complex • Colágeno Verisol e Ácido Hialurônico | Viva Beauty"
                    response.data.estrutura.seo.description = "Conheça o Tratamento Anti-Idade 6 em 1 Skin Complex com Colágeno Verisol + Ácido Hialurônico. Sua pele perfeita! ✓Até 12x s/ juros ✓Frete Grátis"
                    this.loading.geral = false
                    this.$aplicaSEO(response.data.estrutura)
                    this.changeDadosPageAtual(response.data)
                    //comunicacao.$emit('paginaCarregada', response.data)
                }
            });
        } 
    }
</script>