<template>
    <div>
        <BannerSkinComplexPlus />
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
        <!-- <Recomendados /> -->
        <Parcerias />
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import AntesDepois from '../../components/gerais/antes-depois/antes-depois.vue'
    import BannerSkinComplexPlus from '../../components/gerais/banners/banner-skin-complex-plus.vue'
    import Frete from '../../components/gerais/frete/frete.vue'
    import InfluencersViva from '../../components/gerais/influencers/influencers-viva.vue'
    import InfoNutricional from '../../components/gerais/info-nutricional/info-nutricional.vue'
    import Parcerias from '../../components/gerais/parcerias/parcerias.vue'
    import PeleRejuvenescida from '../../components/gerais/pele-rejuvenescida/pele-rejuvenescida.vue'
    import PerguntasFrequentes from '../../components/gerais/perguntas-frequentes/perguntas-frequentes.vue'
    // import Recomendados from '../../components/gerais/produtos-recomendados/recomendados.vue'
    import BeneficiosSkinComplex from '../../components/gerais/skin-complex-plus/beneficios-skin-complex-plus.vue'
    import Concorrencia from '../../components/gerais/skin-complex-plus/concorrencia.vue'
    import KitsProdutos from '../../components/gerais/skin-complex-plus/kits-produtos.vue'
    import MaisQueColageno from '../../components/gerais/skin-complex-plus/mais-que-colageno.vue'
    import ModoPreparo from '../../components/gerais/skin-complex-plus/modo-preparo.vue'
    import TabelaNutricional from '../../components/gerais/skin-complex-plus/tabela-nutricional.vue'
    import TextoInfo from '../../components/gerais/skin-complex-plus/texto-info.vue'

    export default {
        name: 'SkinComplexPlus',

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
            BannerSkinComplexPlus,
            // Recomendados
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
                    response.data.estrutura.seo.canonical = "https://www.vivabeauty.com.br/products/tratamento-anti-idade-7-em-1-skin-complex-plus-com-colageno-verisol-acido-hialuronico-silicio-organico"
                    response.data.estrutura.seo.title = "Skin Complex Plus • Colágeno Verisol e Silício Orgânico | Viva Beauty"
                    response.data.estrutura.seo.description = "Conheça o tratamento anti-idade 7 em 1 Skin Complex Plus com Colágeno Verisol, Ácido Hialurônico, Silício Orgânico ✓Até 12x s/ juros ✓Frete grátis"
                     //OPEN GRAPH
                    response.data.estrutura.seo.ogTitle ="Skin Complex Plus • Colágeno Verisol e Silício Orgânico | Viva Beauty"
                    response.data.estrutura.seo.ogDescription ="Conheça o tratamento anti-idade 7 em 1 Skin Complex Plus com Colágeno Verisol, Ácido Hialurônico, Silício Orgânico ✓Até 12x s/ juros ✓Frete grátis"
                    response.data.estrutura.seo.ogName ="Viva Beauty"
                    response.data.estrutura.seo.ogType ="website"
                    response.data.estrutura.seo.ogUrl = " https://www.vivabeauty.com.br/products/tratamento-anti-idade-6-em-1-skin-complex-com-colageno-verisol-acido-hialuronico "
                    response.data.estrutura.seo.ogImage ="https://www.vivabeauty.com.br/upload/editor/Viva-Beauty-Skin-Complex-Plus-2-potes.jpg"
                    response.data.estrutura.seo.ogImageAlt =" Dois potes de Skin Complex Plus com rótulo na cor rosa"
                    //TWITTER CARD
                    response.data.estrutura.seo.twitterTitle ="Skin Complex Plus • Colágeno Verisol e Silício Orgânico | Viva Beauty"
                    response.data.estrutura.seo.twitterDescription ="Conheça o tratamento anti-idade 7 em 1 Skin Complex Plus com Colágeno Verisol, Ácido Hialurônico, Silício Orgânico ✓Até 12x s/ juros ✓Frete grátis"
                    response.data.estrutura.seo.twitterCard ="summary_large_image"
                    // response.data.estrutura.seo.twitterSite =""
                    response.data.estrutura.seo.twitterImage ="https://www.vivabeauty.com.br/upload/editor/Viva-Beauty-Skin-Complex-Plus-2-potes.jpg "
                    response.data.estrutura.seo.twitterImageAlt ="Dois potes de Skin Complex Plus com rótulo na cor rosa"  
                    this.loading.geral = false
                    this.$aplicaSEO(response.data.estrutura)
                    this.changeDadosPageAtual(response.data)
                    //comunicacao.$emit('paginaCarregada', response.data);
                }
            });
        }
    }

</script>