function checkUserAgent() {
  return navigator.userAgent.toLowerCase().indexOf('mac') != -1;
}
const globalVars = {
  /* eslint-disable */
  install(Vue) {
    Vue.prototype.$siteUrl    = 'https://www.vivabeauty.com.br/',
    Vue.prototype.$requestUrl = 'https://www.vivabeauty.com.br/api',
    // Vue.prototype.$requestUrl = 'localhost:8080',
    Vue.prototype.$screen     = {
      width: window.screen.width,
      height: window.screen.height,
    },
    Vue.prototype.$imgDefaultB = 'assets/img/geral/prods-default/b_default.jpg',
    Vue.prototype.$imgDefaultM = 'assets/img/geral/prods-default/m_default.jpg',
    Vue.prototype.$imgDefaultS = 'assets/img/geral/prods-default/s_default.jpg',
    Vue.prototype.$imgDefault  = 'assets/img/geral/prods-default/default.jpg',
    Vue.prototype.$masks       = {
      tel: '(xx) xxxxx-xxxx',
      cep: 'xxxxx-xxx'
    },
    Vue.prototype.$tipoImg     = {
      prod: checkUserAgent() ? 'arquivosOriginais' : 'arquivos',
      geral: checkUserAgent() ? 'imagemOriginal' : 'imagem',
      menu: checkUserAgent() ? 'iconeOriginal' : 'icone',
    }
  }
}

export default globalVars;
