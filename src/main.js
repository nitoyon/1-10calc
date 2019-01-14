import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faChartBar, faCheck, faExclamationTriangle, faPencilAlt,
  faPlusSquare, faQuestion, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowLeft, faChartBar, faCheck, faExclamationTriangle, faPencilAlt,
  faPlusSquare, faQuestion, faWindowClose, faFacebookF, faGithub, faTwitter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

window.addEventListener('load', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
});
