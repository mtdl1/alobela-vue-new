import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Erro404 = () => import ('@/pages/404.vue')
const Home = () => import ('@/pages/home.vue')
const Products = () => import ('@/pages/produtos/produtos.vue')
const SkinComplex = () => import ('@/pages/produtos/skin-complex.vue')
const SkinComplexPlus = () => import ('@/pages/produtos/skin-complex-plus.vue')
const Detox360 = () => import ('@/pages/produtos/detox-360.vue')
const SerumViva = () => import ('@/pages/produtos/serum.vue')
const Institucionais = () => import ('@/pages/institucionais.vue')
const Contato = () => import ('@/components/institucionais/contato.vue')
const QuemSomos = () => import ('@/components/institucionais/quem-somos.vue')
const Desafio120Dias = () => import ('@/components/institucionais/desafio-120-dias.vue')
const TrocasDevolucoes = () => import ('@/components/institucionais/politica-de-trocas.vue')
const PoliticaPrivacidade = () => import ('@/components/institucionais/politica-de-privacidade.vue')
const ComprovacaoEficacia = () => import ('@/components/institucionais/comprovacao-eficacia.vue')
const TermosCondicoes = () => import ('@/components/institucionais/termos-condicoes.vue')
const TermsOfService = () => import ('@/components/institucionais/termos-de-servico.vue')
const ProdutoSingle = () => import ('@/pages/Produto-Single.vue')
const SingleSkinComplexPlus = () => import ('@/components/single/skin-complex-plus/single-skin-complex-plus.vue')
const SingleSkinComplex = () => import ('@/components/single/skin-complex/single-skin-complex.vue')
const SingleDetox = () => import ('@/components/single/detox/single-detox-360.vue')

const routes = [{
        path: '*',
        name: 'Not_found',
        component: Erro404
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/pages',
        component: Institucionais,
        children: [
            {
                path: 'contact',
                component: Contato
            },
            {
                path: 'quem-somos',
                component: QuemSomos
            },
            {
                path: 'desafio-120-dias',
                component: Desafio120Dias
            },
            {
                path: 'politica-de-trocas-e-devolucoes',
                component: TrocasDevolucoes
            },
            {
                path: 'politica-de-privacidade',
                component: PoliticaPrivacidade
            },
            {
                path: 'comprovacao-de-eficacia',
                component: ComprovacaoEficacia
            },
            {
                path: 'termos-e-condicoes',
                component: TermosCondicoes
            },
        ]
    },
    {
        path: '/policies',
        component: Institucionais,
        children: [
            {
                path: 'terms-of-service',
                component: TermsOfService
            },
        ]
    },
    {
        path: '/products',
        component: Products,
        children: [
            {
                path: 'tratamento-anti-idade-6-em-1-skin-complex-com-colageno-verisol-acido-hialuronico',
                component: SkinComplex
            },
            {
                path: 'tratamento-anti-idade-7-em-1-skin-complex-plus-com-colageno-verisol-acido-hialuronico-silicio-organico',
                component: SkinComplexPlus
            },
            {
                path: 'detox-360-natural-8-em-1-viva-slim-com-fruto-do-cacto-hibisco-cha-verde',
                component: Detox360
            },
            {
                path: 'serum-anti-idade-multibeneficios-viva-beauty',
                component: SerumViva
            },
        ]
    },

    // ROTAS PARA PÁGINA DE PRODUTOS SINGLE
    {
        path: '/pagina',
        component: ProdutoSingle,
        children: [
            {
                path: '/skin-complex-plus-tratamento-anti-idade-7-em-1*',
                component: SingleSkinComplexPlus
            },
            {
                path: '/colageno-skin-complex-plus-tratamento-anti-idade-7-em-1-acido-hialuronico-verisol-silicio-organico-original-*',
                component: SingleSkinComplexPlus
            },
            {
                path: '/skin-complex-tratamento-anti-idade-6-em-1*',
                component: SingleSkinComplex
            },
            {
                path: '/detox-360-*',
                component: SingleDetox
            },
            // {
            //     path: '/serum-anti-*',
            //     component: SingleSkinComplexPlus
            // },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
  /**
   * Reseta document.referrer quando o site
   * é acessado a partir de uma midia paga
   * do google (GCLID);
   */
  if (from.query.gclid) {
    window.location.href = window.location.origin + to.path;
    return;
  }
  next();
});

export default router