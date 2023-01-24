import Vue from 'vue'
import App from './App.vue'
// import VueGtm from 'vue-gtm'
import store from './store/index.js'
import router from './router'
import variaveis from '@/global/variaveis.js'
import carrinho from '@/global/carrinho.js'
import methods from '@/global/methods.js'
import comunicacao from '@/comunicacao.js'
import { mapState } from 'vuex'
import tagmanager from '@/global/tagmanager.js'
import VueLazyload from 'vue-lazyload'
import VueMask from 'v-mask'
import Toast from 'vue-toastification'
import VueScrollReveal from 'vue-scroll-reveal'
import './plugins/axios.js'
// CSS
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/geral.css'
import 'vue-toastification/dist/index.css'

const optionsToast = {
    position: 'bottom-center',
    duration: 5000,
    closeOnClick: true,
    progressBar: true,
    timeout: 5000,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    closeButton: "button",
    icon: true,
    rtl: false
}

Vue.config.productionTip = false

Vue.use(variaveis)
Vue.use(methods)
Vue.use(carrinho)
Vue.use(tagmanager)
Vue.use(VueLazyload)
Vue.use(VueMask)
// Lazyload
Vue.use(VueLazyload, {
    preLoad: 1.3,
    listenEvents: ['scroll'],
    attempt: 1
})
// Scroll Reveal
// Vue.use(VueScrollReveal);
Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal',
    duration: 800,
    delay: 200,
    scale: 1,
    distance: '150px',
    reset: true,
    viewFactor: 0.5,
    desktop: false,
    mobile: false,
})

Vue.use(Toast, optionsToast)

new Vue({
    store,
    router,
    render: h => h(App),
    computed: {
        ...mapState(['config'])
    },
    watch: {
        config(newVal) {
            //ADICIONA O GTM
            Vue.prototype.$gtmId = newVal.configuracoes.google.ga.gtm;
            comunicacao.$emit('configCarregada', newVal);
        }
    },
    created() {
        this.$store.dispatch('getConfig');
        this.$store.dispatch('resizeWindow');
    }
}).$mount('#app')

window.addEventListener('load', () => {
    comunicacao.$emit('siteLoaded')
})