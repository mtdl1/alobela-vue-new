<template>
    <main>
        <BannerHome />
        <Credibilidade cor="home" />
        <Beneficios7Em1 />
        <FaixaBeneficios />
        <FormulaAlobela />
        <ComparacaoFormula />
        <ResultadosAntesDepois />
        <InformacionalGummy />
        <InformacionalGummyUva />
        <InfluencersViva />
    </main>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'
    import BannerHome from '../components/gerais/banners/bannerHome.vue';
    import Beneficios7Em1 from '../components/gerais/beneficios/beneficios-7-em-1.vue';
    import FaixaBeneficios from '../components/gerais/beneficios/faixa-beneficios.vue';
    import ComparacaoFormula from '../components/gerais/comparacao-formula/comparacao.formula.vue';
    import FormulaAlobela from '../components/gerais/formula-alobela/formula-alobela.vue';
    import InfluencersViva from '../components/gerais/influencers/influencers-viva.vue';
    import InformacionalGummyUva from '../components/gerais/informacional-gummy-uva/informacional-gummy-uva.vue';
    import InformacionalGummy from '../components/gerais/informacional-gummy/informacional-gummy-tutti.vue';
    import ResultadosAntesDepois from '../components/resultados-antes-depois/resultados-antes-depois.vue';

    export default {
        data(){
            return {
                loading: {
                geral: true,
                banner: true
                },
            }
        },

        components: {
            BannerHome,
            Beneficios7Em1,
                FaixaBeneficios,
                FormulaAlobela,
                ComparacaoFormula,
                ResultadosAntesDepois,
                InformacionalGummy,
                InformacionalGummyUva,
                InfluencersViva,
        },

        methods: {
            ...mapMutations(['changeDadosPageAtual']),
        },

        computed: {
            ...mapState({
                screenWidth: state => state.screenWidth,
                faq: state => state.duvidas.faq
            }),
            ...mapGetters(['tipoImg'])
        },
// Corrigir links viva beauty abaixo
        created(){
            this.$requestSend('get', '/v2/front/url/home', {}, (success, response) => {
                if (success){
                    //definindo manualmente os atributos de SEO
                    response.data.estrutura.seo.canonical = "https://www.vivabeauty.com.br/"
                    response.data.estrutura.seo.title = "Alobela - Despertando sua melhor versão!"
                    response.data.estrutura.seo.description = "Deixe sua pele nas mãos de quem entende do assunto!"
                     //OPEN GRAPH
                    response.data.estrutura.seo.ogTitle ="Alobela - Despertando sua melhor versão!"
                    response.data.estrutura.seo.ogDescription ="Deixe sua pele nas mãos de quem entende do assunto!"
                    response.data.estrutura.seo.ogName ="Viva Beauty"
                    response.data.estrutura.seo.ogType ="website"
                    response.data.estrutura.seo.ogUrl = " https://www.vivabeauty.com.br"
                    response.data.estrutura.seo.ogImage ="https://www.vivabeauty.com.br/upload/editor/Viva-Beauty-Skin-Complex-Plus-2-potes.jpg"
                    response.data.estrutura.seo.ogImageAlt =" Dois potes de Skin Complex Plus com rótulo na cor rosa"
                    //TWITTER CARD
                    response.data.estrutura.seo.twitterTitle ="Alobela - Despertando sua melhor versão!"
                    response.data.estrutura.seo.twitterDescription ="Deixe sua pele nas mãos de quem entende do assunto!"
                    response.data.estrutura.seo.twitterCard ="summary_large_image"
                    // response.data.estrutura.seo.twitterSite =""
                    response.data.estrutura.seo.twitterImage ="https://www.vivabeauty.com.br/upload/editor/Viva-Beauty-Skin-Complex-Plus-2-potes.jpg "
                    response.data.estrutura.seo.twitterImageAlt ="Dois potes de Skin Complex Plus com rótulo na cor rosa"
                    this.loading.geral = false;
                    this.$aplicaSEO(response.data.estrutura);
                    this.changeDadosPageAtual(response.data);
                }
            });
        }

    }

</script>