<template>
    <div class="container-fluid px-0">
        <!-- <BannerSerum /> -->
        <TextoInfo />
        <BeneficiosSerum />
        <FormulaExclusiva />
        <KitsProdutos />
        <Frete />
        <Recomendados />
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import Frete from '../../components/gerais/frete/frete.vue'
    import Recomendados from '../../components/gerais/produtos-recomendados/recomendados.vue'
    import BeneficiosSerum from '../../components/gerais/serum/beneficios-serum.vue'
    import KitsProdutos from '../../components/gerais/serum/kits-produtos.vue'
    import TextoInfo from '../../components/gerais/serum/texto-info.vue'
    import FormulaExclusiva from '../../components/gerais/serum/motivos.vue'
    // import BannerSerum from '../../components/gerais/serum/banner-serum.vue'

    export default {
        name: 'Detox360',

        components: {
            TextoInfo,
            BeneficiosSerum,
            KitsProdutos,
            Frete,
            Recomendados,
            FormulaExclusiva,
            // BannerSerum
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
                    response.data.estrutura.seo.canonical = "https://www.vivabeauty.com.br/products/serum-anti-idade-multibeneficios-viva-beauty"
                    
                    response.data.estrutura.seo.title = "Sérum Anti-idade • Niamicida e D-Pantenol | Viva Beauty"
                    response.data.estrutura.seo.description = "O Sérum Anti-Idade Multibenefícios promove hidratação profunda, reduz poros e linhas de expressão, e uniformiza a pele ✓Até 12x s/ juros ✓Frete Grátis"
                    this.loading.geral = false;
                    this.$aplicaSEO(response.data.estrutura);
                    this.changeDadosPageAtual(response.data);
                    //comunicacao.$emit('paginaCarregada', response.data);
                }
            });
        }
    }

</script>