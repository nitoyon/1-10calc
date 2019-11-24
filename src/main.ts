import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faChartBar, faCheck, faExclamationTriangle, faPencilAlt,
  faPlusSquare, faQuestion, faWindowClose, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGithub, faLine } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faArrowLeft, faChartBar, faCheck, faExclamationTriangle, faPencilAlt, faQrcode,
  faPlusSquare, faQuestion, faWindowClose, faFacebookF, faGithub, faTwitter, faLine);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app');

document.title = i18n.t('title').toString();
const el = document.querySelector('meta[name="apple-mobile-web-app-title"]');
if (el !== null) {
  el.setAttribute('content', document.title);
}

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
});
